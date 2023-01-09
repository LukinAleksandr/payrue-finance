import { styled } from '@mui/material';

export const SwapFieldStyled = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

export const SwapFieldTop = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const SwapFieldLabel = styled('div')(({ theme }) => ({
  fontWeight: 500,
  fontSize: 12,
  lineHeight: '18px',
  color: theme.palette.secondary.main,
}));

export const SwapFieldControls = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 3,
});

export const SwapFieldBalance = styled('div')(({ theme }) => ({
  fontWeight: 400,
  fontSize: 12,
  lineHeight: '18px',
  color: theme.palette.secondary.dark,
}));

export const SwapFieldBody = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: 8,
  backgroundColor: theme.palette.primary.dark,
  borderRadius: 15,
  marginTop: 4,
}));

export const SwapFieldPlaceholder = styled('div')(({ theme }) => ({
  fontWeight: 400,
  fontSize: 14,
  lineHeight: '21px',
  color: theme.palette.secondary.main,
}));

export const SwapFieldInputWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  marginLeft: 'auto',
  gap: 3,
});

export const SwapFieldInput = styled('input')(({ theme }) => ({
  border: 'none',
  outline: 'none',
  backgroundColor: 'transparent',
  textAlign: 'right',
  color: theme.palette.secondary.dark,
  fontWeight: 400,
  fontSize: 14,
  lineHeight: '21px',
  '&::placeholder': {
    color: theme.palette.secondary.dark,
  },
  '&::-webkit-outer-spin-button': {
    appearance: 'none',
    margin: 0,
  },
  '&::-webkit-inner-spin-button': {
    appearance: 'none',
    margin: 0,
  },
}));
