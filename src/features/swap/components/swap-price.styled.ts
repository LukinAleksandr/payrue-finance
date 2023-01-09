import { styled } from '@mui/material';

export const Root = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 5,
});

export const TokenInfo = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
});

export const TokenIcon = styled('img')({
  width: 20,
  height: 20,
});

export const TokenName = styled('p')(({ theme }) => ({
  fontSize: 16,
  fontWeight: 400,
  letterSpacing: 0,
  textAlign: 'left',
  padding: 0,
  margin: 0,
  color: theme.palette.secondary.dark,
  [theme.breakpoints.down('md')]: {
    fontSize: 14,
  },
}));

export const TokenPrice = styled('p')(({ theme }) => ({
  fontSize: 40,
  lineHeight: '60px',
  fontStyle: 'normal',
  fontWeight: 600,
  padding: 0,
  margin: 0,
  letterSpacing: 0,
  textAlign: 'left',
  color: theme.palette.secondary.dark,
  [theme.breakpoints.down('md')]: {
    fontSize: 28,
  },
}));

export const TokenChanged = styled('span')<{ danger: boolean }>(
  ({ theme, danger }) => ({
    fontSize: 16,
    lineHeight: '24px',
    fontWeight: 300,
    padding: 0,
    margin: 0,
    marginLeft: 6,
    color: danger ? theme.palette.warning.main : theme.palette.success.dark,
    [theme.breakpoints.down('md')]: {
      fontSize: 14,
      lineHeight: '21px',
    },
  }),
);
