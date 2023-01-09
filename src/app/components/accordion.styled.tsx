import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { ChevronIcon } from '../icons';

export const AccordionStyled = styled(Accordion)(({ theme }) => ({
  ':before': {
    backgroundColor: theme.palette.border,
  },
  '&.Mui-expanded': {
    margin: 0,
    ':before': {
      opacity: 1,
    },
  },
}));
export const AccordionSummaryStyled = styled(AccordionSummary)(({ theme }) => ({
  padding: '0 20px',
  backgroundColor: theme.palette.widget.main,
  color: theme.palette.secondary.dark,
  fontWeight: 400,
  fontSize: 18,
  lineHeight: '27px',
  '& .MuiAccordionSummary-content': {
    padding: '0',
    height: 60,
    margin: 0,
    alignItems: 'center',
    '&.Mui-expanded': {
      margin: 0,
    },
  },
  '&.Mui-expanded': {
    minHeight: 'auto',
    backgroundColor: theme.palette.widget.active,
  },
  [theme.breakpoints.down('md')]: {
    fontSize: 16,
    lineHeight: '24px',
  },
}));
export const AccordionDetailsStyled = styled(AccordionDetails)(({ theme }) => ({
  padding: 20,
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.down('md')]: {
    padding: '24px 20px',
  },
}));

export const AccordionArrow = styled(ChevronIcon)(({ theme }) => ({
  stroke: theme.palette.secondary.dark,
  width: 16,
}));
