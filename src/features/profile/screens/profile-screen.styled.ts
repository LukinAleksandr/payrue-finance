import { Box, styled, Typography } from '@mui/material';

export const Root = styled(Box)({
  paddingBottom: 130,
});

export const ProfileSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.dark,
  margin: '0 auto 64px auto',
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const ProfileTop = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 30,
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

export const ProfilePageWrapper = styled('div')(({ theme }) => ({
  margin: '32px 0',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    margin: '24px 0',
  },
}));
