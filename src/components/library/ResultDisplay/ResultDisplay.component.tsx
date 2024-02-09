import type { TableModel } from "../../../types";

import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

type ResultDisplayProps = {
  rollResult: number;
  table: TableModel;
};

const StyledContainer = styled(Box)`
  width: fit-content;
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const ResultDisplay = ({ rollResult, table }: ResultDisplayProps) => {
  const totalRows = table.rows.length;
  const label =
    rollResult < 1 || rollResult > totalRows
      ? "No Result"
      : `${rollResult}: ${table.rows[rollResult - 1]?.value ?? "No Result"}`;

  return (
    <Paper elevation={10}>
      <StyledContainer>{label}</StyledContainer>
    </Paper>
  );
};
