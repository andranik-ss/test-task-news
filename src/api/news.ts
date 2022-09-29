import { News, FetchNewsParams } from './types';

const baseUrl = 'https://finnhub.io/api/v1/company-news';
const token = 'c5g3koaad3id0d5nn48g';

export const fetchNews = async (params: FetchNewsParams): Promise<News[]> => {
  const queryString = new URLSearchParams({ ...params, token }).toString();
  const url = new URL(baseUrl);
  url.search = queryString;

  return fetch(url).then((response) => {
    const res = response.json() as unknown;
    return res as News[];
  });
};
