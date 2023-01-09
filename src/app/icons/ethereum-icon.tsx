/* eslint-disable max-len */
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export default function EthereumIcon({ sx, ...otherProps }: SvgIconProps) {
  return (
    <SvgIcon
      fill="#3E7AFF"
      height="38"
      sx={{ color: 'transparent', ...sx }}
      viewBox="0 0 38 38"
      width="38"
      {...otherProps}
    >
      <path
        d="M0 19C0 8.50659 8.50659 0 19 0C29.4934 0 38 8.50659 38 19C38 29.4934 29.4934 38 19 38C8.50659 38 0 29.4934 0 19Z"
        fill="#F3F3F3"
      />
      <path
        d="M18.4962 3.70001L18.2976 4.37456V23.9465L18.4962 24.1447L27.5811 18.7745L18.4962 3.70001Z"
        fill="#343434"
      />
      <path
        d="M18.4977 3.70001L9.4126 18.7745L18.4977 24.1447V14.645V3.70001Z"
        fill="#8C8C8C"
      />
      <path
        d="M18.4963 25.8619L18.3844 25.9984V32.9702L18.4963 33.2969L27.5868 20.4945L18.4963 25.8619Z"
        fill="#3C3C3B"
      />
      <path
        d="M18.4977 33.2969V25.8619L9.4126 20.4945L18.4977 33.2969Z"
        fill="#8C8C8C"
      />
      <path
        d="M18.4963 24.1552L27.5813 18.785L18.4963 14.6555V24.1552Z"
        fill="#141414"
      />
      <path
        d="M9.4126 18.785L18.4977 24.1552V14.6555L9.4126 18.785Z"
        fill="#393939"
      />
    </SvgIcon>
  );
}
