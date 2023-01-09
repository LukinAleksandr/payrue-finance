import { ButtonBase, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import background from '../../../assets/images/swap-banner.png';
import backgroundMob from '../../../assets/images/swap-banner-mob.png';
import { ArrowIcon } from '../../../app/icons';

export const SwapBannerStyled = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  backgroundImage: `url(${background})`,
  backgroundColor: '#141414',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  padding: '16px 20px 16px 32px',
  width: '100%',
  borderRadius: 18,
  overflow: 'hidden',
  marginBottom: 32,
  [theme.breakpoints.down('md')]: {
    height: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '18px 20px',
    backgroundImage: `url(${backgroundMob})`,
  },
}));

export const SwapBannerTitle = styled(Typography)(({ theme }) => ({
  marginBottom: 12,
  color: '#fff',
  [theme.breakpoints.down('md')]: {
    marginBottom: 0,
    fontSize: 22,
    lineHeight: '33px',
  },
}));

export const SwapBannerText = styled('p')({
  fontWeight: 400,
  fontSize: 16,
  lineHeight: '24px',
  color: '#fff',
  margin: 0,
  maxWidth: 353,
});

export const SwapBannerArrow = styled(ArrowIcon)({
  color: '#fff',
  width: 51,
  height: 'auto',
});

export const SwapBannerButton = styled(ButtonBase)({
  backgroundColor: '#fff',
  padding: '10px 20px',
  borderRadius: 10,
  fontWeight: 400,
  fontSize: 22,
  lineHeight: '33px',
  color: '#373F51',
  position: 'absolute',
  right: 20,
  bottom: 20,
});
