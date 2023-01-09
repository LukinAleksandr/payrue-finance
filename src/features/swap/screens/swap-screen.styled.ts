import { Box, styled, Typography } from '@mui/material';

export const Root = styled(Box)({
  paddingBottom: 130,
});

export const SwapSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.dark,
  margin: '0 auto 64px auto',
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const SwapWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: 30,
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column-reverse',
    alignItems: 'center',
    gap: 18,
  },
}));

export const SwapRow = styled('div')({
  display: 'flex',
});

export const SwapCell = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    alignItems: 'center',
  },
}));

export const SwapLabel = styled('h3')(({ theme }) => ({
  fontWeight: 500,
  fontSize: 16,
  lineHeight: '24px',
  whiteSpace: 'nowrap',
  margin: 0,
  color: theme.palette.secondary.dark,
}));

export const SwapNetworkSelect = styled(SwapRow)(({ theme }) => ({
  textAlign: 'center',
  gap: 60,
  marginBottom: 20,
  [theme.breakpoints.down('md')]: {
    width: '100%',
    marginBottom: 12,
    gap: 0,
    justifyContent: 'space-between',
  },
}));

export const SwapRight = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  [theme.breakpoints.down('md')]: {
    width: '100%',
    maxWidth: '500px',
  },
}));
