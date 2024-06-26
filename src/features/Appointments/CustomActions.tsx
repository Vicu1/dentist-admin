'use client';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { IconButton, Tooltip } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { enqueueSnackbar } from 'notistack';
import { useContext } from 'react';

import { AppointmentItemInterface } from '@/app/(DefaultLayout)/appointments/page';
import { ContextCustomActions, ContextCustomActionsI } from '@/components/Table/Context';
import { statusEnum } from '@/features/Appointments/statuses';
import http from '@/service';
import { openConfirmDialog } from '@/store/features/confirmDialogSlice';
import { useAppDispatch } from '@/store/hooks';
const Reject = () => {
  const { item, handleRefresh } = useContext<ContextCustomActionsI<AppointmentItemInterface>>(ContextCustomActions);
  const dispatch = useAppDispatch();
  const { mutate } = useMutation({
    mutationFn: () => {
      return http.patch(`appointments/${item.id}/reject`);
    },
    onSuccess: () => {
      enqueueSnackbar('Успешно отменено');

      handleRefresh();
    }
  });

  const handleReject = () => {
    dispatch(openConfirmDialog({
      handleAccept: mutate,
      title: 'Подтверждение',
      text: 'Вы уверены, что хотите отменить это запись?',
      selectedItem: item.id,
    }));
  };

  return (
    <Tooltip
      disableInteractive
      title={'Отменить'}
    >
      <IconButton
        disabled={item.status !== statusEnum.NEW}
        onClick={() => handleReject()}
      >
        <CancelIcon />
      </IconButton>
    </Tooltip>
  );
};
const Confirm = () => {
  const { item, handleRefresh } = useContext<ContextCustomActionsI<AppointmentItemInterface>>(ContextCustomActions);
  const dispatch = useAppDispatch();
  const { mutate } = useMutation({
    mutationFn: () => {
      return http.patch(`appointments/${item.id}/confirm`);
    },
    onSuccess: () => {
      enqueueSnackbar('Успешно подтверждено');

      handleRefresh();
    }
  });

  const handleReject = () => {
    dispatch(openConfirmDialog({
      handleAccept: mutate,
      title: 'Подтверждение',
      text: 'Вы уверены, что хотите подтвердить это запись?',
      selectedItem: item.id,
    }));
  };

  return (
    <Tooltip
      disableInteractive
      title={'Подтвердить'}
    >
      <IconButton
        disabled={item.status !== statusEnum.NEW}
        onClick={() => handleReject()}
      >
        <CheckCircleIcon />
      </IconButton>
    </Tooltip>
  );
};

export const customActions = [
  <Reject key={1} />,
  <Confirm key={2} />,
];
