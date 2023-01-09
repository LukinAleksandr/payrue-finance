import { styled } from '@mui/material/styles';

export const PaperStyled = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  border: `1px solid ${theme.palette.border}`,
  borderRadius: 10,
  overflow: 'hidden',
}));

export const PaperHeader = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: theme.palette.widget.main,
  padding: '16px 20px',
}));
