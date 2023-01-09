import { styled } from '@mui/material';
import { Button } from '../../../app/components';

export const StakingClaimStyled = styled('div')(({ theme }) => ({
  marginTop: 21,
  paddingBottom: 15,
  [theme.breakpoints.down('md')]: {},
}));

export const StakingClaimWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  marginLeft: '-15px',
  marginBottom: 15,
  [theme.breakpoints.down('md')]: {},
}));

export const StakingClaimCell = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: 'calc(50% - 15px)',
  marginLeft: 15,
  gap: 8,
  [theme.breakpoints.down('md')]: {},
}));

export const StakingClaimButton = styled(Button)(({ theme }) => ({
  width: 'calc(50% - 15px)',
  marginLeft: 15,
  marginBottom: 'auto',
  [theme.breakpoints.down('md')]: {},
}));

export const StakingClaimText = styled('span')(({ theme }) => ({
  fontWeight: 400,
  fontSize: 18,
  lineHeight: '27px',
  color: theme.palette.secondary.dark,
}));
