import { ButtonSize, ButtonVariant } from '../../../app/components/button';
import { useStake } from '../hooks';
import {
  StakingClaimStyled,
  StakingClaimWrapper,
  StakingClaimButton,
  StakingClaimCell,
  StakingClaimText,
} from './staking-claim.styled';

export interface StakingClaimProps {
  price: number;
  claimable: string;
  chainId?: string;
  stakingContractAddress?: string;
}

function StakingClaim({
  price,
  claimable,
  chainId,
  stakingContractAddress,
}: StakingClaimProps) {
  const { claim, loading } = useStake({
    chainId,
    stakingContractAddress,
  });

  return (
    <StakingClaimStyled>
      <StakingClaimWrapper>
        <StakingClaimCell>
          <StakingClaimText>Rewards:</StakingClaimText>
          <StakingClaimText sx={{ opacity: 0.5 }}>
            {Number(claimable).toFixed(4)} ($
            {(price * Number(claimable)).toFixed(2)})
          </StakingClaimText>
        </StakingClaimCell>
        <StakingClaimButton
          disabled={loading}
          onClick={claim}
          size={ButtonSize.large}
          variant={ButtonVariant.ghost}
        >
          Confirm
        </StakingClaimButton>
      </StakingClaimWrapper>
    </StakingClaimStyled>
  );
}

export default StakingClaim;
