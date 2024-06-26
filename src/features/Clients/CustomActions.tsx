'use client';
import BlockIcon from '@mui/icons-material/Block';
import VerifiedIcon from '@mui/icons-material/Verified';
import { IconButton, Tooltip } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { enqueueSnackbar } from 'notistack';
import { useContext } from 'react';

import { ClientItemInterface } from '@/app/(DefaultLayout)/clients/page';
import { ContextCustomActions, ContextCustomActionsI } from '@/components/Table/Context';
import http from '@/service';
import { openConfirmDialog } from '@/store/features/confirmDialogSlice';
import { useAppDispatch } from '@/store/hooks';
const BlockUnblock = () => {
  const { item, handleRefresh } = useContext<ContextCustomActionsI<ClientItemInterface>>(ContextCustomActions);
  const dispatch = useAppDispatch();
  const { mutate } = useMutation({
    mutationFn: () => {
      if(item.is_blocked) {
        return http.patch(`clients/${item.id}/unblock`);
      }

      return http.patch(`clients/${item.id}/block`);
    },
    onSuccess: () => {
      enqueueSnackbar(item.is_blocked ? 'Успешно разблокирован' : 'Успешно заблокирован');

      handleRefresh();
    }
  });

  const handleConfirm = () => {
    dispatch(openConfirmDialog({
      handleAccept: mutate,
      title: 'Подтверждение',
      text: item.is_blocked ? 'Вы уверены, что хотите разблокировать этого клиента?' : 'Вы уверены, что хотите заблокировать этого клиента?',
      selectedItem: item.id,
    }));
  };

  return (
    <Tooltip
      disableInteractive
      title={item.is_blocked ? 'Разблокировать' : 'Заблокировать'}
    >
      <IconButton
        onClick={() => handleConfirm()}
      >
        {item.is_blocked ?
          <VerifiedIcon />
          :
          <BlockIcon />}
      </IconButton>
    </Tooltip>
  );
};

export const customActions = [
  <BlockUnblock key={1} />
];
