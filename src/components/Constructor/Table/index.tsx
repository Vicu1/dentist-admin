'use client';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';
import { useState } from 'react';
import { When } from 'react-if';

import Button from '@/components/Button';
import { HeaderInterface } from '@/components/Constructor/Table/headerInterface';
import Table from '@/components/Table';
import http from '@/service';
import getData from '@/service/getData';
import { closeConfirmDialog, openConfirmDialog } from '@/store/features/confirmDialogSlice';
import { useAppDispatch } from '@/store/hooks';


interface TableConstructorProps<T> {
  module: string,
  moduleTitle: string
  headers: HeaderInterface<T>[],
  actions?: string[]
}

const TableConstructor = <T, >({
  module = '',
  moduleTitle = '',
  headers = [],
  actions = ['create', 'update', 'delete']
}: TableConstructorProps<T>) => {
  const [pagination, setPagination] = useState({
    page: 1,
    total: 1
  });
  const router = useRouter();
  const moduleUrl = module.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  const dispatch = useAppDispatch();
  const { data, isLoading } = useQuery<{data: T[] }>({
    queryKey: [module, pagination.page],
    queryFn: async () => {
      try {
        const response = await getData(module, { ...pagination, per_page: 20 });

        setPagination({
          page: response.meta.current_page,
          total: response.meta.last_page,
        });

        return response;
      } catch (e: any) {
        enqueueSnackbar(e.data.message, { variant: 'error' });
      }
    },
  });

  const mutation = useMutation({
    mutationFn: (itemId: number) => {
      return http.delete(`${module}/${itemId}`);
    },
    onSuccess: () => {
      dispatch(closeConfirmDialog());
      enqueueSnackbar('Успешно удалено');
    }
  });

  const handleConfirmDelete = (itemId: number) => {
    dispatch(openConfirmDialog({
      handleAccept: mutation.mutate,
      title: 'Удалить подтверждение',
      text: 'Вы уверены, что хотите удалить этот элемент?',
      selectedItem: itemId,
    }));
  };

  const handleChangePage = (page: number) => {
    setPagination((prevState) => ({ ...prevState, page }));
  };

  return (
    <>
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        marginBottom={'20px'}
      >
        <Typography variant={'h4'}>
          {moduleTitle}
        </Typography>
        <When condition={actions?.includes('create')}>
          <Button
            handleClick={() => {
              router.push(`/${moduleUrl}/create`);
            }}
          >
            Создать
          </Button>
        </When>
      </Stack>
      <Table<T>
        items={data?.data || []}
        headers={headers}
        pagination={pagination}
        actions={actions}
        loading={isLoading}
        handleChangePage={handleChangePage}
        handleConfirmDelete={handleConfirmDelete}
        moduleUrl={moduleUrl}
      />
    </>
  );
};
export default TableConstructor;
