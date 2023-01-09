import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import { ThemeSwitcher } from '../components';

export const NavigationStyles = styled('nav')({
  padding: '0 10px',
});

export const NavigationMenuList = styled('ul')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'nowrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: 0,
  padding: 0,
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    padding: '70px 0',
  },
}));

export const NavigationMenuItem = styled('li')(({ theme }) => ({
  display: 'block',
  '& + & ': {
    marginLeft: 52,
  },
  [theme.breakpoints.down('md')]: {
    '& + &': {
      marginLeft: 0,
      marginTop: '15px',
    },
  },
}));

export const NavigationMenuLink = styled('a')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  fontWeight: 400,
  fontSize: 20,
  lineHeight: '30px',
  cursor: 'pointer',
  textDecoration: 'none',
  color: `${theme.palette.secondary.main}`,

  transition: '0.3s',
  '&:hover': {
    color: `${theme.palette.primary.light}`,
  },
}));

export const NavigationMenuDropdown = styled('div')(({ theme }) => ({
  position: 'absolute',
  display: 'none',
  flexDirection: 'column',
  zIndex: 10,
  backgroundColor: `${theme.palette.negative}`,
  boxShadow: `-4px 4px 20px 0px rgba(0, 0, 0, 0.05)`,
  borderRadius: 14,
  top: '100%',
  padding: 14,
  whiteSpace: 'nowrap',
  gap: 10,
  [theme.breakpoints.down('md')]: {
    position: 'relative',
    alignItems: 'center',
    boxShadow: 'none',
    gap: 15,
  },
}));

export const NavigationMenuDropItem = styled('div')(({ theme }) => ({
  position: 'relative',
  cursor: 'pointer',
  display: 'flex',

  '&:hover > div': {
    display: 'block',
  },

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 0,
  },
}));

export const NavigationMenuDropValue = styled('span')(({ theme }) => ({
  fontWeight: 400,
  fontSize: 20,
  lineHeight: '30px',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  textDecoration: 'none',
  color: theme.palette.secondary.main,
  svg: {
    marginLeft: 5,
    fontSize: 16,
    fill: theme.palette.secondary.main,
  },
}));

export const NavigationMenuNavLink = styled(NavLink)(({ theme }) => ({
  fontWeight: 400,
  fontSize: 20,
  lineHeight: '30px',
  cursor: 'pointer',
  textDecoration: 'none',
  color: `${theme.palette.secondary.main}`,
  transition: '0.3s',
  '&:hover': {
    color: `${theme.palette.primary.light}`,
  },
  '&.active': {
    color: `${theme.palette.primary.light}`,
  },
}));

export const NavigationSwitchTheme = styled(ThemeSwitcher)(({ theme }) => ({
  display: 'none !important',
  marginTop: '30px',
  [theme.breakpoints.down('md')]: {
    display: 'inline-block !important',
  },
}));
