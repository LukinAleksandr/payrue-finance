/* eslint-disable max-len */
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export default function MenuActionIcon({ sx, ...otherProps }: SvgIconProps) {
  return (
    <SvgIcon
      fill="#DDDDDD"
      sx={{ color: 'transparent', ...sx }}
      viewBox="0 0 23 23"
      {...otherProps}
    >
      <path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" />
    </SvgIcon>
  );
}
