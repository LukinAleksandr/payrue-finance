import {
  StakingBannerStyles,
  StakingBannerWrapper,
  StakingBannerText,
  StakingBannerTitle,
  StakingBannerButton,
} from './staking-banner.styles';

function StakingBanner() {
  const handleClick = () => {
    window.open('https://nft.payrue.com/exchange/rewards', '_blank');
  };

  return (
    <StakingBannerStyles>
      <StakingBannerWrapper>
        <StakingBannerTitle variant="h2">Trading Rewards</StakingBannerTitle>
        <StakingBannerText>
          One more earn variant using PayRue - Trade NFT and receive tokens
          daily
        </StakingBannerText>
        <StakingBannerButton onClick={handleClick}>More</StakingBannerButton>
      </StakingBannerWrapper>
    </StakingBannerStyles>
  );
}

export default StakingBanner;
