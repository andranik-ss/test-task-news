import { useMemo, useState } from 'react';

export type PaginatedList<T> = { [pageIndex: number]: T[] };

export const COUNT = 6;

export function usePagination<T>(list: Array<T>, initialCount = COUNT) {
  const [count, setCount] = useState(initialCount);
  const [page, setPage] = useState(1);

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
      // return setCount if need to change show count
      onChange: setCount,
    },
    page: {
      value: page,
      onChange: setPage,
    },
  };
}
