import React from 'react';
import { getStakingPath, getSwapPath } from '../app-router-paths';
import Drawer from './drawer';

import {
  MobileActionsStyles,
  Action,
  HomeStyled,
  NFTStyled,
  MoreStyled,
  ActionText,
  ActionMore,
} from './mobile-actions.styled';

export interface MobileActionsProps {
  handleMenuToggle: (isOpen: boolean) => void;
  menuIsOpen: boolean;
}

function MobileActions({ handleMenuToggle, menuIsOpen }: MobileActionsProps) {
  return (
    <MobileActionsStyles>
      <Action onClick={() => handleMenuToggle(false)} to={getSwapPath()}>
        <HomeStyled />
        <ActionText>Swap</ActionText>
      </Action>
      <Action onClick={() => handleMenuToggle(false)} to={getStakingPath()}>
        <NFTStyled />
        <ActionText>Staking</ActionText>
      </Action>
      <ActionMore onClick={() => handleMenuToggle(!menuIsOpen)}>
        <MoreStyled />
        <ActionText>Menu</ActionText>
      </ActionMore>
      <Drawer isOpen={menuIsOpen} onToggle={handleMenuToggle} />
    </MobileActionsStyles>
  );
}

export default MobileActions;
