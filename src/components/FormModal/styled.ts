import { Dialog } from '@mui/material';
import { styled } from '@mui/system';

const ModalStyled = styled(Dialog)(() => ({
  '.MuiDialog-container': {
    height: '100vh',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  '.MuiPaper-root': {
    maxHeight: 'calc(100vh - 175px)',
    borderRadius: '20px',
    width: '800px',
    maxWidth: '800px',
    margin: '175px 0 auto',
  }
}));

export default ModalStyled;
