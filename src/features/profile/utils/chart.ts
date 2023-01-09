import { ProfileChartData } from '../types';

export const optionsChart = (data: ProfileChartData[], isDownMd: boolean) => ({
  title: {
    text: '',
    enabled: false,
  },
  tooltip: {
    valueSuffix: ' USD',
  },
  chart: {
    backgroundColor: 'transparent',
    height: isDownMd ? 240 : 180,
    width: isDownMd ? 240 : 180,
  },
  accessibility: {
    point: {
      valueSuffix: 'USD',
    },
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: false,
      },
      size: isDownMd ? 220 : 141,
    },
  },
  series: [
    {
      type: 'pie',
      name: 'Balance',
      innerSize: '50%',
      data: [...data],
    },
  ],
});
