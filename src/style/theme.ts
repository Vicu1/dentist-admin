'use client';
import { createTheme } from '@mui/material';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#984fd4',
      contrastText: 'white',
    },
    success: {
      main: '#23B970',
      light: '#9cc8b2'
    },
    grey: {
      '50': '#2F3531'
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
      primary: '#080D09',
      secondary: '#6C726C'
    },
    background: {
      default: '#F1F1F1',
      paper: '#F7F7F7'
    }
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontWeight: '700'
        },
        h2: {
          fontWeight: '700'
        },
        h3: {
          fontWeight: '700'
        },
        h4: {
          fontWeight: '700'
        },
        root: {
          fontFamily: 'Poppins, sans-serif',
        }
      }
    },
    MuiButton: {
      styleOverrides:{
        root: {
          borderRadius: '15px',
          minWidth: '100px',
          padding: '10px',
          border: '1px solid #ffffff',
        },
        colorSuccess: {
          color: '#ffffff'
        },
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
          borderColor: '#ffffff',
          borderRadius: '30px',
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: '15px !important',
          minWidth: '140px',
          width: '100%',
          background: '#FAFAFA'
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
