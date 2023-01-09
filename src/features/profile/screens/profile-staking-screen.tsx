import {
  // AmptIcon,
  BnbIcon,
  BnbPropelIcon,
  MaticIcon,
  PropelIcon,
} from '../../../app/icons';
import { useAppSelector } from '../../../app/store';
import { ProfileClaimWidget } from '../components';
import {
  ProfileStakingScreenRoot,
  ProfileStakingScreenColumn,
} from './profile-staking-screen.styled';

// const AMPTIcons = [<MaticIcon key={1} />, <AmptIcon key={2} />];
const BNBIcons = [<BnbIcon key={1} />, <BnbPropelIcon key={2} />];
const PolygonIcons = [<MaticIcon key={1} />, <PropelIcon key={2} />];

function ProfileStakingScreen() {
  const bscStakingData = useAppSelector(
    (state) => state.profile.data?.staking.bsc,
  );
  const polygonStakingData = useAppSelector(
    (state) => state.profile.data?.staking.polygon,
  );

  return (
    <ProfileStakingScreenRoot>
      <ProfileStakingScreenColumn>
        <ProfileClaimWidget
          icons={BNBIcons}
          stakingData={bscStakingData}
          title="Propel on BNB"
        />
        {/* <ProfileClaimWidget
          icons={AMPTIcons}
          onClick={clickHandle}
          title="AMPT on Polygon"
          
        /> */}
      </ProfileStakingScreenColumn>
      <ProfileStakingScreenColumn>
        <ProfileClaimWidget
          icons={PolygonIcons}
          stakingData={polygonStakingData}
          title="Propel on Polygon"
        />
      </ProfileStakingScreenColumn>
    </ProfileStakingScreenRoot>
  );
}

export default ProfileStakingScreen;
