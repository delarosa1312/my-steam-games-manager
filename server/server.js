require("dotenv").config({ path: "./server/.env" });
const express = require("express");
const axios = require("axios");
const nano = require("nano")(process.env.COUCHDB_URL);

const app = express();
const port = 5000;

// Connect to CouchDB and use the steam_games database
const steamGamesDb = nano.db.use(process.env.COUCHDB_DB);

app.get("/api/games", async (req, res) => {
  try {
    const steamApiUrl = `http://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${process.env.STEAM_API_KEY}&steamid=76561198877951097&include_appinfo=true&include_played_free_games=true&format=json`;
    console.log(`Requesting Steam API: ${steamApiUrl}`);

    const response = await axios.get(steamApiUrl);
    const games = response.data.response.games;

    for (const game of games) {
      try {
        // Check if the game already exists in the database
        const existingGame = await steamGamesDb.get(game.appid.toString());
        // If it exists, update the existing document
        await steamGamesDb.insert({
          ...existingGame,
          ...game,
          _rev: existingGame._rev,
        });
      } catch (error) {
        if (error.statusCode === 404) {
          // If the game does not exist, insert a new document
          await steamGamesDb.insert({ _id: game.appid.toString(), ...game });
        } else {
          throw error;
        }
      }
    }

    res.json(games);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
