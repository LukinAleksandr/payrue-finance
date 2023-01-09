import { styled } from '@mui/material/styles';

export const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  alignSelf: 'flex-start',
  fontFamily: "'Poppins', sans-serif",
  '.highcharts-button-pressed rect': {
    fill: theme.palette.primary.light,
  },
  '.highcharts-button-pressed text': {
    fontWeight: '400 !important',
    fontSize: '14px !important',
    lineHeight: '21px !important',
    fill: `${theme.palette.background.default} !important`,
  },
}));

export const ChartContainer = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    minHeight: 350,
  },
}));
