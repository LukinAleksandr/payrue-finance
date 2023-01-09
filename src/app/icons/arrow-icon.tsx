/* eslint-disable max-len */
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export default function ArrowIcon({ sx, ...otherProps }: SvgIconProps) {
  return (
    <SvgIcon
      fill="white"
      height="16"
      sx={{ color: 'transparent', ...sx }}
      viewBox="0 0 53 16"
      width="53"
      {...otherProps}
    >
      <path d="M1 7L8.74228e-08 7L-8.74228e-08 9L1 9L1 7ZM52.7071 8.70711C53.0976 8.31659 53.0976 7.68342 52.7071 7.2929L46.3431 0.928936C45.9526 0.538412 45.3195 0.538412 44.9289 0.928936C44.5384 1.31946 44.5384 1.95263 44.9289 2.34315L50.5858 8L44.9289 13.6569C44.5384 14.0474 44.5384 14.6805 44.9289 15.0711C45.3195 15.4616 45.9526 15.4616 46.3431 15.0711L52.7071 8.70711ZM1 9L52 9L52 7L1 7L1 9Z" />
    </SvgIcon>
  );
}
