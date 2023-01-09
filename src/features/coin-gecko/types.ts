export interface CoinGeckoBySymbolResponse {
  id: string;
  symbol: string;
  name: string;
  asset_platform_id: string;
  platforms: Platforms;
  detail_platforms: DetailPlatforms;
  block_time_in_minutes: number;
  hashing_algorithm: any;
  categories: any[];
  public_notice: any;
  additional_notices: any[];
  localization: Record<string, string>;
  description: Record<string, string>;
  links: Links;
  image: Image;
  country_origin: string;
  genesis_date: any;
  contract_address: string;
  sentiment_votes_up_percentage: any;
  sentiment_votes_down_percentage: any;
  market_cap_rank: number;
  coingecko_rank: number;
  coingecko_score: number;
  developer_score: number;
  community_score: number;
  liquidity_score: number;
  public_interest_score: number;
  market_data: MarketData;
  public_interest_stats: PublicInterestStats;
  status_updates: any[];
  last_updated: string;
}

export interface Platforms {
  'binance-smart-chain': string;
  'polygon-pos': string;
}

export interface DetailPlatforms {
  'binance-smart-chain': BinanceSmartChain;
  'polygon-pos': PolygonPos;
}

export interface BinanceSmartChain {
  decimal_place: number;
  contract_address: string;
}

export interface PolygonPos {
  decimal_place: number;
  contract_address: string;
}

export interface Links {
  homepage: string[];
  blockchain_site: string[];
  official_forum_url: string[];
  chat_url: string[];
  announcement_url: string[];
  twitter_screen_name: string;
  facebook_username: string;
  bitcointalk_thread_identifier: any;
  telegram_channel_identifier: string;
  subreddit_url: any;
  repos_url: ReposUrl;
}

export interface ReposUrl {
  github: string[];
  bitbucket: any[];
}

export interface Image {
  thumb: string;
  small: string;
  large: string;
}

export interface MarketData {
  current_price: Record<string, number>;
  total_value_locked: any;
  mcap_to_tvl_ratio: any;
  fdv_to_tvl_ratio: any;
  roi: any;
  ath: Record<string, number>;
  ath_change_percentage: Record<string, number>;
  ath_date: Record<string, string>;
  atl: Record<string, number>;
  atl_change_percentage: Record<string, number>;
  atl_date: Record<string, string>;
  market_cap: Record<string, number>;
  market_cap_rank: number;
  fully_diluted_valuation: FullyDilutedValuation;
  total_volume: Record<string, number>;
  high_24h: Record<string, number>;
  low_24h: Record<string, number>;
  price_change_24h: number;
  price_change_percentage_24h: number;
  price_change_percentage_7d: number;
  price_change_percentage_14d: number;
  price_change_percentage_30d: number;
  price_change_percentage_60d: number;
  price_change_percentage_200d: number;
  price_change_percentage_1y: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  price_change_24h_in_currency: Record<string, number>;
  price_change_percentage_1h_in_currency: Record<string, number>;
  price_change_percentage_24h_in_currency: Record<string, number>;
  price_change_percentage_7d_in_currency: Record<string, number>;
  price_change_percentage_14d_in_currency: Record<string, number>;
  price_change_percentage_30d_in_currency: Record<string, number>;
  price_change_percentage_60d_in_currency: Record<string, number>;
  price_change_percentage_200d_in_currency: Record<string, number>;
  price_change_percentage_1y_in_currency: Record<string, number>;
  market_cap_change_24h_in_currency: Record<string, number>;
  market_cap_change_percentage_24h_in_currency: Record<string, number>;
  total_supply: number;
  max_supply: any;
  circulating_supply: number;
  last_updated: string;
}

export interface FullyDilutedValuation {}

export interface PublicInterestStats {
  alexa_rank: number;
  bing_matches: any;
}
