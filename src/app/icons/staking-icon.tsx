/* eslint-disable max-len */
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export default function StakingIcon(props: SvgIconProps) {
  return (
    <SvgIcon
      height="32"
      stroke="#DDDDDD"
      viewBox="0 0 32 32"
      width="32"
      {...props}
    >
      <path
        d="M5.57469 20.5L16 14.853L26.4253 20.5L16 26.147L5.57469 20.5ZM16.1191 26.2115L16.1187 26.2113L16.1191 26.2115Z"
        fill="transparent"
        strokeWidth="1.5"
      />
      <path
        d="M5.67705 16L16 10.8385L26.3229 16L16 21.1615L5.67705 16Z"
        fill="transparent"
        strokeWidth="1.5"
      />
      <path d="M16 5.56864L26.9502 11.5L16 17.4314L5.0498 11.5L16 5.56864Z" />
    </SvgIcon>
  );
}
