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

export declare namespace IProductEngine {
  export type ProductDeltaStruct = {
    productId: PromiseOrValue<BigNumberish>;
    subaccountId: PromiseOrValue<BigNumberish>;
    amountDelta: PromiseOrValue<BigNumberish>;
    vQuoteDelta: PromiseOrValue<BigNumberish>;
  };

  export type ProductDeltaStructOutput = [
    number,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    productId: number;
    subaccountId: BigNumber;
    amountDelta: BigNumber;
    vQuoteDelta: BigNumber;
  };
}

export declare namespace ISpotEngine {
  export type ConfigStruct = {
    token: PromiseOrValue<string>;
    interestInflectionUtilX18: PromiseOrValue<BigNumberish>;
    interestFloorX18: PromiseOrValue<BigNumberish>;
    interestSmallCapX18: PromiseOrValue<BigNumberish>;
    interestLargeCapX18: PromiseOrValue<BigNumberish>;
  };

  export type ConfigStructOutput = [
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    token: string;
    interestInflectionUtilX18: BigNumber;
    interestFloorX18: BigNumber;
    interestSmallCapX18: BigNumber;
    interestLargeCapX18: BigNumber;
  };

  export type StateStruct = {
    cumulativeDepositsMultiplierX18: PromiseOrValue<BigNumberish>;
    cumulativeBorrowsMultiplierX18: PromiseOrValue<BigNumberish>;
    totalDepositsNormalized: PromiseOrValue<BigNumberish>;
    totalBorrowsNormalized: PromiseOrValue<BigNumberish>;
  };

  export type StateStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    cumulativeDepositsMultiplierX18: BigNumber;
    cumulativeBorrowsMultiplierX18: BigNumber;
    totalDepositsNormalized: BigNumber;
    totalBorrowsNormalized: BigNumber;
  };

  export type BalanceStruct = {
    amount: PromiseOrValue<BigNumberish>;
    lastCumulativeMultiplierX18: PromiseOrValue<BigNumberish>;
  };

  export type BalanceStructOutput = [BigNumber, BigNumber] & {
    amount: BigNumber;
    lastCumulativeMultiplierX18: BigNumber;
  };

  export type LpStateStruct = {
    supply: PromiseOrValue<BigNumberish>;
    quote: ISpotEngine.BalanceStruct;
    base: ISpotEngine.BalanceStruct;
  };

  export type LpStateStructOutput = [
    BigNumber,
    ISpotEngine.BalanceStructOutput,
    ISpotEngine.BalanceStructOutput
  ] & {
    supply: BigNumber;
    quote: ISpotEngine.BalanceStructOutput;
    base: ISpotEngine.BalanceStructOutput;
  };

  export type LpBalanceStruct = { amount: PromiseOrValue<BigNumberish> };

  export type LpBalanceStructOutput = [BigNumber] & { amount: BigNumber };
}

