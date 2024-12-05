import { Card, CardContent, useTheme } from "@mui/material";
import {
  MaterialReactTable,
  MRT_ColumnDef,
  MRT_DensityState,
  MRT_PaginationState,
  useMaterialReactTable,
} from "material-react-table";
import { useState } from "react";

const AdvancedTable = <DataType extends Record<string, unknown>>({
  columns,
  data,
}: {
  columns: MRT_ColumnDef<DataType>[];
  data: DataType[];
}) => {
  const theme = useTheme();
  const [density, setDensity] = useState<MRT_DensityState>("compact");
  const [pagination, setPagination] = useState<MRT_PaginationState>({
    pageIndex: 0,
    pageSize: 100,
  });

  const table = useMaterialReactTable({
    columns,
    data,
    layoutMode: "semantic",
    editDisplayMode: "modal",
    enableEditing: true,
    onPaginationChange: setPagination,
    muiPaginationProps: {
      rowsPerPageOptions: [10, 25, 50, 100, 500, 1000, 10000, 100000],
      showFirstButton: true,
      showLastButton: true,
    },
    muiToolbarAlertBannerProps: {
      sx: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.contrastText,
      },
    },
    muiTableBodyCellProps: {
      sx: {
        height: "20px",
        borderRight: `1px solid ${theme.palette.divider}`,
        padding: `${density === "compact" ? "0.2rem" : density === "comfortable" ? "1rem" : "1.5rem"}`,
      },
    },
    muiTableContainerProps: {
      sx: {
        height: "850px",
      },
    },
    muiTableHeadCellProps: {
      align: "center",
    },
    onDensityChange: setDensity,
    state: {
      density: density,
      pagination,
    },
  });

  return (
    <>
      <Card sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ height: "100%" }}>
          <MaterialReactTable table={table} />
        </CardContent>
      </Card>
    </>
  );
};

export default AdvancedTable;
