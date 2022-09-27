import { Box } from '@mui/material';

interface AppBarProps {
  children: React.ReactNode;
}

export function AppBar({ children }: AppBarProps) {
  return (
    <Box
      sx={{
        gridArea: 'app-bar',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {children}
    </Box>
  );
}
