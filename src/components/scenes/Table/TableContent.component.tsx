import type { TableModel } from "../../../types";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";

import { NonEditableTableRow } from "../../library/TableRow/TableRow.component";
import { ResultDisplay } from "../../library/ResultDisplay/ResultDisplay.component";

import { rollDice } from "../../../utils/dice.utils";
import { TABLES_ROUTE } from "../../../routes.constants";

type Props = {
  table: TableModel;
};

export const TablePageContent = ({ table }: Props) => {
  const navigate = useNavigate();
  const [diceResult, setDiceResult] = useState(0);

  return (
    <Box>
      <Stack direction="row" alignItems="center" gap={2}>
        <Box>
          <IconButton
            aria-label="go-back"
            size="large"
            edge="start"
            onClick={() => navigate(TABLES_ROUTE)}
          >
            <ArrowBackIosIcon />
          </IconButton>
        </Box>
        <Typography variant="h1">{table.name}</Typography>
      </Stack>

      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Order</TableCell>
              <TableCell>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {table.rows.map((row, index) => (
              <TableRow key={`${row.value}`}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <NonEditableTableRow model={row} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ pt: 3, pb: 3 }}>
        <Button
          fullWidth
          onClick={() => setDiceResult(rollDice(table.rows.length))}
        >
          Roll dice
        </Button>
      </Box>

      <Stack alignItems="center">
        <ResultDisplay rollResult={diceResult} table={table} />
      </Stack>
    </Box>
  );
};
