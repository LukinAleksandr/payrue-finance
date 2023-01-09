import { styled, css } from '@mui/material/styles';
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

export const SocialStyles = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

export const LinkStyles = styled('a')(({ theme }) => ({
  marginLeft: 32,
  '&:first-of-type': {
    marginLeft: 0,
  },
  [theme.breakpoints.down('md')]: {
    marginLeft: 15,
  },
}));

export const sharedIcon = css;

export const Discord = styled(DiscordIcon)(({ theme }) => ({
  cursor: 'pointer',
  transition: '0.3s',
  fill: theme.palette.primary.light,
  '&:hover': {
    opacity: '0.7',
  },
}));

export const Facebook = styled(FacebookIcon)(({ theme }) => ({
  cursor: 'pointer',
  transition: '0.3s',
  fill: theme.palette.primary.light,
  '&:hover': {
    opacity: '0.7',
  },
}));

export const Forum = styled(ForumIcon)(({ theme }) => ({
  cursor: 'pointer',
  transition: '0.3s',
  fill: theme.palette.primary.light,
  stroke: theme.palette.primary.light,
  '&:hover': {
    opacity: '0.7',
  },
}));

export const Github = styled(GithubIcon)(({ theme }) => ({
  cursor: 'pointer',
  transition: '0.3s',
  fill: theme.palette.primary.light,
  '&:hover': {
    opacity: '0.7',
  },
}));

export const Instagram = styled(InstagramIcon)(({ theme }) => ({
  cursor: 'pointer',
  transition: '0.3s',
  fill: theme.palette.primary.light,
  '&:hover': {
    opacity: '0.7',
  },
}));

export const Payrue = styled(PayrueIcon)(({ theme }) => ({
  cursor: 'pointer',
  transition: '0.3s',
  fill: theme.palette.primary.light,
  '&:hover': {
    opacity: '0.7',
  },
}));

export const Reddit = styled(RedditIcon)(({ theme }) => ({
  cursor: 'pointer',
  transition: '0.3s',
  fill: theme.palette.primary.light,
  '&:hover': {
    opacity: '0.7',
  },
}));

export const Telegram = styled(TelegramIcon)(({ theme }) => ({
  cursor: 'pointer',
  transition: '0.3s',
  fill: theme.palette.primary.light,
  '&:hover': {
    opacity: '0.7',
  },
}));

export const Twitter = styled(TwitterIcon)(({ theme }) => ({
  cursor: 'pointer',
  transition: '0.3s',
  fill: theme.palette.primary.light,
  '&:hover': {
    opacity: '0.7',
  },
}));
