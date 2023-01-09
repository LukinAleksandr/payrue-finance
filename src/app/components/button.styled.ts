import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)({
  textDecoration: 'none',
  display: 'inline-block',
});

export const ButtonStyled = styled(Button)(({ theme }) => ({
  padding: '11px 32px',
  textTransform: 'none',
  fontWeight: 400,
  fontSize: 18,
  lineHeight: '27px',
  letterSpacing: '-0.02em',
  borderRadius: 10,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  [theme.breakpoints.down('md')]: {
    padding: '10px 32px',
    svg: {
      width: 18,
    },
  },

  // MEDIUM SIZE
  '&.medium': {
    padding: '7px 16px',
    fontSize: '16px',
    lineHeight: '18px',
    height: 40,
  },

  // SMALL SIZE
  '&.small': {
    width: '50px',
    minWidth: 'auto',
    padding: '4px 8px',
    fontSize: '10px',
    lineHeight: '14px',
    height: 24,
  },
}));

export const PrimaryButton = styled(ButtonStyled)(({ theme }) => ({
  background: theme.palette.primary.light,
  color: '#fff',
  '& .MuiButton-startIcon svg': {
    stroke: '#fff',
  },
  '&:hover': {
    background: theme.palette.primary.main,
  },
  '&:active': {
    background: theme.palette.primary.main,
  },
  '&:disabled': {
    color: '#fff',
    opacity: 0.7,
    '& .MuiButton-startIcon svg': {
      stroke: '#fff',
    },
  },
}));

export const SecondaryButton = styled(ButtonStyled)(({ theme }) => ({
  background: theme.palette?.secondary.main,
  color: '#fff',
  '& .MuiButton-startIcon svg': {
    stroke: theme.palette?.secondary.light,
  },
  '&:hover': {
    background: theme.palette?.secondary.light,
  },
  '&:active': {
    background: theme.palette?.secondary.dark,
  },
  '&:disabled': {
    // background: theme.palette?.secondary.disabled,
    // color: theme.palette?.secondary.textDisabled,
    // '& .MuiButton-startIcon svg': {
    //   stroke: theme.palette?.secondary.textDisabled,
    // },
  },
}));

export const GhostButton = styled(ButtonStyled)(({ theme }) => ({
  background: 'transparent',
  color: theme.palette?.primary.light,
  border: `1px solid ${theme.palette?.primary.light}`,
  '& .MuiButton-startIcon svg': {
    stroke: theme.palette?.primary.dark,
  },
  '&:hover': {
    background: theme.palette?.primary.light,
    color: theme.palette?.secondary.dark,
  },
  '&:active': {
    // color: theme.palette?.light,
    // background: theme.palette?.secondary.dark,
    // '& .MuiButton-startIcon svg': {
    //   stroke: theme.palette?.light,
    // },
  },
  '&:disabled': {
    // border: `1px solid ${theme.palette?.secondary.textDisabled}`,
    // background: 'transparent',
    // color: theme.palette?.secondary.textDisabled,
    // '& .MuiButton-startIcon svg': {
    //   stroke: theme.palette?.secondary.textDisabled,
    // },
  },
}));

export const TextButton = styled(ButtonStyled)({
  background: 'transparent',
  color: '#fff',
  // '& .MuiButton-startIcon svg': {
  //   stroke: theme.palette?.tertiary.main,
  // },
  // '&:hover': {
  //   background: theme.palette?.tertiary.light,
  // },
  // '&:active': {
  //   background: theme.palette?.tertiary.dark,
  // },
  // '&:disabled': {
  //   background: theme.palette?.tertiary.disabled,
  //   color: theme.palette?.tertiary.textDisabled,
  //   '& .MuiButton-startIcon svg': {
  //     stroke: theme.palette?.tertiary.textDisabled,
  //   },
  // },
});

export const DangerButton = styled(ButtonStyled)(({ theme }) => ({
  background: theme.palette?.warning.main,
  color: '#fff',
  // '& .MuiButton-startIcon svg': {
  //   stroke: theme.palette?.danger.dark,
  // },
  '&:hover': {
    background: theme.palette?.warning.main,
  },
  // '&:active': {
  //   background: theme.palette?.secondary.dark,

  //   '& .MuiButton-startIcon svg': {
  //     stroke: theme.palette?.light,
  //   },
  // },
  // '&:disabled': {
  //   background: theme.palette?.danger.disabled,
  //   color: theme.palette?.danger.textDisabled,
  //   '& .MuiButton-startIcon svg': {
  //     stroke: theme.palette?.danger.textDisabled,
  //   },
  // },
}));
