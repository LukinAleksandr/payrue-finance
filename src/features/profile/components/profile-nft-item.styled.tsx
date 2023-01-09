import { styled } from '@mui/material';

export const ProfileNftRow = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 10,
  [theme.breakpoints.down('md')]: {},
}));

export const ProfileNftCell = styled('div')(({ theme }) => ({
  width: 'calc(100% / 2 - 5px)',
  flexShrink: 0,
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: 16,

  [theme.breakpoints.down('md')]: {},
}));

export const ProfileNftImageWrapper = styled('div')(({ theme }) => ({
  width: 64,
  height: 64,
  flexShrink: 0,
  overflow: 'hidden',
  borderRadius: '50%',
  [theme.breakpoints.down('md')]: {},
}));
export const ProfileNftImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  [theme.breakpoints.down('md')]: {},
}));

export const ProfileNftName = styled('a')(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.secondary.dark,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  [theme.breakpoints.down('md')]: {},
}));
