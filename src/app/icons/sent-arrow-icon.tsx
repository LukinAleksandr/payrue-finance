/* eslint-disable max-len */
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export default function SentArrowIcon({ sx, ...otherProps }: SvgIconProps) {
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
        fill="#0050FF"
      />
      <path
        d="M14 20L19 16M27 20H14H27ZM14 20L19 24L14 20Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </SvgIcon>
  );
}
