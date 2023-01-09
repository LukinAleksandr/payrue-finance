/* eslint-disable max-len */
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export default function BnbIcon({ sx, ...otherProps }: SvgIconProps) {
  return (
    <SvgIcon
      height="32"
      sx={{ color: 'transparent', ...sx }}
      viewBox="0 0 30 30"
      width="32"
      {...otherProps}
    >
      <path
        d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z"
        fill="#F3BA2F"
      />
      <path
        d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z"
        fill="url(#paint0_linear_272_3674)"
        style={{ mixBlendMode: 'soft-light' }}
      />
      <path
        d="M11.116 13.404L15 9.52L18.886 13.406L21.146 11.146L15 5L8.856 11.144L11.116 13.404ZM5 15L7.26 12.74L9.52 15L7.26 17.26L5 15ZM11.116 16.596L15 20.48L18.886 16.594L21.146 18.853L15 25L8.856 18.856L8.853 18.853L11.116 16.596ZM20.48 15L22.74 12.74L25 15L22.74 17.26L20.48 15ZM17.292 14.998H17.294V15L15 17.294L12.709 15.004L12.705 15L12.709 14.997L13.11 14.595L13.305 14.4L15 12.706L17.293 14.999L17.292 14.998Z"
        fill="#F9FBFE"
      />
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_272_3674"
          x1="15"
          x2="15"
          y1="0"
          y2="30"
        >
          <stop stopColor="white" stopOpacity="0.5" />
          <stop offset="1" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </SvgIcon>
  );
}
