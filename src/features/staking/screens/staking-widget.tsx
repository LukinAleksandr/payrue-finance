import { useState, useMemo } from 'react';
import { ethers } from 'ethers';
import { IconCollection } from '../../../app/components';
import {
  AccordionArrow,
  AccordionDetailsStyled,
  AccordionStyled,
  AccordionSummaryStyled,
} from '../../../app/components/accordion.styled';
import { PaperHeader, PaperStyled } from '../../../app/components/paper.styled';
import Switcher, { SwitcherItem } from '../../../app/components/switcher';
import {
  StakingWidgetRow,
  StakingWidgetTitle,
  StakingWidgetList,
  StakingWidgetItem,
  StakingWidgetCell,
  StakingWidgetBalance,
} from './staking-widget.styled';
import StakingStake from './staking-stake';
import StakingClaim from './staking-claim';
import { Networks, ProfileData } from '../../profile/types';

export enum StakingTabs {
  STAKE = 'Stake',
  CLAIM = 'Claim',
}

const items: SwitcherItem[] = [
  {
    id: 1,
    name: StakingTabs.STAKE,
  },
  {
    id: 2,
    name: StakingTabs.CLAIM,
  },
];

export interface StakingWidgetProps {
  icons: JSX.Element[];
  title: string;
  networkName: Networks;
  profile: null | ProfileData;
}

function StakingWidget({
  icons,
  title,
  networkName,
  profile,
}: StakingWidgetProps) {
  const [tab, setTab] = useState<SwitcherItem>(items[0]);

  const tokenData = profile
    ? profile.tokenBalances[networkName].find(
        (token) => token.name === 'Propel',
      )
    : undefined;

  const balance = tokenData ? tokenData.balance : '0';
  const usdBalance = tokenData ? tokenData.usdBalance : '0';

  const price = useMemo(() => {
    if (!!Number(balance) && !!Number(usdBalance)) {
      return Number(usdBalance) / Number(balance);
    }
    return 0;
  }, [balance, usdBalance]);

  const chainId = profile ? profile.staking[networkName].chainId : undefined;
  const stakingContractAddress = profile
    ? profile.staking[networkName].address
    : undefined;

  const stake = profile
    ? ethers.utils.formatUnits(profile.staking[networkName].staked, 'ether')
    : '0';

  const availableToStakeOrReward = profile
    ? ethers.utils.formatUnits(
        profile.staking[networkName].availableToStakeOrReward,
        'ether',
      )
    : '0';

  const stakingDisabled = Number(availableToStakeOrReward) < 10000;

  const claimable = profile
    ? ethers.utils.formatUnits(
        profile.staking[networkName].rewardClaimable,
        'ether',
      )
    : '0';

  return (
    <PaperStyled>
      <PaperHeader>
        <StakingWidgetRow>
          <IconCollection icons={icons} />
          <StakingWidgetTitle variant="h5">{title}</StakingWidgetTitle>
        </StakingWidgetRow>
      </PaperHeader>
      {profile && (
        <AccordionStyled>
          <AccordionSummaryStyled expandIcon={<AccordionArrow />}>
            <StakingWidgetCell>
              Your Stake
              <StakingWidgetBalance>
                {stake} (${(price * Number(stake)).toFixed(2)})
              </StakingWidgetBalance>
            </StakingWidgetCell>
          </AccordionSummaryStyled>
          <AccordionDetailsStyled>
            <Switcher
              active={tab}
              clickHandle={(item) => setTab(item)}
              items={items}
            />
            {tab.name === StakingTabs.STAKE ? (
              <StakingStake
                balance={balance}
                chainId={chainId}
                disabled={stakingDisabled}
                stakingContractAddress={stakingContractAddress}
              />
            ) : (
              <StakingClaim
                chainId={chainId}
                claimable={claimable}
                price={price}
                stakingContractAddress={stakingContractAddress}
              />
            )}
          </AccordionDetailsStyled>
        </AccordionStyled>
      )}

      <AccordionStyled>
        <AccordionSummaryStyled expandIcon={<AccordionArrow />}>
          Staking Details
        </AccordionSummaryStyled>
        <AccordionDetailsStyled>
          <StakingWidgetList>
            <StakingWidgetItem>
              {stakingDisabled
                ? 'Propel Staking Pool - 100% Subscribed'
                : 'Staking Pool information will be released soon'}
            </StakingWidgetItem>
          </StakingWidgetList>
        </AccordionDetailsStyled>
      </AccordionStyled>
    </PaperStyled>
  );
}

export default StakingWidget;
