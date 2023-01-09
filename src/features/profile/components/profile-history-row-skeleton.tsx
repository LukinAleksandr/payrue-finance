import { Skeleton } from '@mui/material';
import { useState } from 'react';

import {
  ProfileHistoryCell,
  ProfileHistoryEndCell,
  ProfileHistoryRowStyled,
  ProfileHistoryStartCell,
  ProfileHistoryTxData,
} from './profile-history-row.styled';

function ProfileHistoryRowSkeleton() {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandle = () => setIsOpen(!isOpen);

  return (
    <ProfileHistoryRowStyled isOpen={isOpen}>
      <ProfileHistoryStartCell onClick={clickHandle}>
        <ProfileHistoryTxData>
          <Skeleton height={40} variant="circular" width={40} />
          <Skeleton height={50} variant="rectangular" width={200} />
        </ProfileHistoryTxData>
      </ProfileHistoryStartCell>
      <ProfileHistoryCell isOpen={isOpen}>
        <Skeleton height={30} variant="rectangular" width={200} />
      </ProfileHistoryCell>
      <ProfileHistoryCell isOpen={isOpen}>
        <Skeleton height={30} variant="rectangular" width={200} />
      </ProfileHistoryCell>
      <ProfileHistoryEndCell isOpen={isOpen}>
        <Skeleton height={50} variant="rectangular" width={120} />
      </ProfileHistoryEndCell>
    </ProfileHistoryRowStyled>
  );
}

export default ProfileHistoryRowSkeleton;
