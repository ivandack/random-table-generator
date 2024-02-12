import type { TableModel } from "../types";

import { useNavigate } from "react-router-dom";

import { TableEditPageContent } from "../components/scenes/Table/TableEditContent.component";
import TableLayout from "../components/layouts/Table.layout";

import { createNewTable } from "../utils/tables.utils";
import { useTableStorage } from "../services/useTableStorage";

export const TableNewPage = () => {
  const navigate = useNavigate();
  const { updateTable } = useTableStorage();
  const initialTable: TableModel = createNewTable();

  const saveHanlder = (table: TableModel) => {
    updateTable(table);
    navigate("/");
  };

  return (
    <TableLayout title="New Table">
      <TableEditPageContent table={initialTable} onClickSave={saveHanlder} />
    </TableLayout>
  );
};
