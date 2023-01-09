/* eslint-disable max-len */
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import { useTheme } from '../hooks';

export default function FantomBalanceIcon({ sx, ...otherProps }: SvgIconProps) {
  const { theme } = useTheme();

  const color = theme?.palette.background.default;

  return (
    <SvgIcon
      fill="white"
      height="26"
      sx={{ color: 'transparent', ...sx }}
      viewBox="0 0 26 26"
      width="26"
      {...otherProps}
    >
      <path
        d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
        fill="#13B5EC"
      />
      <path
        clipRule="evenodd"
        d="M13.975 10.4812L16.9 8.775V12.1875L13.975 10.4812ZM16.9 17.7937L13 20.0687L9.1 17.7937V13.8125L13 16.0875L16.9 13.8125V17.7937ZM9.1 8.775L12.025 10.4812L9.1 12.1875V8.775ZM13.4875 11.2937L16.4125 13L13.4875 14.7062V11.2937ZM12.5125 14.7062L9.5875 13L12.5125 11.2937V14.7062ZM16.4125 7.9625L13 9.9125L9.5875 7.9625L13 5.93125L16.4125 7.9625ZM8.125 7.6375V18.2812L13 21.0437L17.875 18.2812V7.6375L13 4.875L8.125 7.6375Z"
        fill={color}
        fillRule="evenodd"
      />
    </SvgIcon>
  );
}
