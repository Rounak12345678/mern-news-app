import { Box, Dialog, styled } from "@mui/material";

export const CustomDialog = styled(Dialog)`
     width: 100%;
 .MuiPaper-root{
    overflow: hidden;
 }

  .close_icon {
    position: absolute;
    top: 10px;
    right: 10px;
    margin-top: 0;

    &:hover {
      background-color: transparent;
      opacity: 0.6;
    }
  }
  .MuiDialogContent-root {
    padding: 0px;
    margin-top: 15px;
  }
  .modla_button{
    min-width: 178px !important;
    margin-top: 30px;
  }
`
export const LinkModalWrap = styled(Box)`
padding: 40px 103px 64px;
@media (max-width:599px) {
    padding: 30px 20px 50px;
}
@media (max-width:479px) {
    padding: 15px 20px 30px;
}
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
p{
    max-width: 460px;
    margin: 0 auto;
    text-align: center;
    

}
h3{
    margin-bottom: 11px;
    text-align: center;
    line-height: 1.3;
}
i{
    display: inline-block;
    line-height: 0;
    margin-bottom: 20px;
}
.btnStack{
  margin-top: 30px;
}
`
export const ChangePassWord= styled(Box)`
padding: 70px 70px 75px;
@media (max-width:599px) {
    padding: 30px 20px 50px;
}
@media (max-width:479px) {
    padding: 15px 20px 30px;
}
h3{
  text-align: center;
  margin-bottom: 40px;
  @media (max-width: 479px) {
    margin-bottom: 25px;
  }
}

`