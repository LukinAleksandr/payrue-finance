import { AxiosInstance } from 'axios';

export function setupApiHeaders(apiClient: AxiosInstance) {
  apiClient.defaults.headers.common['X-App-Version'] =
    process.env.VERSION || '';
  apiClient.defaults.headers.common['X-App-System'] = navigator.userAgent;
  apiClient.defaults.headers.common['X-App-Platform'] = `web-app${
    process.env.NODE_ENV === 'development' ? '-local' : ''
  }`;
  return apiClient;
}
