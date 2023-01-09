import {
  Root,
  AboutContainer,
  AboutTitle,
  AboutDescription,
  OfferContainer,
  OfferStart,
  OfferText,
  OfferEnd,
  OfferImg,
  AboutSubtitle,
  TeamList,
  TeamItem,
  TeamCard,
  TeamCardWrapper,
  TeamCardPosition,
  TeamCardName,
  TeamCardImg,
  TeamCardLink,
} from './about-screen.styled';

import team0 from '../../../assets/images/t.jpg';
import team1 from '../../../assets/images/t1.jpg';
import team2 from '../../../assets/images/t2.jpg';
import team3 from '../../../assets/images/t4.jpg';
import linkedin from '../../../assets/images/linkedin.jpg';
import illustration from '../../../assets/images/illustration.svg';

export default function AboutScreen(): JSX.Element {
  return (
    <Root>
      <AboutContainer>
        <AboutSubtitle variant="h3">About</AboutSubtitle>
        <AboutDescription variant="body1">
          PayRue was founded in June 2018 by Mikael Olofsson. PayRue is a
          decentralized financial platform that operates exchanges, wallets, and
          transfers with cryptocurrencies. Our mission is to support the mass
          adoption of cryptocurrencies with secure and user-friendly apps.
        </AboutDescription>
      </AboutContainer>
      <OfferContainer>
        <OfferStart>
          <AboutTitle variant="h2">What We Offer?</AboutTitle>
          <OfferText variant="body1">
            PayRue is a decentralized financial platform that operates
            exchanges, wallets, and transfers with cryptocurrencies. PayRue Ltd
            is registered at address 2nd Floor, Heathmans House, 19 Heathmans
            Road, London, England, SW6 4TJ, UK
            <br />
            <br />
            PayRue Ltd, Companies House, UK no 11482610.
          </OfferText>
        </OfferStart>
        <OfferEnd>
          <OfferImg src={illustration} />
        </OfferEnd>
      </OfferContainer>
      <section>
        <AboutSubtitle variant="h3">Who We Are?</AboutSubtitle>
        <TeamList>
          <TeamItem>
            <TeamCard>
              <TeamCardWrapper>
                <TeamCardImg src={team1} />
                <TeamCardLink href="https://www.linkedin.com/in/mikael-olofsson-9a865135/">
                  <TeamCardImg src={linkedin} />
                </TeamCardLink>
              </TeamCardWrapper>
              <TeamCardName variant="h5">Mikael Olofsson</TeamCardName>
              <TeamCardPosition variant="body1">CEO</TeamCardPosition>
            </TeamCard>
          </TeamItem>
          <TeamItem>
            <TeamCard>
              <TeamCardWrapper>
                <TeamCardImg src={team0} />
                <TeamCardLink href="https://www.linkedin.com/in/ohtis/">
                  <TeamCardImg src={linkedin} />
                </TeamCardLink>
              </TeamCardWrapper>
              <TeamCardName variant="h5">Mikko Ohtamaa</TeamCardName>
              <TeamCardPosition variant="body1">
                Technical Adviser
              </TeamCardPosition>
            </TeamCard>
          </TeamItem>
          <TeamItem>
            <TeamCard>
              <TeamCardWrapper>
                <TeamCardImg src={team2} />
                <TeamCardLink
                  href="https://www.linkedin.com/in/paul-john-anderson/"
                  rel="noreferer"
                  target="_blank"
                >
                  <TeamCardImg src={linkedin} />
                </TeamCardLink>
              </TeamCardWrapper>
              <TeamCardName variant="h5">Paul Andersson</TeamCardName>
              <TeamCardPosition variant="body1">
                Partner & Adviser
              </TeamCardPosition>
            </TeamCard>
          </TeamItem>
          <TeamItem>
            <TeamCard>
              <TeamCardWrapper>
                <TeamCardImg src={team3} />
                <TeamCardLink
                  href="https://www.linkedin.com/in/eugenetanym/"
                  rel="noreferer"
                  target="_blank"
                >
                  <TeamCardImg src={linkedin} />
                </TeamCardLink>
              </TeamCardWrapper>
              <TeamCardName variant="h5">Eugene Tan Yew Meng</TeamCardName>
              <TeamCardPosition variant="body1">
                Fintech Entrepreneur
              </TeamCardPosition>
            </TeamCard>
          </TeamItem>
        </TeamList>
      </section>
    </Root>
  );
}
