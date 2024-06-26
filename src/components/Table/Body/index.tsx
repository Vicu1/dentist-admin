'use client';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton, TableBody, TableCell, TableRow, Tooltip } from '@mui/material';
import { Stack } from '@mui/system';
import { ReactNode } from 'react';
import { When } from 'react-if';

import { HeaderInterface } from '@/components/Constructor/Table/headerInterface';
import { ContextCustomActions } from '@/components/Table/Context';

interface BodyProps<T> {
    items: T[],
    headers: HeaderInterface<T>[],
    actions?: string[],
    handleConfirmDelete?: (itemId: number) => void,
    handleSelectItem?: (value: T) => void,
    customActions?: ReactNode[],
    refetch?: any
}

const Body = <T,>({ items, headers, actions, handleConfirmDelete, handleSelectItem, customActions = [], refetch }: BodyProps<T>) => {
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
          <When condition={actions?.includes('update') || actions?.includes('delete') || customActions?.length}>
            <TableCell
              className={'table-buttons'}
              align={'right'}
            >
              <Stack
                direction={'row'}
                gap={'5px'}
                justifyContent={'flex-end'}
              >
                <When condition={customActions?.length}>
                  <ContextCustomActions.Provider value={{ item, handleRefresh: () => refetch() }}>
                      {...customActions}
                  </ContextCustomActions.Provider>
                </When>
                <When condition={actions?.includes('delete')}>
                  <Tooltip
                    disableInteractive
                    title={'Удалить'}
                  >
                    <IconButton
                      onClick={() => {
                        if(handleConfirmDelete) {
                          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                          // @ts-expect-error
                          handleConfirmDelete(item.id);
                        }
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </When>
                <When condition={actions?.includes('update')}>
                  <Tooltip
                    title={'Редактировать'}
                  >
                    <IconButton
                      onClick={() => {
                        if(handleSelectItem) {
                          handleSelectItem(item);
                        }
                      }}
                    >
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
