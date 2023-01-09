import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { CoinWidgetVariant } from './coin-widget';

export const Root = styled('div')(({ theme }) => ({
  border: `1px solid ${theme.palette.border}`,
  borderRadius: 10,
  overflow: 'hidden',
}));

export const Header = styled('div')<{ variant: CoinWidgetVariant }>(
  ({ theme, variant }) => ({
    borderBottom: `1px solid ${theme.palette.border}`,
    padding: 12,
    display: 'flex',
    gap: 6,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor:
      variant === CoinWidgetVariant.PRIMARY
        ? theme.palette.primary.dark
        : theme.palette.success.main,
  }),
);

export const HeaderValue = styled('span')<{ variant: CoinWidgetVariant }>(
  ({ variant, theme }) => ({
    fontWeight: 400,
    fontSize: 26,
    lineHeight: '26px',
    letterSpacing: '-0.02em',
    color:
      variant === CoinWidgetVariant.PRIMARY
        ? theme.palette.primary.light
        : theme.palette.success.dark,
  }),
);

export const HeaderDifference = styled(Typography)(({ theme }) => ({
  letterSpacing: '-0.02em',
  color: theme.palette.warning.main,
}));

export const Row = styled('div')(({ theme }) => ({
  display: 'flex',
  '& + &': {
    borderTop: `1px solid ${theme.palette.border}`,
  },
}));

export const Cell = styled('div')<{ variant: CoinWidgetVariant }>(
  ({ theme, variant }) => ({
    display: 'flex',
    width: '50%',
    flexShrink: 0,
    padding: variant === CoinWidgetVariant.PRIMARY ? '18px 20px' : '10px 20px',
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '27px',
    color: theme.palette.secondary.dark,
    '& + &': {
      borderLeft: `1px solid ${theme.palette.border}`,
    },
  }),
);

export const Footer = styled('div')<{ variant: CoinWidgetVariant }>(
  ({ theme, variant }) => ({
    borderTop: `1px solid ${theme.palette.border}`,
    padding: 12,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:
      variant === CoinWidgetVariant.PRIMARY
        ? theme.palette.primary.dark
        : theme.palette.success.main,
  }),
);

export const FooterLeft = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: 5,
}));

export const FooterText = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.light,
}));

export const FooterLink = styled('a')<{ variant: CoinWidgetVariant }>(
  ({ theme, variant }) => ({
    color:
      variant === CoinWidgetVariant.PRIMARY
        ? theme.palette.primary.main
        : theme.palette.success.dark,
    fontWeight: 300,
    fontSize: 14,
    lineHeight: '21px',
  }),
);
