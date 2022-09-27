import React from 'react';
import {
  Pagination,
  PaginationItem,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  MenuItem,
  Box,
} from '@mui/material';

interface CustomPaginationProps {
  count: { value: number; total: number; onChange: (value: number) => void };
  currentPage: { value: number; onChange: (value: number) => void };
  possibleItemsCount?: number[];
}

const defaultItemsCount = [6, 9, 12];

export function CustomPagination({
  count,
  currentPage,
  possibleItemsCount = defaultItemsCount,
}: CustomPaginationProps) {
  const handleCountChange = (event: SelectChangeEvent<number>) => {
    count.onChange(Number(event.target.value));
  };

  const handlePageChange = (_event: React.ChangeEvent<unknown>, newPage: number) => {
    currentPage.onChange(newPage);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <FormControl size="small">
        <InputLabel id="show-label">Show</InputLabel>
        <Select labelId="show-label" value={count.value} label="Show" onChange={handleCountChange}>
          {possibleItemsCount.map((count) => (
            <MenuItem key={count} value={count}>
              {count}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Pagination
        count={count.total}
        page={currentPage.value}
        onChange={handlePageChange}
        renderItem={(item) => <PaginationItem {...item} />}
      />
    </Box>
  );
}
