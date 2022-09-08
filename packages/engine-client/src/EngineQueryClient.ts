import { EngineBaseClient } from './EngineBaseClient';
import {
  calcTotalBorrowed,
  calcTotalDeposited,
  encodeSignedOrder,
  MarketWithProduct,
  PerpMarket,
  ProductEngineType,
  SpotMarket,
} from '@vertex-protocol/contracts';
import { BigNumber } from 'ethers';
import { fromX18, toBigDecimal, toEthersBN } from '@vertex-protocol/utils';
import {
  RedisGetOrderResponse,
  RedisPerpProduct,
  RedisPriceTickLiquidity,
  RedisSpotProduct,
} from '@vertex-protocol/engine-server';
import {
  EngineOrder,
  EnginePriceTickLiquidity,
  GetEngineAllMarketsResponse,
  GetEngineMarketLiquidityParams,
  GetEngineMarketLiquidityResponse,
  GetEngineMarketPriceParams,
  GetEngineMarketPriceResponse,
  GetEngineOrderParams,
  GetEngineOrderResponse,
  GetEngineSubaccountOrdersParams,
  GetEngineSubaccountOrdersResponse,
  GetEngineSubaccountSummaryParams,
  GetEngineSubaccountSummaryResponse,
  ValidateEngineOrderParams,
  ValidateEngineOrderResponse,
  ValidateSignedEngineOrderParams,
} from './types';

export class EngineQueryClient extends EngineBaseClient {
  async getSubaccountSummary(
    params: GetEngineSubaccountSummaryParams,
  ): Promise<GetEngineSubaccountSummaryResponse> {
    const baseResponse = await this.query('subaccount_info', {
      subaccount_id: BigNumber.from(params.subaccountId).toNumber(),
    });
    const balances: GetEngineSubaccountSummaryResponse['balances'] = [];

    baseResponse.spot_balances.forEach((spotBalance) => {
      const product = baseResponse.all_products.spot_products.find(
        (product) => product.productId === spotBalance.productId,
      );
      if (!product) {
        throw Error(`Could not find product ${spotBalance.productId}`);
      }

      balances.push({
        amount: fromX18(spotBalance.amount_x18),
        health: {
          initial: toBigDecimal(0),
          maintenance: toBigDecimal(0),
          unweighted: toBigDecimal(0),
        },
        productId: product.productId,
        ...mapRedisSpotProduct(product).product,
      });
    });

    baseResponse.perp_balances.forEach((perpBalance) => {
      const product = baseResponse.all_products.perp_products.find(
        (product) => product.productId === perpBalance.productId,
      );
      if (!product) {
        throw Error(`Could not find product ${perpBalance.productId}`);
      }

      balances.push({
        amount: fromX18(perpBalance.amount_x18),
        vQuoteBalance: fromX18(perpBalance.v_quote_balance_x18),
        health: {
          initial: toBigDecimal(0),
          maintenance: toBigDecimal(0),
          unweighted: toBigDecimal(0),
        },
        productId: product.productId,
        ...mapRedisPerpProduct(product).product,
      });
    });

    return {
      balances: balances,
      health: {
        initial: toBigDecimal(0),
        maintenance: toBigDecimal(0),
        unweighted: toBigDecimal(0),
      },
    };
  }

  async getAllMarkets(): Promise<GetEngineAllMarketsResponse> {
    const markets: MarketWithProduct[] = [];

    const baseResponse = await this.query('all_products', {});
    baseResponse.spot_products.forEach((spotProduct) => {
      markets.push(mapRedisSpotProduct(spotProduct));
    });
    baseResponse.perp_products.forEach((perpProduct) => {
      markets.push(mapRedisPerpProduct(perpProduct));
    });

    return markets;
  }

  async getOrder(
    params: GetEngineOrderParams,
  ): Promise<GetEngineOrderResponse> {
    const baseResponse = await this.query('order', {
      digest: params.digest,
      product_id: params.productId,
    });

    return mapRedisOrder(baseResponse);
  }

  async validateOrderParams(
    params: ValidateEngineOrderParams,
  ): Promise<ValidateEngineOrderResponse> {
    const signedOrder = {
      order: params.order,
      signature: await this.sign(
        'place_order',
        params.orderbookAddr,
        params.order,
      ),
    };
    return this.validateSignedOrderParams({
      signedOrder,
      productId: params.productId,
    });
  }

