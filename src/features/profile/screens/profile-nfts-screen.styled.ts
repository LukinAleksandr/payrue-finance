import { styled } from '@mui/material';

export const ProfileNftsScreenRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'nowrap',
  gap: 30,
  justifyContent: 'space-between',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

export const ProfileNftsTable = styled('div')(({ theme }) => ({
  minWidth: '323px',
  fontWeight: 400,
  fontSize: 22,
  lineHeight: '33px',
  [theme.breakpoints.down('md')]: {
    minWidth: 'auto',
    width: '100%',
    fontSize: 18,
    lineHeight: '27px',
  },
}));

export const ProfileNftsTableHead = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  color: theme.palette.secondary.light,
  [theme.breakpoints.down('md')]: {},
}));

export const ProfileNftsBody = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  padding: '26px 0',
  color: theme.palette.secondary.dark,
  [theme.breakpoints.down('md')]: {},
}));

export const ProfileNftsSkeletonWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  gap: 15,
});

export const ProfileNftsCell = styled('div')(({ theme }) => ({
  width: 'calc(100% / 2)',
  flexShrink: 0,
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: 16,
  [theme.breakpoints.down('md')]: {},
}));
