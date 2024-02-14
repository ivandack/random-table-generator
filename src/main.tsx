import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import App from "./App.tsx";
import { MuiTheme } from "./theme/muiTheme.ts";

const router = createHashRouter([
  {
    path: "/*",
    element: (
      <ThemeProvider theme={MuiTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
