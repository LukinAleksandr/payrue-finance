import { styled } from '@mui/material/styles';

export const ContainerStyled = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: '1400px',
  margin: '0 auto',
  padding: '0 58px',
  [theme.breakpoints.down('lg')]: {
    padding: '0 20px',
  },
  [theme.breakpoints.down('md')]: {
    padding: '0 15px',
  },
}));

export const ContainerSmallStyled = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: '1157px',
  margin: '0 auto',
  padding: '0 58px',
  [theme.breakpoints.down('lg')]: {
    maxWidth: '1080px',
    padding: '0 20px',
  },
  [theme.breakpoints.down('md')]: {
    padding: '0 15px',
  },
}));

export const ContainerFluidStyled = styled('div')({
  maxWidth: '1920px',
  width: '100%',
  height: '100vh',
  margin: '0 auto',
  overflowX: 'hidden',
});
