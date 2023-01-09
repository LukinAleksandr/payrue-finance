/* eslint-disable max-len */
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export default function SwapIcon({ sx, ...otherProps }: SvgIconProps) {
  return (
    <SvgIcon
      height="22"
      stroke="#999999"
      sx={{ color: 'transparent', fill: '#F3BA2F', ...sx }}
      viewBox="0 0 20 22"
      width="20"
      {...otherProps}
    >
      <path
        d="M5 1L9 6M5 14V1V14ZM5 1L1 6L5 1Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 8V21M15 21L11 16M15 21L19 16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
}
