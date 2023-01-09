import { styled } from '@mui/material';

export const ProfileHistoryRowStyled = styled('div')<{ isOpen: boolean }>(
  ({ theme, isOpen }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexWrap: 'wrap',
      width: 'calc(100% + 30px)',
      marginLeft: '-15px',
      padding: '0 15px',
      backgroundColor: isOpen ? theme.palette.widget.main : 'transparent',
    },
  }),
);

export const ProfileHistoryStartCell = styled('div')(({ theme }) => ({
  width: '40%',
  flexShrink: 0,
  display: 'flex',
  justifyContent: 'flex-start',
  '& > div': {
    alignItems: 'center',
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    borderBottom: `1px solid ${theme.palette.border}`,
    padding: '16px 0',
    cursor: 'pointer',
  },
}));
export const ProfileHistoryCell = styled('div')<{ isOpen?: boolean }>(
  ({ theme, isOpen }) => ({
    width: '20%',
    flexShrink: 0,
    display: 'flex',
    justifyContent: 'flex-start',
    '& > div': {
      alignItems: 'flex-start',
    },
    [theme.breakpoints.down('md')]: {
      width: 'calc(100% / 3)',
      padding: '16px 0',
      justifyContent: 'flex-start',
      display: isOpen ? 'block' : 'none',
      '& > div': {
        alignItems: 'flex-start',
      },
    },
  }),
);
export const ProfileHistoryEndCell = styled('div')<{ isOpen?: boolean }>(
  ({ theme, isOpen }) => ({
    width: '20%',
    flexShrink: 0,
    display: 'flex',
    justifyContent: 'flex-end',
    '& > div': {
      alignItems: 'flex-end',
    },
    [theme.breakpoints.down('md')]: {
      width: 'calc(100% / 3)',
      padding: '16px 0',
      display: isOpen ? 'block' : 'none',
    },
  }),
);

export const ProfileHistoryTxCol = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('md')]: {},
}));

export const ProfileHistorySub = styled('span')(({ theme }) => ({
  fontWeight: 300,
  fontSize: 16,
  lineHeight: '24px',
  color: theme.palette.secondary.main,
  [theme.breakpoints.down('md')]: {
    fontSize: 14,
    lineHeight: '21px',
  },
}));

export const ProfileHistoryTitleCell = styled('span')(({ theme }) => ({
  display: 'none',
  fontWeight: 400,
  fontSize: 18,
  lineHeight: '27px',
  marginBottom: 10,
  color: theme.palette.secondary.light,
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
}));

export const ProfileHistoryTxData = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'nowrap',
  gap: 14,
  [theme.breakpoints.down('md')]: {},
}));

export const ProfileHistoryLink = styled('a')(({ theme }) => ({
  color: theme.palette.secondary.main,
}));
