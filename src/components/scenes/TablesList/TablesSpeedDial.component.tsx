import { useState } from "react";

import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";

import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";

type Props = {
  onClickNew: () => void;
  onClickExport: () => void;
};

const TablesSpeedDial = ({ onClickNew, onClickExport }: Props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <SpeedDial
      ariaLabel="Table page options"
      sx={{ position: "fixed", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
    >
      <SpeedDialAction
        icon={<AddIcon />}
        tooltipTitle="New"
        tooltipOpen
        onClick={onClickNew}
      />
      <SpeedDialAction
        icon={<SaveIcon />}
        tooltipTitle="Export"
        tooltipOpen
        onClick={onClickExport}
      />
    </SpeedDial>
  );
};

export default TablesSpeedDial;
