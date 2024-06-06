import { styled } from '@mui/system';

const StyledErrorMessage = styled('div')(({ theme }) => ({
  position: 'absolute',
  paddingLeft: '5px',
  color: theme.palette.error.main,
  fontSize: '14px',
  whiteSpace: 'nowrap',
  '&.withBorder': {
    bottom: '-20px',
  },
}));
export default StyledErrorMessage;