export interface ISpotEngineInterface extends utils.Interface {
  functions: {
    "applyDeltas((uint32,uint64,int128,int128)[])": FunctionFragment;
    "burnLp(uint32,uint64,int128)": FunctionFragment;
    "decomposeLps(uint64,uint64)": FunctionFragment;
    "getClearinghouse()": FunctionFragment;
    "getConfig(uint32)": FunctionFragment;
    "getEngineType()": FunctionFragment;
    "getOrderbook(uint32)": FunctionFragment;
    "getProductIds()": FunctionFragment;
    "getStateAndBalance(uint32,uint64)": FunctionFragment;
    "getStatesAndBalances(uint32,uint64)": FunctionFragment;
    "getWithdrawTransferAmount(uint32,uint128)": FunctionFragment;
    "hasBalance(uint32,uint64)": FunctionFragment;
    "initialize(address,address,address,address,address)": FunctionFragment;
    "mintLp(uint32,uint64,int128,int128,int128)": FunctionFragment;
    "socializeSubaccount(uint64,int128)": FunctionFragment;
    "swapLp(uint32,uint64,int128,int128,int128,int128)": FunctionFragment;
    "updateStates(uint128)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "applyDeltas"
      | "burnLp"
      | "decomposeLps"
      | "getClearinghouse"
      | "getConfig"
      | "getEngineType"
      | "getOrderbook"
      | "getProductIds"
      | "getStateAndBalance"
      | "getStatesAndBalances"
      | "getWithdrawTransferAmount"
      | "hasBalance"
      | "initialize"
      | "mintLp"
      | "socializeSubaccount"
      | "swapLp"
      | "updateStates"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "applyDeltas",
    values: [IProductEngine.ProductDeltaStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "burnLp",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "decomposeLps",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getClearinghouse",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getConfig",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getEngineType",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getOrderbook",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getProductIds",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getStateAndBalance",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getStatesAndBalances",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getWithdrawTransferAmount",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "hasBalance",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "mintLp",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "socializeSubaccount",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "swapLp",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "updateStates",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "applyDeltas",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "burnLp", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "decomposeLps",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getClearinghouse",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getConfig", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getEngineType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOrderbook",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProductIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStateAndBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStatesAndBalances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getWithdrawTransferAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hasBalance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mintLp", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "socializeSubaccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swapLp", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateStates",
    data: BytesLike
  ): Result;

  events: {
    "AddProduct(uint32)": EventFragment;
    "ProductUpdate(uint32)": EventFragment;
    "SocializeProduct(uint32,int128)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddProduct"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProductUpdate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SocializeProduct"): EventFragment;
}

export interface AddProductEventObject {
  productId: number;
}
export type AddProductEvent = TypedEvent<[number], AddProductEventObject>;

export type AddProductEventFilter = TypedEventFilter<AddProductEvent>;

export interface ProductUpdateEventObject {
  productId: number;
}
export type ProductUpdateEvent = TypedEvent<[number], ProductUpdateEventObject>;

export type ProductUpdateEventFilter = TypedEventFilter<ProductUpdateEvent>;

export interface SocializeProductEventObject {
  productId: number;
  amountSocialized: BigNumber;
}
export type SocializeProductEvent = TypedEvent<
  [number, BigNumber],
  SocializeProductEventObject
>;

export type SocializeProductEventFilter =
  TypedEventFilter<SocializeProductEvent>;

export interface ISpotEngine extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ISpotEngineInterface;

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
    applyDeltas(
      deltas: IProductEngine.ProductDeltaStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    burnLp(
      productId: PromiseOrValue<BigNumberish>,
      subaccountId: PromiseOrValue<BigNumberish>,
      amountLp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    decomposeLps(
      liquidateeId: PromiseOrValue<BigNumberish>,
      liquidatorId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getClearinghouse(overrides?: CallOverrides): Promise<[string]>;

    getConfig(
      productId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[ISpotEngine.ConfigStructOutput]>;

    getEngineType(overrides?: CallOverrides): Promise<[number]>;

    getOrderbook(
      productId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getProductIds(overrides?: CallOverrides): Promise<[number[]]>;

    getStateAndBalance(
      productId: PromiseOrValue<BigNumberish>,
      subaccountId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [ISpotEngine.StateStructOutput, ISpotEngine.BalanceStructOutput]
    >;

    getStatesAndBalances(
      productId: PromiseOrValue<BigNumberish>,
      subaccountId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        ISpotEngine.LpStateStructOutput,
        ISpotEngine.LpBalanceStructOutput,
        ISpotEngine.StateStructOutput,
        ISpotEngine.BalanceStructOutput
      ]
    >;

    getWithdrawTransferAmount(
      productId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    hasBalance(
      productId: PromiseOrValue<BigNumberish>,
      subaccountId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    initialize(
      _clearinghouse: PromiseOrValue<string>,
      _quote: PromiseOrValue<string>,
      _endpoint: PromiseOrValue<string>,
      _admin: PromiseOrValue<string>,
      _fees: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    mintLp(
      productId: PromiseOrValue<BigNumberish>,
      subaccountId: PromiseOrValue<BigNumberish>,
      amountBase: PromiseOrValue<BigNumberish>,
      quoteAmountLow: PromiseOrValue<BigNumberish>,
      quoteAmountHigh: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    socializeSubaccount(
      subaccountId: PromiseOrValue<BigNumberish>,
      insurance: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapLp(
      productId: PromiseOrValue<BigNumberish>,
      subaccountId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      priceX18: PromiseOrValue<BigNumberish>,
      sizeIncrement: PromiseOrValue<BigNumberish>,
      lpSpreadX18: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateStates(
      dt: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  applyDeltas(
    deltas: IProductEngine.ProductDeltaStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  burnLp(
    productId: PromiseOrValue<BigNumberish>,
    subaccountId: PromiseOrValue<BigNumberish>,
    amountLp: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  decomposeLps(
    liquidateeId: PromiseOrValue<BigNumberish>,
    liquidatorId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getClearinghouse(overrides?: CallOverrides): Promise<string>;

  getConfig(
    productId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<ISpotEngine.ConfigStructOutput>;

  getEngineType(overrides?: CallOverrides): Promise<number>;

  getOrderbook(
    productId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getProductIds(overrides?: CallOverrides): Promise<number[]>;

  getStateAndBalance(
    productId: PromiseOrValue<BigNumberish>,
    subaccountId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[ISpotEngine.StateStructOutput, ISpotEngine.BalanceStructOutput]>;

  getStatesAndBalances(
    productId: PromiseOrValue<BigNumberish>,
    subaccountId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [
      ISpotEngine.LpStateStructOutput,
      ISpotEngine.LpBalanceStructOutput,
      ISpotEngine.StateStructOutput,
      ISpotEngine.BalanceStructOutput
    ]
  >;

  getWithdrawTransferAmount(
    productId: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  hasBalance(
    productId: PromiseOrValue<BigNumberish>,
    subaccountId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  initialize(
    _clearinghouse: PromiseOrValue<string>,
    _quote: PromiseOrValue<string>,
    _endpoint: PromiseOrValue<string>,
    _admin: PromiseOrValue<string>,
    _fees: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  mintLp(
    productId: PromiseOrValue<BigNumberish>,
    subaccountId: PromiseOrValue<BigNumberish>,
    amountBase: PromiseOrValue<BigNumberish>,
    quoteAmountLow: PromiseOrValue<BigNumberish>,
    quoteAmountHigh: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  socializeSubaccount(
    subaccountId: PromiseOrValue<BigNumberish>,
    insurance: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapLp(
    productId: PromiseOrValue<BigNumberish>,
    subaccountId: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    priceX18: PromiseOrValue<BigNumberish>,
    sizeIncrement: PromiseOrValue<BigNumberish>,
    lpSpreadX18: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateStates(
    dt: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    applyDeltas(
      deltas: IProductEngine.ProductDeltaStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    burnLp(
      productId: PromiseOrValue<BigNumberish>,
      subaccountId: PromiseOrValue<BigNumberish>,
      amountLp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    decomposeLps(
      liquidateeId: PromiseOrValue<BigNumberish>,
      liquidatorId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getClearinghouse(overrides?: CallOverrides): Promise<string>;

    getConfig(
      productId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<ISpotEngine.ConfigStructOutput>;

    getEngineType(overrides?: CallOverrides): Promise<number>;

    getOrderbook(
      productId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getProductIds(overrides?: CallOverrides): Promise<number[]>;

    getStateAndBalance(
      productId: PromiseOrValue<BigNumberish>,
      subaccountId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [ISpotEngine.StateStructOutput, ISpotEngine.BalanceStructOutput]
    >;

    getStatesAndBalances(
      productId: PromiseOrValue<BigNumberish>,
      subaccountId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        ISpotEngine.LpStateStructOutput,
        ISpotEngine.LpBalanceStructOutput,
        ISpotEngine.StateStructOutput,
        ISpotEngine.BalanceStructOutput
      ]
    >;

    getWithdrawTransferAmount(
      productId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasBalance(
      productId: PromiseOrValue<BigNumberish>,
      subaccountId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    initialize(
      _clearinghouse: PromiseOrValue<string>,
      _quote: PromiseOrValue<string>,
      _endpoint: PromiseOrValue<string>,
      _admin: PromiseOrValue<string>,
      _fees: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    mintLp(
      productId: PromiseOrValue<BigNumberish>,
      subaccountId: PromiseOrValue<BigNumberish>,
      amountBase: PromiseOrValue<BigNumberish>,
      quoteAmountLow: PromiseOrValue<BigNumberish>,
      quoteAmountHigh: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    socializeSubaccount(
      subaccountId: PromiseOrValue<BigNumberish>,
      insurance: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapLp(
      productId: PromiseOrValue<BigNumberish>,
      subaccountId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      priceX18: PromiseOrValue<BigNumberish>,
      sizeIncrement: PromiseOrValue<BigNumberish>,
      lpSpreadX18: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    updateStates(
      dt: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AddProduct(uint32)"(productId?: null): AddProductEventFilter;
    AddProduct(productId?: null): AddProductEventFilter;

    "ProductUpdate(uint32)"(
      productId?: PromiseOrValue<BigNumberish> | null
    ): ProductUpdateEventFilter;
    ProductUpdate(
      productId?: PromiseOrValue<BigNumberish> | null
    ): ProductUpdateEventFilter;

    "SocializeProduct(uint32,int128)"(
      productId?: PromiseOrValue<BigNumberish> | null,
      amountSocialized?: null
    ): SocializeProductEventFilter;
    SocializeProduct(
      productId?: PromiseOrValue<BigNumberish> | null,
      amountSocialized?: null
    ): SocializeProductEventFilter;
  };

  estimateGas: {
    applyDeltas(
      deltas: IProductEngine.ProductDeltaStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    burnLp(
      productId: PromiseOrValue<BigNumberish>,
      subaccountId: PromiseOrValue<BigNumberish>,
      amountLp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    decomposeLps(
      liquidateeId: PromiseOrValue<BigNumberish>,
      liquidatorId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getClearinghouse(overrides?: CallOverrides): Promise<BigNumber>;

    getConfig(
      productId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getEngineType(overrides?: CallOverrides): Promise<BigNumber>;

    getOrderbook(
      productId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProductIds(overrides?: CallOverrides): Promise<BigNumber>;

    getStateAndBalance(
      productId: PromiseOrValue<BigNumberish>,
      subaccountId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStatesAndBalances(
      productId: PromiseOrValue<BigNumberish>,
      subaccountId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getWithdrawTransferAmount(
      productId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasBalance(
      productId: PromiseOrValue<BigNumberish>,
      subaccountId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _clearinghouse: PromiseOrValue<string>,
      _quote: PromiseOrValue<string>,
      _endpoint: PromiseOrValue<string>,
      _admin: PromiseOrValue<string>,
      _fees: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    mintLp(
      productId: PromiseOrValue<BigNumberish>,
      subaccountId: PromiseOrValue<BigNumberish>,
      amountBase: PromiseOrValue<BigNumberish>,
      quoteAmountLow: PromiseOrValue<BigNumberish>,
      quoteAmountHigh: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    socializeSubaccount(
      subaccountId: PromiseOrValue<BigNumberish>,
      insurance: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swapLp(
      productId: PromiseOrValue<BigNumberish>,
      subaccountId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      priceX18: PromiseOrValue<BigNumberish>,
      sizeIncrement: PromiseOrValue<BigNumberish>,
      lpSpreadX18: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateStates(
      dt: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    applyDeltas(
      deltas: IProductEngine.ProductDeltaStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    burnLp(
      productId: PromiseOrValue<BigNumberish>,
      subaccountId: PromiseOrValue<BigNumberish>,
      amountLp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    decomposeLps(
      liquidateeId: PromiseOrValue<BigNumberish>,
      liquidatorId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getClearinghouse(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getConfig(
      productId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getEngineType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getOrderbook(
      productId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProductIds(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getStateAndBalance(
      productId: PromiseOrValue<BigNumberish>,
      subaccountId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStatesAndBalances(
      productId: PromiseOrValue<BigNumberish>,
      subaccountId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getWithdrawTransferAmount(
      productId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasBalance(
      productId: PromiseOrValue<BigNumberish>,
      subaccountId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _clearinghouse: PromiseOrValue<string>,
      _quote: PromiseOrValue<string>,
      _endpoint: PromiseOrValue<string>,
      _admin: PromiseOrValue<string>,
      _fees: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    mintLp(
      productId: PromiseOrValue<BigNumberish>,
      subaccountId: PromiseOrValue<BigNumberish>,
      amountBase: PromiseOrValue<BigNumberish>,
      quoteAmountLow: PromiseOrValue<BigNumberish>,
      quoteAmountHigh: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    socializeSubaccount(
      subaccountId: PromiseOrValue<BigNumberish>,
      insurance: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapLp(
      productId: PromiseOrValue<BigNumberish>,
      subaccountId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      priceX18: PromiseOrValue<BigNumberish>,
      sizeIncrement: PromiseOrValue<BigNumberish>,
      lpSpreadX18: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateStates(
      dt: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
