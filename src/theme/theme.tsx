import { createTheme } from "@mui/material/styles";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
  }
}

const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "primary" },
          style: {
            backgroundColor: "#dc5801d9",
            color: "white",
            "&:hover": {
              backgroundColor: "#dc5801d9",
            },
          },
        },
        {
          props: { variant: "secondary" },
          style: {
            border: "1px solid",
            borderColor: "#dc5801d9",
            color: "#dc5801d9",
            "&:hover": {
              borderColor: "#dc5801d9",
            },
          },
        },
      ],
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-root": {
            color: "white", // Цвет текста
          },
          "& .MuiInputLabel-root": {
            color: "#ffffff71", // Цвет label
          },
          "& label.Mui-focused": {
            color: "white", // Цвет лейбла при фокусе
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#ffffffba", // Цвет рамки в нормальном состоянии
            },
            "&:hover fieldset": {
              borderColor: "white", // Цвет рамки при наведении
            },
            "&.Mui-focused fieldset": {
              borderColor: "white", // Цвет рамки при фокусе
            },
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#ffffff71",
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: "#dc5801d9",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: "#111227",
          color: "white",
        },
      },
    },
  },
});

export default theme;
