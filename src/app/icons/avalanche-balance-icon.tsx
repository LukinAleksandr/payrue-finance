/* eslint-disable max-len */
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import { useTheme } from '../hooks';

export default function AvalancheBalanceIcon({
  sx,
  ...otherProps
}: SvgIconProps) {
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
        fill="#E84142"
      />
      <path
        d="M17.5857 13.3378C18.0361 12.5599 18.7629 12.5599 19.2133 13.3378L22.018 18.2615C22.4684 19.0394 22.0999 19.6741 21.1991 19.6741H15.5487C14.6582 19.6741 14.2896 19.0394 14.7298 18.2615L17.5857 13.3378ZM12.1605 3.8591C12.6109 3.08115 13.3274 3.08115 13.7778 3.8591L14.4022 4.98508L15.8763 7.57485C16.2345 8.31186 16.2345 9.18193 15.8763 9.91894L10.9322 18.4867C10.4818 19.1827 9.73453 19.6229 8.9054 19.6741H4.80067C3.89989 19.6741 3.53138 19.0497 3.98178 18.2615L12.1605 3.8591Z"
        fill={color}
      />
    </SvgIcon>
  );
}
