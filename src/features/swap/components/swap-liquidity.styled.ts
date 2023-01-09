import { FormControlLabel } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Root = styled('div')(({ theme }) => ({
  width: '100%',
  padding: 10,
  borderRadius: 8,
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.primary.dark,
  marginTop: 10,
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
  flexDirection: 'column',
  alignItems: 'center',
  flexWrap: 'nowrap',
  gap: 10,
  marginTop: 10,
});

export const StyledInput = styled('input')(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.secondary.main}`,
  color: theme.palette.secondary.dark,
  borderRadius: 8,
  outline: 'none',
  padding: 8,
  marginTop: 10,
}));

export const CheckboxesContainer = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  height: '120px',
  padding: '0 5px',
  overflowY: 'auto',
  overflowX: 'hidden',
  gap: 8,
});

export const FormControlLabelStyled = styled(FormControlLabel)(({ theme }) => ({
  color: theme.palette.secondary.dark,
}));
