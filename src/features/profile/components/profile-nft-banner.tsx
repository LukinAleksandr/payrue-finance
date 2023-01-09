import Button, { ButtonVariant } from '../../../app/components/button';
import {
  ProfileNFTBannerStyled,
  ProfileNFTBannerText,
  ProfileNFTBannerImage,
} from './profile-nft-banner.styled';

import bannerLight from '../../../assets/images/nfts-banner-light.png';
import bannerDark from '../../../assets/images/nfts-banner-dark.png';
import { useTheme } from '../../../app/hooks';
import { ThemeType } from '../../../app/theme/palette';

function ProfileNFTBanner() {
  const { themeType } = useTheme();

  const handleClick = () => window.open('https://nft.payrue.com/', '_blank');
  return (
    <ProfileNFTBannerStyled>
      <ProfileNFTBannerImage
        src={themeType === ThemeType.LIGHT ? bannerLight : bannerDark}
      />
      <ProfileNFTBannerText>Best Place for NFT</ProfileNFTBannerText>
      <Button onClick={handleClick} variant={ButtonVariant.primary}>
        Open PayRue NFT
      </Button>
    </ProfileNFTBannerStyled>
  );
}

export default ProfileNFTBanner;
