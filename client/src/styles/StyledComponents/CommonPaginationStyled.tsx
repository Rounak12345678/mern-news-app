import { Box, styled } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";

export const CommonPaginationStyled = styled(Box)`
  margin-top: 25px;

  ul {
    li {
      button {
        margin: 0 4px;
        background-color: transparent;
        border: 1px solid #c4c4c4;
        color: ${primaryColors.colorDADADA};
        @media (max-width:415px){
          min-width: 22px;
          height: 22px;
        }
       
        &.Mui-selected {
          background-color: transparent;
          border: 1px solid rgba(45, 45, 45, 1);
          color: ${primaryColors.secondary};
        }
      }
    }
  }
`;
