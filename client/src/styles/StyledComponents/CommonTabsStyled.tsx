import { Box, styled } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";

export const CommonTabsStyled = styled(Box)`
  .tabSec {
    .MuiTabs-flexContainer {
      border-bottom: 3px solid #c4c4c4;
      
    }
    button {
      padding: 20px 30px;
      text-transform: none;
      font-size: 16px;
      font-weight: 400;
      @media (max-width:599px) {
        font-size: 14px;
        padding: 15px 20px;
      }
      @media (max-width:455px) {
        font-size: 12px;
        padding: 12px 12px;
      }
      @media (max-width:385px) {
        font-size: 12px;
        padding: 12px 6px;
      }
     

      &.Mui-selected {
        color: ${primaryColors.primary};
      }
    }
    .MuiTabs-indicator {
      height: 3px;
    }
  }
`;
