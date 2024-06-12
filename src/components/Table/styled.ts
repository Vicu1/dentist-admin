import { TableContainer } from '@mui/material';
import { alpha, styled } from '@mui/system';

const TableContainerStyled = styled(TableContainer)(({ theme }) => ({
  maxHeight: 'calc(100vh - 295px)',
  '.MuiTable-root': {
    borderCollapse: 'separate',
    borderSpacing: '0 10px',
    border: 'transparent'
  },
  '.MuiTableCell-root': {
    borderBottom: 'none',
    padding: '10px',
    fontSize: '16px'

  },
  '.MuiTableHead-root': {
    position: 'sticky',
    top: 0,
    background: theme.palette.background.paper,
    zIndex: 2,
    '.MuiTableCell-root': {
      color: theme.palette.text.secondary,
      fontWeight: 700,
    }
  },
  '.MuiTableBody-root': {
    '.table-buttons': {
      button: {
        width: '50px',
        height: '50px',
        minWidth: '50px',
        borderRadius: '50%',
        backgroundColor: theme.palette.primary.main,
        transition: 'background-color 0.2s',
        svg: {
          color: theme.palette.common.white
        },
        '&:hover': {
          backgroundColor: alpha(theme.palette.primary.main, 0.7),
        }
      }
    },
    '.MuiTableRow-root td:first-child': {
      borderTopLeftRadius: '50px',
      borderBottomLeftRadius: '50px'
    },

    '.MuiTableRow-root td:last-child': {
      borderTopRightRadius: '50px',
      borderBottomRightRadius: '50px'
    },
    '.MuiTableRow-root': {
      background: theme.palette.common.white,
      borderRadius: '20px'
    },
    '.MuiTableCell-root': {
      fontSize: '16px'
    }
  }
}));
export default TableContainerStyled;
