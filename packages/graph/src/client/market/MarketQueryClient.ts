import { BaseVertexGraphClient } from '../base';
import { fromX18, nowInSeconds, toBigDecimal } from '@vertex-protocol/utils';
import { getMarketEntityId, toHourIndex } from '../../utils';
import {
  Candlestick,
  GetCandlesticksParams,
  GetCandlesticksResponse,
  HourlyHistoricalMarketDataParams,
  HourlyHistoricalMarketDataResponse,
} from './types';
import { toBigInt } from '../../utils/bigInt';

export class MarketQueryClient extends BaseVertexGraphClient {
  /**
   * Returns hourly historical market data for a given product.
   *
   * @param params
   */
  async getHourlyHistoricalMarketData(
    params: HourlyHistoricalMarketDataParams,
  ): Promise<HourlyHistoricalMarketDataResponse> {
    const data = await this.graph.HourlyHistoricalMarketDataQuery({
      marketEntityId: getMarketEntityId(params.productId),
      maxHourExclusive: toBigInt(
        params.maxTimeExclusive
          ? toHourIndex(params.maxTimeExclusive)
          : toHourIndex(nowInSeconds()),
      ),
      minHourInclusive: toBigInt(
        params.minTimeInclusive ? toHourIndex(params.minTimeInclusive) : 0,
      ),
    });

    return data.marketHourlySnapshots;
  }

  async getCandlesticks(
    params: GetCandlesticksParams,
  ): Promise<GetCandlesticksResponse> {
    const data = await this.graph.CandlesticksQuery({
      limit: params.limit ?? 100,
      marketEntityId: getMarketEntityId(params.productId),
      maxTimeInclusive: toBigInt(params.beforeTime ?? nowInSeconds()),
    });

    return data.candlesticks.map((snapshot): Candlestick => {
      return {
        close: fromX18(snapshot.closeX18).toNumber(),
        high: fromX18(snapshot.highX18).toNumber(),
        low: fromX18(snapshot.lowX18).toNumber(),
        open: fromX18(snapshot.openX18).toNumber(),
        time: toBigDecimal(snapshot.time).toNumber(),
        volume: toBigDecimal(snapshot.volumeQuote).toNumber(),
      };
    });
  }
}
