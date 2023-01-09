import { useMemo, useState } from 'react';
import { AsyncRequestState } from '../../../app/common-types';
import {
  BalanceIcon,
  HistoryIcon,
  NftsIcon,
  StakingIcon,
} from '../../../app/icons';
import { createAsyncRequestStateSelector } from '../../../app/selectors';
import { useAppSelector } from '../../../app/store';
import { getProfileAsync } from '../async-actions';
import { ProfileCard, ProfileChart, ProfileTabs } from '../components';
import { Tab } from '../components/profile-tabs';
import { Networks, TabsValues } from '../types';
import ProfileBalanceScreen from './profile-balance-screen';
import ProfileHistoryScreen from './profile-history-screen';
import ProfileNftsScreen from './profile-nfts-screen';
import {
  ProfileSubtitle,
  Root,
  ProfileTop,
  ProfilePageWrapper,
} from './profile-screen.styled';
import ProfileStakingScreen from './profile-staking-screen';

const tabs: Tab[] = [
  {
    id: 1,
    label: TabsValues.balance,
    icon: <BalanceIcon />,
  },
  {
    id: 2,
    label: TabsValues.nft,
    icon: <NftsIcon />,
  },
  {
    id: 3,
    label: TabsValues.staking,
    icon: <StakingIcon />,
  },
  {
    id: 4,
    label: TabsValues.history,
    icon: <HistoryIcon />,
  },
];

const selectLoadingState = createAsyncRequestStateSelector(
  [getProfileAsync.typePrefix],
  AsyncRequestState.pending,
);

export default function ProfileScreen(): JSX.Element {
  const [value, setValue] = useState(0);

  const profileBalances = useAppSelector(
    (state) => state.profile.data?.balances,
  );

  const profileLoading = useAppSelector(selectLoadingState);

  const tokenBalances = useAppSelector(
    (state) => state.profile.data?.tokenBalances,
  );

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  const balances = useMemo(() => {
    if (tokenBalances && profileBalances) {
      const keys = Object.keys(profileBalances);

      const result = keys.map((key) => {
        const network = key as Networks;
        return [
          network,
          parseFloat(
            (
              Number(profileBalances[network].balance) *
                Number(profileBalances[network].usdPrice) +
              tokenBalances[network]
                .map(({ usdBalance }) => Number(usdBalance))
                .reduce((a: number, b: number) => a + b, 0)
            ).toFixed(2),
          ),
        ];
      });

      return result;
    }
    return [];
  }, [tokenBalances, profileBalances]);

  const total = useMemo(() => {
    if (balances) {
      return balances.reduce((acc, arr) => acc + Number(arr[1]), 0);
    }
    return 0;
  }, [balances]);

  const renderPage = () => {
    switch (value) {
      case 0:
        return (
          <ProfileBalanceScreen
            balances={balances}
            loading={profileLoading}
            nativeBalances={profileBalances}
            tokens={tokenBalances}
            total={total}
          />
        );

      case 1:
        return <ProfileNftsScreen />;

      case 2:
        return <ProfileStakingScreen />;

      case 3:
        return <ProfileHistoryScreen />;

      default:
        return (
          <ProfileBalanceScreen
            balances={balances}
            loading={profileLoading}
            nativeBalances={profileBalances}
            tokens={tokenBalances}
            total={total}
          />
        );
    }
  };

  return (
    <Root>
      <ProfileSubtitle variant="h3">Account</ProfileSubtitle>
      <ProfileTop>
        <ProfileCard />
        <ProfileChart
          balances={balances}
          loading={profileLoading}
          total={total}
        />
      </ProfileTop>
      <ProfileTabs onChange={handleChange} tabs={tabs} value={value} />
      <ProfilePageWrapper>{renderPage()}</ProfilePageWrapper>
    </Root>
  );
}
