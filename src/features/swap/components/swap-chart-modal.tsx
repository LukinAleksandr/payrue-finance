import { DialogProps } from '@mui/material/Dialog';
import { Modal } from '../../../app/components';
import { Token } from '../../network/slice';
import SwapChart from './swap-chart';

export interface SwapChartModalProps extends DialogProps {
  pay: Token;
}

function SwapChartModal({ onClose, pay, ...props }: SwapChartModalProps) {
  return (
    <Modal onClose={onClose} {...props}>
      <SwapChart pay={pay} />
    </Modal>
  );
}

export default SwapChartModal;
