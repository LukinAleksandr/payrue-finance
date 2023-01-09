/* eslint-disable max-len */
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export default function ReceivedArrowIcon({ sx, ...otherProps }: SvgIconProps) {
  return (
    <SvgIcon
      fill="white"
      height="40"
      sx={{ color: 'transparent', ...sx }}
      viewBox="0 0 40 40"
      width="40"
      {...otherProps}
    >
      <path
        d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40Z"
        fill="#4DC323"
      />
      <path
        d="M26 20L21 24M13 20L26 20L13 20ZM26 20L21 16L26 20Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </SvgIcon>
  );
}
