/* eslint-disable max-len */
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export default function StakingActionIcon({ sx, ...otherProps }: SvgIconProps) {
  return (
    <SvgIcon
      fill="#DDDDDD"
      sx={{ color: 'transparent', ...sx }}
      viewBox="0 0 23 23"
      {...otherProps}
    >
      <path d="M19 19V16H5V19H19ZM19 14V10H5V14H19ZM19 8V5H5V8H19ZM5 21C4.45 21 3.979 20.8043 3.587 20.413C3.19567 20.021 3 19.55 3 19V5C3 4.45 3.19567 3.979 3.587 3.587C3.979 3.19567 4.45 3 5 3H19C19.55 3 20.021 3.19567 20.413 3.587C20.8043 3.979 21 4.45 21 5V19C21 19.55 20.8043 20.021 20.413 20.413C20.021 20.8043 19.55 21 19 21H5Z" />
    </SvgIcon>
  );
}
