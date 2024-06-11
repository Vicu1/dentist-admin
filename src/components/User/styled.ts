import { styled } from '@mui/system';

const UserStyled = styled('div')(({ theme }) => ({
  marginBottom: '20px',
  display: 'flex',
  justifyContent: 'flex-end',
  '.MuiAvatar-root': {
    width: '50px',
    height: '50px',
    border: `3px solid ${theme.palette.grey[50]}`,
    backgroundColor: theme.palette.grey[50]
  }
}));
export default UserStyled;
