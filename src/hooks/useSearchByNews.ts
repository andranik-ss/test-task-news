import { useMemo } from 'react';
import { News } from '../api';

export function useSearchByNews(newsList: News[], query: string): News[] {
  return useMemo(() => {
    if (!query) {
      return newsList;
    }
    const reQuery = new RegExp(query, 'i');
    return newsList.filter((item) => item.headline.match(reQuery) || item.summary.match(reQuery));
  }, [newsList, query]);
}
