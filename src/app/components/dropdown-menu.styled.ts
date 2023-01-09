import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';

export const Dropdown = styled(Button)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  minWidth: 'unset',
  height: 24,
  padding: 0,
  '&.Mui-disabled': {
    opacity: 0.3,
  },
});

export const CustomMenu = styled(Popover)(({ theme }) => ({
  '.MuiPaper-root': {
    minWidth: 400,
    borderRadius: 8,
    padding: 20,
    [theme.breakpoints.down('md')]: {
      minWidth: 'auto',
    },
  },
}));
