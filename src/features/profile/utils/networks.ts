import { Networks } from '../types';
import {
  BscBalanceIcon,
  AvalancheBalanceIcon,
  PolygonBalanceIcon,
  FantomBalanceIcon,
  EthereumBalanceIcon,
} from '../../../app/icons';

export const getBalanceIcon = (name: Networks) => {
  switch (name) {
    case Networks.polygon: {
      return PolygonBalanceIcon;
    }
    case Networks.bsc: {
      return BscBalanceIcon;
    }
    case Networks.fantom: {
      return FantomBalanceIcon;
    }
    case Networks.avalanche: {
      return AvalancheBalanceIcon;
    }
    case Networks.ethereum: {
      return EthereumBalanceIcon;
    }
    default: {
      return PolygonBalanceIcon;
    }
  }
};
