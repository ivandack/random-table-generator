import type { TableModel } from "../types";

import { useNavigate, useParams } from "react-router-dom";

import { TableEditPageContent } from "../components/scenes/Table/TableEditContent.component";
import TableLayout from "../components/layouts/Table.layout";

import { TABLES_ROUTE } from "../routes.constants";
import { useTableStorage } from "../services/useTableStorage";

export const TableEditPage = () => {
  const navigate = useNavigate();
  const { getTable, updateTable } = useTableStorage();
  const { tableId } = useParams();

  if (!tableId) {
    throw new Error("No table id specified");
  }

  const table = getTable(tableId);

  if (!table) {
    return <>No table with the key "{tableId}"</>;
  }

  const saveHanlder = (table: TableModel) => {
    updateTable(table, tableId);
    navigate(`${TABLES_ROUTE}/${tableId}`);
  };

  return (
    <TableLayout title={table.name}>
      <TableEditPageContent table={table} onClickSave={saveHanlder} />
    </TableLayout>
  );
};
