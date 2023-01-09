import { ethers } from 'ethers';
import { IconCollection } from '../../../app/components';
import { ButtonVariant } from '../../../app/components/button';
import { PaperHeader, PaperStyled } from '../../../app/components/paper.styled';
import { useStake } from '../../staking/hooks';
import { StakingData } from '../types';
import {
  ProfileClaimWidgetRow,
  ProfileClaimWidgetTitle,
  ProfileClaimWidgetText,
  ProfileClaimWidgetBody,
  ProfileClaimWidgetButton,
} from './profile-claim-widget.styled';

export interface ProfileClaimWidgetProps {
  icons: JSX.Element[];
  title: string;
  stakingData?: StakingData;
}

function ProfileClaimWidget({
  icons,
  title,
  stakingData,
}: ProfileClaimWidgetProps) {
  const { claim } = useStake({
    chainId: stakingData?.chainId,
    stakingContractAddress: stakingData?.address,
  });

  const staked = stakingData
    ? ethers.utils.formatUnits(stakingData?.staked, 'ether')
    : 0;

  const reward = stakingData
    ? ethers.utils.formatUnits(stakingData?.rewardClaimable, 'ether')
    : 0;

  return (
    <PaperStyled>
      <PaperHeader>
        <ProfileClaimWidgetRow>
          <IconCollection icons={icons} />
          <ProfileClaimWidgetTitle variant="h5">
            {title}
          </ProfileClaimWidgetTitle>
        </ProfileClaimWidgetRow>
      </PaperHeader>
      <ProfileClaimWidgetBody>
        <ProfileClaimWidgetRow>
          <ProfileClaimWidgetText>You Staked:</ProfileClaimWidgetText>
          <ProfileClaimWidgetText>{staked} PROPEL</ProfileClaimWidgetText>
        </ProfileClaimWidgetRow>
        <ProfileClaimWidgetRow>
          <ProfileClaimWidgetText>Reward:</ProfileClaimWidgetText>
          <ProfileClaimWidgetText>
            {Number(reward).toFixed(2)} PROPEL
          </ProfileClaimWidgetText>
        </ProfileClaimWidgetRow>

        <ProfileClaimWidgetButton
          disabled={Number(reward) === 0}
          onClick={claim}
          variant={ButtonVariant.primary}
        >
          Claim
        </ProfileClaimWidgetButton>
      </ProfileClaimWidgetBody>
    </PaperStyled>
  );
}

export default ProfileClaimWidget;
