// src/theme.ts
import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1a73e8",
    },
    secondary: {
      main: "#646cff",
    },
    background: {
      default: "#E5E1DA",
      paper: "#F1F0E8",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          height: "100%",
          backgroundColor: "#F1F0E8",
          border: "1px solid #ccc",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0e273c",
    },
    secondary: {
      main: "#646cff",
    },
    background: {
      default: "#1A2B48",
      paper: "#172841",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          height: "100%",
          backgroundColor: "#172841",
          border: "1px solid #1A2C47",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        },
      },
    },
  },
});

const draculaTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#bd93f9",
    },
    secondary: {
      main: "#ff79c6",
    },
    background: {
      default: "#0e0d11",
      paper: "#1d1b22",
    },
    text: {
      primary: "#f8f8f2",
      secondary: "#6272a4",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          height: "100%",
          backgroundColor: "#1d1b22",
          border: "1px solid #6272a4",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        },
      },
    },
  },
});

const solarizedDarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#268bd2",
    },
    secondary: {
      main: "#2aa198",
    },
    background: {
      default: "#002b36",
      paper: "#073642",
    },
    text: {
      primary: "#839496",
      secondary: "#586e75",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          height: "100%",
          backgroundColor: "#073642",
          border: "1px solid #586e75",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        },
      },
    },
  },
});

const solarizedLightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#268bd2",
    },
    secondary: {
      main: "#2aa198",
    },
    background: {
      default: "#fdf6e3",
      paper: "#eee8d5",
    },
    text: {
      primary: "#657b83",
      secondary: "#586e75",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          height: "100%",
          backgroundColor: "#eee8d5",
          border: "1px solid #93a1a1",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        },
      },
    },
  },
});

export { lightTheme, darkTheme, draculaTheme, solarizedDarkTheme, solarizedLightTheme };
