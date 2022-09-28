import { Typography, Box } from '@mui/material';
import { NavLinks, AppBar } from 'components';

export function NotFound() {
  return (
    <>
      <AppBar>
        <NavLinks />
      </AppBar>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h2">404 Page not found</Typography>
      </Box>
    </>
  );
}
