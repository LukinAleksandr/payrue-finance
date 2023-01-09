/* eslint-disable max-len */
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export default function LogoIcon({ sx, ...otherProps }: SvgIconProps) {
  return (
    <SvgIcon
      sx={{ color: 'transparent', ...sx }}
      viewBox="0 0 52 67"
      {...otherProps}
    >
      <path
        d="M36.8503 42.4643C36.8503 42.4643 48.7449 38.2961 48.7449 27.0839C48.7449 15.8718 35.5197 12.3407 35.5197 12.3407V0H26.5118V11.7946H17.7496V0H8.74173V11.7946H0V19.8033H8.72125V67H17.852V43.2287L26.6141 43.3743L40.4126 57.5898L52 57.517L36.8503 42.4643ZM17.7496 35.402V19.6031H32.4898C32.4898 19.6031 39.4299 20.6406 40.0645 27.1749C40.5149 31.8346 35.6015 35.402 32.9811 35.402C29.7874 35.402 17.7496 35.402 17.7496 35.402Z"
        fill="url(#paint0_linear_1214_383)"
      />
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_1214_383"
          x1="26"
          x2="26"
          y1="0"
          y2="67"
        >
          <stop stopColor="#017AFF" />
          <stop offset="1" stopColor="#3C53B9" />
        </linearGradient>
      </defs>
    </SvgIcon>
  );
}
