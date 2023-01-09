import {
  DialogTitle,
  DialogTitleProps,
  InputBase,
  styled,
  Typography,
} from '@mui/material';

export const Title = styled(DialogTitle)<DialogTitleProps>(({ theme }) => ({
  marginBottom: 24,
  padding: 0,
  fontWeight: 700,
  fontSize: '28px',
  lineHeight: '110%',
  letterSpacing: '-1px',
  color: theme.palette.secondary.dark,
  [theme.breakpoints.up('sm')]: {
    marginBottom: 16,
    fontSize: 32,
    lineHeight: '44px',
  },
}));

export const Input = styled(InputBase)(({ theme }) => ({
  outline: 'none',
  padding: 10,
  borderRadius: 10,
  background: theme.palette.primary.dark,
  width: '100%',
  border: '1px solid #3e3e3e',
  color: theme.palette.secondary.dark,
}));

export const List = styled('ul')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxHeight: 500,
  padding: 0,
  margin: 0,
  gap: 10,
  overflow: 'auto',
  [theme.breakpoints.down('md')]: {
    maxHeight: 300,
    height: 300,
  },
}));

export const Item = styled('li')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  border: '1px solid #59f',
  borderRadius: 12,
  padding: 10,
  width: '100%',
  cursor: 'pointer',
});

export const Cell = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 5,
});

export const Text = styled(Typography)(({ theme }) => ({
  margin: 0,
  padding: 0,
  color: theme.palette.secondary.dark,
}));
