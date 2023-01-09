import { Box, styled, Typography } from '@mui/material';
import { LogoIcon, PropelLogoIcon } from '../../../app/icons';

export const Root = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingBottom: 66,
});

export const Logo = styled(PropelLogoIcon)({
  width: 74,
  height: 85,
  marginBottom: 34,
});

export const Title = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  color: theme.palette.secondary.dark,
  marginBottom: 81,
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  color: theme.palette.secondary.dark,
  marginBottom: 120,
  maxWidth: 410,
}));

export const List = styled('ul')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  gap: 30,
  margin: '0 0 120px 0',
  padding: 0,
  flexWrap: 'nowrap',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

export const Item = styled('li')(({ theme }) => ({
  display: 'flex',
  gap: 6,
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  margin: 0,
  padding: 26,
  width: '100%',
  background: 'transparent',
  border: `1px solid ${theme.palette.border}`,
  borderRadius: 16,
}));

export const ItemTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.dark,
  display: 'flex',
  flexWrap: 'nowrap',
  whiteSpace: 'nowrap',
  gap: 8,
}));

export const ItemText = styled(Typography)(({ theme }) => ({
  letterSpacing: '-0.02em',
  color: theme.palette.secondary.main,
}));

export const ItemLink = styled('a')(({ theme }) => ({
  maxWidth: 18,
  height: 18,
  cursor: 'pointer',
  svg: {
    stroke: theme.palette.secondary.dark,
  },
}));

export const WidgetWrapper = styled('div')({
  width: '100%',
  display: 'flex',
  gap: 37,
  flexDirection: 'column',
});

export const Row = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

export const PayrueLogoWrapper = styled('div')({
  display: 'flex',
  marginBottom: 12,
});
export const PayrueLogoImg = styled(LogoIcon)({
  height: 46,
  marginRight: 9,
});
export const PayrueLogoText = styled('span')(({ theme }) => ({
  display: 'flex',
  color: theme.palette.secondary.dark,
  fontWeight: 600,
  fontSize: 32,
  letterSpacing: '-0.02em',
}));

export const WidgetDesc = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  marginLeft: 42,
}));

export const TablesWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: 30,
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  [theme.breakpoints.down('md')]: {
    gap: 50,
    flexDirection: 'column',
    width: '100%',
  },
}));

export const TableWrapper = styled('div')({
  width: '100%',
  flex: 1,
  padding: '2px',
});

export const DescriptionBlock = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  padding: 55,
  background: theme.palette.primary.dark,
  borderRadius: 10,
  justifyContent: 'center',
  margin: '111px auto 178px',
}));

export const Description = styled(Typography)(({ theme }) => ({
  maxWidth: 815,
  textAlign: 'center',
  color: theme.palette.secondary.dark,
  marginBottom: 20,
}));

export const Networks = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: 30,
  maxWidth: 857,
  margin: '0 auto',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  marginBottom: 170,
  [theme.breakpoints.down('md')]: {
    gap: 40,
  },
}));

export const Features = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: 30,
  justifyContent: 'center',
  flexWrap: 'wrap',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));
