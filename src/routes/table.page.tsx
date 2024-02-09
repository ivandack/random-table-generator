import { useParams } from "react-router-dom";

import { getTable } from "../services/store";

import { TablePageContent } from "../components/scenes/Table/TableContent.component";

export const TablePage = () => {
  const { tableId } = useParams();

  if (!tableId) {
    throw new Error("No table id specified");
  }

  const table = getTable(tableId);

  if (!table) {
    return <>No table with the key "{tableId}"</>;
  }

  return <TablePageContent table={table} />;
};
