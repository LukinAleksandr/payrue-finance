/* eslint-disable max-len */
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export default function FacebookIcon({ sx, ...otherProps }: SvgIconProps) {
  return (
    <SvgIcon
      fill="#3E7AFF"
      sx={{ color: 'transparent', ...sx }}
      viewBox="0 0 23 23"
      {...otherProps}
    >
      <path d="M13.1399 21.9984V11.9654H16.3831L16.8686 8.05543H13.1399V5.55901C13.1399 4.427 13.4427 3.65547 15.0061 3.65547L17.0001 3.65452V0.157472C16.655 0.109995 15.4715 0.00357056 14.0946 0.00357056C11.2197 0.00357056 9.25159 1.82564 9.25159 5.17197V8.05553H6.00006V11.9655H9.25148V21.9985L13.1399 21.9984Z" />
    </SvgIcon>
  );
}
