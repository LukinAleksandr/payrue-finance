import { styled, Typography } from '@mui/material';
import HighchartsReact from 'highcharts-react-official';
import { CircleChartIcon } from '../../../app/icons';

export const ProfileChartStyled = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexGrow: 1,
  alignItems: 'center',
  gap: 32,
  justifyContent: 'space-between',
  padding: '7px 46px',
  border: `1px solid ${theme.palette.border}`,
  borderRadius: 24,
  [theme.breakpoints.down('md')]: {
    padding: '24px',
    width: '100%',
    maxWidth: '340px',
  },
}));

export const ProfileChartCell = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
});

export const ProfileChartBalance = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-end',
  flexWrap: 'wrap',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
}));

export const ProfileChartLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.dark,

  [theme.breakpoints.down('md')]: {},
}));
export const ProfileChartValue = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.dark,
  marginRight: 10,
  [theme.breakpoints.down('md')]: {
    fontSize: 31,
  },
}));

export const ProfileChartChanges = styled('span')<{ danger: boolean }>(
  ({ theme, danger }) => ({
    fontSize: 16,
    lineHeight: '24px',
    fontWeight: 300,
    padding: 0,
    margin: 0,
    marginLeft: 6,
    color: danger ? theme.palette.warning.main : theme.palette.success.dark,
    [theme.breakpoints.down('md')]: {
      fontSize: 14,
      lineHeight: '21px',
    },
  }),
);
export const ProfileChartPeriod = styled('span')(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: 16,
  lineHeight: '24px',
  fontWeight: 300,
  marginBottom: 10,
  [theme.breakpoints.down('md')]: {
    marginLeft: 0,
    marginBottom: 0,
  },
}));

export const HighchartsReactStyled = styled(HighchartsReact)({
  borderRadius: '50%',
  overflow: 'hidden',
});

export const ProfileChartIcon = styled(CircleChartIcon)(({ theme }) => ({
  fill: theme.palette.secondary.dark,
  position: 'absolute',
  width: 32,
  height: 32,
  top: 24,
  right: 24,
  cursor: 'pointer',
}));
