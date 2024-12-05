import { useContext } from "react";
import { CssBaseline, Grid2 } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { ThemeContext } from "@core/theme/themeContext";
import SteamGames from "./steam-games";

import "../../styles/globals.css";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid2
        container
        spacing={2}
        padding={1}
        size={{ xs: 12 }}
        direction="row"
        sx={{ minHeight: "100vh", width: "100vw", display: "flex" }}
      >
        <SteamGames />
      </Grid2>
    </ThemeProvider>
  );
};

export default App;
