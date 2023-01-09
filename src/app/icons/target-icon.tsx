/* eslint-disable max-len */
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export default function TargetIcon({ sx, ...otherProps }: SvgIconProps) {
  return (
    <SvgIcon
      stroke="#878C97"
      sx={{ color: 'transparent', ...sx }}
      viewBox="0 0 20 20"
      {...otherProps}
    >
      <path
        d="M3 6.5V16C3 16.5523 3.44772 17 4 17H15.5C16.0523 17 16.5 16.5523 16.5 16V12.5M5.5 15C5.5 8 10 7 16.5 7M16.5 7C15.3 8.2 14 9.5 13.5 10M16.5 7L13.5 4"
        strokeWidth="1.5"
      />
    </SvgIcon>
  );
}
