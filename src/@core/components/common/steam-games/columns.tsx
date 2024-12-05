import { MRT_ColumnDef } from "material-react-table";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

type SteamGame = {
  appid: number;
  name: string;
  playtime_forever: number;
  img_icon_url: string;
  has_community_visible_stats: boolean;
  playtime_windows_forever: number;
  playtime_mac_forever: number;
  playtime_linux_forever: number;
  playtime_deck_forever: number;
  rtime_last_played: number;
  content_descriptorids: number[];
  playtime_disconnected: number;
};

const formatPlaytime = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${mins}min`;
};

const formatTimestamp = (timestamp: number) => {
  const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
  return date.toLocaleDateString() + " " + date.toLocaleTimeString();
};

export const steamGamesColumns = (handleEdit: (game: SteamGame) => void): MRT_ColumnDef<SteamGame>[] => {
  return [
    {
      accessorKey: "appid",
      header: "App ID",
      muiTableBodyCellProps: {
        align: "center",
      },
      size: 100,
    },
    {
      accessorKey: "img_icon_url",
      header: "",
      size: 60,
      muiTableHeadCellProps: {
        align: "left",
      },
      Cell: ({ cell }) => (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img
            src={`http://media.steampowered.com/steamcommunity/public/images/apps/${
              cell.row.original.appid
            }/${cell.getValue<string>()}.jpg`}
            alt="Game Icon"
            style={{ width: 50, height: 50, borderRadius: "50%", border: "1px solid #ccc" }}
          />
        </div>
      ),
    },
    {
      accessorKey: "name",
      header: "Game Name",
      minSize: 150,
    },
    {
      accessorKey: "playtime_forever",
      header: "Total Playtime",
      size: 100,
      muiTableBodyCellProps: {
        align: "center",
      },
      Cell: ({ cell }) => formatPlaytime(cell.getValue<number>()),
    },
    {
      accessorKey: "playtime_windows_forever",
      header: "Playtime Windows",
      size: 100,
      muiTableBodyCellProps: {
        align: "center",
      },
      Cell: ({ cell }) => formatPlaytime(cell.getValue<number>()),
    },
    {
      accessorKey: "playtime_deck_forever",
      header: "Playtime Deck",
      size: 100,
      muiTableBodyCellProps: {
        align: "center",
      },
      Cell: ({ cell }) => formatPlaytime(cell.getValue<number>()),
    },
    {
      accessorKey: "rtime_last_played",
      header: "Last Played",
      minSize: 150,
      muiTableBodyCellProps: {
        align: "center",
      },
      Cell: ({ cell }) => formatTimestamp(cell.getValue<number>()),
    },
    {
      accessorKey: "playtime_disconnected",
      header: "Playtime Disconnected",
      size: 100,
      muiTableBodyCellProps: {
        align: "center",
      },
      Cell: ({ cell }) => formatPlaytime(cell.getValue<number>()),
    },
    {
      id: "edit",
      header: "Edit",
      size: 50,
      Cell: ({ row }) => (
        <IconButton onClick={() => handleEdit(row.original)}>
          <EditIcon />
        </IconButton>
      ),
    },
  ];
};
