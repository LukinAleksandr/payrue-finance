import { Theme, useMediaQuery } from '@mui/material';
import {
  SwapBannerStyled,
  SwapBannerText,
  SwapBannerTitle,
  SwapBannerArrow,
  SwapBannerButton,
} from './swap-banner.styled';

function SwapBanner() {
  const isUpMd = useMediaQuery<Theme>((theme) => theme.breakpoints.up('md'));

  const handleClick = () => {
    window.open('https://nft.payrue.com/exchange/rewards', '_blank');
  };

  return (
    <SwapBannerStyled>
      <SwapBannerTitle variant="h2">NFT Trading Rewards</SwapBannerTitle>
      {isUpMd && (
        <SwapBannerText>
          Earn $ when trading NFT on PayRue, claim rewards daily in your wallet!
        </SwapBannerText>
      )}
      {isUpMd ? (
        <SwapBannerButton onClick={handleClick}>More</SwapBannerButton>
      ) : (
        <SwapBannerArrow onClick={handleClick} />
      )}
    </SwapBannerStyled>
  );
}

export default SwapBanner;
