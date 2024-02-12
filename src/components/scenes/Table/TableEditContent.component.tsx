import type { TableModel, TableRowModel } from "../../../types";

import { useMemo, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import TableContainer from "./TableContainer.component";

const MIN_TITLE_LENGTH = 4;

type Props = {
  table: TableModel;
  onClickSave: (table: TableModel) => void;
};

function rowsToInput(rows: TableRowModel[]): string {
  return rows
    .map((row) => row.value)
    .filter((line) => line)
    .join("\n");
}

function inputToRows(input: string): TableRowModel[] {
  return input
    .split("\n")
    .filter((line) => line)
    .map((value) => ({ value }));
}

export const TableEditPageContent = ({ table, onClickSave }: Props) => {
  const [editingTable, setEditingTable] = useState(table);
  const [title, setTitle] = useState(table.name);
  const [input, setInput] = useState(rowsToInput(table.rows));

  const disableSave: boolean = useMemo(
    () => title.length < MIN_TITLE_LENGTH || input.trim().length === 0,
    [input, title.length]
  );

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const str = event.target?.value;
    setTitle(str);
    setEditingTable((table) => ({ ...table, name: str }));
  };

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const str = event.target?.value;
    setInput(str);
    const rows = inputToRows(str);
    setEditingTable((table) => ({ ...table, rows }));
  };

  return (
    <Stack gap={2}>
      <TextField
        label="Table name"
        value={title}
        onChangeCapture={titleChangeHandler}
      />

      <Divider />

      <TextField
        label="Content"
        multiline
        maxRows={4}
        value={input}
        onChangeCapture={inputChangeHandler}
        sx={{ width: "100%" }}
      />

      <Box>
        <Button
          size="large"
          disabled={disableSave}
          onClick={() => onClickSave(editingTable)}
        >
          Save
        </Button>
      </Box>

      <Divider />

      <TableContainer table={editingTable} />
    </Stack>
  );
};
