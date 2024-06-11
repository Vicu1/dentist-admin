'use client';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { enqueueSnackbar } from 'notistack';
import { useState } from 'react';
import { When } from 'react-if';

import Button from '@/components/Button';
import { HeaderInterface } from '@/components/Constructor/Table/headerInterface';
import Table from '@/components/Table';
import getData from '@/service/getData';


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
          <Button>Создать</Button>
        </When>
      </Stack>
      <Table<T>
        items={data?.data || []}
        headers={headers}
        pagination={pagination}
        actions={actions}
        loading={isLoading}
        handleChangePage={handleChangePage}
      />
    </>
  );
};
export default TableConstructor;
