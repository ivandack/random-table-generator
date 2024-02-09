import type { TableStore } from "../../../types";

import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { TABLES_ROUTE } from "../../../routes.constants";

type Props = {
  tables: TableStore;
};

export const TablesListPageContent = ({ tables }: Props) => {
  const navigate = useNavigate();

  return (
    <Box>
      <Stack>
        <Typography variant="h1">Random Tables</Typography>
      </Stack>

      <Stack>
        {Object.entries(tables).map(([key, table]) => (
          <Button onClick={() => navigate(`${TABLES_ROUTE}/${key}`)}>
            {table.name}
          </Button>
        ))}
      </Stack>
    </Box>
  );
};
