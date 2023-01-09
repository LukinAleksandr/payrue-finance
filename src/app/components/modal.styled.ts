import { Button, Dialog, DialogProps, styled } from '@mui/material';

export const DialogRoot = styled(Dialog)<DialogProps>(({ theme }) => ({
  zIndex: 8888,
  '& .MuiBackdrop-root': {
    background: 'rgba(157, 157, 157, 0.27)',
  },
  '& .MuiDialog-container': {
    alignItems: 'flex-end',
    [theme.breakpoints.up('sm')]: {
      marginTop: 50,
      alignItems: 'flex-start',
    },
  },
  '& .MuiPaper-root': {
    position: 'relative',
    width: '100%',
    margin: 0,
    padding: '31px 16px 37px',
    borderRadius: '30px 30px 0 0',

    [theme.breakpoints.up('sm')]: {
      width: 500,
      maxWidth: '100%',
      padding: '40px 24px 24px',
      borderRadius: 16,
    },
    '&::before': {
      content: "''",
      position: 'absolute',
      width: 70,
      height: 3,
      backgroundColor: theme.palette.border,
      top: '10px',
      left: '50%',
      borderRadius: 3,
      transform: 'translateX(-50%)',
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
  },
  '& .MuiDialogContent-root': {
    marginBottom: 14,
    padding: 0,
    overflowY: 'unset',
    [theme.breakpoints.up('sm')]: {
      marginBottom: 22,
    },
  },
  '& .MuiDialogActions-root': {
    display: 'flex',
    justifyContent: 'center !important',
    flexDirection: 'column',
    padding: 0,
    '& > button': {
      width: '100%',
      minHeight: 56,
      marginLeft: 0,
      textTransform: 'none',
      boxShadow: 'none',
    },
    '& > button:last-child': {
      marginTop: 8,
    },
  },
}));

export const CloseButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  top: 16,
  right: 16,
  width: 24,
  minWidth: 24,
  height: 24,
  minHeight: 24,
  background: 'transparent',
  borderRadius: 70,
  svg: {
    fill: theme.palette.secondary.dark,
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));
