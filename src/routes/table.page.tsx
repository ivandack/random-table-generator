import { useParams } from "react-router-dom";

import { TablePageContent } from "../components/scenes/Table/TableContent.component";
import TableLayout from "../components/layouts/Table.layout";

import { useTableStorage } from "../services/useTableStorage";

export const TablePage = () => {
  const { tableId } = useParams();
  const { getTable } = useTableStorage();

  if (!tableId) {
    throw new Error("No table id specified");
  }

  const table = getTable(tableId);

  if (!table) {
    return <>No table with the key "{tableId}"</>;
  }

  return (
    <TableLayout title={table.name}>
      <TablePageContent table={table} />
    </TableLayout>
  );
};
