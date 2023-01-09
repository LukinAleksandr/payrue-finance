/* eslint-disable max-len */
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export default function CloseIcon({ sx, ...otherProps }: SvgIconProps) {
  return (
    <SvgIcon
      fill="#fff"
      height="28"
      sx={{ color: 'transparent', ...sx }}
      viewBox="0 0 36 36"
      width="28"
      {...otherProps}
    >
      <path d="M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z" />
    </SvgIcon>
  );
}
