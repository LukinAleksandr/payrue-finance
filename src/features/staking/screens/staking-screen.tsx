import {
  // StakingAMPTWidget,
  // StakingLPPolygonWidget,
  // StakingLPBinanceWidget,
  StakingBanner,
  StakingWidget,
} from '.';
import {
  BnbPropelIcon,
  BnbIcon,
  MaticIcon,
  PropelIcon,
} from '../../../app/icons';
import { useAppSelector } from '../../../app/store';
import { Networks } from '../../profile/types';
import {
  Root,
  StakingSubtitle,
  StakingWrapper,
  StakingColumn,
} from './staking-screen.styled';

const BNBIcons = [<BnbIcon key={1} />, <BnbPropelIcon key={2} />];
const PolygonIcons = [<MaticIcon key={1} />, <PropelIcon key={2} />];

export default function StakingScreen(): JSX.Element {
  const profile = useAppSelector((state) => state.profile.data);

  return (
    <Root>
      <StakingSubtitle variant="h3">Staking with PayRue</StakingSubtitle>
      <StakingWrapper>
        <StakingColumn>
          <StakingWidget
            icons={BNBIcons}
            networkName={Networks.bsc}
            profile={profile}
            title="Propel on BNB"
          />
          <StakingWidget
            icons={PolygonIcons}
            networkName={Networks.polygon}
            profile={profile}
            title="Propel on Polygon"
          />

          {/* <StakingAMPTWidget />  */}
        </StakingColumn>
        <StakingColumn>
          <StakingBanner />
          {/* <StakingLPPolygonWidget />
          <StakingLPBinanceWidget /> */}
        </StakingColumn>
      </StakingWrapper>
    </Root>
  );
}
