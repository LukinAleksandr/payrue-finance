declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    s: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
    xxxl: true;
  }
}

const breakpoints = {
  values: {
    xs: 0,
    s: 450,
    sm: 600,
    md: 900,
    lg: 1024,
    xl: 1440,
    xxl: 1920,
    xxxl: 2560,
  },
};

export default breakpoints;
