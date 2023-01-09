/* eslint-disable max-len */

import bnbScan from '../../assets/images/bnb-scan.png';
import maticScan from '../../assets/images/matic-scan.png';
import fantomScan from '../../assets/images/fantom.png';
import avalancheScan from '../../assets/images/avalanche.png';
import { NetworkCardProps } from './components/network-card';
import { FeatureCardProps } from './components/feature-card';

export const propelNetworks: NetworkCardProps[] = [
  {
    title: 'Propel Binance Smart Chain',
    img: bnbScan,
    link: 'CoinMarketCap',
    url: `${process.env.REACT_APP_BSC_URL}/token/${process.env.REACT_APP_BSC_PROPEL_TOKEN_ADDRESS}`,
  },
  {
    title: 'Propel Polygon Matic',
    img: maticScan,
    link: 'CoinMarketCap',
    url: `${process.env.REACT_APP_POLYGON_URL}/token/${process.env.REACT_APP_OLD_PROPEL_TOKEN_ADDRESS}`,
  },
  {
    title: 'Propel Fantom Blockchain',
    img: fantomScan,
    link: 'CoinMarketCap',
    url: 'https://fantomscan.com/token/0x0d8775f648430679a709e98d2b0cb6250d2887ef',
  },
  {
    title: 'Propel on Avalanche',
    img: avalancheScan,
    link: 'CoinMarketCap',
    url: 'https://avascan.info/blockchain/c/address/0x65c9d9d080714cDa7b5d58989Dc27f897F165179/token',
  },
];

export const features: FeatureCardProps[] = [
  {
    title: 'Propel Staking 100% APY',
    description: [`Claim Rewards every\nhour, day or month`],
    linkTitle: 'Stake',
    link: '/staking',
  },
  {
    title: 'PayRue DAO',
    description: [`Create Proposal and\nVote on\nPayRue Business`],
    linkTitle: 'Visit PayRue DAO',
    target: '_blank',
    link: 'https://payrue.org/',
  },
  {
    title: 'PayRue NFT',
    description: [
      'Use Propel to Buy and Sell NFT',
      'Get Discount using Propel on Commission',
    ],
    linkTitle: 'Visit PayRue NFT',
    target: '_blank',
    link: 'https://nft.payrue.com',
  },
  {
    title: 'LP Tokens',
    description: [
      `Add Liquidity earn LP\nTokens & Stake to\nEarn Propel each month`,
    ],
  },
];
