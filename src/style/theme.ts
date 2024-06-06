'use client';
import { createTheme } from '@mui/material';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#7C6093',
      contrastText: 'white',
    },
    success: {
      main: '#23B970',
      light: '#9cc8b2'
    },
    warning: {
      main: '#E5952B'
    },
    info: {
      main: '#5D91DA'
    },
    common: {
      white: '#FFFFFF',
      black: '#080D09'
    },
    text: {
      primary: '#080D09'
    },
    background: {
      default: '#F1F1F1',
      paper: '#F7F7F7'
    }
  },
  components: {
    MuiButton: {
      styleOverrides:{
        root: {
          borderRadius: '15px',
          minWidth: '100px',
          padding: '10px'
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: '1px solid #ffffff',
          padding: '15px',
          borderRadius: '30px'
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          border: 'none',
          borderRadius: '30px',
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: '15px !important',
          minWidth: '300px',
          background: '#ffffff'
        },
        input: {
          padding: '12px 14px !important'
        }
      }
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          color: '#666D65',
          marginRight: 0,
          flexDirection: 'column-reverse',
          alignItems: 'flex-start'
        }
      }
    }
  }
});

export default customTheme;
