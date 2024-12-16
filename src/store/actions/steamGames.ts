import axios from "axios";

export const getSteamGames = async () => {
  try {
    const response = await axios.get("/api/games");

    if (response.status !== 200) {
      throw new Error("Error fetching steam games");
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching steam games:", error);
  }
};
