import { styled, Tab, Tabs } from '@mui/material';

export const TabsStyled = styled(Tabs)(({ theme }) => ({
  marginTop: 30,
  borderBottom: `1px solid ${theme.palette.secondary.main}`,
  '& .MuiTabs-indicator': {
    height: 4,
  },
}));

export const TabStyled = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: 600,
  fontSize: 22,
  lineHeight: '33px',
  color: theme.palette.secondary.dark,
  flexDirection: 'row',
  alignItems: 'center',
  gap: 13,
  opacity: 0.5,
  padding: '12px 27px',
  '& .MuiSvgIcon-root': {
    marginBottom: 0,
    width: 'auto',
    height: 'auto',
    stroke: theme.palette.secondary.dark,
  },

  '&.Mui-selected': {
    opacity: 1,
    color: theme.palette.secondary.dark,
  },
  [theme.breakpoints.down('md')]: {
    padding: '14px',
    fontWeight: 600,
    fontSize: 14,
    lineHeight: '21px',
    minHeight: 55,
    gap: 7,
  },
  [theme.breakpoints.down('sm')]: {
    flexGrow: 1,
    padding: '14px 5px',
    justifyContent: 'center',
  },
  [theme.breakpoints.down('s')]: {
    minWidth: '80px',
    '& .MuiSvgIcon-root': {
      display: 'none',
      padding: '10px',
    },
  },
}));
