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
  export type OrderStruct = {
    sender: PromiseOrValue<BytesLike>;
    priceX18: PromiseOrValue<BigNumberish>;
    amount: PromiseOrValue<BigNumberish>;
    expiration: PromiseOrValue<BigNumberish>;
    nonce: PromiseOrValue<BigNumberish>;
  };

  export type OrderStructOutput = [
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    sender: string;
    priceX18: BigNumber;
    amount: BigNumber;
    expiration: BigNumber;
    nonce: BigNumber;
  };

  export type SignedOrderStruct = {
    order: IEndpoint.OrderStruct;
    signature: PromiseOrValue<BytesLike>;
  };

  export type SignedOrderStructOutput = [
    IEndpoint.OrderStructOutput,
    string
  ] & { order: IEndpoint.OrderStructOutput; signature: string };

  export type MatchOrderAMMStruct = {
    productId: PromiseOrValue<BigNumberish>;
    taker: IEndpoint.SignedOrderStruct;
  };

  export type MatchOrderAMMStructOutput = [
    number,
    IEndpoint.SignedOrderStructOutput
  ] & { productId: number; taker: IEndpoint.SignedOrderStructOutput };

  export type MatchOrdersStruct = {
    productId: PromiseOrValue<BigNumberish>;
    amm: PromiseOrValue<boolean>;
    taker: IEndpoint.SignedOrderStruct;
    maker: IEndpoint.SignedOrderStruct;
  };

  export type MatchOrdersStructOutput = [
    number,
    boolean,
    IEndpoint.SignedOrderStructOutput,
    IEndpoint.SignedOrderStructOutput
  ] & {
    productId: number;
    amm: boolean;
    taker: IEndpoint.SignedOrderStructOutput;
    maker: IEndpoint.SignedOrderStructOutput;
  };

  export type SwapAMMStruct = {
    sender: PromiseOrValue<BytesLike>;
    productId: PromiseOrValue<BigNumberish>;
    amount: PromiseOrValue<BigNumberish>;
    priceX18: PromiseOrValue<BigNumberish>;
  };

  export type SwapAMMStructOutput = [string, number, BigNumber, BigNumber] & {
    sender: string;
    productId: number;
    amount: BigNumber;
    priceX18: BigNumber;
  };
}

export declare namespace IOffchainBook {
  export type MarketStruct = {
    productId: PromiseOrValue<BigNumberish>;
    sizeIncrement: PromiseOrValue<BigNumberish>;
    priceIncrementX18: PromiseOrValue<BigNumberish>;
    lpSpreadX18: PromiseOrValue<BigNumberish>;
    collectedFees: PromiseOrValue<BigNumberish>;
    sequencerFees: PromiseOrValue<BigNumberish>;
  };

  export type MarketStructOutput = [
    number,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    productId: number;
    sizeIncrement: BigNumber;
    priceIncrementX18: BigNumber;
    lpSpreadX18: BigNumber;
    collectedFees: BigNumber;
    sequencerFees: BigNumber;
  };
}

