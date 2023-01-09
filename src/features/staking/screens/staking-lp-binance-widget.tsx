// import { useState } from 'react';
import { IconCollection } from '../../../app/components';
import { BnbPropelIcon, BnbIcon } from '../../../app/icons';

import {
  AccordionArrow,
  AccordionDetailsStyled,
  AccordionStyled,
  AccordionSummaryStyled,
} from '../../../app/components/accordion.styled';
import { PaperHeader, PaperStyled } from '../../../app/components/paper.styled';

import {
  StakingWidgetRow,
  StakingWidgetTitle,
  // StakingWidgetApy,
  StakingWidgetList,
  StakingWidgetItem,
} from './staking-widget.styled';

// export enum StakingTabs {
//   STAKE = 'Stake',
//   CLAIM = 'Claim',
// }

// const items: SwitcherItem[] = [
//   {
//     id: 1,
//     name: StakingTabs.STAKE,
//   },
//   {
//     id: 2,
//     name: StakingTabs.CLAIM,
//   },
// ];

const icons = [<BnbIcon key={1} />, <BnbPropelIcon key={2} />];

function StakingLPBinanceWidget() {
  // const [tab, setTab] = useState<SwitcherItem>(items[0]);

  return (
    <PaperStyled>
      <PaperHeader>
        <StakingWidgetRow>
          <IconCollection icons={icons} />
          <StakingWidgetTitle variant="h5">
            LP Tokens (BNB/Propel)
          </StakingWidgetTitle>
        </StakingWidgetRow>
        {/* <StakingWidgetApy>APY: 12%</StakingWidgetApy> */}
      </PaperHeader>
      {/* <AccordionStyled>
        <AccordionSummaryStyled expandIcon={<AccordionArrow />}>
          <StakingWidgetCell>
            Your Stake
            <StakingWidgetBalance>0 ($0.00)</StakingWidgetBalance>
          </StakingWidgetCell>
        </AccordionSummaryStyled>
        <AccordionDetailsStyled>
          <Switcher
            active={tab}
            clickHandle={(item) => setTab(item)}
            items={items}
          />
          {tab.name === StakingTabs.STAKE ? <StakingStake /> : <StakingClaim />}
        </AccordionDetailsStyled>
      </AccordionStyled> */}
      <AccordionStyled>
        <AccordionSummaryStyled expandIcon={<AccordionArrow />}>
          Staking Details
        </AccordionSummaryStyled>
        <AccordionDetailsStyled>
          <StakingWidgetList>
            <StakingWidgetItem>
              Staking Pool information will be released soon
            </StakingWidgetItem>
            {/* <StakingWidgetItem>Pool Size 50,000,000 Propel</StakingWidgetItem>
            <StakingWidgetItem>Fixed period 12m</StakingWidgetItem>
            <StakingWidgetItem>Claim Rewards 24/7</StakingWidgetItem>
            <StakingWidgetItem>
              Free to claim rewards Principal amount after 12m
            </StakingWidgetItem> */}
          </StakingWidgetList>
        </AccordionDetailsStyled>
      </AccordionStyled>
    </PaperStyled>
  );
}

export default StakingLPBinanceWidget;
