import { styled } from '@mui/material/styles';

export const Root = styled('div')(({ theme }) => ({
  width: '100%',
  padding: 10,
  borderRadius: 8,
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.primary.dark,
  marginBottom: 10,
}));

export const Header = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  cursor: 'pointer',
});

export const HeaderRight = styled('div')(({ theme }) => ({
  color: theme.palette.secondary.dark,

  display: 'flex',
  fontWeight: 300,
  gap: 5,
  alignItems: 'center',
}));

export const StyledInput = styled('input')(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.secondary.main}`,
  color: theme.palette.secondary.dark,
  borderRadius: 8,
  outline: 'none',
  padding: 8,
  marginTop: 10,
  '&::-webkit-outer-spin-button': {
    appearance: 'none',
    margin: 0,
  },
  '&::-webkit-inner-spin-button': {
    appearance: 'none',
    margin: 0,
  },
}));

export const StyledLabel = styled('label')(({ theme }) => ({
  color: theme.palette.secondary.dark,
  fontSize: 16,
  fontWeight: 500,
  lineHeight: '22px',
  letterSpacing: 0,
  textAlign: 'left',
}));
