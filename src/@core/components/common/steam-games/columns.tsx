import { MRT_ColumnDef } from "material-react-table";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

type SteamGame = {
  appId: number;
  name: string;
  playtimeForever: number;
  imgIconUrl: string | null;
  // hasCommunityVisibleStats: boolean;
  playtimeWindowsForever: number;
  playtimeMacForever: number;
  playtimeLinuxForever: number;
  playtimeDeckForever: number;
  rTimeLastPlayed: number;
  playtimeDisconnected: number;
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
      accessorKey: "appId",
      header: "App ID",
      muiTableBodyCellProps: {
        align: "center",
      },
      size: 100,
    },
    {
      accessorKey: "imgIconUrl",
      header: "",
      size: 60,
      muiTableHeadCellProps: {
        align: "left",
      },
      Cell: ({ cell }) => (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img
            src={`http://media.steampowered.com/steamcommunity/public/images/apps/${
              cell.row.original.appId
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
      accessorKey: "playtimeForever",
      header: "Total Playtime",
      size: 100,
      muiTableBodyCellProps: {
        align: "center",
      },
      Cell: ({ cell }) => formatPlaytime(cell.getValue<number>()),
    },
    {
      accessorKey: "playtimeWindowsForever",
      header: "Playtime Windows",
      size: 100,
      muiTableBodyCellProps: {
        align: "center",
      },
      Cell: ({ cell }) => formatPlaytime(cell.getValue<number>()),
    },
    {
      accessorKey: "playtimeDeckForever",
      header: "Playtime Deck",
      size: 100,
      muiTableBodyCellProps: {
        align: "center",
      },
      Cell: ({ cell }) => formatPlaytime(cell.getValue<number>()),
    },
    {
      accessorKey: "rTimeLastPlayed",
      header: "Last Played",
      minSize: 150,
      muiTableBodyCellProps: {
        align: "center",
      },
      Cell: ({ cell }) => formatTimestamp(cell.getValue<number>()),
    },
    {
      accessorKey: "playtimeDisconnected",
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
