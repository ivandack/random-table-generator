import { useState } from "react";

import TextField from "@mui/material/TextField";

type Props = {
  initialTitle: string;
  onChange: (title: string) => void;
};

const TableTitleEditor = ({ initialTitle, onChange }: Props) => {
  const [input, setInput] = useState(initialTitle);

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const str = event.target?.value;
    setInput(str);
    onChange(str);
  };

  return (
    <TextField
      label="Table name"
      value={input}
      onChangeCapture={inputChangeHandler}
    />
  );
};

export default TableTitleEditor;
