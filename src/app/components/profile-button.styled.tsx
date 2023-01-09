import { styled } from '@mui/material/styles';

export const ProfileButtonStyles = styled('div')(({ theme }) => ({
  cursor: 'pointer',
  padding: 8,
  borderRadius: 8,
  display: 'flex',
  gap: 8,
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    padding: 4,
    gap: 2,
  },
}));

export const ProfileButtonAvatar = styled('div')(({ theme }) => ({
  width: 24,
  height: 24,
  svg: {
    fill: theme.palette.primary.light,
  },
}));

export const ProfileButtonAddress = styled('div')(({ theme }) => ({
  padding: 4,
  fontSize: 16,
  fontStyle: 'normal',
  fontWeight: 400,
  textAlign: 'left',
  color: theme.palette.secondary.dark,
  borderRadius: 8,
  [theme.breakpoints.down('md')]: {
    padding: 2,
    fontSize: 12,
  },
}));
