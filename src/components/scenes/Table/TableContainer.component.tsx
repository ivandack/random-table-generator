import type { TableModel } from "../../../types";

import { useMediaQuery, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";

import TableRows from "../../library/TableRows/TableRows.component";

type Props = {
  table: TableModel;
};

const TableContainer = ({ table }: Props) => {
  const theme = useTheme();
  const shouldSplit = useMediaQuery(theme.breakpoints.up("md"));
  const tableMiddleLength = Math.ceil(table.rows.length / 2);

  return (
    <Grid container columnSpacing={2}>
      <Grid item xs={12} md={6}>
        <TableRows
          tableRows={
            shouldSplit ? table.rows.slice(0, tableMiddleLength) : table.rows
          }
        />
      </Grid>
      {shouldSplit ? (
        <Grid item xs={12} md={6}>
          <TableRows
            tableRows={table.rows.slice(tableMiddleLength)}
            initialOrder={tableMiddleLength + 1}
          />
        </Grid>
      ) : null}
    </Grid>
  );
};

export default TableContainer;
