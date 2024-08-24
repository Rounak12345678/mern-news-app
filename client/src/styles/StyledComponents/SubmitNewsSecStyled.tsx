import { Box, styled } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";

export const SubmitNewsSecStyled = styled(Box)`
  .headTxt {
    padding-bottom: 15px;
    border-bottom: 1px solid ${primaryColors.colorC4C4C4};
    margin-bottom: 64px;
    @media (max-width: 899px) {
      margin-bottom: 45px;
    }
    @media (max-width: 599px) {
      margin-bottom: 30px;
    }
   
  }
  .subNewsSec {
    max-width: 1020px;
    width: 100%;
    margin: 0 auto;
    figure {
    width: 100%;
    height: 100%;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
    .MuiButton-contained{
      margin-top: 25px;
    }
  }


`;
