import { styled, SwipeableDrawer } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { ChevronIcon } from '../icons';
import background from '../../assets/images/drawer-banner.png';

export const DrawerStyled = styled(SwipeableDrawer)(({ theme }) => ({
  display: 'block',
  [theme.breakpoints.up('lg')]: {
    display: 'none',
  },
  '& .MuiDrawer-paper': {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 500,
    padding: '90px 16px',
    color: theme.palette.secondary.dark,
    backgroundColor: theme.palette.background.default,
  },
}));

export const DrawerWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

export const DrawerProfileButton = styled(NavLink)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  gap: 20,
  textDecoration: 'none',
  color: theme.palette.secondary.dark,
  paddingBottom: 20,
  borderBottom: `1px solid ${theme.palette.border}`,
}));

export const DrawerProfileAvatarWrapper = styled('div')({
  width: 40,
  height: 40,
  flexShrink: 0,
  borderRadius: '50%',
  overflow: 'hidden',
});

export const DrawerProfileAvatarImg = styled('img')({
  width: '100%',
  height: '100%',
});

export const DrawerProfileColumn = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
});

export const DrawerProfileText = styled('span')({
  fontWeight: 600,
  fontSize: 22,
  lineHeight: '33px',
});

export const DrawerProfileAddress = styled('span')({
  fontWeight: 300,
  fontSize: 14,
  lineHeight: '21px',
});

export const Arrow = styled(ChevronIcon)(({ theme }) => ({
  stroke: theme.palette.secondary.dark,
  width: 16,
  transform: 'rotate(-90deg)',
  marginLeft: 'auto',
  marginRight: 20,
}));

export const DrawerLink = styled('a')(({ theme }) => ({
  padding: '7px 2px 7px 16px',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  textDecoration: 'none',
  backgroundColor: theme.palette.widget.main,
  borderRadius: 10,
  color: theme.palette.secondary.dark,
  fontWeight: 400,
  fontSize: 22,
  lineHeight: '33px',
}));

export const DrawerNavLink = styled(NavLink)(({ theme }) => ({
  padding: '7px 2px 7px 16px',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  textDecoration: 'none',
  backgroundColor: theme.palette.widget.main,
  borderRadius: 10,
  color: theme.palette.secondary.dark,
  fontWeight: 400,
  fontSize: 22,
  lineHeight: '33px',
}));

export const DrawerBanner = styled('a')(({ theme }) => ({
  width: '100%',
  height: 111,
  borderRadius: 10,
  overflow: 'hidden',
  textDecoration: 'none',
  backgroundImage: `url(${background})`,
  backgroundColor: theme.palette.widget.main,
  color: theme.palette.secondary.dark,
  backgroundSize: '100%',
  border: `1px solid ${theme.palette.primary.light}`,
  margin: '20px 0 16px',
  padding: '9px 2px 9px 16px',
  fontWeight: 400,
  fontSize: 22,
  lineHeight: '33px',
}));

export const DrawerRow = styled('div')({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
});
