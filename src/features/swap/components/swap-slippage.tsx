import { Slider } from '@mui/material';
import React, { useState } from 'react';
import { ButtonSize, ButtonVariant } from '../../../app/components/button';
import { SelectChevronIcon } from '../../../app/icons';
import { useAppDispatch, useAppSelector } from '../../../app/store';
import { setSlippagePercentage } from '../../network/slice';
import {
  Header,
  HeaderRight,
  Root,
  Body,
  StyledLabel,
  StyledButton,
} from './swap-slippage.styled';

function SwapSlippage() {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.networks.slippagePercentage);

  const setValue = (e: number) => dispatch(setSlippagePercentage(e));

  const [showMore, setShowMore] = useState(false);

  const buttons = [0.001, 0.005, 0.01];

  return (
    <Root>
      <Header onClick={() => setShowMore((prev) => !prev)}>
        <StyledLabel>Set Slippage</StyledLabel>
        <HeaderRight>
          {Math.round(value * 100 * 100) / 100}%
          <SelectChevronIcon sx={{ width: 14 }} />
        </HeaderRight>
      </Header>
      {showMore && (
        <Body>
          {buttons.map((button) => (
            <StyledButton
              key={button}
              onClick={() => setValue(button)}
              size={ButtonSize.small}
              variant={
                value === button
                  ? ButtonVariant.primary
                  : ButtonVariant.secondary
              }
            >
              {button * 100}%
            </StyledButton>
          ))}
          <Slider
            aria-label="Default"
            defaultValue={0.01}
            max={0.5}
            min={0.001}
            onChange={(event) => {
              const target = event.target as HTMLInputElement;
              setValue(Number(target.value));
            }}
            step={0.001}
            sx={{ marginLeft: 1 }}
            value={value}
          />
        </Body>
      )}
    </Root>
  );
}

export default SwapSlippage;
