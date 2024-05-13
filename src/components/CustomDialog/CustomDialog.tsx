import React from "react";
import { Dialog, DialogTitle } from "@mui/material";

import { CustomDialogProps } from "@/types";

const CustomDialog: React.FC<CustomDialogProps> = ({
  open,
  onClose,
  style,
  children,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      sx={{
        background: "transparent",
        "& .MuiBackdrop-root": {
          backgroundColor: "transparent",
        },
        "& .MuiDialog-container": {
          alignItems: "flex-start",
        },
      }}
    >
      <DialogTitle
        className={`${
          style === "green" ? "custom-dialog-win" : "custom-dialog-loose"
        }`}
      >
        {children}
      </DialogTitle>
    </Dialog>
  );
};

export default CustomDialog;
