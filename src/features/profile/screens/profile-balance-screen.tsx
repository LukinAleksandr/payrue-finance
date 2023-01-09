import { InputBase, Theme, useMediaQuery } from '@mui/material';
import { useForm, useWatch } from 'react-hook-form';
import { PaperHeader, PaperStyled } from '../../../app/components/paper.styled';
import { ProfileBalanceTable } from '../components';
import { Networks, TokenBalancesData, Balances } from '../types';
import { getBalanceIcon } from '../utils/networks';
import {
  ProfileBalanceScreenRoot,
  ProfileBalanceTitle,
  ProfileBalanceList,
  ProfileBalanceItem,
  ProfileBalanceInput,
  ProfileBalanceLabel,
  ProfileBalanceValue,
  ProfileBalanceNetworkSkeleton,
  ProfileBalanceMobileRoot,
  ProfileBalanceMobileHeader,
  ProfileBalanceMobileTitle,
  ProfileBalanceMobileSelect,
} from './profile-balance-screen.styled';

export interface ProfileBalancesScreen {
  balances: (Networks | number)[][];
  total: number;
  tokens?: Record<Networks, TokenBalancesData[]>;
  nativeBalances?: Balances;
  loading: boolean;
}

export enum BalancesFormField {
  network = 'network',
}

export interface BalancesForm {
  [BalancesFormField.network]: Networks;
}

function ProfileBalanceScreen({
  balances,
  total = 0,
  tokens,
  nativeBalances,
  loading,
}: ProfileBalancesScreen) {
  const isUpMd = useMediaQuery<Theme>((theme) => theme.breakpoints.up('md'));
  const { register, control } = useForm<BalancesForm>({
    defaultValues: {
      [BalancesFormField.network]: Networks.polygon,
    },
  });

  const selectedNetwork = useWatch({
    name: 'network',
    control,
  }) as Networks;

  const tokenList = tokens?.[selectedNetwork];

  if (isUpMd) {
    return (
      <ProfileBalanceScreenRoot>
        <PaperStyled sx={{ maxWidth: '514px' }}>
          <PaperHeader>
            <ProfileBalanceTitle variant="h5">
              My Total Crypto Balance
            </ProfileBalanceTitle>
            <ProfileBalanceTitle variant="h5">
              {total.toFixed(2)} USD
            </ProfileBalanceTitle>
          </PaperHeader>
          <ProfileBalanceList>
            {loading ? (
              <>
                <ProfileBalanceNetworkSkeleton variant="rectangular" />
                <ProfileBalanceNetworkSkeleton variant="rectangular" />
                <ProfileBalanceNetworkSkeleton variant="rectangular" />
                <ProfileBalanceNetworkSkeleton variant="rectangular" />
                <ProfileBalanceNetworkSkeleton variant="rectangular" />
              </>
            ) : (
              balances.map(([key, value]) => {
                const network = key as Networks;
                const Icon = getBalanceIcon(network);
                return (
                  <ProfileBalanceItem key={network}>
                    <ProfileBalanceInput
                      {...register('network')}
                      id={network}
                      type="radio"
                      value={network}
                    />
                    <ProfileBalanceLabel htmlFor={network}>
                      <Icon />
                      {network === Networks.bsc
                        ? network.toUpperCase()
                        : network[0].toUpperCase() + network.slice(1)}
                      <ProfileBalanceValue>{value} USD</ProfileBalanceValue>
                    </ProfileBalanceLabel>
                  </ProfileBalanceItem>
                );
              })
            )}
          </ProfileBalanceList>
        </PaperStyled>
        <ProfileBalanceTable
          loading={loading}
          nativeBalances={nativeBalances}
          selectedNetwork={selectedNetwork}
          tokenList={tokenList}
        />
      </ProfileBalanceScreenRoot>
    );
  }

  return (
    <ProfileBalanceMobileRoot>
      <ProfileBalanceMobileHeader>
        <ProfileBalanceMobileTitle>
          Balance: {total.toFixed(2)} USD
        </ProfileBalanceMobileTitle>
        <ProfileBalanceMobileSelect
          input={<InputBase />}
          {...register('network')}
          value={selectedNetwork}
        >
          <option value="all">All</option>
          {balances.map((data) => {
            const network = data[0] as Networks;

            return (
              <option key={data[0]} value={network}>
                {network === Networks.bsc
                  ? network.toUpperCase()
                  : network[0].toUpperCase() + network.slice(1)}
              </option>
            );
          })}
        </ProfileBalanceMobileSelect>
      </ProfileBalanceMobileHeader>
      {selectedNetwork === Networks.all ? (
        <ProfileBalanceList>
          {loading ? (
            <>
              <ProfileBalanceNetworkSkeleton variant="rectangular" />
              <ProfileBalanceNetworkSkeleton variant="rectangular" />
              <ProfileBalanceNetworkSkeleton variant="rectangular" />
              <ProfileBalanceNetworkSkeleton variant="rectangular" />
              <ProfileBalanceNetworkSkeleton variant="rectangular" />
            </>
          ) : (
            balances.map(([key, value]) => {
              const network = key as Networks;
              const Icon = getBalanceIcon(network);
              return (
                <ProfileBalanceItem key={network}>
                  <ProfileBalanceInput
                    {...register('network')}
                    id={network}
                    type="radio"
                    value={network}
                  />
                  <ProfileBalanceLabel htmlFor={network}>
                    <Icon style={{ width: 40, height: 40 }} />
                    {network === Networks.bsc
                      ? network.toUpperCase()
                      : network[0].toUpperCase() + network.slice(1)}
                    <ProfileBalanceValue>{value} USD</ProfileBalanceValue>
                  </ProfileBalanceLabel>
                </ProfileBalanceItem>
              );
            })
          )}
        </ProfileBalanceList>
      ) : (
        <ProfileBalanceTable
          loading={loading}
          nativeBalances={nativeBalances}
          selectedNetwork={selectedNetwork}
          tokenList={tokenList}
        />
      )}
    </ProfileBalanceMobileRoot>
  );
}

export default ProfileBalanceScreen;
