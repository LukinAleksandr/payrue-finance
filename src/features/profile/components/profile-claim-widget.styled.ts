import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '../../../app/components/button';

export const ProfileClaimWidgetRow = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  paddingRight: 153,
  [theme.breakpoints.down('md')]: {
    paddingRight: 0,
  },
}));

export const ProfileClaimWidgetTitle = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.secondary.dark,
  marginLeft: 8,
  [theme.breakpoints.down('md')]: {},
}));

export const ProfileClaimWidgetBody = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '20px 20px 26px 20px',
  position: 'relative',
  color: theme.palette.secondary.dark,
  gap: 24,
  [theme.breakpoints.down('md')]: {
    padding: '20px 20px 84px 20px',
  },
}));

export const ProfileClaimWidgetText = styled('span')(({ theme }) => ({
  fontWeight: 400,
  fontSize: 18,
  lineHeight: '27px',
  '& + &': {
    marginLeft: 'auto',
  },
  [theme.breakpoints.down('md')]: {},
}));

export const ProfileClaimWidgetButton = styled(Button)({
  position: 'absolute',
  right: 20,
  bottom: 20,
});
