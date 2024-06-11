import { alpha, CSSObject, styled, Theme } from '@mui/system';

interface HeaderStyledInterface {
  open: boolean,
  theme: Theme
}

const openedMixin = (theme: any): CSSObject => ({
  width: 250,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: any): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
});

const HeaderStyled = styled('header')(({ theme, open }: HeaderStyledInterface) => ({
  height: 'calc(100vh - 10px)',
  borderRadius: '20px',
  background: 'linear-gradient(180deg, rgba(12,17,13,1) 20%, rgba(124,96,147,1) 100%)',
  color: theme.palette.common.white,
  position: 'fixed',
  width: '90px',
  top: '3px',
  left: '3px',
  '.logo': {
    display: 'flex',
    justifyContent: 'center',
    margin: '15px 0 20px'
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100% - 130px)',
    alignItems: 'center',
    justifyContent: 'space-between',
    'svg': {
      width: '30px',
      height: '30px',
      color: '#ffffff',
    },
    '.header-button': {
      backgroundColor: alpha(theme.palette.grey[50], 0.7),
      borderRadius: '50%',
      width: '55px',
      height: '55px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'background 0.5s',
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
      },
      svg: {
        transition: 'transform 0.5s',
        transform: open ? 'rotate(90deg)' : 'rotate(-90deg)'
      }
    },
    ul: {
      display: 'flex',
      alignItems: 'center',
      listStyle: 'none',
      flexDirection: 'column'
    },
    'li': {
      '.nav-item-icon': {
        border: `3px solid ${theme.palette.grey[50]}`,
        backgroundColor: theme.palette.grey[50],
        borderRadius: '50%',
        width: '55px',
        height: '55px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'background-color 0.3s',
      },
    },
    'li.active': {
      '.nav-item-icon': {
        border: `3px solid ${theme.palette.grey[50]}`,
        backgroundColor: theme.palette.primary.main,
      },
    },
    'li:hover': {
      '.nav-item-icon': {
        border: `3px solid ${theme.palette.grey[50]}`,
        backgroundColor: theme.palette.primary.main,
      },
    },
    'li + li': {
      marginTop: '10px'
    }
  },
  ...(open && {
    ...openedMixin(theme),
    li: {
      width: '100%',
      paddingRight: '20px'
    },
    'li.active': {
      backgroundColor: theme.palette.grey[50],
      borderRadius: '40px'
    },
    'li:hover': {
      backgroundColor: theme.palette.grey[50],
      borderRadius: '40px'
    },
    'nav ul': {
      alignItems: 'flex-start'
    },
    '.nav-item-icon': {
      marginRight: '10px'
    },
    'nav a': {
      display: 'flex',
      alignItems: 'center'
    }
  }),
  ...(!open && {
    ...closedMixin(theme),
  }),
}));

export const MainContentStyled = styled('div')(({ theme, open }: {theme: any, open: boolean}) => ({
  transition: theme.transitions.create('margin-left', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  padding: '20px',
  marginLeft: open ? '250px' : '90px'
}));

export default HeaderStyled;
