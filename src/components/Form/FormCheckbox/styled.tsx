import styled from '@emotion/styled';
import { Autocomplete } from '@mui/material';
import { Theme } from '@mui/material/styles';

const StyledInputAutoComplete = styled(Autocomplete)(({ theme }: {theme: Theme, listHeight?: string}) => ({
  '& .MuiInputBase-root': {
    background: theme.palette.primary.light,
  },
  width: '100%',
  '& fieldset': {
    borderRadius: '12px',
  },
}));

export default StyledInputAutoComplete;
