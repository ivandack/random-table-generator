import type { TableRowModel } from "../../../types";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

type Props = {
  tableRows: TableRowModel[];
  initialOrder?: number;
};

const TableRows = ({ tableRows, initialOrder = 1 }: Props) => {
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell width={50}>Order</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRows.map((row, index) => (
            <TableRow key={`${row.value}`}>
              <TableCell align="right">{index + initialOrder}</TableCell>
              <TableCell>{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableRows;
