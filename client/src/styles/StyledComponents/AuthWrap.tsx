import { Box, styled } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";

export const AuthWrapStyle = styled(Box)`
.auth_container{
    display: flex;
    align-items: center;

    .left_cont,.rgt_cont{
        width: 50%;
        height: 100vh;
        
    }
    .left_cont{
        overflow: hidden;
        background-color: ${primaryColors.colorE0F0F5};
        display: flex;
        align-items: end;
        justify-content: center;
        figure{
            max-height: 800px;
            width: 100%;
            line-height: 0;

            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                line-height: 0;
                object-position: top ;
            }
        }
        @media (max-width:1199px) {
            display: none;
        }
    }
    .rgt_cont{
        width: 50%;
    height: 100vh;
    overflow-y: auto;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 80px 50px;
    @media (max-width:1199px) {
        width: 100%;
    }
    @media (max-width:1199px) {
        padding: 50px 25px;
    }
    .rgt_cont_inner{
        max-width: 552px ;
        width: 100%;
        .heading{
            margin-bottom: 50px;
            @media (max-width:1199px) {
                margin-bottom: 35px;
            }
            @media (max-width:599px) {
                margin-bottom: 20px;
            }
            h2{
            font-size: 30px;
            text-align: center;
            @media (max-width:599px) {
                font-size: 25px;
            }
        }
        .sub{
            text-align: center;
            @media (max-width:1199px) {
        margin-top: 20px;
    }
        }
        }
      
    }
    }
}
.checked{
    align-items: start;
    margin-right: 0;
    margin-left: 0;
    .MuiCheckbox-root{
      padding: 0;
      height: 20px;
      width: 20px;
    }
    .MuiTypography-root{
      font-size: 15px;
      color: ${primaryColors.color565656};
      margin-left: 8px;
      line-height: 1.4;
    }
  }

`