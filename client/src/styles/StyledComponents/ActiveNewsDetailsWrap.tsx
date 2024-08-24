import { Box, styled } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";

export const ActiveNewsDetailsWrap = styled(Box)`
  .wrapper_heading {
    font-size: 24px;
    max-width: 750px;
    padding-bottom: 20px;
    border-bottom: 1px solid rgb(196, 196, 196, 0.2);
  }
  .topSec{
    margin-bottom: 70px;
    h2{
        font-size: 24px;
        margin-top: 30px;
        @media (max-width: 479px) {
          font-size: 22px;
        }
    }
    .long_texts{
        margin-top: 20px;
    }
    h3{
        margin-top: 20px;
    }
    .video{
    figure{
        width: 100%;
        height: 533px;
        margin-top: 25px;
        border-radius: 0;
     .video_player{
        width: 100% !important;
        height: 100% !important;
    }
    }
}
  }
  .left_box{
    margin-top: 30px;
    @media (max-width:599px) {
      flex-wrap: wrap;
    }
    .muisc_box {
        display: flex;
        align-items: center;
          @media (max-width:599px) {
      width: 100%;
    }
    @media (max-width:479px) {
      flex-wrap: wrap;
    }

        p {
          display: flex;
          align-items: center;
          font-size: 16px;
          line-height: 1;
          color: ${primaryColors.textPrimaryColor};
          font-family: "Noticia Text", serif;
          padding: 0 15px;
          @media (max-width: 479px) {
            font-size: 14px;
          }
          @media (max-width: 353px) {
            font-size: 10px;
          }


          svg {
            margin-right: 5px;
          }
          :not(:last-child) {
         
            border-right: 1px solid ${primaryColors.textPrimaryColor};
          }
          :first-child{
            padding-left: 0;
            @media (max-width: 417px) {
             width: 100%;
             border: 0;
             
            }
          }
          :nth-child(2){
            @media (max-width: 417px) {
             padding-left: 0;
             margin-top: 10px;
             
            }
          }
          :last-child{
            @media (max-width: 417px) {
              margin-top: 10px;
             
            }
          }
          
        }
      }
      .btn_stack{
        @media (max-width:599px) {
          margin-top: 15px;
        }
        p{
           padding: 0 15px;
            color: ${primaryColors.mainFontColor};
            text-transform: capitalize;
            line-height: 1;
            display: flex;
            align-items: center;
            font-size: 14px;
            svg{
                margin-right: 5px;
            }

            @media (max-width: 479px) {
            font-size: 14px;
          }
          @media (max-width: 353px) {
            font-size: 10px;
          }
           
            :last-child{
                padding-right: 0;
                border-left: 1px solid ${primaryColors.mainFontColor};
                border-radius: 0;
                color: ${primaryColors.primary};
                
            }
           
            :first-child{
              @media (max-width:599px) {
                padding-left: 0;
        }
              
            }

        }
        .rejected{
                color: ${primaryColors.colorD6614C} !important;
            }
      }
}
.bottom_img{
    margin-top: 50px;
    width: 100%;
    height: 505px;
    line-height: 0;
    border-radius: 6px;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

`;