import '@mui/material/styles/createPalette';
declare module '@mui/material/styles/createPalette' {
  interface Palette {
    negative: string;
    border: string;
    widget: {
      main: string;
      active: string;
    };
  }
  interface PaletteOptions {
    negative: string;
    border: string;
    widget: {
      main: string;
      active: string;
    };
  }
}
