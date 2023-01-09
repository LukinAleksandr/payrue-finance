import { styled } from '@mui/material';

export const ProfileStakingScreenRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: 30,
  width: '100%',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

export const ProfileStakingScreenColumn = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 32,
  flexGrow: 1,
  [theme.breakpoints.down('md')]: {},
}));
