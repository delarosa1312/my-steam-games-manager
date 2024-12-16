import { z } from "zod";

export const steamGameSchema = z.object({
  appId: z.coerce.number(),
  name: z.string(),
  imgIconUrl: z.string().nullable(),
  playtimeForever: z.coerce.number(),
  playtimeWindowsForever: z.coerce.number(),
  playtimeMacForever: z.coerce.number(),
  playtimeLinuxForever: z.coerce.number(),
  playtimeDeckForever: z.coerce.number(),
  rTimeLastPlayed: z.coerce.number(),
  playtimeDisconnected: z.coerce.number(),
});

export type SteamGame = z.infer<typeof steamGameSchema>;
