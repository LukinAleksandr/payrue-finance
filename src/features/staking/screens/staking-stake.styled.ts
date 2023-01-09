import { InputBase, styled } from '@mui/material';
import { Button } from '../../../app/components';

export const StakingStakeStyled = styled('div')(({ theme }) => ({
  marginTop: 21,
  paddingBottom: 15,
  [theme.breakpoints.down('md')]: {},
}));

export const StakingStakeWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  marginLeft: '-15px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    marginLeft: '0',
    gap: 24,
  },
}));

export const StakingStakeInput = styled(InputBase)(({ theme }) => ({
  border: `1px solid ${theme.palette.secondary.dark}`,
  borderRadius: 10,
  padding: '8px 15px',
  color: theme.palette.secondary.dark,
  '& .MuiInputBase-input': {
    '&::-webkit-outer-spin-button': {
      appearance: 'none',
      margin: 0,
    },
    '&::-webkit-inner-spin-button': {
      appearance: 'none',
      margin: 0,
    },
  },
  '& .MuiInputAdornment-root': {
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '27px',
    '& .MuiTypography-root': {
      color: theme.palette.secondary.main,
    },
  },
}));

export const StakingStakeButton = styled(Button)(({ theme }) => ({
  width: 'calc(50% - 15px)',
  marginLeft: 15,
  marginBottom: 'auto',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    marginLeft: 0,
  },
}));

export const StakingStakeText = styled('span')(({ theme }) => ({
  fontWeight: 400,
  fontSize: 16,
  lineHeight: '24px',
  color: theme.palette.secondary.dark,
  opacity: 0.5,
}));

export const StakingStakeColumn = styled('span')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: 'calc(50% - 15px)',
  marginLeft: 15,
  gap: 15,
  [theme.breakpoints.down('md')]: {
    width: '100%',
    marginLeft: 0,
  },
}));
