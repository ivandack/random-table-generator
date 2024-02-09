import type { TableRowModel } from "../../../types";

import { useState } from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

type EditableTableRowProps = {
  initialModel?: TableRowModel;
  onModelChange: (model: TableRowModel) => void;
};

export const EditableTableRow = ({
  initialModel,
  onModelChange,
}: EditableTableRowProps) => {
  const [model, setModel] = useState<TableRowModel>(
    initialModel ?? { value: "" }
  );

  const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    if (val) {
      setModel((model) => {
        const newModel = { ...model, value: val };
        onModelChange(newModel);
        return model;
      });
    }
  };

  return (
    <Stack>
      <TextField
        label="Value"
        size="small"
        value={model.value}
        onChangeCapture={valueChangeHandler}
      />
    </Stack>
  );
};

type NonEditableTableRowProps = {
  model: TableRowModel;
};

export const NonEditableTableRow = ({ model }: NonEditableTableRowProps) => {
  return (
    <Box>
      {model.value}
    </Box>
  );
};
