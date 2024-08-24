import { Box, styled } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";

export const CustomSelect2Styled = styled(Box)`
  .MuiFormControl-root {
    min-width: 155px;
    background: ${primaryColors.colorF2F2F2};
    border-radius: 5px;
    .MuiSelect-select {
      padding: 10px 36px 10px 16px;
    }
    .MuiSelect-icon {
      padding: 0;
      line-height: 0;
      top: 56%;
      transform: translateY(-50%);
      right: 20px;
    }
    fieldset {
      display: none;
    }
  }
`;
