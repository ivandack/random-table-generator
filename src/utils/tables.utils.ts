import type { TableModel } from "../types";

import { CURRENT_TABLE_VERSION } from "../constants";

export function getCurrentVersion() {
  return CURRENT_TABLE_VERSION;
}

export function createNewTable(name?: string): TableModel {
  return {
    __v: CURRENT_TABLE_VERSION,
    name: name ?? "",
    rows: [],
  };
}
