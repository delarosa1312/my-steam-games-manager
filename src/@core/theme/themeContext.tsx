// src/themeContext.tsx
import { createContext, useState, ReactNode } from "react";
import { ThemeProvider as MuiThemeProvider, Theme } from "@mui/material/styles";
import { lightTheme, darkTheme, draculaTheme, solarizedDarkTheme, solarizedLightTheme } from "./theme";

interface ThemeContextProps {
  theme: Theme;
  setTheme: (themeName: string) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: lightTheme,
  setTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(draculaTheme);

  const handleSetTheme = (themeName: string) => {
    switch (themeName) {
      case "light":
        setTheme(lightTheme);
        break;
      case "dark":
        setTheme(darkTheme);
        break;
      case "dracula":
        setTheme(draculaTheme);
        break;
      case "solarizedDark":
        setTheme(solarizedDarkTheme);
        break;
      case "solarizedLight":
        setTheme(solarizedLightTheme);
        break;
      default:
        setTheme(draculaTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
