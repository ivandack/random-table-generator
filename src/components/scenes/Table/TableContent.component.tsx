import type { TableModel } from "../../../types";

import { useState } from "react";

import { useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { ResultDisplay } from "../../library/ResultDisplay/ResultDisplay.component";

import { rollDice } from "../../../utils/dice.utils";
import TableContainer from "./TableContainer.component";

type Props = {
  table: TableModel;
};

export const TablePageContent = ({ table }: Props) => {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [diceResult, setDiceResult] = useState(0);

  return (
    <Stack gap={3}>
      <Stack
        direction={smallScreen ? "column" : "row"}
        justifyContent="space-around"
        alignItems="center"
      >
        <Box width="fit-content">
          <Button onClick={() => setDiceResult(rollDice(table.rows.length))}>
            Roll dice
          </Button>
        </Box>

        <Stack alignItems="center" sx={{ flexGrow: 1 }}>
          <ResultDisplay rollResult={diceResult} table={table} />
        </Stack>
      </Stack>

      <TableContainer table={table} />
    </Stack>
  );
};
