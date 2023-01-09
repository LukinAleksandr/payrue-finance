import { FormControl, MenuItem, Select } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ChevronIcon } from '../icons';
import Button from './button';

export const NetworkButtonsWrapper = styled('div')({});

export const SelectControl = styled(FormControl)({
  minWidth: '100px',
});

export const Chevron = styled(ChevronIcon)({
  width: 13,
});

export const SelectStyled = styled(Select)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.background.default,
  borderRadius: 12,
  overflow: 'hidden',

  '.MuiSelect-select': {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 8px',
    fontSize: 14,
    fontWeight: 500,
    lineHeight: '21px',
    color: theme.palette.secondary.dark,

    '& img': {
      marginRight: 8,
    },

    '& > div': {
      borderRadius: 12,
      overflow: 'hidden',
    },
  },
  '& .MuiInputBase-root': {
    borderRadius: 12,
    overflow: 'hidden',
  },
  '& .MuiSvgIcon-root': {
    right: 17,
    color: 'transparent',
    stroke: theme.palette.secondary.dark,
    transition: theme.transitions.create('transform'),
  },
  '& fieldset': {
    border: 'none',
    borderRadius: 12,
    transition: theme.transitions.create('border-color'),
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    border: '1px solid  #3E7AFF',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderWidth: 1,
  },
}));

export const SelectItem = styled(MenuItem)(({ theme }) => ({
  fontSize: 12,
  fontWeight: 400,
  lineHeight: '18px',
  padding: 8,
  color: theme.palette.secondary.dark,

  '& img': {
    marginRight: 5,
  },
}));

export const AddTokenButton = styled(Button)({
  width: '100%',
  marginBottom: 8,
});
