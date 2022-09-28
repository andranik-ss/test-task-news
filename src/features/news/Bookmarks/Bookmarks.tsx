import { useEffect } from 'react';
import { Box } from '@mui/material';

import { useFormInput, usePagination, useSearchByNews } from 'hooks';
import { useAppDispatch, useAppSelector } from 'store';
import { NavLinks, AppBar, Search, CustomPagination } from 'components';
import NewsCard from '../NewsCard';
import { getNews, selectBookmarkedNews } from '../newsSlice';

function Bookmarks() {
  const search = useFormInput();
  const dispatch = useAppDispatch();
  const news = useAppSelector(selectBookmarkedNews);

  useEffect(() => {
    dispatch(getNews()).catch(console.error);
  }, [dispatch]);

  const newsList = useSearchByNews(news, search.value);
  const { list, count, page } = usePagination(newsList, 8);

  return (
    <>
      <AppBar>
        <NavLinks />
        <Search {...search} />
      </AppBar>
      <Box sx={{ display: 'grid', gap: '1em', gridTemplateRows: 'auto 60px' }}>
        <Box
          sx={{
            flex: '1 0',
            display: 'grid',
            gridTemplateColumns: `repeat(${count.value / 2}, 1fr)`,
            gridTemplateRows: 'repeat(2, 1fr)',
            gap: '1em',
            '> article': { width: '100%', height: '100%' },
          }}
        >
          {list.map((item) => (
            <NewsCard key={item.id} id={item.id} />
          ))}
        </Box>
        {count.total > 1 && (
          <CustomPagination count={count} currentPage={page} possibleItemsCount={[8, 10]} />
        )}
      </Box>
    </>
  );
}

export default Bookmarks;
