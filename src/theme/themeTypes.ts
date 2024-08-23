declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
  }
}

declare module "@mui/material/styles/createPalette" {
  interface PaletteOptions {
    vulpix?: {
      main?: string;
      light?: string;
      dark?: string;
      lightText?: string;
      lighter?: string;
      darklighter?: string;
    };
  }

  interface Palette {
    vulpix: {
      main: string;
      light: string;
      dark: string;
      lightText: string;
      lighter: string;
      darklighter: string;
    };
  }
}
