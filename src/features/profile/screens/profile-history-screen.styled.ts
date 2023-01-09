import { NativeSelect, styled } from '@mui/material';

export const ProfileHistoryScreenRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {},
}));

export const ProfileHistoryTableStyled = styled('div')(({ theme }) => ({
  width: '100%',
  fontWeight: 400,
  fontSize: 22,
  lineHeight: '33px',
  [theme.breakpoints.down('md')]: {
    fontSize: 18,
    lineHeight: '27px',
  },
}));

export const ProfileHistoryTableHead = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  color: theme.palette.secondary.light,
  [theme.breakpoints.down('md')]: {},
}));

export const ProfileHistoryBody = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  padding: '26px 0',
  color: theme.palette.secondary.dark,
  [theme.breakpoints.down('md')]: {
    gap: 0,
    padding: '0',
  },
}));

export const ProfileBalanceMobileHeader = styled('div')({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'space-between',
  marginBottom: 16,
});

export const ProfileBalanceMobileTitle = styled('h5')(({ theme }) => ({
  fontWeight: 600,
  fontSize: 22,
  lineHeight: '33px',
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
