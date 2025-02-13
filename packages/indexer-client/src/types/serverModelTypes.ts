import {
  EngineServerPerpBalance,
  EngineServerPerpProduct,
  EngineServerSpotBalance,
  EngineServerSpotProduct,
} from '@vertex-protocol/engine-client';
import { IndexerEventType } from './IndexerEventType';
import { VertexTx } from './VertexTx';
import { EIP712OrderValues } from '@vertex-protocol/contracts';

export type IndexerServerProduct =
  | {
      spot: EngineServerSpotProduct;
    }
  | {
      perp: EngineServerPerpProduct;
    };

export type IndexerServerBalance =
  | {
      spot: EngineServerSpotBalance;
    }
  | {
      perp: EngineServerPerpBalance;
    };

export interface IndexerServerCandlestick {
  product_id: number;
  granularity: string;
  submission_idx: string;
  timestamp: string;
  open_x18: string;
  high_x18: string;
  low_x18: string;
  close_x18: string;
  volume: string;
}

export interface IndexerServerProductSnapshot {
  product_id: number;
  submission_idx: string;
  product: IndexerServerProduct;
}

export interface IndexerServerEvent {
  subaccount: string;
  product_id: number;
  submission_idx: string;
  event_type: IndexerEventType;
  pre_balance: IndexerServerBalance;
  post_balance: IndexerServerBalance;
  product: IndexerServerProduct;
  net_interest_unrealized: string;
  net_interest_cumulative: string;
  net_funding_unrealized: string;
  net_funding_cumulative: string;
  net_entry_unrealized: string;
  net_entry_cumulative: string;
  net_entry_lp_unrealized: string;
  net_entry_lp_cumulative: string;
}

export interface IndexerServerTx {
  submission_idx: string;
  timestamp: string;
  tx: VertexTx;
}

export interface IndexerServerOrder {
  digest: string;
  subaccount: string;
  product_id: number;
  submission_idx: string;
  amount: string;
  price_x18: string;
  expiration: string;
  nonce: string;
  base_filled: string;
  // Includes fee
  quote_filled: string;
  // Includes sequencer fee
  fee: string;
}

export interface IndexerServerMatchEvent {
  digest: string;
  order: EIP712OrderValues;
  base_filled: string;
  // Includes fee
  quote_filled: string;
  // Includes sequencer fee
  fee: string;
  sequencer_fee: string;
  cumulative_fee: string;
  cumulative_base_filled: string;
  cumulative_quote_filled: string;
  submission_idx: string;
  net_entry_unrealized: string;
  net_entry_cumulative: string;
  pre_balance: IndexerServerMatchEventBalances;
  post_balance: IndexerServerMatchEventBalances;
}

export interface IndexerServerMatchEventBalances {
  base: IndexerServerBalance;
  // Quote is defined if 0 is included in `product_ids` and the match event is a spot event
  quote?: IndexerServerBalance;
}

export interface IndexerServerOraclePrice {
  product_id: number;
  oracle_price_x18: string;
  update_time: number;
}

export interface IndexerServerMarketSnapshotInterval {
  count: number;
  // Currently accepts any granularity, time distance (in seconds) between data points
  granularity: number;
  max_time?: string;
}

export interface IndexerServerMarketSnapshot {
  timestamp: string;
  cumulative_users: string;
  daily_active_users: string;
  // Keyed by product ID -> decimal value in string (i.e. no decimal adjustment) necessary
  // Backend serializes hashmaps with string keys
  cumulative_volumes: Record<string, string>;
  cumulative_taker_fees: Record<string, string>;
  cumulative_sequencer_fees: Record<string, string>;
  cumulative_maker_fees: Record<string, string>;
  cumulative_trades: Record<string, string>;
  cumulative_liquidation_amounts: Record<string, string>;
  open_interests: Record<string, string>;
  total_deposits: Record<string, string>;
  total_borrows: Record<string, string>;
  funding_rates: Record<string, string>;
  deposit_rates: Record<string, string>;
  borrow_rates: Record<string, string>;
}

export interface IndexerServerProductPayment {
  product_id: number;
  idx: string;
  timestamp: string;
  amount: string;
  balance_amount: string;
  rate_x18: string;
  oracle_price_x18: string;
}

export interface IndexerServerSubaccountRewardsForProduct {
  product_id: number;
  q_score: string;
  sum_q_min: string;
  uptime: number;
  maker_volume: string;
  taker_volume: string;
  maker_fee: string;
  taker_fee: string;
  // Already include adjustment for decimals
  maker_tokens: string;
  taker_tokens: string;
  taker_referral_tokens: string;
  rebates: string;
}

export interface IndexerServerGlobalRewardsForProduct {
  product_id: number;
  reward_coefficient: string;
  q_scores: string;
  maker_volumes: string;
  taker_volumes: string;
  maker_fees: string;
  taker_fees: string;
  maker_tokens: string;
  taker_tokens: string;
}

export interface IndexerServerRewardsEpoch {
  epoch: number;
  start_time: string;
  period: string;
  num_eligible_addresses: number;
  // Per product ID
  address_rewards: IndexerServerSubaccountRewardsForProduct[];
  global_rewards: IndexerServerGlobalRewardsForProduct[];
}

export interface IndexerServerSubaccountArbRewardsForProduct {
  product_id: number;
  taker_volume: string;
  taker_fee: string;
  taker_tokens: string;
}

export interface IndexerServerGlobalArbRewardsForProduct {
  product_id: number;
  taker_volumes: string;
  taker_fees: string;
  taker_tokens: string;
}

export interface IndexerServerArbRewardsWeek {
  week: number;
  start_time: string;
  period: string;
  // Per product ID
  address_rewards: IndexerServerSubaccountArbRewardsForProduct[];
  global_rewards: IndexerServerGlobalArbRewardsForProduct[];
}

export interface IndexerServerMerkleProof {
  total_amount: string;
  proof: string[];
}
