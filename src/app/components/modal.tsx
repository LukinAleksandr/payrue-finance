import { DialogProps } from '@mui/material/Dialog';
import { CloseIcon } from '../icons';

import { DialogRoot, CloseButton } from './modal.styled';

function Modal({ onClose, children, ...props }: DialogProps) {
  const onCancel = () => onClose?.({}, 'backdropClick');

  return (
    <DialogRoot onClose={onCancel} {...props}>
      {children}
      <CloseButton onClick={onCancel}>
        <CloseIcon />
      </CloseButton>
    </DialogRoot>
  );
}

export default Modal;
