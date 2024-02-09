import {
  Route,
  Routes,
} from "react-router-dom";

import { TABLES_ROUTE } from "../routes.constants";
import { TablePage } from "./table.page";
import { TablesListPage } from "./tablesList.page";

export const AppRoutes = () => {
  return (<Routes>
    <Route path={TABLES_ROUTE} Component={TablesListPage} />
    <Route path={`${TABLES_ROUTE}/:tableId`} Component={TablePage} />
  </Routes>)
}
