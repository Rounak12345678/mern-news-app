import { Box, styled } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";

export const PaymentWrap = styled(Box)`
margin-top: 30px;
padding-bottom: 90px;
@media (max-width:1199px) {
    padding-bottom: 70px;
}
@media (max-width:899px) {
    padding-bottom: 60px;
}
@media (max-width:599px) {
    padding-bottom: 50px;
}
h3{
    text-align: center;
    
}
.payWrap{
    margin-top: 50px;
    padding: 65px 75px;
background: ${primaryColors.white};
box-shadow: 0px 4px 20px rgba(37, 150, 190, 0.12);
border-radius: 10px;
@media (max-width:899px) {
    padding: 50px 60px;
    margin-top: 35px;
}
@media (max-width:899px) {
    padding: 35px 30px;
    margin-top: 35px;
}
}
.btn_stack{
    margin-top: 40px;
      @media (max-width:599px) {
   flex-wrap: wrap;
   margin-top: 25px;
}
    button{
        min-width: 178px !important;
        :last-child{
            margin-left: 20px;

    @media (max-width:599px) {
    margin-left: 0;
    margin-top: 10px;
}
        }
        @media (max-width:899px) {
    width: 50%;
}
     @media (max-width:599px) {
    width: 100%;
}
    }
}
`