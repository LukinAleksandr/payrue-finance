import { styled, lighten } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Container } from '../../../app/components';

export const IntroContainer = styled(Container)({});

export const IntroStyles = styled('section')({
  position: 'relative',
  display: 'flex',
  height: '100%',
  backgroundImage: 'url(/intro-bg.png)',
  backgroundSize: 'cover',
  '&::before': {
    content: "''",
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.63)',
  },
});

export const IntroRightImage = styled('img')(({ theme }) => ({
  position: 'absolute',
  right: 0,
  height: '100%',
  [theme.breakpoints.down('md')]: {
    zIndex: -1,
  },
}));

export const IntroWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  height: '100%',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
  },
}));

export const IntroLeft = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  zIndex: 10,

  [theme.breakpoints.down('md')]: {
    alignItems: 'center',
  },
}));

export const IntroH1 = styled('h1')(({ theme }) => ({
  fontWeight: 600,
  fontSize: 128,
  lineHeight: '192px',
  color: '#373f51',
  margin: 0,

  [theme.breakpoints.down('md')]: {
    fontSize: 92,
    lineHeight: '120px',
    marginBottom: 20,
  },
}));

export const IntroDescription = styled('span')(({ theme }) => ({
  fontWeight: 400,
  fontSize: 42,
  lineHeight: '88px',
  color: '#373f51',

  [theme.breakpoints.down('md')]: {
    fontSize: 32,
    lineHeight: '40px',
    textAlign: 'center',
    marginBottom: 40,
  },
}));

export const IntroLink = styled(Link)(({ theme }) => ({
  width: 243,
  height: 75,
  color: '#fff',
  display: 'flex',
  justifyContent: 'center',
  textDecoration: 'none',
  cursor: 'pointer',
  alignItems: 'center',
  fontWeight: 600,
  fontSize: 20,
  lineHeight: 30,
  background: `${theme.palette.primary.main}`,
  border: `1px solid #017aff`,
  borderRadius: 20,
  transition: `0.3s ease-in`,
  '&:hover': {
    background: `${lighten(theme.palette.primary.main, 0.05)}`,
  },
}));

export const IntroFooter = styled('footer')({
  position: 'absolute',
  bottom: 28,
});
