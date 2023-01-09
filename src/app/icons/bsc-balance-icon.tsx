/* eslint-disable max-len */
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import { useTheme } from '../hooks';

export default function BscBalanceIcon({ sx, ...otherProps }: SvgIconProps) {
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
        d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
        fill="#F3BA2C"
      />
      <path
        d="M18.5781 16.4958L18.5763 16.4967L13.0002 22.0737L7.42506 16.4985L7.42236 16.4958L9.47547 14.4481L13.0002 17.9719L16.5259 14.4463L18.5781 16.4958Z"
        fill={color}
      />
      <path
        d="M18.578 9.50299L16.5276 11.5534L13.0019 8.02774L9.47716 11.5516L7.42676 9.50119L13.0019 3.92603L18.578 9.50299Z"
        fill={color}
      />
      <path
        d="M20.0233 10.9503L17.9727 13.001L20.0233 15.0516L22.0739 13.001L20.0233 10.9503Z"
        fill={color}
      />
      <path
        d="M5.97693 10.9493L3.92627 13L5.97693 15.0507L8.02758 13L5.97693 10.9493Z"
        fill={color}
      />
      <path
        d="M15.0806 12.999H15.0815L13.0004 10.918L11.4631 12.4553L11.2867 12.6317L10.9221 12.9963L10.9194 12.999L10.9221 13.0017L13.0013 15.0809L15.0824 12.9999L15.0833 12.999H15.0806Z"
        fill={color}
      />
    </SvgIcon>
  );
}
