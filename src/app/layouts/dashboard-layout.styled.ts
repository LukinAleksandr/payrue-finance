import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const Root = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  paddingTop: 159,
  [theme.breakpoints.down('md')]: {
    paddingTop: 98,
  },
}));
