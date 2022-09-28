import { useMemo, useState } from 'react';

export type PaginatedList<T> = { [pageIndex: number]: T[] };

export const INITIAL_SHOW_COUNT = 6;
export const INITIAL_PAGE_INDEX = 1;

export function usePagination<T>(list: Array<T>, initialCount = INITIAL_SHOW_COUNT) {
  const [count, setCount] = useState(initialCount);
  const [page, setPage] = useState(INITIAL_PAGE_INDEX);

  const { paginatedList, totalCount } = useMemo(() => {
    let index = 0;
    const initialResult: PaginatedList<T> = {};

    const paginatedList = list.reduce((res, item, i) => {
      if (i === 0 || i % count === 0) {
        index++;
        res[index] = [];
      }
      res[index].push(item);
      return res;
    }, initialResult);

    setPage(INITIAL_PAGE_INDEX)

    return {
      paginatedList,
      totalCount: Object.keys(paginatedList).length,
    };
  }, [list, count]);
  
  return {
    list: paginatedList[page] || [],
    count: {
      value: count,
      total: totalCount,
      onChange: setCount,
    },
    page: {
      value: page,
      onChange: setPage,
    },
  };
}
