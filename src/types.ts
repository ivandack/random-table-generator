export type TableRowModel = {
  value: string;
};

export type TableModel = {
  name: string;
  rows: TableRowModel[];
  __v: number;
};

export type TableStore = {
  [key: string]: TableModel;
};
