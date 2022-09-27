import {
  createAsyncThunk,
  createSlice,
  createEntityAdapter,
  EntityState,
  isPending,
  isRejected,
  PayloadAction,
  createSelector,
} from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { News } from './types';
import data from './data.json';

interface BookmarkedNews {
  id: News['id'];
  bookmarked: boolean;
}
export interface NewsState {
  entities: EntityState<News>['entities'];
  ids: EntityState<News>['ids'];
  bookmarks: EntityState<BookmarkedNews>;
  status: 'idle' | 'loading' | 'failed';
}

const newsAdapter = createEntityAdapter<News>({
  selectId: (item) => item.id,
  sortComparer: (prev, next) => next.datetime - prev.datetime,
});

const bookmarksAdapter = createEntityAdapter<BookmarkedNews>({
  selectId: (item) => item.id,
});

const initialState: NewsState = newsAdapter.getInitialState({
  bookmarks: bookmarksAdapter.getInitialState(),
  status: 'idle',
});

export const fetchNews = createAsyncThunk('news/getNews', async () => {
  const delay = (ms: number) =>
    new Promise((resolve) => {
      setTimeout(resolve, ms);
    });

  await delay(300);

  return data as News[];
  // return fetch('https://finnhub.io/api/v1/company-news?symbol=AAPL&from=2022-09-23&to=2022-09-26&token=c5g3koaad3id0d5nn48g').then((response) => {
  //   const res = response.json() as unknown;
  //   return res as News[];
  // });
});

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    toggleBookmark(state, { payload }: PayloadAction<BookmarkedNews>) {
      if (payload.bookmarked) {
        bookmarksAdapter.addOne(state.bookmarks, payload);
      } else {
        bookmarksAdapter.removeOne(state.bookmarks, payload.id);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.fulfilled, (state, { payload }) => {
        newsAdapter.setAll(state, payload);
        state.status = 'idle';
      })
      .addMatcher(isPending, (state) => {
        state.status = 'loading';
      })
      .addMatcher(isRejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { toggleBookmark } = newsSlice.actions;

export const selectNewsState = (state: RootState) => state.news;
export const selectBookmarks = (state: RootState) => selectNewsState(state).bookmarks;

export const {
  selectById: selectNewsById,
  selectIds: selectNewsIds,
  selectEntities: selectNewsEntities,
  selectAll: selectAllNews,
  selectTotal: selectTotalNews,
} = newsAdapter.getSelectors(selectNewsState);

export const {
  selectById: selectBookmarkById,
  selectIds: selectBookmarksIds,
  selectTotal: selectTotalBookmarks,
} = bookmarksAdapter.getSelectors(selectBookmarks);

export const selectBookmarkedNews = createSelector(
  selectAllNews,
  selectBookmarksIds,
  (news, bookmarks) => {
    return news.filter((item) => bookmarks.includes(item.id));
  },
);

export default newsSlice.reducer;
