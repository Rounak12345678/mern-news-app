import { Pagination, PaginationItem, Stack } from '@mui/material';
import React from 'react';
import { CommonPaginationStyled } from 'styles/StyledComponents/CommonPaginationStyled';
import ArrowBackIcon from 'ui/Icons/ArrowBackIcon'; // Custom back icon
import ArrowForwordIcon from 'ui/Icons/ArrowForwordIcon'; // Custom forward icon

const CommonPagination = () => {
  return (
    <CommonPaginationStyled>
      <Stack spacing={2} justifyContent="center" alignItems="center">
        <Pagination
          count={6}
          variant="outlined"
          shape="rounded"
          renderItem={(item) => (
            <PaginationItem
              components={{
                previous: ArrowBackIcon,
                next: ArrowForwordIcon,
              }}
              {...item}
            />
          )}
        />
      </Stack>
    </CommonPaginationStyled>
  );
}

export default CommonPagination;
