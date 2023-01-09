import { styled } from '@mui/material/styles';
import { ToastContainer, ToastContainerProps } from 'react-toastify';
import Cross from '../../assets/images/close-rounded.svg';
import Success from '../../assets/images/checkmark.svg';
import Error from '../../assets/images/error.svg';
import Info from '../../assets/images/info.svg';
import Warning from '../../assets/images/info-warning.svg';

export const StyledToastContainer = styled(ToastContainer)<ToastContainerProps>(
  {
    '&&&.Toastify__toast-container': {
      width: 'auto',
      padding: 0,
      margin: 0,
      left: 'initial',
      top: 24,
      right: 24,
      zIndex: 9999,
      '.Toastify__toast': {
        position: 'relative',
        width: 327,
        minHeight: 60,
        padding: '16px 40px 20px 18px',
        borderRadius: 16,
        willChange: 'transform',
        boxShadow: '0px 8px 20px -7px rgba(9, 26, 47, 0.17)',
      },
      '.Toastify__toast-body': {
        padding: 0,
        margin: 0,
      },
      '.Toastify__close-button': {
        position: 'absolute',
        top: '50%',
        right: 16,
        transform: 'translateY(-50%)',
        width: 16,
        height: 16,
        opacity: 1,
        backgroundImage: `url(${Cross})`,
        backgroundSize: 'contain',
        '& svg': {
          display: 'none',
        },
      },
      '.Toastify__progress-bar': {
        height: 4,
        backgroundColor: '#624CE0',
        borderRadius: '0px 8px 0px 0px',
      },
      '.Toastify__toast-icon': {
        width: 24,
        height: 24,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        '& svg': {
          display: 'none',
        },
      },
      '.Toastify__toast--default': {
        background: 'rgba(230, 239, 250, 0.9)',
        border: '1px solid rgba(191, 213, 239, 0.9)',
        '.Toastify__toast-icon': {
          backgroundImage: `url(${Info})`,
        },
      },
      '.Toastify__toast--info': {
        background: 'rgba(230, 239, 250, 0.9)',
        border: '1px solid rgba(191, 213, 239, 0.9)',
        '.Toastify__toast-icon': {
          backgroundImage: `url(${Info})`,
        },
      },
      '.Toastify__toast--success': {
        background: 'rgba(234, 247, 238, 0.9)',
        border: '1px solid rgba(198, 225, 205, 0.9)',
        '.Toastify__toast-icon': {
          backgroundImage: `url(${Success})`,
        },
      },
      '.Toastify__toast--warning': {
        background: 'rgba(254, 247, 235, 0.9)',
        border: '1px solid rgba(241, 220, 188, 0.9)',
        '.Toastify__toast-icon': {
          backgroundImage: `url(${Warning})`,
        },
      },
      '.Toastify__toast--error': {
        background: 'rgba(252, 237, 233, 0.9)',
        border: '1px solid rgba(232, 198, 190, 0.9)',
        '.Toastify__toast-icon': {
          backgroundImage: `url(${Error})`,
        },
      },
    },
  },
);
