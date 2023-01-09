import { ButtonBase, styled, Typography } from '@mui/material';
import background from '../../../assets/images/staking-banner.png';

export const StakingBannerStyles = styled('div')(({ theme }) => ({
  width: '100%',
  position: 'relative',
  backgroundImage: 'linear-gradient(105.42deg, #79A3FF 0.89%, #5830F9 100%)',
  borderRadius: 10,
  overflow: 'hidden',
  '&:before': {
    content: "''",
    position: 'absolute',
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% auto',
    backgroundPosition: 'bottom right',
    width: '100%',
    height: '100%',
  },
  [theme.breakpoints.down('md')]: {},
}));

export const StakingBannerWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  padding: '28px 36px 38px 36px',
  [theme.breakpoints.down('md')]: {
    padding: '22px 32px',
  },
}));

export const StakingBannerTitle = styled(Typography)(({ theme }) => ({
  color: '#FFFFFF',
  zIndex: 2,
  position: 'relative',
  marginBottom: 12,
  [theme.breakpoints.down('md')]: {},
}));

export const StakingBannerText = styled('span')(({ theme }) => ({
  fontWeight: 400,
  fontSize: 18,
  lineHeight: '170%',
  letterSpacing: '0.01em',
  color: '#FFFFFF',
  zIndex: 2,
  position: 'relative',
  display: 'block',
  maxWidth: 357,
  marginBottom: 21,
  [theme.breakpoints.down('md')]: {
    fontSize: 14,
  },
}));

export const StakingBannerButton = styled(ButtonBase)(({ theme }) => ({
  backgroundColor: '#fff',
  padding: '10px 20px',
  borderRadius: 10,
  fontWeight: 400,
  fontSize: 22,
  lineHeight: '33px',
  color: '#373F51',
  [theme.breakpoints.down('md')]: {
    fontSize: 18,
    lineHeight: '27px',
  },
}));
