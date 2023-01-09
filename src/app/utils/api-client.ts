import axios, { AxiosRequestHeaders } from 'axios';
import { setupApiHeaders } from './setup-api-headers';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_NFT_API,
});

interface RequestHeaders extends AxiosRequestHeaders {
  Authorization: string;
}

apiClient.interceptors.request.use((request) => {
  const token = null;

  if (token) {
    (request.headers as RequestHeaders).Authorization = `Bearer ${token}`;
  }

  return request;
});

export default setupApiHeaders(apiClient);
