import { InputAdornment } from '@mui/material';
import { useState } from 'react';
import { ButtonSize, ButtonVariant } from '../../../app/components/button';
import { useStake } from '../hooks';
import {
  StakingStakeStyled,
  StakingStakeWrapper,
  StakingStakeInput,
  StakingStakeButton,
  StakingStakeText,
  StakingStakeColumn,
} from './staking-stake.styled';

export interface StakingStakeProps {
  balance: string;
  chainId?: string;
  stakingContractAddress?: string;
  disabled?: boolean;
}

function StakingStake({
  balance,
  chainId,
  stakingContractAddress,
  disabled,
}: StakingStakeProps) {
  const [value, setValue] = useState('');
  const { loading, stake } = useStake({
    chainId,
    stakingContractAddress,
  });

  const handleClick = () => {
    setValue(balance);
  };

  const handleStake = () => {
    stake(value, balance);
  };

  return (
    <StakingStakeStyled>
      <StakingStakeWrapper>
        <StakingStakeColumn>
          <StakingStakeInput
            endAdornment={
              <InputAdornment
                onClick={handleClick}
                position="end"
                sx={{ cursor: 'pointer' }}
              >
                MAX
              </InputAdornment>
            }
            onChange={(ev) => setValue(ev.target.value)}
            type="number"
            value={value}
          />
          <StakingStakeText>
            Rewards/Month: {parseFloat((Number(value) * 0.0833).toFixed(4))}
            Propel
          </StakingStakeText>
        </StakingStakeColumn>

        <StakingStakeButton
          disabled={loading || disabled}
          onClick={handleStake}
          size={ButtonSize.large}
          variant={ButtonVariant.ghost}
        >
          Confirm
        </StakingStakeButton>
      </StakingStakeWrapper>
    </StakingStakeStyled>
  );
}

export default StakingStake;
