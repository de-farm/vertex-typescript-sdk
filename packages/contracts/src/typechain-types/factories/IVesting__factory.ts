/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type { IVesting, IVestingInterface } from "../IVesting";

const _abi = [
  {
    inputs: [],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "claimable",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "period",
        type: "uint64",
      },
    ],
    name: "registerVesting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IVesting__factory {
  static readonly abi = _abi;
  static createInterface(): IVestingInterface {
    return new Interface(_abi) as IVestingInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IVesting {
    return new Contract(address, _abi, runner) as unknown as IVesting;
  }
}
