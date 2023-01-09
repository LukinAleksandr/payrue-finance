/* eslint-disable max-len */
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export default function BUSDIcon({ sx, ...otherProps }: SvgIconProps) {
  return (
    <SvgIcon
      height="30"
      sx={{ color: 'transparent', ...sx }}
      viewBox="0 0 30 31"
      width="30"
      {...otherProps}
    >
      <path
        d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z"
        fill="#F3BA2F"
      />
      <path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" />
      <path
        d="M15 29.5C23.0081 29.5 29.5 23.0081 29.5 15C29.5 6.99187 23.0081 0.5 15 0.5C6.99187 0.5 0.5 6.99187 0.5 15C0.5 23.0081 6.99187 29.5 15 29.5Z"
        stroke="black"
        strokeOpacity="0.097"
      />
      <path
        d="M15 5L17.4776 7.53731L11.2388 13.7761L8.76123 11.2985L15 5Z"
        fill="white"
        stroke="black"
        strokeWidth="0.1"
      />
      <path
        d="M18.7612 8.76123L21.2388 11.2985L11.2388 21.2985L8.76123 18.8209L18.7612 8.76123Z"
        fill="white"
        stroke="black"
        strokeWidth="0.1"
      />
      <path
        d="M7.47761 12.5225L9.95522 15.0598L7.47761 17.5374L5 15.0598L7.47761 12.5225Z"
        fill="white"
        stroke="black"
        strokeWidth="0.1"
      />
      <path
        d="M22.5225 12.5225L25.0001 15.0598L15.0001 25.0598L12.5225 22.5822L22.5225 12.5225Z"
        fill="white"
        stroke="black"
        strokeWidth="0.1"
      />
    </SvgIcon>
  );
}
