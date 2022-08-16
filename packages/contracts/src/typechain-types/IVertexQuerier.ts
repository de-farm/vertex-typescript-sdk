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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace ISpotEngine {
  export type ConfigStruct = {
    token: PromiseOrValue<string>;
    longWeightInitialX18: PromiseOrValue<BigNumberish>;
    shortWeightInitialX18: PromiseOrValue<BigNumberish>;
    longWeightMaintenanceX18: PromiseOrValue<BigNumberish>;
    shortWeightMaintenanceX18: PromiseOrValue<BigNumberish>;
    interestInflectionUtilX18: PromiseOrValue<BigNumberish>;
    interestFloorX18: PromiseOrValue<BigNumberish>;
    interestSmallCapX18: PromiseOrValue<BigNumberish>;
    interestLargeCapX18: PromiseOrValue<BigNumberish>;
    largePositionPenaltyX18: PromiseOrValue<BigNumberish>;
  };

  export type ConfigStructOutput = [
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    token: string;
    longWeightInitialX18: BigNumber;
    shortWeightInitialX18: BigNumber;
    longWeightMaintenanceX18: BigNumber;
    shortWeightMaintenanceX18: BigNumber;
    interestInflectionUtilX18: BigNumber;
    interestFloorX18: BigNumber;
    interestSmallCapX18: BigNumber;
    interestLargeCapX18: BigNumber;
    largePositionPenaltyX18: BigNumber;
  };

  export type StateStruct = {
    priceX18: PromiseOrValue<BigNumberish>;
    cumulativeDepositsMultiplierX18: PromiseOrValue<BigNumberish>;
    cumulativeBorrowsMultiplierX18: PromiseOrValue<BigNumberish>;
    totalDepositsNormalizedX18: PromiseOrValue<BigNumberish>;
    totalBorrowsNormalizedX18: PromiseOrValue<BigNumberish>;
    lastUpdateTime: PromiseOrValue<BigNumberish>;
  };

  export type StateStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    priceX18: BigNumber;
    cumulativeDepositsMultiplierX18: BigNumber;
    cumulativeBorrowsMultiplierX18: BigNumber;
    totalDepositsNormalizedX18: BigNumber;
    totalBorrowsNormalizedX18: BigNumber;
    lastUpdateTime: BigNumber;
  };

  export type ProductStruct = {
    config: ISpotEngine.ConfigStruct;
    state: ISpotEngine.StateStruct;
  };

  export type ProductStructOutput = [
    ISpotEngine.ConfigStructOutput,
    ISpotEngine.StateStructOutput
  ] & {
    config: ISpotEngine.ConfigStructOutput;
    state: ISpotEngine.StateStructOutput;
  };

  export type BalanceStruct = {
    amountX18: PromiseOrValue<BigNumberish>;
    lastCumulativeMultiplierX18: PromiseOrValue<BigNumberish>;
  };

  export type BalanceStructOutput = [BigNumber, BigNumber] & {
    amountX18: BigNumber;
    lastCumulativeMultiplierX18: BigNumber;
  };
}

export declare namespace IVertexQuerier {
  export type MarketInfoStruct = {
    productId: PromiseOrValue<BigNumberish>;
    productType: PromiseOrValue<BigNumberish>;
    engine: PromiseOrValue<string>;
    orderbook: PromiseOrValue<string>;
    bidX18: PromiseOrValue<BigNumberish>;
    askX18: PromiseOrValue<BigNumberish>;
    sizeIncrementX18: PromiseOrValue<BigNumberish>;
    priceIncrementX18: PromiseOrValue<BigNumberish>;
    priceX18: PromiseOrValue<BigNumberish>;
    collectedFeesX18: PromiseOrValue<BigNumberish>;
  };

  export type MarketInfoStructOutput = [
    number,
    number,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    productId: number;
    productType: number;
    engine: string;
    orderbook: string;
    bidX18: BigNumber;
    askX18: BigNumber;
    sizeIncrementX18: BigNumber;
    priceIncrementX18: BigNumber;
    priceX18: BigNumber;
    collectedFeesX18: BigNumber;
  };

  export type SpotProductInfoStruct = {
    productId: PromiseOrValue<BigNumberish>;
    product: ISpotEngine.ProductStruct;
    market: IVertexQuerier.MarketInfoStruct;
  };

  export type SpotProductInfoStructOutput = [
    number,
    ISpotEngine.ProductStructOutput,
    IVertexQuerier.MarketInfoStructOutput
  ] & {
    productId: number;
    product: ISpotEngine.ProductStructOutput;
    market: IVertexQuerier.MarketInfoStructOutput;
  };

