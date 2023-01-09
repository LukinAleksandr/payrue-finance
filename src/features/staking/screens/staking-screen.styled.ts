import { Box, styled, Typography } from '@mui/material';

export const Root = styled(Box)({
  paddingBottom: 130,
});

export const StakingSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.dark,
  margin: '0 auto 64px auto',
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const StakingWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'nowrap',
  width: '100%',
  marginLeft: '-30px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column-reverse',
    marginLeft: '0',
    gap: 28,
  },
}));

export const StakingColumn = styled('div')(({ theme }) => ({
  display: 'flex',
  width: 'calc(50% - 30px)',
  flexDirection: 'column',
  marginLeft: '30px',
  gap: 32,
  [theme.breakpoints.down('md')]: {
    width: '100%',
    marginLeft: '0',
    gap: 28,
  },
}));
