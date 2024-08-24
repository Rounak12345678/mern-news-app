import { Box, styled } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";

export const ConatctWrap = styled(Box)`
padding: 50px 0;
position: relative;
::before{
    content: "";
    position: absolute;
    width: 100%;
    height: 30%;
    left: 0;
    top: 0;
    background-color: ${primaryColors.colorE0F0F5};
    z-index: -1;
   
}
.inner_wrpa{
padding: 72px 32px 32px;
@media (max-width:899px) {
  padding: 55px 32px 32px;
}
@media (max-width:899px) {
  padding: 40px 32px 32px;
}
 @media (max-width:479px) {
     padding: 30px 20px 32px;
    }

background: ${primaryColors.white};
box-shadow: 0px 4px 18px rgb(248, 248, 248);
border-radius: 10px;

    .up_box {
    max-width: 90%;
    margin: 0 auto;
    @media (max-width:1199px) {
      max-width: 100%;
    }
    i {
      display: inline-block;
      line-height: 0;
      position: relative;
      z-index: 2;
      svg{
               @media (max-width:1199px) {
      width: 50px;
      height: 50px;
    }
      }
    
      ::before {
        content: "";
        position: absolute;
        left: -15px;
        top: -15px;
        width: 67px;
        height: 67px;
        border-radius: 50%;
        background-color: rgb(242, 249, 251);
        z-index: -1;
         @media (max-width:1199px) {
      width: 50px;
      height: 50px;
    }
      }
    }
    .rgt_box {
      margin-left: 16px;
      h3 {
        margin-bottom: 10px;
      }
      a {
        color: ${primaryColors.color565656};
        :hover {
          color: ${primaryColors.primary};
        }
      }
    }
  }
  .lower_box{
    margin-top: 70px;
    @media (max-width:899px) {
      margin-top: 50px;
    }
    @media (max-width:599px) {
      margin-top: 35px;
    }
    h2{
        font-size: 30px;
    }
    figure{
        border-radius: 6px;
        overflow: hidden;
        width: 100%;
        line-height: 0;
        height: 100%;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
  }
  .form{
    .long_txt{
        max-width: 485px;
    }
    .details_form{
    margin-top: 30px;
    .submit{
        margin-top: 25px;
    }
  }
  }
  
}

`;
