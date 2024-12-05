// src/components/common/Header.tsx
import { Grid2, Card, CardHeader, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../theme/themeContext";
import { lightTheme, darkTheme, draculaTheme, solarizedDarkTheme, solarizedLightTheme } from "@core/theme/theme";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = (event: SelectChangeEvent<string>) => {
    setTheme(event.target.value);
  };

  // Determine the current theme name based on the theme object
  const currentThemeName = (() => {
    switch (theme) {
      case lightTheme:
        return "light";
      case darkTheme:
        return "dark";
      case draculaTheme:
        return "dracula";
      case solarizedDarkTheme:
        return "solarizedDark";
      case solarizedLightTheme:
        return "solarizedLight";
      default:
        return "light";
    }
  })();

  return (
    <Grid2 container spacing={2} size={{ xs: 12 }}>
      <Card sx={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Grid2 size={{ xs: 15 }}>
          <CardHeader title={"My Steam Games"} />
        </Grid2>
        <Grid2 size={{ xs: 1 }}>
          <Select value={currentThemeName} onChange={handleThemeChange} size="small">
            <MenuItem value="light">Light</MenuItem>
            <MenuItem value="dark">Dark</MenuItem>
            <MenuItem value="dracula">Dracula</MenuItem>
            <MenuItem value="solarizedDark">Solarized Dark</MenuItem>
            <MenuItem value="solarizedLight">Solarized Light</MenuItem>
          </Select>
        </Grid2>
      </Card>
    </Grid2>
  );
};

export default Header;
