import { Theme, useMediaQuery } from '@mui/material';
import { useCallback } from 'react';
import { RampInstantSDK } from '@ramp-network/ramp-instant-sdk';
import {
  HeaderStyles,
  HeaderWrapper,
  HeaderLogo,
  HeaderNavigation,
  HeaderSwitchTheme,
  ConnectButton,
  HeaderControls,
} from './header.styled';
import { Container, BuyCoinButton, ProfileButton } from '../components';
import Navigation, { NavItemProps } from './navigation';
import { useConnect } from '../hooks/use-connect';
import { useAppSelector } from '../store';
import { WalletIcon } from '../icons';

export interface HeaderProps {
  variant: 'default' | 'transparent';
  menu: NavItemProps[];
  handleMenuToggle?: (isOpen: boolean) => void;
}

export default function Header({
  variant,
  menu,
  handleMenuToggle,
}: HeaderProps) {
  const isDownLg = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down('lg'),
  );
  const { connect } = useConnect();
  const userAddress = useAppSelector((state) => state.networks.address);

  const buyCryptoClick = useCallback(() => {
    if (userAddress) {
      new RampInstantSDK({
        hostAppName: 'PAYRUE DEX',
        hostLogoUrl: 'https://payrue.com/landing/v3/svg/logo.svg',
        hostApiKey: 'tqwqr9du3rp88y69885drm4z838u4xdkdk8mo6y5',
        userAddress,
      }).show();
    }
  }, [userAddress]);

  const handleConnect = () => {
    connect();
    handleMenuToggle?.(false);
  };

  return (
    <HeaderStyles variant={variant}>
      <Container>
        <HeaderWrapper variant={variant}>
          <HeaderLogo />
          {!isDownLg && (
            <HeaderNavigation>
              <Navigation options={menu} />
            </HeaderNavigation>
          )}

          {variant === 'default' && (
            <>
              {isDownLg && <HeaderSwitchTheme />}
              <HeaderControls>
                {!isDownLg && <HeaderSwitchTheme />}
                {userAddress && <BuyCoinButton onClick={buyCryptoClick} />}
                {!userAddress && (
                  <ConnectButton
                    onClick={handleConnect}
                    startIcon={<WalletIcon />}
                  >
                    Connect
                  </ConnectButton>
                )}
                {userAddress && <ProfileButton address={userAddress} />}
              </HeaderControls>
            </>
          )}
        </HeaderWrapper>
      </Container>
    </HeaderStyles>
  );
}
