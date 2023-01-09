import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import { Social } from '../components';
import { LogoIcon } from '../icons';

export const FooterStyled = styled('footer')(({ theme }) => ({
  background: theme.palette.primary.dark,
  marginTop: 'auto',
  width: '100%',
  padding: '32px 0',
  fontWeight: 300,
  fontSize: 16,
  display: 'flex',
  alignItems: 'center',
  letterSpacing: '-0.02em',
  [theme.breakpoints.down('md')]: {
    padding: '33px 0',
  },
}));

export const FooterWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
  },
}));
export const FooterStart = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',

  [theme.breakpoints.down('lg')]: {
    marginBottom: '40px',
  },
}));

export const FooterLogoWrapper = styled('div')({
  display: 'flex',
  marginBottom: 12,
});
export const FooterLogoImg = styled(LogoIcon)({
  height: 46,
  marginRight: 9,
});
export const FooterLogoText = styled('span')(({ theme }) => ({
  display: 'flex',
  color: theme.palette.secondary.dark,
  fontWeight: 600,
  fontSize: 32,
  letterSpacing: '-0.02em',
}));

export const FooterLogoCopyRight = styled('span')(({ theme }) => ({
  color: theme.palette.secondary.main,
  maxWidth: '350px',
}));

export const FooterEnd = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

export const FooterSocial = styled(Social)({ marginBottom: 35 });

export const FooterLinks = styled('div')({ display: 'flex' });

export const FooterNavLink = styled(NavLink)(({ theme }) => ({
  color: theme.palette.primary.light,
  cursor: 'pointer',
  transition: '0.3s',
  textDecoration: 'none',
  marginBottom: 12,
  '&:hover': {
    textDecoration: 'underline',
  },
}));

export const FooterLink = styled('a')(({ theme }) => ({
  color: theme.palette.primary.light,
  cursor: 'pointer',
  transition: '0.3s',
  textDecoration: 'none',
  '& + &': {
    marginTop: 12,
  },
  '&:hover': {
    textDecoration: 'underline',
  },
}));

export const FooterColumn = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  '& + &': {
    marginLeft: 48,
  },
});
