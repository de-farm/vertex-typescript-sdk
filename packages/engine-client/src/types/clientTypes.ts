import { OrderParams } from '@vertex-protocol/contracts';
import { TypedDataSigner } from '@ethersproject/abstract-signer';
import { Signer } from 'ethers';

export interface EngineClientOpts {
  // Server URL
  url: string;
  // Signer for EIP712 signing
  signer: TypedDataSigner & Signer;
  // Chain ID override for EIP712 signing
  signingChainId?: number;
}

export type WithSequencerAddr<T> = T & {
  sequencerAddr: string;
};

export interface PlaceOrderParams {
  productId: number;
  orderbookAddr: string;
  order: OrderParams;
}

export type CancelOrderParams = PlaceOrderParams;
