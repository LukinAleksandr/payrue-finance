import { PolygonIcon, BnbIcon, EthereumIcon } from '../../../app/icons';

export interface Network {
  title: string;
  value: number;
  background: string;
  // eslint-disable-next-line
  icon: any;
  baseUrl: string;
  feeRecipient: string;
  chainId: string;
  chainName: string;
  nativeCurrency: { name: string; symbol: string; decimals: number };
  rpcUrls: string[];
  blockExplorerUrls: string[];
}

export const networks: Network[] = [
  {
    title: 'Ethereum network',
    value: 1,
    background:
      'https://bytetree.com/assets/uploads/2021-02-03-ethereum-primer-ii-banner.jpg',
    icon: EthereumIcon,
    baseUrl: 'https://api.0x.org',
    feeRecipient: '0x72F279333f2294c086312254905b08823918D26c',
    chainId: '0x1',
    chainName: 'ETH',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    blockExplorerUrls: ['https://etherscan.io'],
    rpcUrls: ['https://api.mycryptoapi.com/eth', 'https://cloudflare-eth.com'],
  },
  {
    title: 'Polygon network',
    value: 137,
    background:
      'https://niftykit.com/wp-content/uploads/2021/05/polygon-matic-nfts-on-niftykit-1024x533.png',
    icon: PolygonIcon,
    baseUrl: 'https://polygon.api.0x.org',
    feeRecipient: '0x65cdb7ef86BF155fD0daf2c06940cf84029C5678',
    chainId: '0x89',
    chainName: 'Matic Mainnet',
    nativeCurrency: { name: 'Polygon', symbol: 'MATIC', decimals: 18 },
    rpcUrls: ['https://rpc-mainnet.maticvigil.com/'],
    blockExplorerUrls: ['https://explorer.matic.network/'],
  },
  {
    title: 'BSC network',
    value: 56,
    background: 'https://miro.medium.com/max/3200/0*0a2264Va2EvgZlo4',
    icon: BnbIcon,
    baseUrl: 'https://bsc.api.0x.org',
    feeRecipient: '0x08EdDDF5307Fb2C6557DcB6e92FDbEb97762C4dD',
    chainId: '0x38',
    chainName: 'Binance Smart Chain',
    nativeCurrency: { name: 'BNB', symbol: 'BNB', decimals: 18 },
    rpcUrls: ['https://bsc-dataseed.binance.org/'],
    blockExplorerUrls: ['https://bscscan.com/'],
  },
];

export const ERC20BridgeSource = {
  all: {
    Native: 'Native',
    Uniswap: 'Uniswap',
    UniswapV2: 'Uniswap_V2',
    Eth2Dai: 'Eth2Dai',
    Kyber: 'Kyber',
    Curve: 'Curve',
    LiquidityProvider: 'LiquidityProvider',
    MultiBridge: 'MultiBridge',
    Balancer: 'Balancer',
    BalancerV2: 'Balancer_V2',
    Cream: 'CREAM',
    Bancor: 'Bancor',
    MakerPsm: 'MakerPsm',
    MStable: 'mStable',
    Mooniswap: 'Mooniswap',
    MultiHop: 'MultiHop',
    Shell: 'Shell',
    Swerve: 'Swerve',
    SnowSwap: 'SnowSwap',
    SushiSwap: 'SushiSwap',
    Dodo: 'DODO',
    DodoV2: 'DODO_V2',
    CryptoCom: 'CryptoCom',
    Linkswap: 'Linkswap',
    KyberDmm: 'KyberDMM',
    Smoothy: 'Smoothy',
    Component: 'Component',
    Saddle: 'Saddle',
    XSigma: 'xSigma',
    UniswapV3: 'Uniswap_V3',
    CurveV2: 'Curve_V2',
    Lido: 'Lido',
    ShibaSwap: 'ShibaSwap',
    Clipper: 'Clipper',
  },
  // BSC only
  bsc: {
    PancakeSwap: 'PancakeSwap',
    PancakeSwapV2: 'PancakeSwap_V2',
    BakerySwap: 'BakerySwap',
    Nerve: 'Nerve',
    Belt: 'Belt',
    Ellipsis: 'Ellipsis',
    ApeSwap: 'ApeSwap',
    CafeSwap: 'CafeSwap',
    CheeseSwap: 'CheeseSwap',
    JulSwap: 'JulSwap',
    ACryptos: 'ACryptoS',
  },
  // Polygon only
  polygon: {
    QuickSwap: 'QuickSwap',
    ComethSwap: 'ComethSwap',
    Dfyn: 'Dfyn',
    WaultSwap: 'WaultSwap',
    Polydex: 'Polydex',
    FirebirdOneSwap: 'FirebirdOneSwap',
    JetSwap: 'JetSwap',
    IronSwap: 'IronSwap',
  },
};

export const getNetworkById = (networkId: number) =>
  networks.find((c) => c.value === networkId);