  export type HealthInfoStruct = {
    unweightedWithOrdersX18: PromiseOrValue<BigNumberish>;
    maintenanceWithOrdersX18: PromiseOrValue<BigNumberish>;
    maintenanceNoOrdersX18: PromiseOrValue<BigNumberish>;
    initialWithOrdersX18: PromiseOrValue<BigNumberish>;
  };

  export type HealthInfoStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    unweightedWithOrdersX18: BigNumber;
    maintenanceWithOrdersX18: BigNumber;
    maintenanceNoOrdersX18: BigNumber;
    initialWithOrdersX18: BigNumber;
  };

  export type SpotBalanceInfoStruct = {
    product: IVertexQuerier.SpotProductInfoStruct;
    balance: ISpotEngine.BalanceStruct;
    healthInfo: IVertexQuerier.HealthInfoStruct;
    cumulativeBuyAmountX18: PromiseOrValue<BigNumberish>;
    cumulativeSellAmountX18: PromiseOrValue<BigNumberish>;
  };

  export type SpotBalanceInfoStructOutput = [
    IVertexQuerier.SpotProductInfoStructOutput,
    ISpotEngine.BalanceStructOutput,
    IVertexQuerier.HealthInfoStructOutput,
    BigNumber,
    BigNumber
  ] & {
    product: IVertexQuerier.SpotProductInfoStructOutput;
    balance: ISpotEngine.BalanceStructOutput;
    healthInfo: IVertexQuerier.HealthInfoStructOutput;
    cumulativeBuyAmountX18: BigNumber;
    cumulativeSellAmountX18: BigNumber;
  };

  export type PerpProductInfoStruct = {
    productId: PromiseOrValue<BigNumberish>;
    product: IPerpEngine.ProductStruct;
    market: IVertexQuerier.MarketInfoStruct;
  };

  export type PerpProductInfoStructOutput = [
    number,
    IPerpEngine.ProductStructOutput,
    IVertexQuerier.MarketInfoStructOutput
  ] & {
    productId: number;
    product: IPerpEngine.ProductStructOutput;
    market: IVertexQuerier.MarketInfoStructOutput;
  };

  export type PerpBalanceInfoStruct = {
    product: IVertexQuerier.PerpProductInfoStruct;
    balance: IPerpEngine.BalanceStruct;
    healthInfo: IVertexQuerier.HealthInfoStruct;
    cumulativeBuyAmountX18: PromiseOrValue<BigNumberish>;
    cumulativeSellAmountX18: PromiseOrValue<BigNumberish>;
  };

  export type PerpBalanceInfoStructOutput = [
    IVertexQuerier.PerpProductInfoStructOutput,
    IPerpEngine.BalanceStructOutput,
    IVertexQuerier.HealthInfoStructOutput,
    BigNumber,
    BigNumber
  ] & {
    product: IVertexQuerier.PerpProductInfoStructOutput;
    balance: IPerpEngine.BalanceStructOutput;
    healthInfo: IVertexQuerier.HealthInfoStructOutput;
    cumulativeBuyAmountX18: BigNumber;
    cumulativeSellAmountX18: BigNumber;
  };

  export type AllBalanceInfoStruct = {
    spotBalances: IVertexQuerier.SpotBalanceInfoStruct[];
    perpBalances: IVertexQuerier.PerpBalanceInfoStruct[];
  };

  export type AllBalanceInfoStructOutput = [
    IVertexQuerier.SpotBalanceInfoStructOutput[],
    IVertexQuerier.PerpBalanceInfoStructOutput[]
  ] & {
    spotBalances: IVertexQuerier.SpotBalanceInfoStructOutput[];
    perpBalances: IVertexQuerier.PerpBalanceInfoStructOutput[];
  };

  export type AllProductInfoStruct = {
    spotProducts: IVertexQuerier.SpotProductInfoStruct[];
    perpProducts: IVertexQuerier.PerpProductInfoStruct[];
  };

  export type AllProductInfoStructOutput = [
    IVertexQuerier.SpotProductInfoStructOutput[],
    IVertexQuerier.PerpProductInfoStructOutput[]
  ] & {
    spotProducts: IVertexQuerier.SpotProductInfoStructOutput[];
    perpProducts: IVertexQuerier.PerpProductInfoStructOutput[];
  };

  export type ConfigStruct = { clearinghouse: PromiseOrValue<string> };

  export type ConfigStructOutput = [string] & { clearinghouse: string };
}

export declare namespace IPerpEngine {
  export type ConfigStruct = {
    longWeightInitialX18: PromiseOrValue<BigNumberish>;
    shortWeightInitialX18: PromiseOrValue<BigNumberish>;
    longWeightMaintenanceX18: PromiseOrValue<BigNumberish>;
    shortWeightMaintenanceX18: PromiseOrValue<BigNumberish>;
    largePositionPenaltyX18: PromiseOrValue<BigNumberish>;
  };

