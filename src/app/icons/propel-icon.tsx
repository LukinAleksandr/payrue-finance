/* eslint-disable max-len */
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export default function PropelIcon({ sx, ...otherProps }: SvgIconProps) {
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
        fill="#DDDDDD"
      />
      <path
        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
        fill="#6F41D8"
      />
      <path
        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
        fill="url(#paint0_linear_546_4496)"
        style={{ mixBlendMode: 'soft-light' }}
      />
      <path
        d="M18.6299 19.1567C18.6299 19.1567 22.061 17.8653 22.061 14.3914C22.061 10.9176 18.2461 9.82352 18.2461 9.82352V6H15.6476V9.65432H13.1201V6H10.5217V9.65432H8V12.1357H10.5157V27H13.1496V19.3936L15.6772 19.4387L19.6575 23.843L23 23.8205L18.6299 19.1567ZM13.1201 16.9686V12.0736H17.372C17.372 12.0736 19.374 12.3951 19.5571 14.4196C19.687 15.8633 18.2697 16.9686 17.5138 16.9686C16.5925 16.9686 13.1201 16.9686 13.1201 16.9686Z"
        fill="white"
      />
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_546_4496"
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
