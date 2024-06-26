import styled from '@emotion/styled';
import { Autocomplete } from '@mui/material';

const StyledInputAutoComplete = styled(Autocomplete)(() => ({
  width: '100%',
  '& fieldset': {
    borderRadius: '15px',
    borderColor: '#ffffff',
  },
  '& .MuiInputBase-root': {
    padding: 0
  }
}));

export default StyledInputAutoComplete;
