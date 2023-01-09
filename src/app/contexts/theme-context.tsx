import { Theme } from '@mui/material/';
import { createContext } from 'react';
import { ThemeType } from '../theme/palette';

export interface ThemeContextData {
  toggleTheme: (newThemeType: ThemeType) => void;
  theme?: Theme;
  themeType: ThemeType;
}

export const ThemeContext = createContext<ThemeContextData>({
  toggleTheme: (newThemeType: ThemeType) => newThemeType,
  themeType: ThemeType.LIGHT,
});
