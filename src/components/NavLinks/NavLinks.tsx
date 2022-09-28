import { Link, useLocation } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const links = ['news', 'bookmarks'];

export function NavLinks() {
  const location = useLocation();

  return (
    <Box sx={{ display: 'flex', gap: '1em' }}>
      {links.map((link) => (
        <Typography
          key={link}
          component={Link}
          to={`/${link}`}
          variant="h2"
          align="left"
          sx={{
            fontSize: '28px',
            fontWeight: '700',
            color: 'white',
            textDecoration: 'none',
            textTransform: 'capitalize',
            opacity: location.pathname.includes(link) ? 'none' : '50%',
          }}
        >
          {link}
        </Typography>
      ))}
    </Box>
  );
}
