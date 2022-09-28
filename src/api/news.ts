import { News } from './types';

const baseUrl = 'https://finnhub.io/api/v1/company-news';

export const fetchNews = async () =>
  fetch(`${baseUrl}?symbol=AAPL&from=2022-09-23&to=2022-09-26&token=c5g3koaad3id0d5nn48g`).then(
    (response) => {
      const res = response.json() as unknown;
      return res as News[];
    },
  );
