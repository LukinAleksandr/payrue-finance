import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import { MenuActionIcon, StakingActionIcon, SwapActionIcon } from '../icons';

export const MobileActionsStyles = styled('div')(({ theme }) => ({
  zIndex: 8888,
  height: '64px',
  boxShadow: '4px 0px 5px rgba(0, 0, 0, 0.05)',
  background: theme.palette.background.default,
  position: 'fixed',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 54px',
  bottom: 0,
  left: 0,
  right: 0,
}));

export const HomeStyled = styled(SwapActionIcon)``;
export const NFTStyled = styled(StakingActionIcon)``;
export const MoreStyled = styled(MenuActionIcon)``;

export const Action = styled(NavLink)(({ theme }) => ({
  padding: '11px 0 6px',
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  alignItems: 'center',
  textDecoration: 'none',
  color: theme.palette.secondary.dark,
  svg: {
    fill: theme.palette.secondary.dark,
  },
  '&.active': {
    color: theme.palette.primary.light,

    span: {
      color: theme.palette.primary.light,
    },
    svg: {
      fill: theme.palette.primary.light,
    },
  },
}));

export const ActionMore = styled('span')(({ theme }) => ({
  padding: '11px 0 6px',
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  alignItems: 'center',
  svg: {
    fill: theme.palette.secondary.dark,
  },
}));

export const ActionText = styled('span')(({ theme }) => ({
  fontFamily: 'Poppins',
  fontWeight: 500,
  fontSize: 14,
  lineHeight: ' 21px',
  textAlign: 'center',
  color: theme.palette.secondary.dark,
}));
