import { ProfileData } from '../../features/profile/types';
import apiClient from '../utils/api-client';

export async function getProfile(address: string) {
  try {
    const response = await apiClient.get<ProfileData>(
      `/wallets/balances/${address}`,
    );
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
}
