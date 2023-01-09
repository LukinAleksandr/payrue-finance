/* eslint-disable max-len */
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export default function MenuChevronIcon({ sx, ...otherProps }: SvgIconProps) {
  return (
    <SvgIcon
      fill="#878C97"
      height="13px"
      sx={{ color: 'transparent', ...sx }}
      viewBox="0 0 15 13"
      width="15px"
      {...otherProps}
    >
      <path d="M7.50011 13L0.138897 0.25L7.50011 8.5L14.8613 0.25L7.50011 13Z" />
    </SvgIcon>
  );
}
