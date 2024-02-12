import type { TableModel, TableStore } from "../types";

import slugify from "slugify";

const TABLES_KEY = "tables";

const defaultSerializer = JSON.stringify;
const defaultParser = JSON.parse;

export function storeTableList(tables: TableStore): void {
  const value = defaultSerializer(tables);
  window.localStorage.setItem(TABLES_KEY, value);
}

export function getTableList(): TableStore {
  const value = window.localStorage.getItem(TABLES_KEY);
  if (!value) {
    return {};
  }
  return defaultParser(value);
}

export function getTable(tableKey: string): TableModel | null {
  const tables = getTableList();
  return tables[tableKey];
}

function doSaveTable(
  table: TableModel,
  override: boolean,
  tableKey?: string
): void {
  const tables = getTableList();
  const key = tableKey ?? slugify(table.name);
  if (!override && tables[key]) {
    throw new Error("Table already exists");
  }
  tables[key] = table;
  storeTableList(tables);
}

export function storeTable(table: TableModel, tableKey?: string): void {
  doSaveTable(table, false, tableKey);
}

export function updateTable(table: TableModel, tableKey?: string): void {
  doSaveTable(table, true, tableKey);
}

export function deleteTable(key: string) {
  const tables = getTableList();
  delete tables[key];
  storeTableList(tables);
}
