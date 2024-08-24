import { Box, Container } from "@mui/material";
import Wrapper from "Layout/Wrapper/Wrapper";
import AdvertisementSec from "components/AdvertisementSec/AdvertisementSec";
import CommonBanner from "components/CommonBanner/CommonBanner";
import NewsLetter from "components/NewsLetter/NewsLetter";
import OurMisson from "components/OurMisson/OurMisson";
import Values from "components/Values/Values";
import assest from "json/assest";
import React from "react";
import { AboutWrap } from "styles/StyledComponents/AboutWrap";

export default function About() {
  return (
    <Wrapper>
      <AboutWrap>
      <CommonBanner
        title="About Us"
        subTitle="Morbi id convallis nunc. Pellentesque vehicula velit ac velit gravida, non consectetur leo varius. Phasellus et libero congue, cursus justo at, faucibus dui. "
      />
      <OurMisson/>
      <Container fixed>
      <Box className="add_wrap">
      <AdvertisementSec img={assest.add2}/>
      </Box>
      </Container>
      <Values/>
      <NewsLetter/>
      </AboutWrap>
    </Wrapper>
  );
}
