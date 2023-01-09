import { styled, Typography } from '@mui/material';

export const StakingWidgetRow = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  [theme.breakpoints.down('md')]: {},
}));

export const StakingWidgetTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.dark,
  [theme.breakpoints.down('md')]: {},
}));

export const StakingWidgetApy = styled('span')(({ theme }) => ({
  whiteSpace: 'nowrap',
  fontWeight: 600,
  fontSize: 18,
  lineHeight: '32px',
  color: theme.palette.primary.light,

  [theme.breakpoints.down('md')]: {
    fontSize: 14,
    lineHeight: '180%',
  },
}));

export const StakingWidgetList = styled('ul')(({ theme }) => ({
  margin: 0,
  paddingLeft: 20,
  color: theme.palette.secondary.dark,
  [theme.breakpoints.down('md')]: {},
}));

export const StakingWidgetItem = styled('li')(({ theme }) => ({
  '& + &': {
    marginTop: 10,
  },
  [theme.breakpoints.down('md')]: {},
}));

export const StakingWidgetCell = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('md')]: {},
}));

export const StakingWidgetBalance = styled('span')(({ theme }) => ({
  fontWeight: 400,
  fontSize: 16,
  lineHeight: '24px',
  opacity: 0.5,
  [theme.breakpoints.down('md')]: {
    fontSize: 14,
    lineHeight: '21px',
  },
}));
