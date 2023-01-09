import { Skeleton } from '@mui/material';
import {
  ProfileNftsScreenRoot,
  ProfileNftsTable,
  ProfileNftsTableHead,
  ProfileNftsBody,
  ProfileNftsCell,
  ProfileNftsSkeletonWrapper,
} from './profile-nfts-screen.styled';
import { ProfileNFTBanner, ProfileNFTItem } from '../components';
import { useAppSelector } from '../../../app/store';
import { useGetNftByAddressQuery } from '../api';

function ProfileNftsScreen() {
  // const nfts = useAppSelector((state) => state.profile.data?.nfts);
  const address = useAppSelector((state) => state.networks.address) || '';

  const { data: nfts = [], isFetching } = useGetNftByAddressQuery(address, {
    skip: !address,
  });

  return (
    <ProfileNftsScreenRoot>
      <ProfileNftsTable>
        <ProfileNftsTableHead>
          <ProfileNftsCell>Name</ProfileNftsCell>
          <ProfileNftsCell>Price</ProfileNftsCell>
        </ProfileNftsTableHead>
        <ProfileNftsBody>
          {isFetching
            ? Array(10)
                .fill(1)
                .map((_, index) => (
                  <ProfileNftsSkeletonWrapper key={index}>
                    <Skeleton
                      height={64}
                      sx={{ flexShrink: 0 }}
                      variant="circular"
                      width={64}
                    />
                    <Skeleton height={28} variant="rectangular" width={190} />
                    <Skeleton
                      height={32}
                      sx={{ flexShrink: 0 }}
                      variant="circular"
                      width={32}
                    />
                    <Skeleton height={28} variant="rectangular" width={120} />
                  </ProfileNftsSkeletonWrapper>
                ))
            : nfts.map((nft) => <ProfileNFTItem key={nft.id} nft={nft} />)}
        </ProfileNftsBody>
      </ProfileNftsTable>
      <ProfileNFTBanner />
    </ProfileNftsScreenRoot>
  );
}

export default ProfileNftsScreen;
