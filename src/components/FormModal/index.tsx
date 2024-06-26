import CloseIcon from '@mui/icons-material/Close';
import { Collapse, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import { FC, ReactNode } from 'react';

import ModalStyled from '@/components/FormModal/styled';

export enum FormType {
  CREATE = 'create',
  UPDATE = 'update'
}

interface FormModalProps {
    open: boolean,
    onClose: () => void,
    children: ReactNode,
    type?: FormType
}
const FormModal: FC<FormModalProps> = ({ open = false, onClose, children, type = 'create' }) => {
  return (
    <ModalStyled
      TransitionComponent={Collapse}
      open={open}
      onClose={onClose}
      fullWidth
    >
      <DialogTitle
        display={'flex'}
        fontSize={'25px'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        {type === FormType.CREATE ? 'Создать' : 'Редактировать'}
        <DialogActions>
          <IconButton
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        </DialogActions>
      </DialogTitle>
      {children && <DialogContent sx={{ overflow: 'visible' }}>
        {children}
      </DialogContent>}
    </ModalStyled>
  );
};

export default FormModal;
