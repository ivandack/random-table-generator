import type { ReactNode } from "react";

import Box from "@mui/material/Box";

type Props = {
  children: ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return <Box sx={{ px: { xs: 1, sm: 3 } }}>{children}</Box>;
};
