'use client';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { enqueueSnackbar } from 'notistack';
import { cloneElement, FC, ReactNode, useState } from 'react';
import { When } from 'react-if';

import Button from '@/components/Button';
import { HeaderInterface } from '@/components/Constructor/Table/headerInterface';
import FormModal, { FormType } from '@/components/FormModal';
import Table from '@/components/Table';
import http from '@/service';
import getData from '@/service/getData';
import { closeConfirmDialog, openConfirmDialog } from '@/store/features/confirmDialogSlice';
import { useAppDispatch } from '@/store/hooks';


interface TableConstructorProps<T> {
  module: string,
  moduleTitle: string
  headers: HeaderInterface<T>[],
  actions?: string[],
  createForm?: null | ReactNode | FC,
  updateForm?: null | ReactNode | FC,
  customActions?: ReactNode[]
}

const TableConstructor = <T, >({
  module = '',
  moduleTitle = '',
  headers = [],
  actions = ['create', 'update', 'delete'],
  createForm = null,
  updateForm = null,
  customActions = []
}: TableConstructorProps<T>) => {
  const [pagination, setPagination] = useState({
    page: 1,
    total: 1
  });
  const queryClient = useQueryClient();
  const [createMode, setCreateMode] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<T | null>(null);
  const dispatch = useAppDispatch();
  const { data, isLoading, refetch } = useQuery<{data: T[] }>({
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
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      queryClient.invalidateQueries({ queryKey: module });
      setPagination({ ...pagination, page: 1 });
      refetch();
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

  const renderCreateForm = () => {
    const props = {
      setCreateMode,
      refetch,
    };

    if(createForm) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      return cloneElement(createForm, props);
    }
  };
  const renderUpdateForm = () => {
    const props = {
      setSelectedItem,
      refetch,
      selectedItem
    };

    if(updateForm) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      return cloneElement(updateForm, props);
    }
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
            handleClick={() => setCreateMode(true)}
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
        setSelectedItem={setSelectedItem}
        customActions={customActions}
        refetch={refetch}
      />
      <When condition={createMode}>
        <FormModal
          open={createMode}
          onClose={() => setCreateMode(false)}
        >
          {renderCreateForm()}
        </FormModal>
      </When>
      <When condition={Boolean(selectedItem)}>
        <FormModal
          open={Boolean(selectedItem)}
          type={FormType.UPDATE}
          onClose={() => setSelectedItem(null)}
        >
          {renderUpdateForm()}
        </FormModal>
      </When>
    </>
  );
};
export default TableConstructor;
