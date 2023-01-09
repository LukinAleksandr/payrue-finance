import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from '@mui/material';

export interface MuiTypography {
  defaultProps?: ComponentsProps['MuiTypography'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiTypography'];
  variants?: ComponentsVariants['MuiTypography'];
}

export const MuiTypography: MuiTypography = {
  styleOverrides: {
    h1: {
      fontWeight: 600,
      fontSize: 68,
      lineHeight: '75px',
      letterSpacing: '-0.02em',
      '@media (max-width: 900px)': {
        fontSize: 32,
        lineHeight: '48px',
      },
    },
    h2: {
      fontWeight: 600,
      fontSize: 40,
      lineHeight: '60px',
      letterSpacing: '-0.02em',
      '@media (max-width: 900px)': {
        fontSize: 32,
        lineHeight: '48px',
      },
    },
    h3: {
      fontWeight: 500,
      fontSize: 38,
      lineHeight: '57px',
      '@media (max-width: 900px)': {
        fontSize: 28,
        lineHeight: '36px',
      },
    },
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '42px',
      '@media (max-width: 900px)': {
        fontSize: 26,
        lineHeight: '38px',
      },
    },
    h5: {
      fontWeight: 600,
      fontSize: 22,
      lineHeight: '33px',
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: 24,
      lineHeight: '36px',
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: 20,
      lineHeight: '30px',
      '@media (max-width: 900px)': {
        fontSize: 16,
        lineHeight: '24px',
      },
    },
    body1: {
      fontWeight: 400,
      fontSize: 16,
      lineHeight: '24px',
      '@media (max-width: 900px)': {
        fontSize: 14,
        lineHeight: '19px',
      },
    },
    body2: {
      fontWeight: 400,
      fontSize: 14,
      lineHeight: '21px',
    },
  },
};
