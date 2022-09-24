/**
 * Utils for creating Graph entity IDs
 * @packageDocumentation
 */

export function getSubaccountEntityId(subaccountId: number) {
  return `subaccount-${subaccountId}`;
}

export function getProductEntityId(productId: number) {
  return `product-${productId}`;
}

export function getMarketEntityId(productId: number) {
  return getProductEntityId(productId).concat('-market');
}
