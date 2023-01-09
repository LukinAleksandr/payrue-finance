import { styled } from '@mui/material/styles';
import { Button, ThemeSwitcher } from '../components';
import { LogoIcon } from '../icons';

export const HeaderStyles = styled('div')<{ variant: string }>(
  ({ theme, variant }) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 7777,
    backgroundColor: `${
      variant === 'transparent' ? 'transparent' : theme.palette.negative
    }`,
    boxShadow: `${
      variant === 'transparent' ? 'none' : '0px 2px 9px rgba(0, 0, 0, 0.05)'
    }`,
  }),
);

export const HeaderWrapper = styled('div')<{ variant: string }>(
  ({ theme, variant }) => ({
    position: 'relative',
    display: 'flex',
    justifyContent: `${
      variant === 'transparent' ? 'flex-start' : 'space-between'
    }`,
    alignItems: 'center',
    padding: '24px 0',
    gap: `${variant === 'transparent' ? '120px' : '7px'}`,
    [theme.breakpoints.down('md')]: {
      padding: '12px 0',
    },
  }),
);

export const HeaderLogo = styled(LogoIcon)(({ theme }) => ({
  height: 46,
  width: 36,
  zIndex: 10,
  [theme.breakpoints.down('md')]: {
    height: 42,
    width: 32,
  },
}));

export const HeaderNavigation = styled('div')({
  display: 'flex',
});

export const HeaderControls = styled('div')({
  display: 'flex',
  alignItems: 'center',
  zIndex: 10,
  gap: 7,
  marginLeft: 19,
});

export const HeaderSwitchTheme = styled(ThemeSwitcher)(({ theme }) => ({
  marginRight: 0,
  [theme.breakpoints.down('lg')]: {
    order: 3,
    justifySelf: 'flex-end',
  },
}));

export const ConnectButton = styled(Button)(({ theme }) => ({
  svg: {
    display: 'none',
  },
  [theme.breakpoints.down('lg')]: {
    order: 2,
    svg: {
      display: 'block',
    },
  },
}));
