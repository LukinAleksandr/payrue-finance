import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion/dist/framer-motion';

export const SwitcherStyles = styled('div')(({ theme }) => ({
  display: 'flex',
  borderRadius: 10,
  overflow: 'hidden',
  border: `1px solid ${theme.palette.border}`,
  padding: 4,
}));

export const SwitcherItemBackground = styled(motion.div)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  position: 'absolute',
  width: '100%',
  height: '100%',
  borderRadius: 8,
}));

export const SwitcherName = styled('span')<{ active: boolean }>(
  ({ theme, active }) => ({
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '27px',
    zIndex: 2,
    transition: '0.3s',
    color: active
      ? theme.palette.background.default
      : theme.palette.secondary.dark,
    letterSpacing: '-0.02em',
  }),
);

export const SwitcherItem = styled(motion.div)({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  cursor: 'pointer',
  flexGrow: 1,
  padding: '5px 24px',
});
