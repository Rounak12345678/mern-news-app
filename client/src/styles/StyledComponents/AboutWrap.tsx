import { Box, styled } from "@mui/material";

export const AboutWrap = styled(Box)`
.add_wrap{
    padding-bottom: 90px;
    border-bottom: 1px solid rgb(196, 196, 196,0.2);
    border-top: 1px solid rgb(196, 196, 196,0.2);
    @media (max-width: 1199px) {
    padding-bottom: 60px;
  }
  @media (max-width: 599px) {
    padding-bottom: 40px;
  }
  @media (max-width: 479px) {
    padding-bottom: 30px;
  }

}
.addsTwo_wrap{
  border-top: 1px solid rgb(196, 196, 196,0.1);
}
`