import { useEffect, useState } from "react";
import { Grid2 } from "@mui/material";
import { steamGamesColumns } from "@core/components/common/steam-games/columns";
import AdvancedTable from "@core/components/shared/advanced-table";
import Header from "@core/components/common/Header";
import EditDialog from "@core/components/shared/advanced-table/EditDialog";
import { getSteamGames } from "store/actions/steamGames";
import { SteamGame } from "schemas/steam-game/SteamGameView";

const SteamGames = () => {
  const [data, setData] = useState<SteamGame[]>([]);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState<SteamGame | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const steamGames = await getSteamGames();
      setData(steamGames);
    };

    fetchData();
  }, []);

  const handleEdit = (game: SteamGame) => {
    setSelectedGame(game);
    setEditDialogOpen(true);
  };

  const handleSave = (updatedGame: SteamGame) => {
    const updatedData = data.map((game) => (game.appId === updatedGame.appId ? updatedGame : game));
    setData(updatedData);
    setSelectedGame(null);
    setEditDialogOpen(false);
  };

  return (
    <Grid2
      container
      spacing={2}
      padding={1}
      size={{ xs: 12 }}
      direction="row"
      sx={{ minHeight: "100vh", width: "100vw", display: "flex" }}
    >
      <Grid2 size={{ xs: 12 }}>
        <Header />
      </Grid2>

      <Grid2 size={{ xs: 12 }}>
        <AdvancedTable data={data} columns={steamGamesColumns(handleEdit)} />
      </Grid2>
      {selectedGame && (
        <EditDialog
          open={editDialogOpen}
          onClose={() => setEditDialogOpen(false)}
          game={selectedGame}
          onSave={handleSave}
        />
      )}
    </Grid2>
  );
};

export default SteamGames;
