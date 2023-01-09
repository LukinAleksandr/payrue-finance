import { styled } from '@mui/material/styles';
import { Button } from '../../../app/components';

export const Root = styled('div')(({ theme }) => ({
  width: '100%',
  padding: 10,
  borderRadius: 8,
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.primary.dark,
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

export const StyledLabel = styled('label')(({ theme }) => ({
  color: theme.palette.secondary.dark,
  fontSize: 16,
  fontWeight: 500,
  lineHeight: '22px',
  letterSpacing: 0,
  textAlign: 'left',
}));

export const Body = styled('div')({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'nowrap',
  gap: 10,
  marginTop: 10,
});

export const StyledButton = styled(Button)({});
