
import { Box, Container, Typography, styled } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";

export const BigTextWrap = styled(Box)`
  padding: 40px 0;
  @media (max-width:899px){
    padding: 25px 0;
  }
  p {
    font-size: 50px;
    text-transform: uppercase;
    text-align: center;
    font-family: 'bebas_kairegular';
    font-weight: 400;
    color: ${primaryColors.primary};
    @media (max-width:599px){
    font-size: 30px;
  }
  }
  


`;
const BigText = () => {
  return (
    <BigTextWrap>
      <Container fixed>
        <Typography variant="body1">World news organisation</Typography>
      </Container>
    </BigTextWrap>
  );
};

export default BigText;
