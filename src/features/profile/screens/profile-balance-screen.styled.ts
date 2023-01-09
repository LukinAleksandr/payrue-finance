import {
  alpha,
  NativeSelect,
  Skeleton,
  styled,
  Typography,
} from '@mui/material';

export const ProfileBalanceScreenRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'nowrap',
  gap: 30,
  [theme.breakpoints.down('md')]: {},
}));

export const ProfileBalanceTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.dark,
}));

export const ProfileBalanceList = styled('ul')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  margin: 0,
  [theme.breakpoints.down('md')]: {},
}));

export const ProfileBalanceItem = styled('li')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  border: 'none',
  [theme.breakpoints.down('md')]: {},
}));

export const ProfileBalanceLabel = styled('label')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 9,
  padding: '17px 20px',
  color: theme.palette.secondary.dark,
  fontWeight: 400,
  fontSize: 18,
  lineHeight: '27px',
  cursor: 'pointer',
  border: 'none',
  transition: 'background-color 300ms ease-in-out',
  borderTop: `1px solid transparent`,
  borderBottom: `1px solid transparent`,
  '&:hover': {
    backgroundColor: alpha(theme.palette.widget.active, 0.6),
  },
}));

export const ProfileBalanceInput = styled('input')(({ theme }) => ({
  appearance: 'none',
  position: 'absolute',
  height: 0,
  '&:checked ~ label': {
    backgroundColor: theme.palette.widget.active,
    borderTop: `1px solid ${theme.palette.border}`,
    borderBottom: `1px solid ${theme.palette.border}`,
  },
}));

export const ProfileBalanceValue = styled('span')(({ theme }) => ({
  marginLeft: 'auto',
  [theme.breakpoints.down('md')]: {},
}));

export const ProfileBalanceNetworkSkeleton = styled(Skeleton)(({ theme }) => ({
  height: '63px',
  width: '100%',
  borderTop: `1px solid ${theme.palette.border}`,
  borderBottom: `1px solid ${theme.palette.border}`,
  [theme.breakpoints.down('md')]: {},
}));

export const ProfileBalanceMobileRoot = styled('div')({});

export const ProfileBalanceMobileHeader = styled('div')({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'space-between',
  marginBottom: 16,
});

export const ProfileBalanceMobileTitle = styled('h5')(({ theme }) => ({
  fontWeight: 500,
  fontSize: 16,
  lineHeight: '24px',
  whiteSpace: 'nowrap',
  margin: 0,
  color: theme.palette.secondary.dark,
}));

export const ProfileBalanceMobileSelect = styled(NativeSelect)(({ theme }) => ({
  color: theme.palette.secondary.dark,
  backgroundColor: theme.palette.primary.dark,
  border: `1px solid #3E7AFF`,
  borderRadius: 10,
  padding: '8px 20px',
  '& .MuiNativeSelect-select.MuiNativeSelect-standard': {
    padding: 0,
    paddingRight: 0,
  },
  '& .MuiNativeSelect-select:focus': {
    backgroundColor: 'transparent',
  },
  '& .MuiSvgIcon-root': {
    color: theme.palette.secondary.dark,
  },
}));
