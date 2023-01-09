/* eslint-disable max-len */
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export default function SelectChevronIcon({ sx, ...otherProps }: SvgIconProps) {
  return (
    <SvgIcon
      fill="#3E7AFF"
      height="7px"
      sx={{ color: 'transparent', ...sx }}
      viewBox="0 0 8 7"
      width="8px"
      {...otherProps}
    >
      <path d="M4 7L0.102887 0.249999L7.89711 0.25L4 7Z" fill="#3E7AFF" />
    </SvgIcon>
  );
}
