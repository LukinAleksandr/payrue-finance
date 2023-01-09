import { useMediaQuery, Theme } from '@mui/material';
import { NetworkSelect } from '../../../app/components';
import { SwapBanner, SwapChart, SwapWidget } from '../components';
import { useSwap } from '../hooks';
import {
  Root,
  SwapSubtitle,
  SwapWrapper,
  SwapCell,
  SwapLabel,
  SwapNetworkSelect,
  SwapRight,
} from './swap-screen.styled';

export default function SwapScreen(): JSX.Element {
  const isUpLg = useMediaQuery<Theme>((theme) => theme.breakpoints.up('lg'));

  const {
    networkFee,
    pay,
    setPay,
    payBalance,
    payBalanceTo,
    receive,
    refetch,
    setReceive,
    receiveBalance,
    receiveBalanceTo,
    payAmount,
    setPayAmount,
    handleChange,
    handleSwap,
    loading,
  } = useSwap();

  return (
    <Root>
      <SwapSubtitle variant="h3">Swap with PayRue</SwapSubtitle>
      <SwapWrapper>
        <SwapCell>
          <SwapNetworkSelect>
            <SwapLabel>Select Network</SwapLabel>
            <NetworkSelect />
          </SwapNetworkSelect>
          <SwapWidget
            handleChange={handleChange}
            handleRefresh={refetch}
            handleSwap={handleSwap}
            loading={loading}
            networkFee={networkFee}
            pay={pay}
            payAmount={payAmount}
            payBalance={String(payBalance)}
            payBalanceTo={payBalanceTo}
            receive={receive}
            receiveBalance={String(receiveBalance)}
            receiveBalanceTo={receiveBalanceTo}
            setPay={(value) => setPay(value)}
            setPayAmount={(value) => setPayAmount(value)}
            setReceive={(value) => setReceive(value)}
          />
        </SwapCell>
        <SwapRight>
          <SwapBanner />
          {isUpLg && pay && <SwapChart pay={pay} />}
        </SwapRight>
      </SwapWrapper>
    </Root>
  );
}
