import type { ReactNode } from "react";

import Box from "@mui/material/Box";

type Props = {
  children: ReactNode;
};

const MAX_WIDTH = 2440;

export const MainLayout = ({ children }: Props) => {
  return (
    <Box
      sx={{
        margin: "0 auto",
        maxWidth: `${MAX_WIDTH}px`,
        px: { xs: 1, sm: 3 },
        py: 2,
      }}
    >
      {children}
    </Box>
  );
};
