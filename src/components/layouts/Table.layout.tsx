import type { ReactNode } from "react";

import { useNavigate } from "react-router-dom";

import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { TABLES_ROUTE } from "../../routes.constants";
import { MainLayout } from "./Main.layout";

type Props = {
  title: string;
  children: ReactNode;
  TitleComponent?: ReactNode;
  backPath?: string;
};

const TableLayout = ({ title, children, backPath = TABLES_ROUTE }: Props) => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <Stack direction="row" alignItems="center" gap={2} pb={3}>
        <div>
          <IconButton
            aria-label="go-back"
            size="large"
            edge="start"
            onClick={() => navigate(backPath)}
          >
            <ArrowBackIosIcon />
          </IconButton>
        </div>
        <Typography variant="h2">{title}</Typography>
      </Stack>
      {children}
    </MainLayout>
  );
};

export default TableLayout;
