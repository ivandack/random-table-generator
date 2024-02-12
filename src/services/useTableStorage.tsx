import type { TableModel } from "../types";

import { useCallback, useState } from "react";

import {
  getTableList as doGetTables,
  updateTable as doUpdateTable,
  getTable as doGetTable,
  deleteTable as doDeleteTable,
  storeTable as doStoreTable,
} from "./store";

export function useTableStorage() {
  const [tables, setTables] = useState(doGetTables());

  const getTable = useCallback((key: string) => {
    return doGetTable(key);
  }, []);

  const updateTable = useCallback((table: TableModel, key?: string) => {
    doUpdateTable(table, key);
    setTables(doGetTables());
    return table;
  }, []);

  const deleteTable = useCallback((key: string) => {
    doDeleteTable(key);
    setTables(doGetTables());
  }, []);

  const duplicateTable = useCallback((table: TableModel) => {
    const newTableName = `Copy of ${table.name}`;
    const newTable = { ...table, name: newTableName };
    doStoreTable(newTable);
    setTables(doGetTables());
    return newTable;
  }, []);

  return {
    tables,
    getTable,
    updateTable,
    deleteTable,
    duplicateTable,
  };
}
