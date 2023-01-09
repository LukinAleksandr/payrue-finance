import { Container, Social } from '../../../app/components';
import { ContainerVariant } from '../../../app/components/container';
import { Header } from '../../../app/layouts';
import {
  IntroStyles,
  IntroContainer,
  IntroRightImage,
  IntroWrapper,
  IntroLeft,
  IntroH1,
  IntroDescription,
  IntroLink,
  IntroFooter,
} from './intro-screen.styled';

const menuIntro = [
  {
    id: 1,
    label: 'PayRue.Finance',
    value: '/swap',
  },
  {
    id: 2,
    label: 'NFT',
    value: 'https://nft.payrue.com/',
    target: '_blank',
  },
  {
    id: 3,
    label: 'Chat',
    value: 'https://payrue.chat/',
    target: '_blank',
  },
  {
    id: 4,
    label: 'Wallet',
    value: 'https://wallet.payrue.com/',
    target: '_blank',
  },
  {
    id: 5,
    label: 'DAO',
    value: 'https://payrue.org/',
    target: '_blank',
  },
];

export default function IntroScreen(): JSX.Element {
  return (
    <Container variant={ContainerVariant.Fluid}>
      <IntroStyles>
        <Header menu={menuIntro} variant="transparent" />
        <IntroRightImage src="/intro-left.png" />
        <IntroContainer>
          <IntroWrapper>
            <IntroLeft>
              <IntroH1>PayRue</IntroH1>
              <IntroDescription>Digital Asset Platform</IntroDescription>
              <IntroLink to="/swap">Launch App</IntroLink>
              <IntroFooter>
                <Social />
              </IntroFooter>
            </IntroLeft>
          </IntroWrapper>
        </IntroContainer>
      </IntroStyles>
    </Container>
  );
}