  async validateSignedOrderParams(
    params: ValidateSignedEngineOrderParams,
  ): Promise<ValidateEngineOrderResponse> {
    const baseResponse = await this.query('validate_order', {
      product_id: params.productId,
      order: encodeSignedOrder(params.signedOrder),
    });

    return {
      productId: baseResponse.product_id,
      valid: baseResponse.valid,
    };
  }

  async getSubaccountOrders(
    params: GetEngineSubaccountOrdersParams,
  ): Promise<GetEngineSubaccountOrdersResponse> {
    const baseResponse = await this.query('subaccount_orders', {
      product_id: params.productId,
      subaccount_id: BigNumber.from(params.subaccountId).toNumber(),
    });

    return {
      orders: baseResponse.orders.map(mapRedisOrder),
      productId: params.productId,
      subaccountId: BigNumber.from(baseResponse.subaccount_id).toNumber(),
    };
  }

  async getMarketLiquidity(
    params: GetEngineMarketLiquidityParams,
  ): Promise<GetEngineMarketLiquidityResponse> {
    const baseResponse = await this.query('market_liquidity', {
      product_id: params.productId,
      depth: params.depth,
    });
    return {
      asks: baseResponse.asks.map(mapRedisTickLiquidity),
      bids: baseResponse.bids.map(mapRedisTickLiquidity),
    };
  }

  async getMarketPrice(
    params: GetEngineMarketPriceParams,
  ): Promise<GetEngineMarketPriceResponse> {
    const baseResponse = await this.query('market_price', {
      product_id: params.productId,
    });
    return {
      ask: fromX18(baseResponse.ask_x18),
      bid: fromX18(baseResponse.bid_x18),
      productId: baseResponse.product_id,
    };
  }
}

function mapRedisTickLiquidity(
  tick: RedisPriceTickLiquidity,
): EnginePriceTickLiquidity {
  return {
    price: fromX18(tick[0]),
    liquidity: toBigDecimal(tick[1]),
  };
}

function mapRedisOrder(order: RedisGetOrderResponse): EngineOrder {
  return {
    digest: order.digest,
    expiration: toBigDecimal(order.expiration),
    nonce: toBigDecimal(order.nonce),
    price: fromX18(order.price_x18),
    productId: order.product_id,
    subaccountId: toBigDecimal(order.subaccount).toNumber(),
    totalAmount: toBigDecimal(order.amount),
    unfilledAmount: toBigDecimal(order.unfilled_amount),
  };
}

function mapRedisSpotProduct(product: RedisSpotProduct): SpotMarket {
  return {
    type: ProductEngineType.SPOT,
    productId: product.productId,
    markPrice: toBigDecimal(0),
    priceIncrement: toBigDecimal(0),
    product: {
      type: ProductEngineType.SPOT,
      totalBorrowed: calcTotalBorrowed(
        toEthersBN(fromX18(product.total_borrows_normalized_x18)),
        toEthersBN(fromX18(product.cumulative_borrows_multiplier_x18)),
      ),
      totalDeposited: calcTotalDeposited(
        toEthersBN(fromX18(product.total_deposits_normalized_x18)),
        toEthersBN(fromX18(product.cumulative_deposits_multiplier_x18)),
      ),
      // TODO
      oraclePrice: toBigDecimal(0),
      interestFloor: toBigDecimal(0),
      interestInflectionUtil: toBigDecimal(0),
      interestLargeCap: toBigDecimal(0),
      interestSmallCap: toBigDecimal(0),
      largePositionPenalty: toBigDecimal(0),
      longWeightInitial: toBigDecimal(0),
      longWeightMaintenance: toBigDecimal(0),
      shortWeightInitial: toBigDecimal(0),
      shortWeightMaintenance: toBigDecimal(0),
      tokenAddr: '',
    },
    sizeIncrement: toBigDecimal(0),
  };
}

function mapRedisPerpProduct(product: RedisPerpProduct): PerpMarket {
  return {
    type: ProductEngineType.PERP,
    productId: product.productId,
    markPrice: toBigDecimal(0),
    priceIncrement: toBigDecimal(0),
    sizeIncrement: toBigDecimal(0),
    product: {
      type: ProductEngineType.PERP,
      emaPrice: fromX18(product.ema_price_x18),
      oraclePrice: toBigDecimal(0),
      largePositionPenalty: toBigDecimal(0),
      longWeightInitial: toBigDecimal(0),
      longWeightMaintenance: toBigDecimal(0),
      shortWeightInitial: toBigDecimal(0),
      shortWeightMaintenance: toBigDecimal(0),
    },
  };
}
