import { z } from "zod";

export const steamGameSchema = z.object({
  appId: z.coerce.number(),
  name: z.string().nullable().optional(),
  imgIconUrl: z.string().nullable().optional(),
  playtimeForever: z.coerce.number().nullable().optional(),
  playtimeWindowsForever: z.coerce.number().nullable().optional(),
  playtimeMacForever: z.coerce.number().nullable().optional(),
  playtimeLinuxForever: z.coerce.number().nullable().optional(),
  playtimeDeckForever: z.coerce.number().nullable().optional(),
  rtimeLastPlayed: z.coerce.number().nullable().optional(),
  playtimeDisconnected: z.coerce.number().nullable().optional(),
});

export type SteamGame = z.infer<typeof steamGameSchema>;
