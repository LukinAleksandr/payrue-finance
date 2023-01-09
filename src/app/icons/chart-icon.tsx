/* eslint-disable max-len */
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export default function ChartIcon({ sx, ...otherProps }: SvgIconProps) {
  return (
    <SvgIcon
      stroke="#DDDDDD"
      sx={{ color: 'transparent', ...sx }}
      viewBox="0 0 24 24"
      width="24px"
      {...otherProps}
    >
      <rect
        height="7.7"
        strokeLinejoin="bevel"
        strokeWidth="1.3"
        width="4.7"
        x="2.65"
        y="10.65"
      />
      <rect
        height="10.7"
        strokeLinejoin="bevel"
        strokeWidth="1.3"
        width="4.7"
        x="9.65"
        y="7.65"
      />
      <rect
        height="15.7"
        strokeLinejoin="bevel"
        strokeWidth="1.3"
        width="4.7"
        x="16.65"
        y="2.65"
      />
      <path d="M2 21H22" strokeLinejoin="bevel" strokeWidth="1.3" />
    </SvgIcon>
  );
}
