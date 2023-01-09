import axios from 'axios';

export const fetchSwapToken = async (
  url: string,
  params: Record<string, string>,
) => {
  const response = await axios.get(
    `${url}/swap/v1/quote?${new URLSearchParams(params)}`,
  );
  return response.data;
};
