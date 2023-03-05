/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IProductEngine,
  IProductEngineInterface,
} from "../IProductEngine";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "productId",
        type: "uint32",
      },
    ],
    name: "AddProduct",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "productId",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "subaccount",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "int128",
        name: "lpAmount",
        type: "int128",
      },
      {
        indexed: false,
        internalType: "int128",
        name: "baseAmount",
        type: "int128",
      },
      {
        indexed: false,
        internalType: "int128",
        name: "quoteAmount",
        type: "int128",
      },
    ],
    name: "BurnLp",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "productId",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "subaccount",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "int128",
        name: "lpAmount",
        type: "int128",
      },
      {
        indexed: false,
        internalType: "int128",
        name: "baseAmount",
        type: "int128",
      },
      {
        indexed: false,
        internalType: "int128",
        name: "quoteAmount",
        type: "int128",
      },
    ],
    name: "MintLp",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "productId",
        type: "uint32",
      },
    ],
    name: "ProductUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "productId",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "int128",
        name: "amountSocialized",
        type: "int128",
      },
    ],
    name: "SocializeProduct",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "productId",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "subaccount",
            type: "bytes32",
          },
          {
            internalType: "int128",
            name: "amountDelta",
            type: "int128",
          },
          {
            internalType: "int128",
            name: "vQuoteDelta",
            type: "int128",
          },
        ],
        internalType: "struct IProductEngine.ProductDelta[]",
        name: "deltas",
        type: "tuple[]",
      },
    ],
    name: "applyDeltas",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "productId",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "subaccount",
        type: "bytes32",
      },
      {
        internalType: "int128",
        name: "amountLp",
        type: "int128",
      },
    ],
    name: "burnLp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "liquidatee",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "liquidator",
        type: "bytes32",
      },
    ],
    name: "decomposeLps",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getClearinghouse",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getEngineType",
    outputs: [
      {
        internalType: "enum IProductEngine.EngineType",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "productId",
        type: "uint32",
      },
    ],
    name: "getOrderbook",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getProductIds",
    outputs: [
      {
        internalType: "uint32[]",
        name: "",
        type: "uint32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_clearinghouse",
        type: "address",
      },
      {
        internalType: "address",
        name: "_quote",
        type: "address",
      },
      {
        internalType: "address",
        name: "_endpoint",
        type: "address",
      },
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
      {
        internalType: "address",
        name: "_fees",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "productId",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "subaccount",
        type: "bytes32",
      },
      {
        internalType: "int128",
        name: "amountBase",
        type: "int128",
      },
      {
        internalType: "int128",
        name: "quoteAmountLow",
        type: "int128",
      },
      {
        internalType: "int128",
        name: "quoteAmountHigh",
        type: "int128",
      },
    ],
    name: "mintLp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "productId",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "subaccount",
        type: "bytes32",
      },
      {
        internalType: "int128",
        name: "amount",
        type: "int128",
      },
      {
        internalType: "int128",
        name: "priceX18",
        type: "int128",
      },
      {
        internalType: "int128",
        name: "sizeIncrement",
        type: "int128",
      },
      {
        internalType: "int128",
        name: "lpSpreadX18",
        type: "int128",
      },
    ],
    name: "swapLp",
    outputs: [
      {
        internalType: "int128",
        name: "",
        type: "int128",
      },
      {
        internalType: "int128",
        name: "",
        type: "int128",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IProductEngine__factory {
  static readonly abi = _abi;
  static createInterface(): IProductEngineInterface {
    return new utils.Interface(_abi) as IProductEngineInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IProductEngine {
    return new Contract(address, _abi, signerOrProvider) as IProductEngine;
  }
}
