import { FormControl, MenuItem, Select } from '@mui/material';
import { styled } from '@mui/material/styles';
import { SelectChevronIcon } from '../icons';

export const NetworkButtonsWrapper = styled('div')({
  maxWidth: 180,
});

export const NetworkFormControl = styled(FormControl)({
  width: '100%',
});

export const Chevron = styled(SelectChevronIcon)({
  width: 9,
});

export const NetworkSelectStyled = styled(Select)(({ theme }) => ({
  backgroundColor: 'transparent',
  '.MuiSelect-select': {
    display: 'flex',
    alignItems: 'center',
    height: 24,
    padding: '4px',
    fontSize: 12,
    fontWeight: 400,
    lineHeight: '18px',
    paddingRight: 40,
    color: theme.palette.secondary.dark,
    '& svg': {
      marginRight: 5,
    },
  },
  '& .MuiSvgIcon-root': {
    right: 17,
    color: 'transparent',
    transition: theme.transitions.create('transform'),
  },
  '& fieldset': {
    border: '1px solid #3E7AFF',
    borderRadius: 30,
    transition: theme.transitions.create('border-color'),
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    border: '1px solid  #3E7AFF',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderWidth: 1,
  },
}));

export const NetworkMenuItem = styled(MenuItem)(({ theme }) => ({
  fontSize: 12,
  fontWeight: 400,
  lineHeight: '18px',
  padding: 8,
  color: theme.palette.secondary.dark,

  '& svg': {
    marginRight: 5,
  },
}));
