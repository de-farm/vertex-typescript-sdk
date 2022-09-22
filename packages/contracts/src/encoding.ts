import {
  DepositCollateralParams,
  LiquidateSubaccountParams,
  SignedOrderParams,
  SignedTx,
  WithdrawCollateralParams,
} from './eip712';
import { defaultAbiCoder } from '@ethersproject/abi';
import { toX18 } from '@vertex-protocol/utils';

export function encodeSignedLiquidateSubaccountTx(
  signed: SignedTx<LiquidateSubaccountParams>,
) {
  return defaultAbiCoder.encode(
    [
      'tuple(tuple(address sender, string subaccountName, uint64 liquidateeId, uint32 productId, int256 amount, uint64 nonce), bytes signature)',
    ],
    [
      [
        [
          signed.tx.sender,
          signed.tx.subaccountName,
          signed.tx.liquidateeSubaccountId,
          signed.tx.productId,
          signed.tx.amount,
          signed.tx.nonce,
        ],
        signed.signature,
      ],
    ],
  );
}

export function encodeSignedCollateralTx(
  signed: SignedTx<DepositCollateralParams | WithdrawCollateralParams>,
) {
  return defaultAbiCoder.encode(
    [
      'tuple(tuple(address sender, string subaccountName, uint32 productId, int256 amount, uint64 nonce), bytes signature)',
    ],
    [
      [
        [
          signed.tx.sender,
          signed.tx.subaccountName,
          signed.tx.productId,
          signed.tx.amount,
          signed.tx.nonce,
        ],
        signed.signature,
      ],
    ],
  );
}

export function encodeSignedOrder(signed: SignedOrderParams) {
  return defaultAbiCoder.encode(
    [
      'tuple(tuple(uint64 subaccount, int256 priceX18, int256 amount, uint64 expiration, uint64 nonce) order, bytes signature)',
    ],
    [
      [
        [
          signed.order.subaccountId,
          toX18(signed.order.price),
          signed.order.amount,
          signed.order.expiration,
          signed.order.nonce,
        ],
        signed.signature,
      ],
    ],
  );
}