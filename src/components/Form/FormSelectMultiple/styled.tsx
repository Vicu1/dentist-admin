import styled from '@emotion/styled';
import { Autocomplete } from '@mui/material';

const StyledAutoCompleteMultiple = styled(Autocomplete)(() => ({
  '& fieldset': {
    borderRadius: '15px',
    borderColor: '#ffffff',
  },
  '.CheckboxItem': {
    marginRight: '8px'
  },
  '& .MuiInputBase-root.MuiOutlinedInput-root': {
    padding: 0
  }
}));

export default StyledAutoCompleteMultiple;
