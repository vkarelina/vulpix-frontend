import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    vulpix: {
      main: "#111227",
      light: "#dc5801d9",
      dark: "#0e0c1b",
      lightText: "#fff",
      lighter: "#ffffffba",
      darklighter: "#ffffff71",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "primary" },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.vulpix.light,
            color: theme.palette.vulpix.lightText,
            "&:hover": {
              backgroundColor: theme.palette.vulpix.light,
            },
          }),
        },
        {
          props: { variant: "secondary" },
          style: ({ theme }) => ({
            border: "1px solid",
            borderColor: theme.palette.vulpix.light,
            color: theme.palette.vulpix.light,
            "&:hover": {
              borderColor: theme.palette.vulpix.light,
            },
          }),
        },
      ],
    },
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) => ({
          "& .MuiInputBase-root": {
            color: theme.palette.vulpix.lightText, // Цвет текста
          },
          "& .MuiInputLabel-root": {
            color: theme.palette.vulpix.darklighter, // Цвет label
          },
          "& label.Mui-focused": {
            color: theme.palette.vulpix.lightText, // Цвет лейбла при фокусе
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: theme.palette.vulpix.lighter, // Цвет рамки в нормальном состоянии
            },
            "&:hover fieldset": {
              borderColor: theme.palette.vulpix.lightText, // Цвет рамки при наведении
            },
            "&.Mui-focused fieldset": {
              borderColor: theme.palette.vulpix.lightText, // Цвет рамки при фокусе
            },
          },
        }),
      },
    },
    MuiLink: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.vulpix.darklighter,
        }),
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.vulpix.light,
        }),
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: ({ theme }) => ({
          backgroundColor: theme.palette.vulpix.main,
          color: theme.palette.vulpix.lightText,
        }),
      },
    },
  },
});

export default theme;
