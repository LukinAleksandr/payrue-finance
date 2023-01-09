import { styled } from '@mui/material';

export const ProfileNFTBannerStyled = styled('div')(({ theme }) => ({
  border: `1px solid ${theme.palette.border}`,
  borderRadius: 10,
  backgroundColor: theme.palette.background.paper,
  padding: 40,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 23,
  marginBottom: 'auto',
  width: 517,
  [theme.breakpoints.down('md')]: {
    width: '100%',
    maxWidth: 550,
  },
}));

export const ProfileNFTBannerImage = styled('img')(({ theme }) => ({
  width: 250,
  [theme.breakpoints.down('md')]: {},
}));

export const ProfileNFTBannerText = styled('div')(({ theme }) => ({
  fontWeight: 400,
  fontSize: 18,
  lineHeight: '27px',
  color: theme.palette.secondary.dark,
  [theme.breakpoints.down('md')]: {},
}));
