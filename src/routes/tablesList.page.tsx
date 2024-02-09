import { TablesListPageContent } from "../components/scenes/TablesList/TablesListPageContent.component";

import { getTableList } from "../services/store";

export const TablesListPage = () => {
  const tables = getTableList();

  return <TablesListPageContent tables={tables} />;
};
