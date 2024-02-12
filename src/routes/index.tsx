import { Navigate, Route, Routes } from "react-router-dom";

import { TABLES_ROUTE } from "../routes.constants";
import { TablePage } from "./table.page";
import { TablesListPage } from "./tablesList.page";
import { TableEditPage } from "./tableEdit.page";
import { TableNewPage } from "./tableNew.page";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={TABLES_ROUTE} Component={TablesListPage} />
      <Route path={`${TABLES_ROUTE}/new`} Component={TableNewPage} />
      <Route path={`${TABLES_ROUTE}/:tableId`} Component={TablePage} />
      <Route path={`${TABLES_ROUTE}/:tableId/edit`} Component={TableEditPage} />
      <Route path={"/"} element={<Navigate to={TABLES_ROUTE} replace />} />
    </Routes>
  );
};
