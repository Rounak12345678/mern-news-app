import { FormControl, styled } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";

export const FormControlWrapper = styled(FormControl)`
width: 100%;
  .location {
    font-size: 14px;
    font-weight: 400;
    color: ${primaryColors.color565656};
  }
`;
