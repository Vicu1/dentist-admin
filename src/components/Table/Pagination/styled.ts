import { Pagination } from '@mui/material';
import { styled } from '@mui/system';

const PaginationStyled = styled(Pagination)(({ theme }) => ({
  marginTop: '20px',
  '.MuiPagination-ul': {
    justifyContent: 'center',
    'li:first-of-type': {
      marginRight: 'auto'
    },
    'li:last-child': {
      marginLeft: 'auto'
    }
  },
  '.MuiButtonBase-root': {
    fontSize: '16px',
    width: '40px',
    borderRadius: '50%',
    height: '40px',
    color: theme.palette.text.secondary,
    '&.Mui-selected, &:hover': {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.common.white,
    },
    '&.Mui-selected:hover': {
      backgroundColor: theme.palette.common.white,
    }
  },
  'li:first-of-type, li:last-child': {
    '.MuiButtonBase-root': {
      color: theme.palette.text.primary,
    }
  }
}));
export default PaginationStyled;
