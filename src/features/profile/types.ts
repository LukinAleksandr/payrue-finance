export enum Networks {
  all = 'all',
  avalanche = 'avalanche',
  ethereum = 'ethereum',
  polygon = 'polygon',
  fantom = 'fantom',
  bsc = 'bsc',
}

export enum ProfileAsyncActions {
  GET_PROFILE_DATA = 'getProfileData',
}

export enum FormatNetworks {
  avalanche = 'avalanche-2',
  ethereum = 'ethereum',
  polygon = 'matic-network',
  fantom = 'fantom',
  bsc = 'binancecoin',
}

export type PricesData = Record<
  FormatNetworks,
  {
    usd: number;
  }
>;

export type ProfileChartData = (string | number)[];

export enum TabsValues {
  balance = 'Balance',
  nft = 'NFT',
  staking = 'Staking',
  history = 'History',
}

export interface TokenBalancesData {
  id: number;
  walletId: number;
  tokenAddress: string;
  chainId: string;
  balance: string;
  usdBalance: string;
  name: string;
  symbol: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type TokenBalances = Record<Networks, TokenBalancesData[]>;

export interface NativeBalance {
  id: 10;
  walletId: 39;
  tokenAddress: string;
  chainId: string;
  balance: string | null;
  usdBalance: string | null;
  name: string;
  usdPrice: string | null;
  symbol: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export type Balances = Record<Networks, NativeBalance>;

export interface ProfileData {
  id: number;
  aboutMe: string;
  instagram: string;
  twitter: string;
  isAdmin: boolean;
  avatar: string;
  cover: string;
  website: string;
  displayName: string;
  facebook: string;
  firstName: string;
  lastName: string;
  verified: boolean;
  tokenBalances: TokenBalances;
  balances: Balances;
  nfts: NFTs;
  staking: Staking;
}

export type Staking = Record<Networks, StakingData>;
export type NFTs = Record<Networks, NFTsData>;

export interface StakingData {
  totalLockedReward: string;
  availableToStakeOrReward: string;
  staked: string;
  rewardClaimable: string;
  chainId: string;
  address: string;
}

export interface NFTsData {
  total: number;
  page: number;
  page_size: number;
  cursor?: string;
  result: NFTData[];
  status: string;
}

export interface NFTData {
  token_address: string;
  token_id: string;
  owner_of: string;
  block_number: string;
  block_number_minted: string;
  token_hash: string;
  amount: string;
  contract_type: string;
  name: string;
  symbol: string;
  token_uri: string;
  metadata: string;
  last_token_uri_sync?: Date;
  last_metadata_sync?: Date;
  minter_address: string;
}

export type HistoryData = Record<Networks, TransactionData[]>;

export interface TransactionTokenData {
  id: number;
  symbol: string;
  address: string;
  decimals: number;
  img: string;
  network: number;
  usdPrice: string;
}

export interface TransactionData {
  transaction_hash: string;
  address: string;
  block_timestamp: Date;
  block_number: string;
  block_hash: string;
  from_address: string;
  to_address: string;
  log_index: number;
  value: string;
  token: TransactionTokenData;
}
