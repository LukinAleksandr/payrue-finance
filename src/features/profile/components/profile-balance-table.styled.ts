import { styled } from '@mui/material';

export const ProfileBalanceTableStyled = styled('div')(({ theme }) => ({
  width: '100%',
  fontWeight: 400,
  fontSize: 22,
  lineHeight: '33px',
  [theme.breakpoints.down('md')]: {
    fontSize: 18,
    lineHeight: '27px',
  },
}));

export const ProfileBalanceTableHead = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  color: theme.palette.secondary.light,
  [theme.breakpoints.down('md')]: {},
}));

export const ProfileBalanceBody = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  padding: '26px 0',
  color: theme.palette.secondary.dark,
  [theme.breakpoints.down('md')]: {},
}));

export const ProfileBalanceRow = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {},
}));

export const ProfileBalanceStartCell = styled('div')(({ theme }) => ({
  width: 'calc(100% / 3)',
  flexShrink: 0,
  display: 'flex',
  justifyContent: 'flex-start',
  [theme.breakpoints.down('md')]: {},
}));
export const ProfileBalanceCell = styled('div')(({ theme }) => ({
  width: 'calc(100% / 3)',
  flexShrink: 0,
  display: 'flex',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {},
}));
export const ProfileBalanceEndCell = styled('div')(({ theme }) => ({
  width: 'calc(100% / 3)',
  flexShrink: 0,
  display: 'flex',
  justifyContent: 'flex-end',
  [theme.breakpoints.down('md')]: {},
}));

export const ProfileBalanceTokenData = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'nowrap',
  gap: 14,
  [theme.breakpoints.down('md')]: {},
}));

export const ProfileBalanceTokenCol = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('md')]: {},
}));

export const ProfileBalanceSub = styled('span')(({ theme }) => ({
  fontWeight: 300,
  fontSize: 16,
  lineHeight: '24px',
  whiteSpace: 'nowrap',
  color: theme.palette.secondary.main,
  [theme.breakpoints.down('md')]: {
    fontSize: 14,
    lineHeight: '21px',
  },
}));
