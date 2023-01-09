/* eslint-disable max-len */
import { NavItemProps } from '../layouts/navigation';

export const menuItems: NavItemProps[] = [
  {
    id: 1,
    label: 'Swap',
    value: '/swap',
  },
  {
    id: 2,
    label: 'Staking',
    value: '/staking',
  },

  {
    id: 3,
    label: 'NFT',
    value: 'https://nft.payrue.com',
    target: '_blank',
  },
  {
    id: 4,
    label: 'Mobile App',
    value: 'https://wallet.payrue.com',
    target: '_blank',
  },
  {
    id: 5,
    label: 'DAO',
    value: 'https://payrue.org',
    target: '_blank',
  },
  {
    id: 6,
    label: 'More',
    children: [
      {
        id: 1,
        label: 'Propel',
        value: '/propel',
      },
      {
        id: 2,
        label: 'Governance',
        value: 'https://snapshot.org/#/payrue',
        target: '_blank',
      },
      {
        id: 3,
        label: 'Amplify Lending & Borrowing',
        value: 'https://ampt.finance/',
        target: '_blank',
      },
      {
        id: 4,
        label: 'Propel Bridge',
        value: 'https://app.multichain.org/#/router',
        target: '_blank',
      },
      {
        id: 5,
        label: 'Blog',
        value: 'https://payrue.medium.com',
        target: '_blank',
      },

      {
        id: 6,
        label: 'Discord',
        value: 'https://discord.com/invite/JDWCV5DgqS',
        target: '_blank',
      },

      {
        id: 7,
        label: 'About',
        value: '/about',
      },
    ],
  },
];
export const menuItemsMobile: NavItemProps[] = [
  {
    id: 1,
    label: 'Swap',
    children: [
      {
        id: 1,
        label: 'Staking',
        value: '/staking',
      },
      {
        id: 2,
        label: 'Delta.theta Trade Options',
        value: 'https://app.deltatheta.tech/',
        target: '_blank',
      },
      {
        id: 3,
        label: 'Amplify Lending & Borrowing',
        value: 'https://ampt.finance/',
        target: '_blank',
      },
      {
        id: 4,
        label: 'Propel Bridge',
        value: 'https://app.multichain.org/#/router',
        target: '_blank',
      },
    ],
  },

  {
    id: 2,
    label: 'NFT',
    value: 'https://nft.payrue.com',
    target: '_blank',
  },
  {
    id: 3,
    label: 'Mobile App',
    value: 'https://wallet.payrue.com',
    target: '_blank',
  },
  {
    id: 4,
    label: 'DAO',
    value: 'https://payrue.org',
    target: '_blank',
  },
  {
    id: 5,
    label: 'More',
    children: [
      {
        id: 1,
        label: 'Propel',
        value: '/propel',
      },
      {
        id: 2,
        label: 'About Us',
        value: 'https://payrue.com/about.html',
        target: '_blank',
      },
      {
        id: 3,
        label: 'Investor Page',
        value: 'https://docs.payrue.com/investor-page/',
        target: '_blank',
      },
      {
        id: 4,
        label: 'API',
        value:
          'https://documenter.getpostman.com/view/10441178/SzKSSKAh?version=latest#3589a9b2-1ef7-4239-a607-35f39a4c863a',
        target: '_blank',
      },
      {
        id: 5,
        label: 'DEX Exchange',
        value: 'https://exchange.payrue.com/trade/bnbs/',
        target: '_blank',
      },
      {
        id: 6,
        label: 'KYC',
        value:
          'https://payrue.com/docs/Know_Your_Customer_Declaration_Form.pdf',
        target: '_blank',
      },
      {
        id: 7,
        label: 'Privacy Policy',
        value: 'https://payrue.com/privacy.html',
        target: '_blank',
      },
      {
        id: 8,
        label: 'Cookies Policy',
        value: 'https://payrue.com/cookies.html',
        target: '_blank',
      },
      {
        id: 9,
        label: 'Terms & Conditions',
        value: 'https://payrue.com/terms.html',
        target: '_blank',
      },
      {
        id: 10,
        label: 'About',
        value: '/about',
      },
    ],
  },
  {
    id: 6,
    label: 'Follow Us',
    children: [
      {
        id: 1,
        label: 'Twitter',
        value: 'https://twitter.com/pay_rue',
        target: '_blank',
      },
      {
        id: 2,
        label: 'Discord',
        value: 'https://discord.gg/6XR9v7Wydw',
        target: '_blank',
      },
      {
        id: 3,
        label: 'GitHub',
        value: 'https://github.com/payrue',
        target: '_blank',
      },
      {
        id: 4,
        label: 'Instagram',
        value: 'https://www.instagram.com/payrueofficial/',
        target: '_blank',
      },
      {
        id: 5,
        label: 'Facebook',
        value: 'https://www.facebook.com/payrue',
        target: '_blank',
      },
    ],
  },
];
