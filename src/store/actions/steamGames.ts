import axios from "axios";

export const getSteamGames = async () => {
  try {
    const response = await axios.get("/api/games");
    return response.data;
  } catch (error) {
    console.error("Error fetching steam games:", error);
  }
};
