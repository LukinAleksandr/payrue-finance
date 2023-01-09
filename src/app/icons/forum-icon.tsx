/* eslint-disable max-len */
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export default function ForumIcon({ sx, ...otherProps }: SvgIconProps) {
  return (
    <SvgIcon
      fill="#3E7AFF"
      stroke="#3E7AFF"
      sx={{ color: 'transparent', ...sx }}
      viewBox="0 0 23 23"
      {...otherProps}
    >
      <path
        d="M2.59009 0.999939H16.0742C16.0742 0.999939 17.9396 1.03209 17.9701 2.5595C18.0005 4.08692 17.9701 11.1217 17.9701 11.1217C17.9701 11.1217 18.3372 13.1268 16.5023 13.2541C14.6673 13.3813 9.07244 13.2541 9.07244 13.2541L4.48551 17.6461C4.48551 17.6461 4.02699 18.4422 3.69071 17.6461L4.4246 13.3175H2.03978C2.03978 13.3175 1.00006 13.063 1.00006 11.1851V2.71889C1.00006 2.71889 1.09185 0.999939 2.59009 0.999939Z"
        fill="none"
        strokeMiterlimit="10"
      />
      <path d="M19.7723 4.99994V13.4672C19.7723 13.4672 19.71 15.4495 17.833 15.4495H9.87542L7.00006 18.391H12.9188L18.0689 22.7592C18.0689 22.7592 18.6551 23.3936 18.7504 22.6026C18.8457 21.8117 18.8436 18.6384 18.8436 18.6384C18.8436 18.6384 22.0001 18.94 22.0001 15.4117V7.09306C22.0001 7.09306 21.3233 4.99994 19.7723 4.99994Z" />
      <path d="M6.50006 8.99957C7.32849 8.99957 8.00006 8.32808 8.00006 7.49976C8.00006 6.67143 7.32849 5.99994 6.50006 5.99994C5.67163 5.99994 5.00006 6.67143 5.00006 7.49976C5.00006 8.32808 5.67163 8.99957 6.50006 8.99957Z" />
      <path d="M11.5001 8.99957C12.3285 8.99957 13.0001 8.32808 13.0001 7.49976C13.0001 6.67143 12.3285 5.99994 11.5001 5.99994C10.6716 5.99994 10.0001 6.67143 10.0001 7.49976C10.0001 8.32808 10.6716 8.99957 11.5001 8.99957Z" />
    </SvgIcon>
  );
}