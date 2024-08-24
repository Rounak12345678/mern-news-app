import { Box, styled } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";

export const BannerWrap = styled(Box)`
position: relative;
padding-top: 45px;
:before{
    position: absolute;
    content: "";
    left: 0;
    top: 0px;
    background: ${primaryColors.colorE0F0F5};
    background-size: 100% auto;
    height: 80%;
    width: 100%;
    z-index: -1;
}
  .main_banner {
    padding: 25px 35px 34px 40px;
    background: ${primaryColors.white};
    box-shadow: 0px 4px 18px rgb(248, 248, 248);
    border-radius: 10px;
    @media (max-width:479px) {
      padding: 20px;
    }

    .rgt_box {
        
      h1 {
        margin-top: 10px;
      }
      .muisc_box {
        margin-top: 18px;
        display: flex;
        align-items: center;
        margin-top: 15px;

        p {
          display: flex;
          align-items: center;
          padding-right: 13px;
          font-size: 16px;
          line-height: 1;
          color: ${primaryColors.textPrimaryColor};
          @media (max-width: 379px) {
            font-size: 14px;
          }

          svg {
            margin-right: 5px;
          }
          :last-child {
            padding-left: 13px;
            border-left: 1px solid ${primaryColors.textPrimaryColor};
          }
        }
      }
      .long_texts {
        margin-top: 22px;
        color: ${primaryColors.color565656};
        max-width: 471px;
        line-height: 1.8;
      }
      button {
        margin-top: 16px;
          @media (max-width: 379px) {
            width: 100%;
          }
      }
    }
    figure{
        width: 100%;
        border-radius: 10px;
        overflow: hidden;
       line-height: 0;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
  }
`;
