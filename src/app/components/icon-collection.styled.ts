import { styled } from '@mui/material';

export const IconCollectionList = styled('ul')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'nowrap',
  padding: '0 0 0 12px',
  margin: 0,
  listStyle: 'none',
  [theme.breakpoints.down('md')]: {},
}));

export const IconCollectionItem = styled('li')(({ theme }) => ({
  boxShadow: `0px 0.5px 1px rgba(0, 0, 0, 0.199474)`,
  marginLeft: '-12px',
  width: 32,
  height: 32,
  borderRadius: '50%',
  svg: {
    width: '100%',
    height: '100%',
  },
  [theme.breakpoints.down('md')]: {},
}));
