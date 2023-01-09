import { useModal } from 'mui-modal-provider';
import {
  DrawerStyled,
  DrawerWrapper,
  DrawerProfileButton,
  DrawerProfileAvatarWrapper,
  DrawerProfileAvatarImg,
  DrawerProfileColumn,
  DrawerProfileText,
  DrawerProfileAddress,
  Arrow,
  DrawerLink,
  DrawerNavLink,
  DrawerBanner,
  DrawerRow,
} from './drawer.styled';
import { useAppSelector } from '../store';
import {
  getAboutPath,
  getProfilePath,
  getPropelPath,
} from '../app-router-paths';
import { trimming } from '../utils';
import { FollowModal } from '.';

export interface DrawerProps {
  isOpen: boolean;
  onToggle: (isOpen: boolean) => void;
}

function Drawer({ isOpen, onToggle }: DrawerProps) {
  const address = useAppSelector((state) => state.networks.address);
  const profileAvatar =
    useAppSelector((state) => state.profile.data?.avatar) || '';
  const firstName = useAppSelector((state) => state.profile.data?.firstName);
  const lastName = useAppSelector((state) => state.profile.data?.lastName);

  const url = `${process.env.REACT_APP_NFT_API}/uploads/wallets/${profileAvatar}`;
  const { showModal } = useModal();

  const handleMenuToggle =
    (status: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      onToggle(status);
    };

  return (
    <DrawerStyled
      anchor="right"
      onClose={handleMenuToggle(false)}
      onOpen={handleMenuToggle(true)}
      open={isOpen}
    >
      <DrawerWrapper>
        {address && (
          <DrawerProfileButton
            onClick={handleMenuToggle(false)}
            to={getProfilePath()}
          >
            <DrawerProfileAvatarWrapper>
              <DrawerProfileAvatarImg alt="avatar" src={url} />
            </DrawerProfileAvatarWrapper>
            <DrawerProfileColumn sx={{ gap: '2px' }}>
              <DrawerProfileText>
                {firstName && lastName
                  ? `${firstName} ${lastName}`
                  : 'My wallet'}
              </DrawerProfileText>
              <DrawerProfileAddress>{trimming(address)}</DrawerProfileAddress>
            </DrawerProfileColumn>
            <Arrow />
          </DrawerProfileButton>
        )}
        <DrawerBanner href="https://nft.payrue.com/" target="_blank">
          <DrawerRow>
            Marketplace NFT
            <Arrow />
          </DrawerRow>
        </DrawerBanner>
        <DrawerProfileColumn>
          <DrawerNavLink
            onClick={handleMenuToggle(false)}
            style={{ textDecoration: 'none' }}
            to={getPropelPath()}
          >
            Propel
            <Arrow />
          </DrawerNavLink>
          <DrawerLink href="https://ampt.finance/" target="_blank">
            Amplify
            <Arrow />
          </DrawerLink>
          <DrawerLink href="https://payrue.org/" target="_blank">
            DAO
            <Arrow />
          </DrawerLink>
          <DrawerLink
            href="https://app.multichain.org/#/router"
            target="_blank"
          >
            Propel Bridge
            <Arrow />
          </DrawerLink>
          <DrawerLink onClick={() => showModal(FollowModal)}>
            Follow <Arrow />
          </DrawerLink>
          <DrawerNavLink
            onClick={handleMenuToggle(false)}
            style={{ textDecoration: 'none' }}
            to={getAboutPath()}
          >
            About Us
            <Arrow />
          </DrawerNavLink>
        </DrawerProfileColumn>
      </DrawerWrapper>
    </DrawerStyled>
  );
}

export default Drawer;
