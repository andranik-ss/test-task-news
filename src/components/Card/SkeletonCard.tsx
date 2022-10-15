import { Skeleton } from '@mui/material';
import { Box } from '@mui/system';

interface SkeletonCardProps {
  variant?: 'card' | 'big-card';
}

export function SkeletonCard({ variant = 'card' }: SkeletonCardProps) {
  switch (variant) {
    case 'card':
    default:
      return (
        <div className={`card ${variant === 'big-card' ? 'big' : ''}`}>
          <Skeleton variant="rectangular" width={50} height={25} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignSelf: 'flex-end',
            }}
          >
            <Skeleton variant="text" height={40} />
            <Skeleton variant="text" height={40} />
            <Skeleton variant="text" height={20} />
            <Skeleton variant="text" height={20} />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Skeleton variant="text" width={30} height={25} />
            <Skeleton variant="text" width={30} height={25} />
            <Skeleton variant="text" width={30} height={25} />
          </Box>
        </div>
      );
  }
}
