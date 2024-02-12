import type { TableModel } from "../types";

import { useNavigate } from "react-router-dom";

import { TablesListPageContent } from "../components/scenes/TablesList/TablesListPageContent.component";
import TablesSpeedDial from "../components/scenes/TablesList/TablesSpeedDial.component";
import { MainLayout } from "../components/layouts/Main.layout";

import { useTableStorage } from "../services/useTableStorage";
import { downloadJson } from "../utils/files.utils";
import { TABLES_ROUTE } from "../routes.constants";

export const TablesListPage = () => {
  const { tables, deleteTable, duplicateTable } = useTableStorage();
  const navigate = useNavigate();

  function handleExportAll(): void {
    downloadJson(tables);
  }

  function handleCreateTable() {
    navigate(`${TABLES_ROUTE}/new`);
  }

  function handleDuplicateTable(table: TableModel) {
    duplicateTable(table);
  }

  return (
    <MainLayout>
      <TablesListPageContent
        tables={tables}
        onDeleteTable={deleteTable}
        onDuplicateTable={handleDuplicateTable}
      />
      <TablesSpeedDial
        onClickNew={handleCreateTable}
        onClickExport={handleExportAll}
      />
    </MainLayout>
  );
};
