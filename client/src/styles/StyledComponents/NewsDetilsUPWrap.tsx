import { Box, styled } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";

export const NewsDetilsUPWrap = styled(Box)`
padding: 100px 0 90px;
@media (max-width: 1199px) {
  padding: 75px 0 60px;
}
@media (max-width: 899px) {
  padding: 55px 0 50px;
}
@media (max-width: 599px) {
  padding: 50px 0 35px;
}
h2{
    font-size: 24px;
    margin-bottom: 20px; 
}
h3{
    margin-top: 20px;
}
figure{
    width: 100%;
    line-height: 0;
    border-radius: 6px;
    margin-top: 50px;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
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
          }
          
        }
      }
      .btn_stack{
        @media (max-width:599px) {
          margin-top: 15px;
        }
        button{
            padding: 0 20px;
            color: ${primaryColors.mainFontColor};
            text-transform: capitalize;
            font-family: "Noticia Text", serif;
            height: fit-content;
            @media (max-width: 479px) {
            font-size: 14px;
          }
          @media (max-width: 353px) {
            font-size: 10px;
          }
            :hover{
                background-color: transparent;
            }
            :last-child{
                padding-right: 0;
                border-left: 1px solid ${primaryColors.mainFontColor};
                border-radius: 0;
                
            }
            :first-child{
              @media (max-width:599px) {
                padding-left: 0;
        }
              
            }
        }
      }
}
 
`;