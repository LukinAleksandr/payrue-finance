/* eslint-disable max-len */
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export default function ChevronIcon({ sx, ...otherProps }: SvgIconProps) {
  return (
    <SvgIcon
      height="13"
      stroke="#DDDDDD"
      sx={{ color: 'transparent', ...sx }}
      viewBox="0 0 13 13"
      width="13"
      {...otherProps}
    >
      <path d="M12 4L6.5 9.5L1 4" strokeLinecap="round" />
    </SvgIcon>
  );
}
