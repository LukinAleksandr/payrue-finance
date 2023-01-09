/* eslint-disable max-len */
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export default function BnbPropelIcon({ sx, ...otherProps }: SvgIconProps) {
  return (
    <SvgIcon
      height="32"
      sx={{ color: 'transparent', ...sx }}
      viewBox="0 0 32 32"
      width="32"
      {...otherProps}
    >
      <path
        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
        fill="#F3BA2F"
      />
      <path
        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
        fill="url(#paint0_linear_272_3681)"
        style={{ mixBlendMode: 'soft-light' }}
      />
      <path
        d="M18.9596 18.6988C18.9596 18.6988 22.325 17.3869 22.325 13.8579C22.325 10.3289 18.5831 9.21746 18.5831 9.21746V5.33325H16.0344V9.04558H13.5553V5.33325H11.0067V9.04558H8.53333V11.5663H11.0009V26.6666H13.5843V18.9394L16.0634 18.9852L19.9675 23.4595L23.246 23.4366L18.9596 18.6988ZM13.5553 16.476V11.5033H17.7258C17.7258 11.5033 19.6895 11.8298 19.869 13.8865C19.9964 15.3531 18.6063 16.476 17.8648 16.476C16.9612 16.476 13.5553 16.476 13.5553 16.476Z"
        fill="#F9FBFE"
      />
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_272_3681"
          x1="16"
          x2="16"
          y1="0"
          y2="32"
        >
          <stop stopColor="white" stopOpacity="0.5" />
          <stop offset="1" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </SvgIcon>
  );
}
