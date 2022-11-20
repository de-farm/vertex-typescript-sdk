import { ethers, Wallet } from 'ethers';
import {
  depositCollateral,
  IClearinghouse__factory,
  IEndpoint__factory,
} from '@vertex-protocol/contracts';
import { nowInSeconds } from '@vertex-protocol/utils';
import { EngineClient } from './EngineClient';
import { OrderParamsWithoutNonce } from './types';

function getExpiration() {
  return nowInSeconds() + 1000;
}

async function main() {
  // Hardhat deployers
  const signer = new Wallet(
    '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
    new ethers.providers.JsonRpcProvider(),
  );

  const client = new EngineClient({
    url: 'http://localhost:80/api',
    signer,
  });

  const clearinghouseAddr = '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9';

  const clearinghouse = await IClearinghouse__factory.connect(
    clearinghouseAddr,
    signer,
  );
  const endpointAddr = await clearinghouse.getEndpoint();
  const endpoint = await IEndpoint__factory.connect(endpointAddr, signer);

  // Deposit collateral
  const depositTx = await depositCollateral({
    amount: 100,
    endpoint,
    productId: 0,
    subaccountName: 'default',
  });
  await depositTx.wait();
  console.log('Done depositing collateral');

  // Wait for slow mode
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const subaccountId = await clearinghouse.getSubaccountId(
    signer.address,
    'default',
  );
  console.log('Subaccount ID', subaccountId.toString());

  console.log('Querying subaccount');

  const subaccountInfo = await client.getSubaccountSummary({
    subaccountId,
  });
  console.log('Subaccount info', JSON.stringify(subaccountInfo, null, 2));

  const products = await client.getAllMarkets();
  console.log('All products', JSON.stringify(products, null, 2));

  console.log('Placing order');
  const productId = 1;
  const orderbookAddr = await clearinghouse.getOrderbook(productId);
  const order: OrderParamsWithoutNonce = {
    sender: signer.address,
    subaccountName: 'default',
    amount: -1,
    expiration: getExpiration(),
    price: 10,
  };
  const placeResult = await client.placeOrder({
    orderbookAddr,
    productId,
    order,
  });
  console.log('Done placing order', placeResult);

  const subaccountOrders = await client.getSubaccountOrders({
    productId,
    subaccountName: 'default',
    sender: signer.address,
  });
  console.log('Subaccount orders', JSON.stringify(subaccountOrders));
  const marketLiquidity = await client.getMarketLiquidity({
    depth: 10,
    productId,
  });
  console.log('Market liquidity', JSON.stringify(marketLiquidity, null, 2));
  const marketPrice = await client.getMarketPrice({
    productId,
  });
  console.log('Market price', JSON.stringify(marketPrice, null, 2));
  const queriedOrder = await client.getOrder({
    digest: placeResult.digest,
    productId,
  });
  console.log('Queried order', JSON.stringify(queriedOrder, null, 2));

  console.log('Cancelling order');
  const cancelResult = await client.cancelOrder({
    subaccountName: 'default',
    sender: signer.address,
    productIds: [productId],
    digests: [placeResult.digest],
    endpointAddr,
  });
  console.log('Done cancelling order', cancelResult);

  const subaccountOrdersAfterCancel = await client.getSubaccountOrders({
    productId,
    sender: signer.address,
    subaccountName: 'default',
  });
  console.log(
    'Subaccount orders after cancellation',
    JSON.stringify(subaccountOrdersAfterCancel),
  );

  const withdrawResult = await client.withdrawCollateral({
    sender: signer.address,
    subaccountName: 'default',
    productId: 0,
    amount: 100,
    endpointAddr,
  });

  console.log('Done withdrawing collateral, result', withdrawResult);

  const subaccountInfoAtEnd = await client.getSubaccountSummary({
    subaccountId,
  });
  console.log('Subaccount info', JSON.stringify(subaccountInfoAtEnd, null, 2));
}

main();
