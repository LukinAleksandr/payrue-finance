/* eslint-disable max-len */
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export default function PayrueIcon({ sx, ...otherProps }: SvgIconProps) {
  return (
    <SvgIcon
      fill="#3E7AFF"
      sx={{ color: 'transparent', ...sx }}
      viewBox="0 0 23 23"
      {...otherProps}
    >
      <path d="M14.7559 14.5772C14.7559 14.5772 18.8733 13.1464 18.8733 9.29741C18.8733 5.44847 14.2953 4.2363 14.2953 4.2363V-6.10352e-05H11.1772V4.04883H8.14416V-6.10352e-05H5.02604V4.04883H2.00006V6.7981H5.01896V22.9999H8.1796V14.8397L11.2127 14.8896L15.989 19.7696L20.0001 19.7446L14.7559 14.5772ZM8.14416 12.1529V6.72935H13.2465C13.2465 6.72935 15.6489 7.08552 15.8685 9.32865C16.0244 10.9282 14.3237 12.1529 13.4166 12.1529C12.3111 12.1529 8.14416 12.1529 8.14416 12.1529Z" />
    </SvgIcon>
  );
}
