import { createTheme } from "@mui/material";

import getLPTheme from "./getTheme";

export const MuiTheme = createTheme(getLPTheme("dark"));
