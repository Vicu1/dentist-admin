import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton, TableBody, TableCell, TableRow, Tooltip } from '@mui/material';
import { Stack } from '@mui/system';
import { When } from 'react-if';

import { HeaderInterface } from '@/components/Constructor/Table/headerInterface';

interface BodyProps<T> {
    items: T[],
    headers: HeaderInterface<T>[],
    actions?: string[],
}

const Body = <T,>({ items, headers, actions }: BodyProps<T>) => {
  const renderContent = (header: HeaderInterface<T>, item: T) => {
    if (header.format) {
      return header.format({ value: item[header.fieldName], item });
    }

    return item?.[header.fieldName]?.toString() || '-';
  };

  return (
    <TableBody>
      {items?.map((item, index) =>
        <TableRow key={index}>
          {headers.map((header) =>
            <TableCell key={`${header.label}_index`}>
              {renderContent(header, item)}
            </TableCell>
          )}
          <When condition={actions?.includes('update') || actions?.includes('delete')}>
            <TableCell
              className={'table-buttons'}
              align={'right'}
            >
              <Stack
                direction={'row'}
                gap={'5px'}
                justifyContent={'flex-end'}
              >
                <When condition={actions?.includes('delete')}>
                  <Tooltip
                    disableInteractive
                    title={'Удалить'}
                  >
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </When>
                <When condition={actions?.includes('update')}>
                  <Tooltip
                    title={'Редактировать'}
                  >
                    <IconButton>
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                </When>
              </Stack>
            </TableCell>
          </When>
        </TableRow>
      )}
    </TableBody>
  );
};

export default Body;
