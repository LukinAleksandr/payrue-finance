import { useContext } from 'react';
import { ThemeContext, ThemeContextData } from '../contexts/theme-context';

export function useTheme() {
  return useContext<ThemeContextData>(ThemeContext);
}
