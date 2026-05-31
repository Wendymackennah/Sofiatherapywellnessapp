import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#355c52",
    },
    secondary: {
      main: "#edf4f2",
    },
    background: {
      default: "#f7f7f5",
    },
  },

  typography: {
    fontFamily: "Inter, sans-serif",

    h1: {
      fontWeight: 700,
    },

    h2: {
      fontWeight: 700,
    },
  },

  shape: {
    borderRadius: 20,
  },
});

export default theme;