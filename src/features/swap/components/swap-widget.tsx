import { Theme, useMediaQuery } from '@mui/material';
import { useModal } from 'mui-modal-provider';
import { DropdownMenu } from '../../../app/components';
import { ButtonVariant } from '../../../app/components/button';
import { useConnect } from '../../../app/hooks/use-connect';
import { useAppSelector } from '../../../app/store';
import { BalanceTo } from '../../coin-gecko';
import { Token } from '../../network/slice';
import SwapChartModal from './swap-chart-modal';
import SwapField from './swap-field';
import SwapGasFee from './swap-gas-fee';
import SwapLiquidity from './swap-liquidity';
import SwapSlippage from './swap-slippage';
import {
  SwapWidgetStyled,
  SwapWidgetHeader,
  SwapWidgetLabel,
  SwapWidgetControls,
  SwapWidgetRefresh,
  SwapWidgetSettings,
  SwapWidgetBody,
  SwapIconStyled,
  SwapWidgetButton,
  SwapDetailWrapper,
  SwapDetailBox,
  SwapDetailFreeLabel,
  SwapDetailFreeValue,
  SwapDetailLabel,
  SwapDetailTitle,
  SwapDetailValue,
  DisconnectButton,
  ChartIconStyled,
} from './swap-widget.styled';

export interface SwapWidgetProps {
  networkFee: number;
  pay: Token | null;
  setPay: (pay: Token) => void;
  payBalance: string;
  receive: Token | null;
  setReceive: (receive: Token) => void;
  receiveBalance: string;
  payAmount: string;
  setPayAmount: (amount: string) => void;
  payBalanceTo: BalanceTo;
  receiveBalanceTo: BalanceTo;
  handleChange: () => void;
  handleSwap: () => void;
  loading: boolean;
  handleRefresh: () => void;
}

function SwapWidget({
  networkFee,
  pay,
  setPay,
  payBalance,
  receive,
  setReceive,
  receiveBalance,
  payAmount = '0',
  setPayAmount,
  payBalanceTo,
  receiveBalanceTo,
  handleChange,
  handleSwap,
  loading,
  handleRefresh,
}: SwapWidgetProps) {
  const { showModal } = useModal();
  const isDownLg = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down('lg'),
  );
  const address = useAppSelector((state) => state.networks.address);
  const { connect, disconnect } = useConnect();
  const formatBalance = (balance: string) =>
    Math.round(parseFloat(balance || '0') * 100000) / 100000;

  const amount =
    Math.round(payBalanceTo.usd * parseFloat(payAmount) * 100000) / 100000 || 0;

  const receiveAmount =
    Math.round(
      ((receiveBalanceTo.usd * parseFloat(payAmount) * payBalanceTo.usd) /
        receiveBalanceTo.usd) *
        100000,
    ) / 100000 || 0;

  const receiveValue =
    String(
      Math.round(
        ((parseFloat(payAmount) * payBalanceTo.usd) / receiveBalanceTo.usd) *
          100000,
      ) / 100000,
    ) || '0';

  const onePayPrice =
    Math.round((payBalanceTo.usd / receiveBalanceTo.usd) * 100000000) /
    100000000;
  const oneReceivePrice = pay
    ? Math.round((receiveBalanceTo.usd / payBalanceTo.usd) * 100000000) /
      100000000
    : 0;

  return (
    <SwapWidgetStyled>
      <SwapWidgetHeader>
        <SwapWidgetLabel>PayRue Swap</SwapWidgetLabel>
        <SwapWidgetControls>
          <SwapWidgetRefresh onClick={handleRefresh} />
          {isDownLg && pay && (
            <ChartIconStyled
              onClick={() =>
                showModal(SwapChartModal, {
                  pay,
                })
              }
            />
          )}
          {address && (
            <DropdownMenu icon={<SwapWidgetSettings />}>
              <SwapGasFee />
              <SwapSlippage />
              <SwapLiquidity />
              <DisconnectButton
                onClick={disconnect}
                variant={ButtonVariant.danger}
              >
                Disconnect
              </DisconnectButton>
            </DropdownMenu>
          )}
        </SwapWidgetControls>
      </SwapWidgetHeader>
      <SwapWidgetBody>
        <SwapField
          amount={amount}
          balance={formatBalance(payBalance)}
          label="You Pay"
          onChange={(event) => setPayAmount(event.target.value)}
          onChangeToken={(token) => setPay(token)}
          token={pay || undefined}
          value={payAmount}
        />
        <SwapIconStyled onClick={handleChange} />
        <SwapField
          amount={receiveAmount}
          balance={formatBalance(receiveBalance)}
          label="You receive"
          onChangeToken={(token) => setReceive(token)}
          readonly
          token={receive || undefined}
          value={receiveValue}
        />
        <SwapWidgetButton
          disabled={loading}
          onClick={address ? handleSwap : connect}
        >
          {address ? 'Swap' : 'Connect to Wallet'}
        </SwapWidgetButton>
      </SwapWidgetBody>
      {pay && receive && payAmount && receiveBalanceTo && address && (
        <SwapDetailWrapper>
          <SwapDetailTitle>Order Details</SwapDetailTitle>
          <SwapDetailBox>
            <SwapDetailLabel>Rate</SwapDetailLabel>
            <SwapDetailValue>
              1 {pay?.value} = {onePayPrice} {receive?.value}
            </SwapDetailValue>
            <SwapDetailValue>
              1 {receive?.value} = {oneReceivePrice} {pay?.value}
            </SwapDetailValue>
            <SwapDetailLabel>USD Price</SwapDetailLabel>
            <SwapDetailValue>
              1 {pay?.value} = ${Math.round(payBalanceTo.usd * 100000) / 100000}
            </SwapDetailValue>
            <SwapDetailValue>
              1 {receive?.value} = ${receiveBalanceTo.usd}
            </SwapDetailValue>
          </SwapDetailBox>
          <SwapDetailFreeLabel>Estimated Fee</SwapDetailFreeLabel>
          <SwapDetailFreeValue>
            ≈ ${Math.round(networkFee * 100) / 100}
          </SwapDetailFreeValue>
        </SwapDetailWrapper>
      )}
    </SwapWidgetStyled>
  );
}

export default SwapWidget;
