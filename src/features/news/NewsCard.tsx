import { memo } from 'react';
import { Card } from '../../components';
import { useAppDispatch, useAppSelector } from '../../store';
import { selectBookmarkById, selectNewsById, toggleBookmark } from './newsSlice';

interface NewsCardProps {
  id: number;
  label?: string;
}

function NewsCard({ id, label }: NewsCardProps) {
  const dispatch = useAppDispatch();
  const news = useAppSelector((state) => selectNewsById(state, id));
  const bookmarkedNews = useAppSelector((state) => selectBookmarkById(state, id));

  const handleBookmarkClick = (value: boolean) =>
    dispatch(toggleBookmark({ id, bookmarked: value }));

  if (!news) {
    return null;
  }

  return (
    <Card
      {...news}
      label={label}
      variant={label ? 'big' : 'small'}
      bookmarked={bookmarkedNews?.bookmarked || false}
      onBookmarkClick={handleBookmarkClick}
    />
  );
}

export default memo(NewsCard);
