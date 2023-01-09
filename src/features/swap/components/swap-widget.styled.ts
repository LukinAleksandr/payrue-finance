import { Paper, styled } from '@mui/material';
import { Button } from '../../../app/components';
import {
  ChartIcon,
  RefreshIcon,
  SettingsIcon,
  SwapIcon,
} from '../../../app/icons';

export const SwapWidgetStyled = styled(Paper)(({ theme }) => ({
  boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.05)',
  borderRadius: '20px',
  width: 408,
  [theme.breakpoints.down('lg')]: {
    width: '100%',
    maxWidth: 408,
    backgroundColor: theme.palette.background.default,
  },
}));

export const SwapWidgetHeader = styled('div')(({ theme }) => ({
  padding: '24px 16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: `1px solid ${theme.palette.border}`,
}));

export const SwapWidgetLabel = styled('h5')(({ theme }) => ({
  fontWeight: 500,
  fontSize: 16,
  lineHeight: '24px',
  whiteSpace: 'nowrap',
  margin: 0,
  color: theme.palette.secondary.dark,
}));

export const SwapWidgetControls = styled('div')({
  display: 'flex',
  gap: 10,
});

export const SwapWidgetRefresh = styled(RefreshIcon)(({ theme }) => ({
  stroke: theme.palette.secondary.dark,
  cursor: 'pointer',
  borderRadius: 5,
  transition: 'background-color 100ms ease-in',
  '&:hover': {
    backgroundColor: theme.palette.secondary.light,
  },
}));

export const SwapWidgetSettings = styled(SettingsIcon)(({ theme }) => ({
  transition: 'none',
  fill: theme.palette.secondary.dark,
}));

export const SwapWidgetBody = styled('div')({
  padding: '24px 16px 20px 16px',
  display: 'flex',
  flexDirection: 'column',
});

export const SwapIconStyled = styled(SwapIcon)({
  margin: '11px auto 0 auto',
  cursor: 'pointer',
});

export const SwapWidgetButton = styled(Button)({
  marginTop: 24,
});

export const SwapDetailWrapper = styled('div')({
  padding: '0 16px 20px 16px',
  display: 'flex',
  flexDirection: 'column',
});
export const SwapDetailBox = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  borderBottom: `1px solid ${theme.palette.secondary.dark}`,
  paddingBottom: 15,
}));
export const SwapDetailTitle = styled('h2')(({ theme }) => ({
  fontSize: 18,
  fontWeight: 500,
  color: theme.palette.secondary.dark,
  borderBottom: `1px solid ${theme.palette.secondary.dark}`,
  margin: '0 0 10px 0',
}));
export const SwapDetailLabel = styled('span')(({ theme }) => ({
  fontWeight: 400,
  fontSize: 16,
  color: theme.palette.primary.main,
}));
export const SwapDetailValue = styled('span')(({ theme }) => ({
  fontWeight: 300,
  fontSize: 14,
  color: theme.palette.secondary.light,
}));

export const SwapDetailFreeLabel = styled('span')(({ theme }) => ({
  fontWeight: 500,
  fontSize: 16,
  color: theme.palette.secondary.light,
  marginTop: 10,
}));

export const SwapDetailFreeValue = styled('span')(({ theme }) => ({
  fontWeight: 300,
  fontSize: 14,
  color: theme.palette.secondary.light,
}));

export const DisconnectButton = styled(Button)({
  marginTop: 10,
  width: '100%',
});

export const ChartIconStyled = styled(ChartIcon)(({ theme }) => ({
  stroke: theme.palette.secondary.dark,
}));
