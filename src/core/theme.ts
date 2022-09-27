import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: ['Ubuntu', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto'].join(','),
  },
});
