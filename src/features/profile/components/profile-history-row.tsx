import { format } from 'date-fns';
import { ethers } from 'ethers';
import { useState } from 'react';
import { trimming } from '../../../app';
import { ReceivedArrowIcon, SentArrowIcon } from '../../../app/icons';
import { HistoryStatus } from '../screens/profile-history-screen';
import { TransactionData } from '../types';
import {
  ProfileHistoryCell,
  ProfileHistoryEndCell,
  ProfileHistoryRowStyled,
  ProfileHistoryStartCell,
  ProfileHistorySub,
  ProfileHistoryTxCol,
  ProfileHistoryTxData,
  ProfileHistoryTitleCell,
  ProfileHistoryLink,
} from './profile-history-row.styled';

export interface HistoryRowProps extends TransactionData {
  userAddress: string;
  network: string;
}

function ProfileHistoryRow({
  userAddress,
  to_address,
  from_address,
  value,
  network,
  block_timestamp,
  token,
  transaction_hash,
}: HistoryRowProps) {
  const [isOpen, setIsOpen] = useState(false);

  const status =
    userAddress.toLocaleLowerCase() === to_address.toLocaleLowerCase()
      ? HistoryStatus.RECEIVED
      : HistoryStatus.SENT;

  const balance = String(
    Number(ethers.utils.formatUnits(value, 'ether')).toFixed(2),
  ).replace('.00', '');

  const clickHandle = () => setIsOpen(!isOpen);

  const formatNetwork = (string: string) => {
    switch (string) {
      case 'bsc':
        return 'bsc';
      case 'eth':
        return 'eth';
      case 'polygon':
        return 'polygon';
      case 'avalanche':
        return 'avax';
      case 'fantom':
        return 'ftm';
      default:
        return '';
    }
  };

  return (
    <ProfileHistoryRowStyled isOpen={isOpen}>
      <ProfileHistoryStartCell onClick={clickHandle}>
        <ProfileHistoryTxData>
          {status === HistoryStatus.SENT ? (
            <SentArrowIcon sx={{ width: '40px', height: '40px' }} />
          ) : (
            <ReceivedArrowIcon sx={{ width: '40px', height: '40px' }} />
          )}
          {/* <ProfileHistoryStatus status={status} /> */}
          <ProfileHistoryTxCol>
            {status}
            <ProfileHistorySub>
              <ProfileHistoryLink
                href={`https://www.oklink.com/en/${formatNetwork(
                  network,
                )}/tx/${transaction_hash}`}
                target="_blank"
              >
                {status === HistoryStatus.RECEIVED
                  ? `from: ${trimming(from_address)}`
                  : `to: ${trimming(to_address)}`}
              </ProfileHistoryLink>
            </ProfileHistorySub>
          </ProfileHistoryTxCol>
        </ProfileHistoryTxData>
      </ProfileHistoryStartCell>
      <ProfileHistoryCell isOpen={isOpen}>
        <ProfileHistoryTxCol>
          <ProfileHistoryTitleCell>Amount</ProfileHistoryTitleCell>
          {status === HistoryStatus.RECEIVED ? '+' : '-'}
          {balance} {token ? token.symbol : network}
          {/* <ProfileHistorySub>${change}</ProfileHistorySub> */}
        </ProfileHistoryTxCol>
      </ProfileHistoryCell>
      <ProfileHistoryCell isOpen={isOpen}>
        <ProfileHistoryTxCol>
          <ProfileHistoryTitleCell>Network</ProfileHistoryTitleCell>
          {network.toLocaleUpperCase()}
        </ProfileHistoryTxCol>
      </ProfileHistoryCell>
      <ProfileHistoryEndCell isOpen={isOpen}>
        <ProfileHistoryTxCol>
          <ProfileHistoryTitleCell>Time</ProfileHistoryTitleCell>
          {format(new Date(block_timestamp), 'HH:mm')}
          <ProfileHistorySub>
            {format(new Date(block_timestamp), 'yy.MM.dd')}
          </ProfileHistorySub>
        </ProfileHistoryTxCol>
      </ProfileHistoryEndCell>
    </ProfileHistoryRowStyled>
  );
}

export default ProfileHistoryRow;
