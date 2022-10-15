import { styled } from '@mui/material/styles';
import { Typography, Chip, IconButton, Box, Divider } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

import { Label } from '../Label';
import './Card.css';

export interface CardProps {
  image?: string;
  url: string;
  related: string;
  headline: string;
  summary: string;
  datetime: number;
  source: string;
  label?: string;
  bookmarked?: boolean;
  variant?: 'big' | 'small';
  onBookmarkClick: (value: boolean) => void;
}

const StyledCard = styled('article')(({ theme }) => ({
  color: theme.palette.getContrastText(theme.palette.background.default),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.down('md')]: {
    fontSize: '12px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '14px',
  },
}));

export function Card(props: CardProps) {
  const {
    variant = 'small',
    image,
    url,
    related,
    headline,
    summary,
    datetime,
    source,
    label,
    bookmarked = false,
    onBookmarkClick,
  } = props;

  return (
    <StyledCard
      className={`card ${variant}`}
      sx={image ? { backgroundImage: `url(${image})` } : {}}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Chip label={related} size="small" variant="outlined" sx={{ borderColor: 'white' }} />
        {label && <Label text={label} />}
      </Box>
      <Box
        component="a"
        href={url}
        rel="noreferrer"
        target="_blank"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignSelf: 'flex-end',
          color: 'white',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
        }}
      >
        <Typography variant="h6" component="h5" sx={{ fontSize: '1.25em' }}>
          {headline}
        </Typography>
        <Typography
          className="summary"
          variant="subtitle2"
          component="h6"
          sx={{ fontSize: '0.875em' }}
        >
          {summary}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: '1em', opacity: 0.5 }}>
        <Typography>{source}</Typography>
        <Divider orientation="vertical" sx={{ color: 'white' }} />
        <Typography>
          {new Date(datetime * 1000).toLocaleString('en-US', {
            day: '2-digit',
            month: 'short',
          })}
        </Typography>
        <IconButton onClick={() => onBookmarkClick(!bookmarked)} sx={{ margin: '0 0 0 auto' }}>
          {bookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
        </IconButton>
      </Box>
    </StyledCard>
  );
}