  export type ConfigStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    longWeightInitialX18: BigNumber;
    shortWeightInitialX18: BigNumber;
    longWeightMaintenanceX18: BigNumber;
    shortWeightMaintenanceX18: BigNumber;
    largePositionPenaltyX18: BigNumber;
  };

  export type StateStruct = {
    priceX18: PromiseOrValue<BigNumberish>;
    emaPriceX18: PromiseOrValue<BigNumberish>;
    cumulativeFundingLongX18: PromiseOrValue<BigNumberish>;
    cumulativeFundingShortX18: PromiseOrValue<BigNumberish>;
    openInterestX18: PromiseOrValue<BigNumberish>;
    fundingLastUpdated: PromiseOrValue<BigNumberish>;
    emaPriceLastUpdated: PromiseOrValue<BigNumberish>;
    availableSettleX18: PromiseOrValue<BigNumberish>;
  };

  export type StateStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    priceX18: BigNumber;
    emaPriceX18: BigNumber;
    cumulativeFundingLongX18: BigNumber;
    cumulativeFundingShortX18: BigNumber;
    openInterestX18: BigNumber;
    fundingLastUpdated: BigNumber;
    emaPriceLastUpdated: BigNumber;
    availableSettleX18: BigNumber;
  };

  export type ProductStruct = {
    config: IPerpEngine.ConfigStruct;
    state: IPerpEngine.StateStruct;
  };

  export type ProductStructOutput = [
    IPerpEngine.ConfigStructOutput,
    IPerpEngine.StateStructOutput
  ] & {
    config: IPerpEngine.ConfigStructOutput;
    state: IPerpEngine.StateStructOutput;
  };

  export type BalanceStruct = {
    amountX18: PromiseOrValue<BigNumberish>;
    vQuoteBalanceX18: PromiseOrValue<BigNumberish>;
    lastCumulativeFundingX18: PromiseOrValue<BigNumberish>;
  };

  export type BalanceStructOutput = [BigNumber, BigNumber, BigNumber] & {
    amountX18: BigNumber;
    vQuoteBalanceX18: BigNumber;
    lastCumulativeFundingX18: BigNumber;
  };
}

