import { styled, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { CopyIcon } from '../../../app/icons';

export const ProfileCardStyled = styled('div')(({ theme }) => ({
  display: 'flex',
  flexShrink: 0,
  alignItems: 'center',
  gap: 32,
  padding: '42px 46px',
  border: `1px solid ${theme.palette.border}`,
  borderRadius: 24,
  [theme.breakpoints.down('lg')]: {
    border: 'none',
    padding: 0,
    gap: 14,
  },
}));

export const ProfileCardImage = styled('div')(({ theme }) => ({
  width: 110,
  height: 110,
  borderRadius: '50%',
  overflow: 'hidden',
  backgroundColor: theme.palette.secondary.dark,
  [theme.breakpoints.down('lg')]: {
    width: 95,
    height: 95,
  },
}));

export const ProfileCardAvatar = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  [theme.breakpoints.down('lg')]: {},
}));

export const ProfileCardCell = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  [theme.breakpoints.down('lg')]: {},
}));

export const ProfileCardTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.dark,
  [theme.breakpoints.down('lg')]: {},
}));

export const ProfileCardWallet = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '16px 43px',
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.secondary.dark,
  borderRadius: 20,
  gap: 16,
  fontWeight: 400,
  fontSize: 18,
  lineHeight: '27px',
  [theme.breakpoints.down('lg')]: {
    padding: '16px 25px 16px 15px',
  },
}));

export const CopyIconStyled = styled(CopyIcon)(({ theme }) => ({
  cursor: 'pointer',
  transition: 'opacity 300ms ease-in',
  '&:hover': {
    opacity: 0.8,
  },
  [theme.breakpoints.down('lg')]: {},
}));

export const LogoutIconStyled = styled(LogoutIcon)(({ theme }) => ({
  cursor: 'pointer',
  transition: 'opacity 300ms ease-in',
  color: '#017AFF',
  fill: '#017AFF',
  '&:hover': {
    opacity: 0.8,
  },
  [theme.breakpoints.down('lg')]: {},
}));
