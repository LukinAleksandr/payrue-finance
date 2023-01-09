export enum ThemeType {
  LIGHT = 'light',
  DARK = 'dark',
}

const darkPalette = {
  primary: {
    main: '#046BDC',
    light: '#3E7AFF',
    dark: '#1F242D',
  },
  secondary: {
    main: '#999999',
    dark: '#DDDDDD',
    light: '#878C97',
  },
  success: {
    main: '#1B2D14',
    dark: '#358F14',
  },
  negative: '#1F242D',
  warning: {
    main: '#A82828',
  },
  background: {
    default: '#141414',
    paper: '#191B20',
  },
  border: '#323948',
  widget: {
    main: '#191B20',
    active: '#21314B',
  },
};
const lightPalette = {
  primary: {
    main: '#017AFF',
    light: '#0050FF',
    dark: '#F5F8FF',
    border: '',
  },
  secondary: {
    main: '#878C97',
    dark: '#373F51',
    light: '#878C97',
  },
  success: {
    main: '#F3F7ED',
    dark: '#4DC323',
  },
  warning: {
    main: '#FF7070',
  },
  negative: '#fff',
  background: {
    default: '#fff',
    paper: '#fff',
  },
  border: '#EBECEE',
  widget: {
    main: '#F9FBFE',
    active: '#E8F1FF',
  },
};

const palette = {
  [ThemeType.DARK]: darkPalette,
  [ThemeType.LIGHT]: lightPalette,
};

export default palette;
