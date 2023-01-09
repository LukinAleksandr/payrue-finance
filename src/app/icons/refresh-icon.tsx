/* eslint-disable max-len */
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export default function RefreshIcon({ sx, ...otherProps }: SvgIconProps) {
  return (
    <SvgIcon
      height="24"
      stroke="#373F51"
      sx={{ color: 'transparent', ...sx }}
      viewBox="0 0 24 24"
      width="24"
      {...otherProps}
    >
      <path
        d="M12 18.5C14.3333 18.6667 19 17.4 19 11M19 11L16 13M19 11L21.5 13.5"
        strokeWidth="1.5"
      />
      <path
        d="M11.5 5.01392C9.16667 4.84725 4.5 6.11392 4.5 12.5139M4.5 12.5139L7.5 10.5139M4.5 12.5139L2 10.0139"
        strokeWidth="1.5"
      />
    </SvgIcon>
  );
}