export interface IOffchainBookInterface extends utils.Interface {
  functions: {
    "claimSequencerFee()": FunctionFragment;
    "dumpFees()": FunctionFragment;
    "getDigest((bytes32,int128,int128,uint64,uint64))": FunctionFragment;
    "getMarket()": FunctionFragment;
    "getMinSize()": FunctionFragment;
    "getVersion()": FunctionFragment;
    "initialize(address,address,address,address,address,uint32,int128,int128,int128,int128)": FunctionFragment;
    "matchOrderAMM((uint32,((bytes32,int128,int128,uint64,uint64),bytes)))": FunctionFragment;
    "matchOrders((uint32,bool,((bytes32,int128,int128,uint64,uint64),bytes),((bytes32,int128,int128,uint64,uint64),bytes)))": FunctionFragment;
    "modifyConfig(int128,int128,int128,int128)": FunctionFragment;
    "swapAMM((bytes32,uint32,int128,int128))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "claimSequencerFee"
      | "dumpFees"
      | "getDigest"
      | "getMarket"
      | "getMinSize"
      | "getVersion"
      | "initialize"
      | "matchOrderAMM"
      | "matchOrders"
      | "modifyConfig"
      | "swapAMM"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "claimSequencerFee",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "dumpFees", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getDigest",
    values: [IEndpoint.OrderStruct]
  ): string;
  encodeFunctionData(functionFragment: "getMarket", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getMinSize",
    values?: undefined
  ): string;
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
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "matchOrderAMM",
    values: [IEndpoint.MatchOrderAMMStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "matchOrders",
    values: [IEndpoint.MatchOrdersStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "modifyConfig",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapAMM",
    values: [IEndpoint.SwapAMMStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "claimSequencerFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "dumpFees", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getDigest", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getMarket", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getMinSize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getVersion", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "matchOrderAMM",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "matchOrders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "modifyConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swapAMM", data: BytesLike): Result;

  events: {
    "FillOrder(bytes32,bytes32,int128,int128,uint64,uint64,bool,int128,int128,int128)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "FillOrder"): EventFragment;
}

export interface FillOrderEventObject {
  digest: string;
  subaccount: string;
  priceX18: BigNumber;
  amount: BigNumber;
  expiration: BigNumber;
  nonce: BigNumber;
  isTaker: boolean;
  feeAmount: BigNumber;
  baseDelta: BigNumber;
  quoteDelta: BigNumber;
}
export type FillOrderEvent = TypedEvent<
  [
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    boolean,
    BigNumber,
    BigNumber,
    BigNumber
  ],
  FillOrderEventObject
>;

export type FillOrderEventFilter = TypedEventFilter<FillOrderEvent>;

export interface IOffchainBook extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IOffchainBookInterface;

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
    claimSequencerFee(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    dumpFees(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getDigest(
      order: IEndpoint.OrderStruct,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getMarket(
      overrides?: CallOverrides
    ): Promise<[IOffchainBook.MarketStructOutput]>;

    getMinSize(overrides?: CallOverrides): Promise<[BigNumber]>;

    getVersion(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    initialize(
      _clearinghouse: PromiseOrValue<string>,
      _engine: PromiseOrValue<string>,
      _endpoint: PromiseOrValue<string>,
      _admin: PromiseOrValue<string>,
      _fees: PromiseOrValue<string>,
      _productId: PromiseOrValue<BigNumberish>,
      _sizeIncrement: PromiseOrValue<BigNumberish>,
      _priceIncrementX18: PromiseOrValue<BigNumberish>,
      _minSize: PromiseOrValue<BigNumberish>,
      _lpSpreadX18: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    matchOrderAMM(
      tx: IEndpoint.MatchOrderAMMStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    matchOrders(
      tx: IEndpoint.MatchOrdersStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    modifyConfig(
      _sizeIncrement: PromiseOrValue<BigNumberish>,
      _priceIncrementX18: PromiseOrValue<BigNumberish>,
      _minSize: PromiseOrValue<BigNumberish>,
      _lpSpreadX18: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapAMM(
      tx: IEndpoint.SwapAMMStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  claimSequencerFee(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  dumpFees(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getDigest(
    order: IEndpoint.OrderStruct,
    overrides?: CallOverrides
  ): Promise<string>;

  getMarket(
    overrides?: CallOverrides
  ): Promise<IOffchainBook.MarketStructOutput>;

  getMinSize(overrides?: CallOverrides): Promise<BigNumber>;

  getVersion(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  initialize(
    _clearinghouse: PromiseOrValue<string>,
    _engine: PromiseOrValue<string>,
    _endpoint: PromiseOrValue<string>,
    _admin: PromiseOrValue<string>,
    _fees: PromiseOrValue<string>,
    _productId: PromiseOrValue<BigNumberish>,
    _sizeIncrement: PromiseOrValue<BigNumberish>,
    _priceIncrementX18: PromiseOrValue<BigNumberish>,
    _minSize: PromiseOrValue<BigNumberish>,
    _lpSpreadX18: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  matchOrderAMM(
    tx: IEndpoint.MatchOrderAMMStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  matchOrders(
    tx: IEndpoint.MatchOrdersStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  modifyConfig(
    _sizeIncrement: PromiseOrValue<BigNumberish>,
    _priceIncrementX18: PromiseOrValue<BigNumberish>,
    _minSize: PromiseOrValue<BigNumberish>,
    _lpSpreadX18: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapAMM(
    tx: IEndpoint.SwapAMMStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    claimSequencerFee(overrides?: CallOverrides): Promise<BigNumber>;

    dumpFees(overrides?: CallOverrides): Promise<void>;

    getDigest(
      order: IEndpoint.OrderStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    getMarket(
      overrides?: CallOverrides
    ): Promise<IOffchainBook.MarketStructOutput>;

    getMinSize(overrides?: CallOverrides): Promise<BigNumber>;

    getVersion(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _clearinghouse: PromiseOrValue<string>,
      _engine: PromiseOrValue<string>,
      _endpoint: PromiseOrValue<string>,
      _admin: PromiseOrValue<string>,
      _fees: PromiseOrValue<string>,
      _productId: PromiseOrValue<BigNumberish>,
      _sizeIncrement: PromiseOrValue<BigNumberish>,
      _priceIncrementX18: PromiseOrValue<BigNumberish>,
      _minSize: PromiseOrValue<BigNumberish>,
      _lpSpreadX18: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    matchOrderAMM(
      tx: IEndpoint.MatchOrderAMMStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    matchOrders(
      tx: IEndpoint.MatchOrdersStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    modifyConfig(
      _sizeIncrement: PromiseOrValue<BigNumberish>,
      _priceIncrementX18: PromiseOrValue<BigNumberish>,
      _minSize: PromiseOrValue<BigNumberish>,
      _lpSpreadX18: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    swapAMM(
      tx: IEndpoint.SwapAMMStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "FillOrder(bytes32,bytes32,int128,int128,uint64,uint64,bool,int128,int128,int128)"(
      digest?: PromiseOrValue<BytesLike> | null,
      subaccount?: PromiseOrValue<BytesLike> | null,
      priceX18?: null,
      amount?: null,
      expiration?: null,
      nonce?: null,
      isTaker?: null,
      feeAmount?: null,
      baseDelta?: null,
      quoteDelta?: null
    ): FillOrderEventFilter;
    FillOrder(
      digest?: PromiseOrValue<BytesLike> | null,
      subaccount?: PromiseOrValue<BytesLike> | null,
      priceX18?: null,
      amount?: null,
      expiration?: null,
      nonce?: null,
      isTaker?: null,
      feeAmount?: null,
      baseDelta?: null,
      quoteDelta?: null
    ): FillOrderEventFilter;
  };

  estimateGas: {
    claimSequencerFee(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    dumpFees(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getDigest(
      order: IEndpoint.OrderStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMarket(overrides?: CallOverrides): Promise<BigNumber>;

    getMinSize(overrides?: CallOverrides): Promise<BigNumber>;

    getVersion(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    initialize(
      _clearinghouse: PromiseOrValue<string>,
      _engine: PromiseOrValue<string>,
      _endpoint: PromiseOrValue<string>,
      _admin: PromiseOrValue<string>,
      _fees: PromiseOrValue<string>,
      _productId: PromiseOrValue<BigNumberish>,
      _sizeIncrement: PromiseOrValue<BigNumberish>,
      _priceIncrementX18: PromiseOrValue<BigNumberish>,
      _minSize: PromiseOrValue<BigNumberish>,
      _lpSpreadX18: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    matchOrderAMM(
      tx: IEndpoint.MatchOrderAMMStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    matchOrders(
      tx: IEndpoint.MatchOrdersStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    modifyConfig(
      _sizeIncrement: PromiseOrValue<BigNumberish>,
      _priceIncrementX18: PromiseOrValue<BigNumberish>,
      _minSize: PromiseOrValue<BigNumberish>,
      _lpSpreadX18: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swapAMM(
      tx: IEndpoint.SwapAMMStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    claimSequencerFee(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    dumpFees(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getDigest(
      order: IEndpoint.OrderStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMarket(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMinSize(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getVersion(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      _clearinghouse: PromiseOrValue<string>,
      _engine: PromiseOrValue<string>,
      _endpoint: PromiseOrValue<string>,
      _admin: PromiseOrValue<string>,
      _fees: PromiseOrValue<string>,
      _productId: PromiseOrValue<BigNumberish>,
      _sizeIncrement: PromiseOrValue<BigNumberish>,
      _priceIncrementX18: PromiseOrValue<BigNumberish>,
      _minSize: PromiseOrValue<BigNumberish>,
      _lpSpreadX18: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    matchOrderAMM(
      tx: IEndpoint.MatchOrderAMMStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    matchOrders(
      tx: IEndpoint.MatchOrdersStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    modifyConfig(
      _sizeIncrement: PromiseOrValue<BigNumberish>,
      _priceIncrementX18: PromiseOrValue<BigNumberish>,
      _minSize: PromiseOrValue<BigNumberish>,
      _lpSpreadX18: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapAMM(
      tx: IEndpoint.SwapAMMStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
