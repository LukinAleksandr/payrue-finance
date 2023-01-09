import { styled } from '@mui/material/styles';
import {
  DiscordIcon,
  FacebookIcon,
  ForumIcon,
  GithubIcon,
  InstagramIcon,
  PayrueIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
} from '../icons';

export const sharedIcon = {
  cursor: 'pointer',
  width: 36,
  transition: '0.3s',

  '&:hover': {
    opacity: 0.7,
  },
};

export const DiscordIconStyled = styled(DiscordIcon)(({ theme }) => ({
  ...sharedIcon,
  fill: theme.palette.primary.light,
}));

export const FacebookIconStyled = styled(FacebookIcon)(({ theme }) => ({
  ...sharedIcon,
  fill: theme.palette.primary.light,
}));

export const ForumIconStyled = styled(ForumIcon)(({ theme }) => ({
  ...sharedIcon,
  fill: theme.palette.primary.light,
}));
export const GithubIconStyled = styled(GithubIcon)(({ theme }) => ({
  ...sharedIcon,
  fill: theme.palette.primary.light,
}));
export const InstagramIconStyled = styled(InstagramIcon)(({ theme }) => ({
  ...sharedIcon,
  fill: theme.palette.primary.light,
}));
export const PayrueIconStyled = styled(PayrueIcon)(({ theme }) => ({
  ...sharedIcon,
  fill: theme.palette.primary.light,
}));
export const RedditIconStyled = styled(RedditIcon)(({ theme }) => ({
  ...sharedIcon,
  fill: theme.palette.primary.light,
}));
export const TelegramIconStyled = styled(TelegramIcon)(({ theme }) => ({
  ...sharedIcon,
  fill: theme.palette.primary.light,
}));
export const TwitterIconStyled = styled(TwitterIcon)(({ theme }) => ({
  ...sharedIcon,
  fill: theme.palette.primary.light,
}));

export const FollowStyles = styled('div')({
  padding: 12,
  gap: 48,
  margin: '0 auto',
  maxWidth: 400,
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
});

export const Row = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
});

export const IconWrapper = styled('a')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textDecoration: 'none',
  color: '#000',
  gap: 10,
  fontWeight: 500,
  fontSize: 16,
  lineHeight: '24px',
});
