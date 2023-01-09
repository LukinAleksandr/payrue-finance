import { Box, styled, Typography } from '@mui/material';

export const Root = styled(Box)({});

export const AboutTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.dark,
  textAlign: 'center',
}));

export const AboutSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.dark,
  margin: '0 auto',
  textAlign: 'center',
}));

export const AboutContainer = styled('section')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 96,
});

export const AboutDescription = styled(Typography)(({ theme }) => ({
  maxWidth: 871,
  margin: '0 auto',
  textAlign: 'center',
  marginTop: 66,
  color: theme.palette.secondary.dark,
  [theme.breakpoints.down('md')]: {
    marginTop: 36,
  },
}));

export const OfferContainer = styled('section')(({ theme }) => ({
  marginBottom: 114,
  background: theme.palette.primary.dark,
  borderRadius: 16,
  padding: 30,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 30,
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

export const OfferStart = styled('div')(({ theme }) => ({
  paddingLeft: 100,
  [theme.breakpoints.down('lg')]: {
    paddingLeft: 50,
  },
  [theme.breakpoints.down('md')]: {
    paddingLeft: 0,
    margin: '0 auto',
  },
}));

export const OfferEnd = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: '40%',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const OfferImg = styled('img')({
  width: '100%',
});

export const OfferText = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  maxWidth: 515,
  marginTop: 15,
}));

export const TeamList = styled('ul')(({ theme }) => ({
  margin: '40px auto 110px',
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  gap: 30,
  listStyle: 'none',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

export const TeamItem = styled('li')({
  flexBasis: 'calc(100% / 3)',
});

export const TeamCard = styled('div')({
  width: '100%',
});

export const TeamCardLink = styled('a')({
  position: 'absolute',
  content: "''",
  width: 180,
  height: 36,
  bottom: 10,
  left: 10,
  display: 'none',
});

export const TeamCardWrapper = styled('div')({
  borderRadius: 10,
  overflow: 'hidden',
  position: 'relative',
  cursor: 'pointer',
  '&::before': {
    position: 'absolute',
    content: "''",
    right: 0,
    top: 0,
    bottom: 0,
    left: 0,
    background: ' #017aff',
    opacity: 0,
    transition: '0.3s',
  },
  '&:hover&::before': {
    opacity: 0.3,
  },
  '&:hover > a': {
    display: 'block',
  },
});

export const TeamCardImg = styled('img')({
  width: '100%',
  display: 'block',
});

export const TeamCardName = styled(Typography)(({ theme }) => ({
  marginBottom: 4,
  color: theme.palette.secondary.dark,
}));

export const TeamCardPosition = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
}));
