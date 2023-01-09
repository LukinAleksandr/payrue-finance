import { styled, Typography } from '@mui/material';

export const NetworkRoot = styled('div')({
  display: 'flex',
  gap: 30,
  alignItems: 'center',
});

export const NetworkImage = styled('img')(({ theme }) => ({
  width: 70,
  height: 70,
  [theme.breakpoints.down('md')]: {
    width: 60,
    height: 60,
  },
}));

export const NetworkDetails = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '2px 0',
});

export const NetworkTitle = styled(Typography)(({ theme }) => ({
  marginBottom: 8,
  color: theme.palette.secondary.dark,
}));

export const NetworkLink = styled('a')(({ theme }) => ({
  fontWeight: 400,
  fontSize: 16,
  lineHeight: '24px',
  color: theme.palette.primary.main,
}));
