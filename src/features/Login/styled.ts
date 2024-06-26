import { styled } from '@mui/system';

const LoginFormStyled = styled('div')((({ theme }) => ({
  textAlign: 'center',
  color: theme.palette.text.primary,
  'h3': {
    fontSize: '40px',
    marginBottom: '10px'
  },
  'h6': {
    fontSize: '25px',
    marginBottom: '20px'
  },
  '.MuiPaper-root': {
    padding: '25px'
  },
  '.MuiFormControl-root': {
    maxWidth: '400px'
  }

})));

export default LoginFormStyled;
