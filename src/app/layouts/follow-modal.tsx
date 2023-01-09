import { DialogProps } from '@mui/material';
import { Modal } from '../components';
import {
  FollowStyles,
  Row,
  IconWrapper,
  TelegramIconStyled,
  TwitterIconStyled,
  InstagramIconStyled,
  GithubIconStyled,
  DiscordIconStyled,
  FacebookIconStyled,
  ForumIconStyled,
  RedditIconStyled,
  PayrueIconStyled,
} from './follow-modal.styled';

function Follow(props: DialogProps) {
  return (
    <Modal {...props}>
      <FollowStyles>
        <Row>
          <IconWrapper href="https://twitter.com/pay_rue">
            <TwitterIconStyled />
            Twitter
          </IconWrapper>
          <IconWrapper href="https://discord.com/invite/JDWCV5DgqS">
            <DiscordIconStyled />
            Discord
          </IconWrapper>
          <IconWrapper href="https://forum.payrue.com/">
            <ForumIconStyled />
            Forum
          </IconWrapper>
        </Row>
        <Row>
          <IconWrapper href="https://github.com/payRueOrg">
            <GithubIconStyled />
            GitHub
          </IconWrapper>
          <IconWrapper href="https://t.me/payrue_global">
            <TelegramIconStyled />
            Telegram
          </IconWrapper>
          <IconWrapper href="https://www.reddit.com/user/payrue">
            <RedditIconStyled />
            Reddit
          </IconWrapper>
        </Row>
        <Row>
          <IconWrapper href="https://www.facebook.com/payrue">
            <FacebookIconStyled />
            Facebook
          </IconWrapper>
          <IconWrapper href="https://www.instagram.com/payrueofficial">
            <InstagramIconStyled />
            Instagram
          </IconWrapper>
          <IconWrapper href="https://payrue.chat/home.html#/login">
            <PayrueIconStyled />
            PayRue
          </IconWrapper>
        </Row>
      </FollowStyles>
    </Modal>
  );
}

export default Follow;