export interface IVertexQuerierInterface extends utils.Interface {
  functions: {
    "getAllBalances(uint64)": FunctionFragment;
    "getAllMarketInfo()": FunctionFragment;
    "getAllProducts()": FunctionFragment;
    "getConfig()": FunctionFragment;
    "getHealthInfo(uint64)": FunctionFragment;
    "getMarketInfo(uint32[])": FunctionFragment;
    "getPerpBalances(uint32[],uint64)": FunctionFragment;
    "getPerpProducts(uint32[])": FunctionFragment;
    "getSettleAmountX18(uint64)": FunctionFragment;
    "getSpotBalances(uint32[],uint64)": FunctionFragment;
    "getSpotProducts(uint32[])": FunctionFragment;
    "setAddresses(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getAllBalances"
      | "getAllMarketInfo"
      | "getAllProducts"
      | "getConfig"
      | "getHealthInfo"
      | "getMarketInfo"
      | "getPerpBalances"
      | "getPerpProducts"
      | "getSettleAmountX18"
      | "getSpotBalances"
      | "getSpotProducts"
      | "setAddresses"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getAllBalances",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllMarketInfo",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAllProducts",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getConfig", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getHealthInfo",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getMarketInfo",
    values: [PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getPerpBalances",
    values: [PromiseOrValue<BigNumberish>[], PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getPerpProducts",
    values: [PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getSettleAmountX18",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getSpotBalances",
    values: [PromiseOrValue<BigNumberish>[], PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getSpotProducts",
    values: [PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setAddresses",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "getAllBalances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllMarketInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllProducts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getConfig", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getHealthInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMarketInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPerpBalances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPerpProducts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSettleAmountX18",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSpotBalances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSpotProducts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAddresses",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IVertexQuerier extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IVertexQuerierInterface;

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
    getAllBalances(
      subaccount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[IVertexQuerier.AllBalanceInfoStructOutput]>;

    getAllMarketInfo(
      overrides?: CallOverrides
    ): Promise<[IVertexQuerier.MarketInfoStructOutput[]]>;

    getAllProducts(
      overrides?: CallOverrides
    ): Promise<[IVertexQuerier.AllProductInfoStructOutput]>;

    getConfig(
      overrides?: CallOverrides
    ): Promise<[IVertexQuerier.ConfigStructOutput]>;

    getHealthInfo(
      subaccount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[IVertexQuerier.HealthInfoStructOutput]>;

    getMarketInfo(
      productIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<[IVertexQuerier.MarketInfoStructOutput[]]>;

    getPerpBalances(
      productIds: PromiseOrValue<BigNumberish>[],
      subaccount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[IVertexQuerier.PerpBalanceInfoStructOutput[]]>;

    getPerpProducts(
      productIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<[IVertexQuerier.PerpProductInfoStructOutput[]]>;

    getSettleAmountX18(
      subaccountId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getSpotBalances(
      productIds: PromiseOrValue<BigNumberish>[],
      subaccount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[IVertexQuerier.SpotBalanceInfoStructOutput[]]>;

    getSpotProducts(
      productIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<[IVertexQuerier.SpotProductInfoStructOutput[]]>;

    setAddresses(
      clearinghouse: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  getAllBalances(
    subaccount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IVertexQuerier.AllBalanceInfoStructOutput>;

  getAllMarketInfo(
    overrides?: CallOverrides
  ): Promise<IVertexQuerier.MarketInfoStructOutput[]>;

  getAllProducts(
    overrides?: CallOverrides
  ): Promise<IVertexQuerier.AllProductInfoStructOutput>;

  getConfig(
    overrides?: CallOverrides
  ): Promise<IVertexQuerier.ConfigStructOutput>;

  getHealthInfo(
    subaccount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IVertexQuerier.HealthInfoStructOutput>;

  getMarketInfo(
    productIds: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<IVertexQuerier.MarketInfoStructOutput[]>;

  getPerpBalances(
    productIds: PromiseOrValue<BigNumberish>[],
    subaccount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IVertexQuerier.PerpBalanceInfoStructOutput[]>;

  getPerpProducts(
    productIds: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<IVertexQuerier.PerpProductInfoStructOutput[]>;

  getSettleAmountX18(
    subaccountId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getSpotBalances(
    productIds: PromiseOrValue<BigNumberish>[],
    subaccount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IVertexQuerier.SpotBalanceInfoStructOutput[]>;

  getSpotProducts(
    productIds: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<IVertexQuerier.SpotProductInfoStructOutput[]>;

  setAddresses(
    clearinghouse: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getAllBalances(
      subaccount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IVertexQuerier.AllBalanceInfoStructOutput>;

    getAllMarketInfo(
      overrides?: CallOverrides
    ): Promise<IVertexQuerier.MarketInfoStructOutput[]>;

    getAllProducts(
      overrides?: CallOverrides
    ): Promise<IVertexQuerier.AllProductInfoStructOutput>;

    getConfig(
      overrides?: CallOverrides
    ): Promise<IVertexQuerier.ConfigStructOutput>;

    getHealthInfo(
      subaccount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IVertexQuerier.HealthInfoStructOutput>;

    getMarketInfo(
      productIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<IVertexQuerier.MarketInfoStructOutput[]>;

    getPerpBalances(
      productIds: PromiseOrValue<BigNumberish>[],
      subaccount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IVertexQuerier.PerpBalanceInfoStructOutput[]>;

    getPerpProducts(
      productIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<IVertexQuerier.PerpProductInfoStructOutput[]>;

    getSettleAmountX18(
      subaccountId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSpotBalances(
      productIds: PromiseOrValue<BigNumberish>[],
      subaccount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IVertexQuerier.SpotBalanceInfoStructOutput[]>;

    getSpotProducts(
      productIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<IVertexQuerier.SpotProductInfoStructOutput[]>;

    setAddresses(
      clearinghouse: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getAllBalances(
      subaccount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAllMarketInfo(overrides?: CallOverrides): Promise<BigNumber>;

    getAllProducts(overrides?: CallOverrides): Promise<BigNumber>;

    getConfig(overrides?: CallOverrides): Promise<BigNumber>;

    getHealthInfo(
      subaccount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMarketInfo(
      productIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPerpBalances(
      productIds: PromiseOrValue<BigNumberish>[],
      subaccount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPerpProducts(
      productIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSettleAmountX18(
      subaccountId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSpotBalances(
      productIds: PromiseOrValue<BigNumberish>[],
      subaccount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSpotProducts(
      productIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setAddresses(
      clearinghouse: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getAllBalances(
      subaccount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAllMarketInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAllProducts(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getHealthInfo(
      subaccount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMarketInfo(
      productIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPerpBalances(
      productIds: PromiseOrValue<BigNumberish>[],
      subaccount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPerpProducts(
      productIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSettleAmountX18(
      subaccountId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSpotBalances(
      productIds: PromiseOrValue<BigNumberish>[],
      subaccount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSpotProducts(
      productIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setAddresses(
      clearinghouse: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
