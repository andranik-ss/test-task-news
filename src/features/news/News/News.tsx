import { useEffect } from 'react';
import { NavLinks, AppBar, Search, CustomPagination } from '../../../components';
import NewsCard from '../NewsCard';
import { useFormInput, usePagination, useSearchByNews } from '../../../hooks';
import { useAppDispatch, useAppSelector } from '../../../store';
import { getNews, selectAllNews } from '../newsSlice';
import './News.css';

function News() {
  const search = useFormInput();
  const dispatch = useAppDispatch();
  const allNews = useAppSelector(selectAllNews);

  useEffect(() => {
    dispatch(getNews()).catch(console.error);
  }, [dispatch]);

  const [latestNews, ...newsList] = useSearchByNews(allNews, search.value);
  const { list, count, page } = usePagination(newsList.reverse());

  return (
    <>
      <AppBar>
        <NavLinks />
        <Search {...search} />
      </AppBar>
      <div className="news-layout">
        <div className="latest">
          {latestNews && <NewsCard id={latestNews?.id} label="latest news" />}
        </div>
        <div className="list">
          {list.map((item) => (
            <NewsCard key={item.id} id={item.id} />
          ))}
        </div>
        <div className="pagination">
          {count.total > 1 && <CustomPagination count={count} currentPage={page} />}
        </div>
      </div>
    </>
  );
}

export default News;
