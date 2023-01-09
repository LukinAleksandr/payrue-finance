import { TokenBalancesData, Networks, Balances } from '../types';
import { getBalanceIcon } from '../utils/networks';
import {
  ProfileBalanceTableStyled,
  ProfileBalanceTableHead,
  ProfileBalanceBody,
  ProfileBalanceRow,
  ProfileBalanceStartCell,
  ProfileBalanceCell,
  ProfileBalanceEndCell,
  ProfileBalanceTokenData,
  ProfileBalanceTokenCol,
  ProfileBalanceSub,
} from './profile-balance-table.styled';

export interface ProfileBalanceTableProps {
  loading: boolean;
  selectedNetwork: Networks;
  nativeBalances?: Balances;
  tokenList?: TokenBalancesData[];
}

function ProfileBalanceTable({
  loading,
  selectedNetwork,
  nativeBalances,
  tokenList,
}: ProfileBalanceTableProps) {
  const SelectedNetworkIcon = getBalanceIcon(selectedNetwork);

  return (
    <ProfileBalanceTableStyled>
      <ProfileBalanceTableHead>
        <ProfileBalanceStartCell>Crypto</ProfileBalanceStartCell>
        <ProfileBalanceCell>USD</ProfileBalanceCell>
        <ProfileBalanceEndCell>Balance</ProfileBalanceEndCell>
      </ProfileBalanceTableHead>
      <ProfileBalanceBody>
        {!loading && selectedNetwork !== Networks.all && (
          <ProfileBalanceRow>
            <ProfileBalanceStartCell>
              <ProfileBalanceTokenData>
                <SelectedNetworkIcon sx={{ width: '40px', height: '40px' }} />
                <ProfileBalanceTokenCol>
                  {nativeBalances?.[selectedNetwork].symbol}
                  <ProfileBalanceSub>
                    {nativeBalances?.[selectedNetwork].name}
                  </ProfileBalanceSub>
                </ProfileBalanceTokenCol>
              </ProfileBalanceTokenData>
            </ProfileBalanceStartCell>
            <ProfileBalanceCell>
              $
              {nativeBalances
                ? (
                    Number(nativeBalances?.[selectedNetwork].usdPrice) *
                    Number(nativeBalances?.[selectedNetwork].balance)
                  ).toFixed(2)
                : 0}
            </ProfileBalanceCell>
            <ProfileBalanceEndCell>
              {Number(nativeBalances?.[selectedNetwork].balance).toFixed(4)}
            </ProfileBalanceEndCell>
          </ProfileBalanceRow>
        )}

        {tokenList &&
          tokenList.map((token) => (
            <ProfileBalanceRow key={token.symbol}>
              <ProfileBalanceStartCell>
                <ProfileBalanceTokenData>
                  <SelectedNetworkIcon sx={{ width: '40px', height: '40px' }} />

                  <ProfileBalanceTokenCol>
                    {token.symbol}
                    <ProfileBalanceSub>{token.name}</ProfileBalanceSub>
                  </ProfileBalanceTokenCol>
                </ProfileBalanceTokenData>
              </ProfileBalanceStartCell>
              <ProfileBalanceCell>${token.usdBalance}</ProfileBalanceCell>
              <ProfileBalanceEndCell>
                {Number(token.balance).toFixed(4)}
              </ProfileBalanceEndCell>
            </ProfileBalanceRow>
          ))}
      </ProfileBalanceBody>
    </ProfileBalanceTableStyled>
  );
}

export default ProfileBalanceTable;
