import {
  ProfileButtonStyles,
  ProfileButtonAddress,
  ProfileButtonAvatar,
} from './profile-button.styled';
import { history, trimming } from '../utils';
import { WalletIcon } from '../icons';
import { getProfilePath } from '../app-router-paths';

export interface ProfileButton {
  address: string;
}

function ProfileButton({ address }: ProfileButton) {
  return (
    <ProfileButtonStyles onClick={() => history.push(getProfilePath())}>
      <ProfileButtonAvatar>
        <WalletIcon />
      </ProfileButtonAvatar>
      <ProfileButtonAddress>{trimming(address)}</ProfileButtonAddress>
    </ProfileButtonStyles>
  );
}

export default ProfileButton;
