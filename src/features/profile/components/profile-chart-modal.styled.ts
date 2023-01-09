import { styled, Typography } from '@mui/material';

export const ProfileChartModalWrapper = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const ProfileChartModalTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  alignSelf: 'flex-start',
  color: theme.palette.secondary.dark,
  marginBottom: 28,
}));
