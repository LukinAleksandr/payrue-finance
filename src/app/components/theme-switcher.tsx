import { useTheme } from '../hooks';

import { ThemeType } from '../theme/palette';
import {
  SwitchThemeStyled,
  MoonIconStyles,
  SunIconStyles,
} from './theme-switcher.styled';

export default function ThemeSwitcher({ className }: { className?: string }) {
  const { themeType, toggleTheme } = useTheme();

  return (
    <SwitchThemeStyled
      checked={themeType === ThemeType.DARK}
      checkedIcon={<MoonIconStyles />}
      className={className}
      offColor="#d1d1d1"
      onChange={(checked: boolean) =>
        toggleTheme(checked ? ThemeType.DARK : ThemeType.LIGHT)
      }
      onColor="#2A3554"
      uncheckedIcon={<SunIconStyles />}
    />
  );
}
