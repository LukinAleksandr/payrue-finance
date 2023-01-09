/* eslint-disable max-len */
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import { useTheme } from '../hooks';

export default function EthereumBalanceIcon({
  sx,
  ...otherProps
}: SvgIconProps) {
  const { theme } = useTheme();

  const color = theme?.palette.background.default;

  return (
    <SvgIcon
      fill="white"
      height="26"
      sx={{ color: 'transparent', ...sx }}
      viewBox="0 0 26 26"
      width="26"
      {...otherProps}
    >
      <path
        d="M12.6394 25.2973C19.625 25.2973 25.288 19.6343 25.288 12.6486C25.288 5.66299 19.625 0 12.6394 0C5.65372 0 -0.00927734 5.66299 -0.00927734 12.6486C-0.00927734 19.6343 5.65372 25.2973 12.6394 25.2973Z"
        fill="#899EF0"
      />
      <path
        d="M13.0327 3.16211V10.1742L18.9594 12.8225L13.0327 3.16211Z"
        fill="white"
        fillOpacity="0.602"
      />
      <path
        d="M13.0324 3.16211L7.10498 12.8225L13.0324 10.1742V3.16211Z"
        fill={color}
      />
      <path
        d="M13.0327 17.3667V22.1313L18.9634 13.9263L13.0327 17.3667Z"
        fill="white"
        fillOpacity="0.602"
      />
      <path
        d="M13.0324 22.1313V17.3659L7.10498 13.9263L13.0324 22.1313Z"
        fill={color}
      />
      <path
        d="M13.0327 16.2637L18.9594 12.8225L13.0327 10.1758V16.2637Z"
        fill="white"
        fillOpacity="0.2"
      />
      <path
        d="M7.10498 12.8225L13.0324 16.2637V10.1758L7.10498 12.8225Z"
        fill="white"
        fillOpacity="0.602"
      />
    </SvgIcon>
  );
}
