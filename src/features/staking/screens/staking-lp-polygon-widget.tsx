// import { useState } from 'react';
import { IconCollection } from '../../../app/components';
import { MaticIcon, PropelIcon } from '../../../app/icons';

import {
  AccordionArrow,
  AccordionDetailsStyled,
  AccordionStyled,
  AccordionSummaryStyled,
} from '../../../app/components/accordion.styled';
import { PaperHeader, PaperStyled } from '../../../app/components/paper.styled';
// import { SwitcherItem } from '../../../app/components/switcher';

import {
  StakingWidgetRow,
  StakingWidgetTitle,
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

const icons = [<MaticIcon key={1} />, <PropelIcon key={2} />];

function StakingLPPolygonWidget() {
  // const [tab, setTab] = useState<SwitcherItem>(items[0]);

  return (
    <PaperStyled>
      <PaperHeader>
        <StakingWidgetRow>
          <IconCollection icons={icons} />
          <StakingWidgetTitle variant="h5">
            LP Tokens (Matic/Propel)
          </StakingWidgetTitle>
        </StakingWidgetRow>
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
          </StakingWidgetList>
        </AccordionDetailsStyled>
      </AccordionStyled>
    </PaperStyled>
  );
}

export default StakingLPPolygonWidget;
