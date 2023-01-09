import {
  ReactElement,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';
import { Theme } from '@mui/material';
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from '@mui/material/styles';
import * as ls from 'local-storage';
import customPalette, { ThemeType } from '../theme/palette';
import { LocalStorageData } from '../common-types';
import { ThemeContext } from './theme-context';
import breakpoints from '../theme/breakpoints';
import fonts from '../theme/fonts';
import components from '../theme/components';

interface ThemeProviderProps {
  children: ReactElement;
}

function ThemeProvider({ children }: ThemeProviderProps) {
  const [themeType, setThemeType] = useState<ThemeType>(ThemeType.LIGHT);
  const [theme, setTheme] = useState<Theme>(
    createTheme({
      palette: customPalette[ThemeType.LIGHT],
      breakpoints,
      components,
      ...fonts,
    }),
  );

  useLayoutEffect(() => {
    const userThemeType = ls.get(LocalStorageData.THEME_STORAGE) as
      | ThemeType
      | undefined;

    if (userThemeType) {
      setThemeType(userThemeType);
    }
  }, []);

  const toggleTheme = useCallback((newThemeType: ThemeType) => {
    setThemeType(newThemeType);
    ls.set(LocalStorageData.THEME_STORAGE, newThemeType);
  }, []);

  useEffect(() => {
    const palette = customPalette[themeType];
    setTheme(
      createTheme({
        palette,
        breakpoints,
        components,
        ...fonts,
      }),
    );
  }, [themeType]);

  const value = useMemo(
    () => ({
      themeType,
      toggleTheme,
      theme,
    }),
    [themeType, toggleTheme, theme],
  );

  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
