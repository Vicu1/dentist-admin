import { Card, Table, Skeleton, TableCell, TableHead, TableRow } from '@mui/material';
import { When } from 'react-if';

import { HeaderInterface } from '@/components/Constructor/Table/headerInterface';
import Body from '@/components/Table/Body';
import TablePagination from '@/components/Table/Pagination';
import TableContainerStyled from '@/components/Table/styled';

interface TableProps<T> {
  items: T[],
  loading?: boolean,
  headers: HeaderInterface<T>[],
  actions?: string[],
  pagination?: {
    page: number,
    total: number
  },
  handleChangePage?: (page: number) => void
}
const DataTable = <T,>({
  items = [],
  headers = [],
  loading = false,
  actions = ['create', 'update', 'delete'],
  pagination,
  handleChangePage
}: TableProps<T>) => {

  return <Card elevation={0}>
    <TableContainerStyled>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map((header, index) =>
              <TableCell key={index}>
                {header.label}
              </TableCell>
            )}
            <When condition={actions?.includes('update') || actions?.includes('delete')}>
              <TableCell align={'right'}>
                Действия
              </TableCell>
            </When>
          </TableRow>
        </TableHead>
        <When condition={!loading}>
          <Body
            headers={headers}
            items={items}
            actions={actions}
          />
        </When>
      </Table>
    </TableContainerStyled>
    <When condition={loading}>
      {Array.from({ length: 5 }, (_, index) => index + 1).map((el) => (
        <Skeleton
          key={el}
          width={'100%'}
          height={'50px'}
          animation={'wave'}
        />
      ))}
    </When>
    <TablePagination
      pagination={pagination}
      handleChangePage={handleChangePage}
    />
  </Card>;
};
export default DataTable;
