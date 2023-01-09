import Highcharts from 'highcharts';
import { useMemo, useEffect, useRef } from 'react';
import { useModal } from 'mui-modal-provider';
import { Theme, useMediaQuery } from '@mui/material';
import HighchartsReact from 'highcharts-react-official';
import { optionsChart } from '../utils/chart';
import {
  ProfileChartStyled,
  HighchartsReactStyled,
  ProfileChartBalance,
  ProfileChartCell,
  ProfileChartLabel,
  ProfileChartValue,
  // ProfileChartPeriod,
  ProfileChartIcon,
} from './profile-chart.styled';
import { Networks } from '../types';
import ProfileChartModal from './profile-chart-modal';

export interface ProfileChartProps {
  balances: (Networks | number)[][];
  loading: boolean;
  total: number;
}

function ProfileChart({ balances, total = 0, loading }: ProfileChartProps) {
  const ref = useRef<HighchartsReact.RefObject>(null);
  const { showModal } = useModal();
  const isDownLg = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down('lg'),
  );

  useEffect(() => {
    if (ref.current) {
      if (loading) {
        ref.current.chart.showLoading();
      } else {
        ref.current.chart.hideLoading();
      }
    }
  }, [loading]);

  const options = useMemo(
    () => optionsChart(balances, isDownLg),
    [balances, isDownLg],
  );

  // const isDanger = true;

  return (
    <ProfileChartStyled>
      <ProfileChartCell>
        <ProfileChartLabel variant="h4">Total Balance</ProfileChartLabel>
        <ProfileChartBalance>
          <ProfileChartValue variant="h2">
            {total.toFixed(2)} USD
            {/* <ProfileChartChanges danger={isDanger}>
              {!isDanger && '+'}
              {-0.04}
            </ProfileChartChanges> */}
          </ProfileChartValue>
          {/* <ProfileChartPeriod>24 hours</ProfileChartPeriod> */}
        </ProfileChartBalance>
      </ProfileChartCell>
      {!isDownLg && (
        <HighchartsReactStyled
          ref={ref}
          highcharts={Highcharts}
          options={options}
        />
      )}
      {isDownLg && !loading && (
        <ProfileChartIcon
          onClick={() =>
            showModal(ProfileChartModal, {
              chartRef: ref,
              options,
            })
          }
        />
      )}
    </ProfileChartStyled>
  );
}

export default ProfileChart;
