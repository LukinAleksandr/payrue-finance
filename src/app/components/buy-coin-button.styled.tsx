import { styled } from '@mui/material';

export const BuyCoinButtonStyled = styled('button')(({ theme }) => ({
  border: 'none',
  backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  display: 'flex',
  marginRight: 10,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 20,
  padding: '2px 10px 2px 3px',
  color: 'white',
  cursor: 'pointer',
  boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.25)',
  svg: {
    padding: 1,
    height: 24,
    width: 24,
    backgroundColor: 'transparent',
    marginRight: 5,

    [theme.breakpoints.down('md')]: {
      marginRight: 0,
      padding: 2,
    },
  },
  [theme.breakpoints.down('md')]: {
    marginRight: 10,
    padding: 2,
  },
}));
