import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UseFieldArrayRemove } from 'react-hook-form';

interface confirmDialogData {
  open: boolean,
  title: string,
  text: string,
  selectedItem?: null | number | string,
  handleAccept: (itemId?: number | null | undefined | string) => Promise<void> | void,
}
interface openConfirmDialogPayload {
  title: string,
  text: string,
  handleAccept: (itemId: any | UseFieldArrayRemove) => Promise<void> | void,
  selectedItem?: null | number | string
}

type confirmDialogState = {
  data: confirmDialogData
}

const initialState: confirmDialogState = {
  data: {
    open: false,
    title: '',
    text: '',
    handleAccept: () => {},
    selectedItem: null,
  },
};

export const confirmDialog = createSlice({
  name: 'confirmDialog',
  initialState,
  reducers: {
    openConfirmDialog: (state, action: PayloadAction<openConfirmDialogPayload>) => {
      state.data = {
        open: true,
        title: action.payload.title,
        text: action.payload.text,
        handleAccept: action.payload.handleAccept,
        selectedItem: action.payload.selectedItem,
      };
    },
    closeConfirmDialog: (state) => {
      state.data.open = false;
    },
  },
});

export const {
  openConfirmDialog,
  closeConfirmDialog,
} = confirmDialog.actions;
export default confirmDialog.reducer;
