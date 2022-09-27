import { Box, Typography } from '@mui/material';

export interface LabelProps {
  text: string;
}

export function Label({ text }: LabelProps) {
  return (
    <Box
      sx={{
        padding: '4px',
        backgroundColor: '#B73556',
        display: 'flex',
        alignItems: 'center',
        fontWeight: '700',
      }}
    >
      <Typography align="center" variant="overline" sx={{ fontWeight: 'bold' }}>
        {text}
      </Typography>
    </Box>
  );
}
