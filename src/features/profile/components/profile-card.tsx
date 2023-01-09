import {
  ProfileCardStyled,
  ProfileCardImage,
  ProfileCardAvatar,
  ProfileCardCell,
  ProfileCardTitle,
  ProfileCardWallet,
  CopyIconStyled,
  LogoutIconStyled,
} from './profile-card.styled';
import { trimming } from '../../../app';
import { useAppSelector } from '../../../app/store';
import { useConnect } from '../../../app/hooks/use-connect';

function ProfileCard() {
  const { disconnect } = useConnect();
  const address = useAppSelector((state) => state.networks.address) || '';
  const profileAvatar =
    useAppSelector((state) => state.profile.data?.avatar) || '';

  const firstName = useAppSelector((state) => state.profile.data?.firstName);
  const lastName = useAppSelector((state) => state.profile.data?.lastName);

  const url = `${process.env.REACT_APP_NFT_API}/uploads/wallets/${profileAvatar}`;

  return (
    <ProfileCardStyled>
      <ProfileCardImage>
        {profileAvatar && <ProfileCardAvatar alt="avatar" src={url} />}
      </ProfileCardImage>
      <ProfileCardCell>
        <ProfileCardTitle variant="h4">
          {firstName && lastName ? `${firstName} ${lastName}` : 'My wallet'}
        </ProfileCardTitle>
        <ProfileCardWallet>
          {trimming(address)}
          <CopyIconStyled
            onClick={() => navigator.clipboard.writeText(address)}
          />
          <LogoutIconStyled onClick={disconnect} />
        </ProfileCardWallet>
      </ProfileCardCell>
    </ProfileCardStyled>
  );
}

export default ProfileCard;
