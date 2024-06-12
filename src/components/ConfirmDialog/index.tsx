'use client';

import {
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
} from '@mui/material';

import Button from '@/components/Button';
import { closeConfirmDialog } from '@/store/features/confirmDialogSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

const ConfirmDialog = () => {
  const dialog = useAppSelector((state) => state.confirmDialog.data);
  const dispatch = useAppDispatch();
  const handleClose = () => {
    dispatch(closeConfirmDialog());
  };

  return (
    <Dialog
      maxWidth={'sm'}
      fullWidth
      open={dialog.open}
    >
      <DialogTitle fontSize={'20px'}>
        {dialog.title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {dialog.text}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          color={'error'}
          handleClick={handleClose}
        >
          Не согласен
        </Button>
        <Button
          color={'primary'}
          handleClick={() => {
            (typeof dialog.selectedItem === 'number' || dialog.selectedItem) ? dialog.handleAccept(dialog.selectedItem) : dialog.handleAccept();
            dispatch(closeConfirmDialog());
          }}
        >
          Согласен
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default ConfirmDialog;
