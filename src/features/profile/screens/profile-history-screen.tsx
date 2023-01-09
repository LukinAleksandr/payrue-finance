import { InputBase, Theme, useMediaQuery } from '@mui/material';
import { useMemo } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useAppSelector } from '../../../app/store';
import { useGetHistoryByAddressQuery } from '../api';
import { ProfileHistoryRow } from '../components';
import ProfileHistoryRowSkeleton from '../components/profile-history-row-skeleton';
import {
  ProfileHistoryCell,
  ProfileHistoryEndCell,
  ProfileHistoryStartCell,
} from '../components/profile-history-row.styled';
import {
  ProfileHistoryScreenRoot,
  ProfileHistoryTableStyled,
  ProfileHistoryTableHead,
  ProfileHistoryBody,
  ProfileBalanceMobileHeader,
  ProfileBalanceMobileTitle,
  ProfileBalanceMobileSelect,
} from './profile-history-screen.styled';

export enum HistoryStatus {
  SENT = 'Sent',
  RECEIVED = 'Received',
  CONTRACT_INTERACTION = 'Contract interaction',
}

export enum HistoryFormField {
  network = 'network',
}

export interface HistoryForm {
  [HistoryFormField.network]: string;
}

function ProfileHistoryScreen() {
  const isUpMd = useMediaQuery<Theme>((theme) => theme.breakpoints.up('md'));
  const address = useAppSelector((state) => state.networks.address) || '';
  const { data: historyData, isFetching } = useGetHistoryByAddressQuery(
    address,
    {
      skip: !address,
    },
  );

  const { register, control } = useForm<HistoryForm>({
    defaultValues: {
      [HistoryFormField.network]: 'all',
    },
  });

  const selectedNetwork = useWatch({
    name: 'network',
    control,
  });

  const historyList = useMemo(() => {
    if (historyData) {
      if (selectedNetwork === 'all') {
        return Object.entries(historyData);
      }

      return [[selectedNetwork, historyData[selectedNetwork]]];
    }
    return [];
  }, [selectedNetwork, historyData]);

  return (
    <ProfileHistoryScreenRoot>
      <ProfileBalanceMobileHeader>
        <ProfileBalanceMobileTitle>
          {!isUpMd ? 'Transaction' : ''}
        </ProfileBalanceMobileTitle>
        <ProfileBalanceMobileSelect
          input={<InputBase />}
          {...register('network')}
          value={selectedNetwork}
        >
          <option value="all">All</option>
          {historyData &&
            Object.keys(historyData).map((network, index) => (
              <option key={index} value={network}>
                {network.toUpperCase()}
              </option>
            ))}
        </ProfileBalanceMobileSelect>
      </ProfileBalanceMobileHeader>
      <ProfileHistoryTableStyled>
        {isUpMd && (
          <ProfileHistoryTableHead>
            <ProfileHistoryStartCell>Transaction</ProfileHistoryStartCell>
            <ProfileHistoryCell>Amount</ProfileHistoryCell>
            <ProfileHistoryCell>Network</ProfileHistoryCell>
            <ProfileHistoryEndCell>Time</ProfileHistoryEndCell>
          </ProfileHistoryTableHead>
        )}

        <ProfileHistoryBody>
          {isFetching
            ? Array(10)
                .fill(1)
                .map((_, index) => <ProfileHistoryRowSkeleton key={index} />)
            : historyList.map(([network, data]) =>
                data.map((transaction, index) => (
                  <ProfileHistoryRow
                    key={`${network} + ${index}`}
                    network={network}
                    userAddress={address}
                    {...transaction}
                  />
                )),
              )}
        </ProfileHistoryBody>
      </ProfileHistoryTableStyled>
    </ProfileHistoryScreenRoot>
  );
}

export default ProfileHistoryScreen;
