import { styled, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const FeatureRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: theme.palette.primary.dark,
  borderRadius: 10,
  padding: 20,
  width: '100%',
  flex: 1,
}));

export const FeatureDescription = styled(Typography)(({ theme }) => ({
  marginBottom: 20,
  color: theme.palette.secondary.dark,
  textAlign: 'center',
}));

export const FeatureTitle = styled(Typography)(({ theme }) => ({
  marginBottom: 15,
  color: theme.palette.secondary.dark,
  textAlign: 'center',
}));

export const FeatureLink = styled(Link)(({ theme }) => ({
  fontWeight: 400,
  fontSize: 16,
  lineHeight: '24px',
  marginTop: 'auto',
  color: theme.palette.primary.main,
}));

export const FeatureAnchor = styled('a')(({ theme }) => ({
  fontWeight: 400,
  fontSize: 16,
  lineHeight: '24px',
  marginTop: 'auto',
  color: theme.palette.primary.main,
}));
