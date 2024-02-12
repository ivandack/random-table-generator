import type { TableModel, TableStore } from "../../../types";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import TableListItem from "./TableListItem.component";

import { TABLES_ROUTE } from "../../../routes.constants";
import { ResultDisplay } from "../../library/ResultDisplay/ResultDisplay.component";
import { rollDice } from "../../../utils/dice.utils";

type Props = {
  tables: TableStore;
  onDeleteTable: (key: string) => void;
  onDuplicateTable: (table: TableModel) => void;
};

export const TablesListPageContent = ({
  tables,
  onDeleteTable,
  onDuplicateTable,
}: Props) => {
  const navigate = useNavigate();
  const [diceResult, setDiceResult] = useState(0);
  const [selectedTable, setSelectedTable] = useState<TableModel>();

  function handleRollDice(table: TableModel) {
    const roll = rollDice(table.rows.length);
    setSelectedTable(table);
    setDiceResult(roll);
  }

  return (
    <Box>
      <Stack gap={3} pb={8}>
        <Stack>
          <Typography variant="h2">Random Tables</Typography>
        </Stack>

        <ResultDisplay
          showTableName
          table={selectedTable}
          rollResult={diceResult}
        />

        <Grid container spacing={1}>
          {Object.entries(tables).map(([key, table]) => (
            <Grid item key={key} xs={12} sm={6} md={6} lg={3} xl={2}>
              <TableListItem
                table={table}
                onClick={handleRollDice}
                onViewClick={() => navigate(`${TABLES_ROUTE}/${key}`)}
                onEditClick={() => navigate(`${TABLES_ROUTE}/${key}/edit`)}
                onDeleteClick={() => onDeleteTable(key)}
                onDuplicateClick={onDuplicateTable}
              />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
};
