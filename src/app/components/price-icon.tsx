import { PriceIconStyles } from './price-icon.styled';

import {
  BnbIcon,
  BnbPropelIcon,
  EthereumIcon,
  MaticIcon,
  PropelIcon,
  BUSDIcon,
  OKCIcon,
  OKTIcon,
  USDCIcon,
} from '../icons';

export interface PriceIconProps {
  chainId: string;
  currencyAddress: string;
  priceInPropel: boolean;
}

function PriceIcon({
  chainId,
  currencyAddress,
  priceInPropel,
}: PriceIconProps) {
  const busd = process.env.REACT_APP_BUSD_TOKEN_ADDRESS || '';
  const bnbpropel = process.env.REACT_APP_BSC_PROPEL_TOKEN_ADDRESS || '';
  const usdc = process.env.REACT_APP_USDC_TOKEN_ADDRESS || '';
  const okt_usdc = process.env.REACT_APP_OKT_USDC_TOKEN_ADDRESS || '';
  const propel = process.env.REACT_APP_PROPEL_TOKEN_ADDRESS || '';
  const oldPropel = process.env.REACT_APP_OLD_PROPEL_TOKEN_ADDRESS || '';

  const renderIcon = () => {
    if (!chainId) {
      return <PropelIcon />;
    }
    if (priceInPropel) {
      return <PropelIcon />;
    }

    switch (chainId) {
      case process.env.REACT_APP_BSC_CHAIN_ID: {
        switch (String(currencyAddress).toLowerCase()) {
          case busd.toLowerCase(): {
            return <BUSDIcon />;
          }
          case bnbpropel.toLowerCase(): {
            return <BnbPropelIcon />;
          }
          default: {
            return <BnbIcon />;
          }
        }
      }

      case process.env.REACT_APP_ETH_CHAIN_ID: {
        switch (String(currencyAddress).toLowerCase()) {
          case usdc.toLowerCase(): {
            return <USDCIcon />;
          }
          default: {
            return <EthereumIcon />;
          }
        }
      }

      case process.env.REACT_APP_OKT_CHAIN_ID: {
        switch (String(currencyAddress).toLowerCase()) {
          case okt_usdc.toLowerCase(): {
            return <OKCIcon />;
          }
          default: {
            return <OKTIcon />;
          }
        }
      }

      case process.env.REACT_APP_POLYGON_CHAIN_ID: {
        switch (String(currencyAddress).toLowerCase()) {
          case propel.toLowerCase(): {
            return <PropelIcon />;
          }
          default: {
            return <MaticIcon />;
          }
        }
      }

      case process.env.REACT_APP_OLD_PROPEL_CHAIN_ID: {
        switch (String(currencyAddress).toLowerCase()) {
          case oldPropel.toLowerCase(): {
            return <PropelIcon />;
          }
          default: {
            return <MaticIcon />;
          }
        }
      }

      default: {
        return null;
      }
    }
  };

  return <PriceIconStyles>{renderIcon()}</PriceIconStyles>;
}

export default PriceIcon;
