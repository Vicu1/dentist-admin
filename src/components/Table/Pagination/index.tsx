import { Button, PaginationItem } from '@mui/material';
import { FC } from 'react';

import PaginationStyled from '@/components/Table/Pagination/styled';
interface TablePaginationProps {
    pagination?: {
        page: number,
        total: number
    },
    handleChangePage?: (page: number) => void
}

const TablePagination: FC<TablePaginationProps> = ({
  pagination = {
    page: 1,
    total: 1
  },
  handleChangePage = () => {}
}) => {

  return (
    <PaginationStyled
      page={pagination.page}
      count={pagination.total}
      onChange={(e, page) => handleChangePage(page)}
      renderItem={(item) => (
        <PaginationItem
          component={Button}
          {...item}
        />
      )}
    />
  );
};
export default TablePagination;
