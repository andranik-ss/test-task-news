import { useEffect, useMemo } from 'react';

import { NavLinks, AppBar, Search, CustomPagination, SkeletonCard } from 'components';
import { useFormInput, usePagination, useSearchByNews } from 'hooks';
import { useAppDispatch, useAppSelector } from 'store';
import { excludeLatestItemFromArray, getLatestItemFromArray } from 'utils';
import NewsCard from '../NewsCard';
import { getNews, selectAllNews, selectLoading } from '../newsSlice';

import './News.css';

function News() {
  const search = useFormInput();
  const dispatch = useAppDispatch();
  const allNews = useAppSelector(selectAllNews);
  const isLoading = useAppSelector(selectLoading);

  useEffect(() => {
    dispatch(
      getNews({
        symbol: 'AAPL',
        from: '2022-09-23',
        to: '2022-09-26',
      }),
    ).catch(console.error);
  }, [dispatch]);

  const filteredNews = useSearchByNews(allNews, search.value);
  const [latestNews, newsList] = useMemo(
    () => [getLatestItemFromArray(filteredNews), excludeLatestItemFromArray(filteredNews)],
    [filteredNews],
  );
  const { list, count, page } = usePagination(newsList);

  return (
    <>
      <AppBar>
        <NavLinks />
        <Search {...search} />
      </AppBar>
      <div className="news-layout">
        <div className="latest">
          {latestNews && !isLoading && <NewsCard id={latestNews?.id} label="latest news" />}
          {isLoading && <SkeletonCard variant="big-card" />}
        </div>
        <div className="list">
          {isLoading
            ? Array.from({ length: count.value }).map((_, index) => <SkeletonCard key={index} />)
            : list.map((item) => <NewsCard key={item.id} id={item.id} />)}
        </div>
        <div className="pagination">
          {count.total > 1 && <CustomPagination count={count} currentPage={page} />}
        </div>
      </div>
    </>
  );
}

export default News;
