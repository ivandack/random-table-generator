import type { TableModel } from "../../../types";

import { useState } from "react";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Stack from "@mui/material/Stack";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ContentCopy from "@mui/icons-material/ContentCopy";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { TableMenuDialog } from "./TableMenuDialog.component";

type Props = {
  table: TableModel;
  onClick?: (table: TableModel) => void;
  onViewClick?: (table: TableModel) => void;
  onEditClick?: (table: TableModel) => void;
  onDuplicateClick?: (table: TableModel) => void;
  onDeleteClick?: (table: TableModel) => void;
};

const TableListItem = ({
  table,
  onClick,
  onDeleteClick,
  onDuplicateClick,
  onEditClick,
  onViewClick,
}: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const isOpen = Boolean(anchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  function handleOpenDeleteDialog() {
    handleMenuClose();
    setDialogOpen(true);
  }

  function handleDuplication(table: TableModel) {
    handleMenuClose();
    onDuplicateClick?.(table);
  }

  function handleDeletion(table: TableModel) {
    onDeleteClick?.(table);
  }

  return (
    <Stack height="100%">
      <ButtonGroup sx={{ height: "100%" }}>
        <Button size="large" onClick={() => onClick?.(table)} fullWidth>
          {table.name}
        </Button>

        <Button
          aria-label="more"
          aria-controls={isOpen ? "long-menu" : undefined}
          aria-expanded={isOpen ? "true" : undefined}
          aria-haspopup="true"
          size="large"
          onClick={handleMenuClick}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Menu
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleMenuClose}
      >
        {onViewClick ? (
          <MenuItem onClick={() => onViewClick(table)}>
            <ListItemIcon>
              <VisibilityIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>View</ListItemText>
          </MenuItem>
        ) : null}
        {onEditClick ? (
          <MenuItem onClick={() => onEditClick(table)}>
            <ListItemIcon>
              <EditIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Edit</ListItemText>
          </MenuItem>
        ) : null}
        {onDuplicateClick ? (
          <MenuItem onClick={() => handleDuplication(table)}>
            <ListItemIcon>
              <ContentCopy fontSize="small" />
            </ListItemIcon>
            <ListItemText>Copy</ListItemText>
          </MenuItem>
        ) : null}
        {onDeleteClick ? (
          <MenuItem onClick={handleOpenDeleteDialog}>
            <ListItemIcon>
              <DeleteIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Delete</ListItemText>
          </MenuItem>
        ) : null}
      </Menu>

      <TableMenuDialog
        open={dialogOpen}
        setOpen={setDialogOpen}
        tableName={table.name}
        onAgreement={() => handleDeletion(table)}
      />
    </Stack>
  );
};

export default TableListItem;
