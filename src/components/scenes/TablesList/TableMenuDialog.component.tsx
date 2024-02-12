import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

type Props = {
  tableName: string;
  open: boolean;
  setOpen: (state: boolean) => void;
  onAgreement: () => void;
};

export const TableMenuDialog = ({
  tableName,
  open,
  setOpen,
  onAgreement,
}: Props) => {
  const handleClose = () => setOpen(false);
  const handleAccept = () => {
    onAgreement();
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>Delete table</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {`Do you wish to delete "${tableName}" table`}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleAccept}>Yes</Button>
        <Button onClick={handleClose} autoFocus>
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
};
