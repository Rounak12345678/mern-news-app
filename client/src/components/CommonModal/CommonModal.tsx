import { PaperProps } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { CustomDialog } from "styles/StyledComponents/ModalStyled";
import CloseIconModal from "ui/Icons/CloseIconModal";


interface MuiModalWrapperProps {
  open: boolean;
  onClose?: () => void;
  scroll?: "paper" | "body";
  children: JSX.Element | JSX.Element[];
  title?: string;
  paperprops?: PaperProps;
  isClose?: boolean;
  subText?: string;
}

export default function MuiModalWrapper({
  open,
  onClose,
  scroll,
  children,
  title,
  paperprops,
  isClose,
  subText
}: MuiModalWrapperProps) {

  

  return (
    <CustomDialog
      open={open}
      onClose={onClose}
      scroll={scroll}
      aria-labelledby="responsive-dialog-title"
      PaperProps={
        paperprops || {
          sx: {
            width: "100%",
            maxWidth: "693px",
            borderRadius: "17px",
            margin: { xs: 2, sm: 4 },
            maxHeight: "calc(100% - 64px)",
            height: { xs: "auto" }
          }
        }
      }
      slotProps={{
        root: {
          className: "modal_backdrop"
        }
      }}
    >
      <Stack direction="column" spacing={2} className="modal_header">
        <Typography>{title}</Typography>
        <Typography variant="caption">{subText}</Typography>
        {isClose ? (
          <IconButton onClick={onClose} autoFocus className="close_icon">
            <CloseIconModal />
          </IconButton>
        ) : null}
      </Stack>
      <DialogContent>{children}</DialogContent>
    </CustomDialog>
  );
}
