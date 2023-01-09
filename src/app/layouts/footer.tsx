/* eslint-disable max-len */
import { getAboutPath } from '../app-router-paths';
import { Container } from '../components';
import {
  FooterColumn,
  FooterEnd,
  FooterLink,
  FooterNavLink,
  FooterLinks,
  FooterLogoCopyRight,
  FooterLogoImg,
  FooterLogoText,
  FooterLogoWrapper,
  FooterSocial,
  FooterStart,
  FooterStyled,
  FooterWrapper,
} from './footer.styled';

function Footer() {
  return (
    <FooterStyled>
      <Container>
        <FooterWrapper>
          <FooterStart>
            <FooterLogoWrapper>
              <FooterLogoImg />
              <FooterLogoText>PayRue </FooterLogoText>
            </FooterLogoWrapper>
            <FooterLogoCopyRight>
              2022 The use of materials is prohibited without written consent.
            </FooterLogoCopyRight>
          </FooterStart>
          <FooterEnd>
            <FooterSocial />
            <FooterLinks>
              <FooterColumn>
                <FooterLink href="https://nft.payrue.com/" target="_blank">
                  PayRue NFT Marketplace
                </FooterLink>
                <FooterLink href="https://payrue.chat/" target="_blank">
                  PayRue Chat
                </FooterLink>
              </FooterColumn>
              <FooterColumn>
                <FooterNavLink to={getAboutPath()}>About Us</FooterNavLink>
                <FooterLink
                  href="https://payrue.gitbook.io/investor-page/"
                  target="_blank"
                >
                  PayRue Investor Page
                </FooterLink>
                <FooterLink
                  href="https://documenter.getpostman.com/view/10441178/SzKSSKAh?version=latest#3589a9b2-1ef7-4239-a607-35f39a4c863a"
                  target="_blank"
                >
                  PayRue API
                </FooterLink>
              </FooterColumn>
              <FooterColumn>
                <FooterLink
                  href="https://payrue.com/docs/Know_Your_Customer_Declaration_Form.pdf"
                  target="_blank"
                >
                  KYC
                </FooterLink>
                <FooterLink
                  href="https://payrue.com/privacy.html"
                  target="_blank"
                >
                  Privacy Policy
                </FooterLink>
                <FooterLink
                  href="https://payrue.com/cookies.html"
                  target="_blank"
                >
                  Cookies Policy
                </FooterLink>
                <FooterLink
                  href="https://payrue.com/terms.html"
                  target="_blank"
                >
                  Terms &amp; Conditions
                </FooterLink>
              </FooterColumn>
            </FooterLinks>
          </FooterEnd>
        </FooterWrapper>
      </Container>
    </FooterStyled>
  );
}

export default Footer;
