/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace IEndpoint {
  export type PricesStruct = {
    spotPriceX18: PromiseOrValue<BigNumberish>;
    perpPriceX18: PromiseOrValue<BigNumberish>;
  };

  export type PricesStructOutput = [BigNumber, BigNumber] & {
    spotPriceX18: BigNumber;
    perpPriceX18: BigNumber;
  };
}

export interface EndpointInterface extends utils.Interface {
  functions: {
    "clearinghouse()": FunctionFragment;
    "depositCollateral(bytes12,uint32,uint128)": FunctionFragment;
    "executeSlowModeTransactions(uint32)": FunctionFragment;
    "getBook(uint32)": FunctionFragment;
    "getNonce(address)": FunctionFragment;
    "getNumSubaccounts()": FunctionFragment;
    "getPriceX18(uint32)": FunctionFragment;
    "getPricesX18(uint32)": FunctionFragment;
    "getSequencer()": FunctionFragment;
    "getSubaccountById(uint64)": FunctionFragment;
    "getSubaccountId(bytes32)": FunctionFragment;
    "getTime()": FunctionFragment;
    "getVersion()": FunctionFragment;
    "initialize(address,address,address,uint64,uint128,int128[])": FunctionFragment;
    "nSubmissions()": FunctionFragment;
    "owner()": FunctionFragment;
    "processSlowModeTransaction(address,bytes)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "requireSubaccount(bytes32)": FunctionFragment;
    "setBook(uint32,address)": FunctionFragment;
    "setSequencer(address)": FunctionFragment;
    "slowModeConfig()": FunctionFragment;
    "slowModeTxs(uint64)": FunctionFragment;
    "submitSlowModeTransaction(bytes)": FunctionFragment;
    "submitTransactions(bytes[])": FunctionFragment;
    "submitTransactionsChecked(uint64,bytes[])": FunctionFragment;
    "submitTransactionsCheckedWithGasLimit(uint64,bytes[],uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "tryReturnFunds(bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "clearinghouse"
      | "depositCollateral"
      | "executeSlowModeTransactions"
      | "getBook"
      | "getNonce"
      | "getNumSubaccounts"
      | "getPriceX18"
      | "getPricesX18"
      | "getSequencer"
      | "getSubaccountById"
      | "getSubaccountId"
      | "getTime"
      | "getVersion"
      | "initialize"
      | "nSubmissions"
      | "owner"
      | "processSlowModeTransaction"
      | "renounceOwnership"
      | "requireSubaccount"
      | "setBook"
      | "setSequencer"
      | "slowModeConfig"
      | "slowModeTxs"
      | "submitSlowModeTransaction"
      | "submitTransactions"
      | "submitTransactionsChecked"
      | "submitTransactionsCheckedWithGasLimit"
      | "transferOwnership"
      | "tryReturnFunds"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "clearinghouse",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "depositCollateral",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "executeSlowModeTransactions",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getBook",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getNonce",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getNumSubaccounts",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPriceX18",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getPricesX18",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getSequencer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSubaccountById",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getSubaccountId",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "getTime", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getVersion",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "nSubmissions",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "processSlowModeTransaction",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "requireSubaccount",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "setBook",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setSequencer",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "slowModeConfig",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "slowModeTxs",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "submitSlowModeTransaction",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "submitTransactions",
    values: [PromiseOrValue<BytesLike>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "submitTransactionsChecked",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "submitTransactionsCheckedWithGasLimit",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "tryReturnFunds",
    values: [PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(
    functionFragment: "clearinghouse",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeSlowModeTransactions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getBook", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getNonce", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getNumSubaccounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPriceX18",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPricesX18",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSequencer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSubaccountById",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSubaccountId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getTime", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getVersion", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nSubmissions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "processSlowModeTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requireSubaccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setBook", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setSequencer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "slowModeConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "slowModeTxs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submitSlowModeTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submitTransactions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submitTransactionsChecked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submitTransactionsCheckedWithGasLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tryReturnFunds",
    data: BytesLike
  ): Result;

  events: {
    "Initialized(uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "SubmitSlowModeTransaction(uint64,address,bytes)": EventFragment;
    "SubmitTransactions()": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SubmitSlowModeTransaction"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SubmitTransactions"): EventFragment;
}

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface SubmitSlowModeTransactionEventObject {
  executableAt: BigNumber;
  sender: string;
  tx: string;
}
export type SubmitSlowModeTransactionEvent = TypedEvent<
  [BigNumber, string, string],
  SubmitSlowModeTransactionEventObject
>;

export type SubmitSlowModeTransactionEventFilter =
  TypedEventFilter<SubmitSlowModeTransactionEvent>;

export interface SubmitTransactionsEventObject {}
export type SubmitTransactionsEvent = TypedEvent<
  [],
  SubmitTransactionsEventObject
>;

export type SubmitTransactionsEventFilter =
  TypedEventFilter<SubmitTransactionsEvent>;

export interface Endpoint extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: EndpointInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    clearinghouse(overrides?: CallOverrides): Promise<[string]>;

    depositCollateral(
      subaccountName: PromiseOrValue<BytesLike>,
      productId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executeSlowModeTransactions(
      count: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getBook(
      productId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getNonce(
      sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getNumSubaccounts(overrides?: CallOverrides): Promise<[BigNumber]>;

    getPriceX18(
      productId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { priceX18: BigNumber }>;

    getPricesX18(
      healthGroup: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[IEndpoint.PricesStructOutput]>;

    getSequencer(overrides?: CallOverrides): Promise<[string]>;

    getSubaccountById(
      subaccountId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getSubaccountId(
      subaccount: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    getVersion(overrides?: CallOverrides): Promise<[BigNumber]>;

    initialize(
      _sanctions: PromiseOrValue<string>,
      _sequencer: PromiseOrValue<string>,
      _clearinghouse: PromiseOrValue<string>,
      slowModeTimeout: PromiseOrValue<BigNumberish>,
      _time: PromiseOrValue<BigNumberish>,
      _prices: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    nSubmissions(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    processSlowModeTransaction(
      sender: PromiseOrValue<string>,
      transaction: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    requireSubaccount(
      subaccount: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[void]>;

    setBook(
      productId: PromiseOrValue<BigNumberish>,
      book: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setSequencer(
      _sequencer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    slowModeConfig(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        timeout: BigNumber;
        txCount: BigNumber;
        txUpTo: BigNumber;
      }
    >;

    slowModeTxs(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string] & {
        executableAt: BigNumber;
        sender: string;
        tx: string;
      }
    >;

    submitSlowModeTransaction(
      transaction: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    submitTransactions(
      transactions: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    submitTransactionsChecked(
      idx: PromiseOrValue<BigNumberish>,
      transactions: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    submitTransactionsCheckedWithGasLimit(
      idx: PromiseOrValue<BigNumberish>,
      transactions: PromiseOrValue<BytesLike>[],
      gasLimit: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    tryReturnFunds(
      transaction: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  clearinghouse(overrides?: CallOverrides): Promise<string>;

  depositCollateral(
    subaccountName: PromiseOrValue<BytesLike>,
    productId: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executeSlowModeTransactions(
    count: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getBook(
    productId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getNonce(
    sender: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getNumSubaccounts(overrides?: CallOverrides): Promise<BigNumber>;

  getPriceX18(
    productId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPricesX18(
    healthGroup: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IEndpoint.PricesStructOutput>;

  getSequencer(overrides?: CallOverrides): Promise<string>;

  getSubaccountById(
    subaccountId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getSubaccountId(
    subaccount: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTime(overrides?: CallOverrides): Promise<BigNumber>;

  getVersion(overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    _sanctions: PromiseOrValue<string>,
    _sequencer: PromiseOrValue<string>,
    _clearinghouse: PromiseOrValue<string>,
    slowModeTimeout: PromiseOrValue<BigNumberish>,
    _time: PromiseOrValue<BigNumberish>,
    _prices: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  nSubmissions(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  processSlowModeTransaction(
    sender: PromiseOrValue<string>,
    transaction: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  requireSubaccount(
    subaccount: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<void>;

  setBook(
    productId: PromiseOrValue<BigNumberish>,
    book: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setSequencer(
    _sequencer: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  slowModeConfig(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      timeout: BigNumber;
      txCount: BigNumber;
      txUpTo: BigNumber;
    }
  >;

  slowModeTxs(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, string] & {
      executableAt: BigNumber;
      sender: string;
      tx: string;
    }
  >;

  submitSlowModeTransaction(
    transaction: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  submitTransactions(
    transactions: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  submitTransactionsChecked(
    idx: PromiseOrValue<BigNumberish>,
    transactions: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  submitTransactionsCheckedWithGasLimit(
    idx: PromiseOrValue<BigNumberish>,
    transactions: PromiseOrValue<BytesLike>[],
    gasLimit: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  tryReturnFunds(
    transaction: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    clearinghouse(overrides?: CallOverrides): Promise<string>;

    depositCollateral(
      subaccountName: PromiseOrValue<BytesLike>,
      productId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    executeSlowModeTransactions(
      count: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getBook(
      productId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getNonce(
      sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNumSubaccounts(overrides?: CallOverrides): Promise<BigNumber>;

    getPriceX18(
      productId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPricesX18(
      healthGroup: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IEndpoint.PricesStructOutput>;

    getSequencer(overrides?: CallOverrides): Promise<string>;

    getSubaccountById(
      subaccountId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getSubaccountId(
      subaccount: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTime(overrides?: CallOverrides): Promise<BigNumber>;

    getVersion(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _sanctions: PromiseOrValue<string>,
      _sequencer: PromiseOrValue<string>,
      _clearinghouse: PromiseOrValue<string>,
      slowModeTimeout: PromiseOrValue<BigNumberish>,
      _time: PromiseOrValue<BigNumberish>,
      _prices: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    nSubmissions(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    processSlowModeTransaction(
      sender: PromiseOrValue<string>,
      transaction: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    requireSubaccount(
      subaccount: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setBook(
      productId: PromiseOrValue<BigNumberish>,
      book: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setSequencer(
      _sequencer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    slowModeConfig(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        timeout: BigNumber;
        txCount: BigNumber;
        txUpTo: BigNumber;
      }
    >;

    slowModeTxs(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string] & {
        executableAt: BigNumber;
        sender: string;
        tx: string;
      }
    >;

    submitSlowModeTransaction(
      transaction: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    submitTransactions(
      transactions: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<void>;

    submitTransactionsChecked(
      idx: PromiseOrValue<BigNumberish>,
      transactions: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<void>;

    submitTransactionsCheckedWithGasLimit(
      idx: PromiseOrValue<BigNumberish>,
      transactions: PromiseOrValue<BytesLike>[],
      gasLimit: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    tryReturnFunds(
      transaction: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "SubmitSlowModeTransaction(uint64,address,bytes)"(
      executableAt?: null,
      sender?: null,
      tx?: null
    ): SubmitSlowModeTransactionEventFilter;
    SubmitSlowModeTransaction(
      executableAt?: null,
      sender?: null,
      tx?: null
    ): SubmitSlowModeTransactionEventFilter;

    "SubmitTransactions()"(): SubmitTransactionsEventFilter;
    SubmitTransactions(): SubmitTransactionsEventFilter;
  };

  estimateGas: {
    clearinghouse(overrides?: CallOverrides): Promise<BigNumber>;

    depositCollateral(
      subaccountName: PromiseOrValue<BytesLike>,
      productId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executeSlowModeTransactions(
      count: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getBook(
      productId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNonce(
      sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNumSubaccounts(overrides?: CallOverrides): Promise<BigNumber>;

    getPriceX18(
      productId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPricesX18(
      healthGroup: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSequencer(overrides?: CallOverrides): Promise<BigNumber>;

    getSubaccountById(
      subaccountId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSubaccountId(
      subaccount: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTime(overrides?: CallOverrides): Promise<BigNumber>;

    getVersion(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _sanctions: PromiseOrValue<string>,
      _sequencer: PromiseOrValue<string>,
      _clearinghouse: PromiseOrValue<string>,
      slowModeTimeout: PromiseOrValue<BigNumberish>,
      _time: PromiseOrValue<BigNumberish>,
      _prices: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    nSubmissions(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    processSlowModeTransaction(
      sender: PromiseOrValue<string>,
      transaction: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    requireSubaccount(
      subaccount: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setBook(
      productId: PromiseOrValue<BigNumberish>,
      book: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setSequencer(
      _sequencer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    slowModeConfig(overrides?: CallOverrides): Promise<BigNumber>;

    slowModeTxs(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    submitSlowModeTransaction(
      transaction: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    submitTransactions(
      transactions: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    submitTransactionsChecked(
      idx: PromiseOrValue<BigNumberish>,
      transactions: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    submitTransactionsCheckedWithGasLimit(
      idx: PromiseOrValue<BigNumberish>,
      transactions: PromiseOrValue<BytesLike>[],
      gasLimit: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    tryReturnFunds(
      transaction: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    clearinghouse(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    depositCollateral(
      subaccountName: PromiseOrValue<BytesLike>,
      productId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executeSlowModeTransactions(
      count: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getBook(
      productId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNonce(
      sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNumSubaccounts(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPriceX18(
      productId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPricesX18(
      healthGroup: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSequencer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSubaccountById(
      subaccountId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSubaccountId(
      subaccount: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _sanctions: PromiseOrValue<string>,
      _sequencer: PromiseOrValue<string>,
      _clearinghouse: PromiseOrValue<string>,
      slowModeTimeout: PromiseOrValue<BigNumberish>,
      _time: PromiseOrValue<BigNumberish>,
      _prices: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    nSubmissions(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    processSlowModeTransaction(
      sender: PromiseOrValue<string>,
      transaction: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    requireSubaccount(
      subaccount: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setBook(
      productId: PromiseOrValue<BigNumberish>,
      book: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setSequencer(
      _sequencer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    slowModeConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    slowModeTxs(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    submitSlowModeTransaction(
      transaction: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    submitTransactions(
      transactions: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    submitTransactionsChecked(
      idx: PromiseOrValue<BigNumberish>,
      transactions: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    submitTransactionsCheckedWithGasLimit(
      idx: PromiseOrValue<BigNumberish>,
      transactions: PromiseOrValue<BytesLike>[],
      gasLimit: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    tryReturnFunds(
      transaction: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
