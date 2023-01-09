import { DialogProps } from '@mui/material/Dialog';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { Modal } from '../../../app/components';
import { HighchartsReactStyled } from './profile-chart.styled';
import {
  ProfileChartModalWrapper,
  ProfileChartModalTitle,
} from './profile-chart-modal.styled';

export interface ProfileChartModalProps extends DialogProps {
  chartRef: React.RefObject<HighchartsReact.RefObject>;
  // eslint-disable-next-line
  options: any;
}

function ProfileChartModal({
  onClose,
  chartRef,
  options,
  ...props
}: ProfileChartModalProps) {
  return (
    <Modal onClose={onClose} {...props}>
      <ProfileChartModalWrapper>
        <ProfileChartModalTitle variant="h3">
          Total Balance
        </ProfileChartModalTitle>
        <HighchartsReactStyled
          ref={chartRef}
          highcharts={Highcharts}
          options={options}
        />
      </ProfileChartModalWrapper>
    </Modal>
  );
}

export default ProfileChartModal;
