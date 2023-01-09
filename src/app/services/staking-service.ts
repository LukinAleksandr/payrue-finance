import { apiClient } from '../utils';

export interface getMyStakesProps {
  address: string;
  chainId: string;
}

export const getMyStakes = async ({ address, chainId }: getMyStakesProps) => {
  const response = await apiClient.get(
    `/stakes/my-stakes/${address}/${chainId}`,
  );
  return response.data;
};

export const saveStake = async (stakeData: {
  amount: string;
  txId?: string | null;
  address: string;
  chainId: number;
}) => {
  const response = await apiClient.post(`/stakes/create`, stakeData);
  return response.data;
};

export const resetCache = async (address: string) => {
  const response = await apiClient.get(`/wallets/reset-cache/${address}`);
  return response.data;
};
