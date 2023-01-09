import { PriceIcon } from '../../../app/components';
import { getPrice } from '../../../app/utils/price';
import { NftResponseData } from '../api';
import {
  ProfileNftRow,
  ProfileNftCell,
  ProfileNftImageWrapper,
  ProfileNftImage,
  ProfileNftName,
} from './profile-nft-item.styled';

export interface ProfileNFTItemProps {
  nft: NftResponseData;
}

function ProfileNFTItem({ nft }: ProfileNFTItemProps) {
  return (
    <ProfileNftRow>
      <ProfileNftCell sx={{ minWidth: '210px' }}>
        <ProfileNftImageWrapper>
          <ProfileNftImage
            src={
              nft.mediaType === 'image'
                ? nft.image
                : `${process.env.REACT_APP_NFT_API}/uploads/nfts/preview/${nft.previewMedia}`
            }
          />
        </ProfileNftImageWrapper>
        <ProfileNftName
          href={`https://nft.payrue.com/info/${nft.id}`}
          target="_blank"
        >
          {nft.name}
        </ProfileNftName>
      </ProfileNftCell>
      <ProfileNftCell>
        <PriceIcon
          chainId={nft.chainId}
          currencyAddress={nft.currencyAddress}
          priceInPropel={nft.priceInPropel}
        />
        <ProfileNftName>
          {getPrice(nft.price, nft.currencyAddress)}
        </ProfileNftName>
      </ProfileNftCell>
    </ProfileNftRow>
  );
}

export default ProfileNFTItem;
