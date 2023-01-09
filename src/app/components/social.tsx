import {
  SocialStyles,
  LinkStyles,
  Discord,
  Facebook,
  Forum,
  Github,
  Instagram,
  Payrue,
  Reddit,
  Telegram,
  Twitter,
} from './social.styled';

function Social({
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) {
  return (
    <SocialStyles {...props}>
      <LinkStyles href="https://twitter.com/payrueofficial">
        <Twitter />
      </LinkStyles>

      <LinkStyles href="https://discord.com/invite/JDWCV5DgqS">
        <Discord />
      </LinkStyles>

      <LinkStyles href="https://forum.payrue.com/">
        <Forum />
      </LinkStyles>

      <LinkStyles href="https://github.com/payRueOrg">
        <Github />
      </LinkStyles>

      <LinkStyles href="https://t.me/payrue_global">
        <Telegram />
      </LinkStyles>

      <LinkStyles href="https://www.reddit.com/user/payrue">
        <Reddit />
      </LinkStyles>

      <LinkStyles href="https://www.facebook.com/payrue">
        <Facebook />
      </LinkStyles>

      <LinkStyles href="https://www.instagram.com/payrueofficial">
        <Instagram />
      </LinkStyles>

      <LinkStyles href="https://payrue.chat/home.html#/login">
        <Payrue />
      </LinkStyles>
    </SocialStyles>
  );
}

export default Social;
