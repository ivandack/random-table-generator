import type { TableModel } from "./types";

import { useEffect } from "react";

import { MainLayout } from "./components/layouts/Main";

import { CURRENT_TABLE_VERSION } from "./constants";
import { AppRoutes } from "./routes";
import { updateTable } from "./services/store";

export default function App() {
  useEffect(() => {
    const mockTable: TableModel = {
      name: "Mock table",
      rows: [
        {
          value: "Low 3 value",
        },
        {
          value: "High 3 value",
        },
      ],
      __v: CURRENT_TABLE_VERSION,
    };

    updateTable(mockTable, "mock-table");
  }, []);

  return (
    <MainLayout>
      <AppRoutes />
    </MainLayout>
  );
}
