import type { TableModel } from "../../../types";

import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

type ResultDisplayProps = {
  showTableName?: boolean;
  table?: TableModel;
  rollResult: number;
};

const StyledContainer = styled(Box)`
  width: fit-content;
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const ResultDisplay = ({
  rollResult = 0,
  showTableName = false,
  table,
}: ResultDisplayProps) => {
  const totalRows = table?.rows.length ?? 0;
  const label =
    rollResult < 1 || rollResult > totalRows
      ? "No Result"
      : `${rollResult} - ${table?.rows[rollResult - 1]?.value ?? "No Result"}`;

  return (
    <Paper elevation={10}>
      <StyledContainer>
        {showTableName && table?.name ? (
          <Typography component="span" fontWeight={600}>
            {table.name}:{" "}
          </Typography>
        ) : null}
        {label}
      </StyledContainer>
    </Paper>
  );
};
