import { Box, Container } from "@mui/material";
import Wrapper from "Layout/Wrapper/Wrapper";
import AdvertisementSec from "components/AdvertisementSec/AdvertisementSec";
import DetailsMod from "components/DetailsMod/DetailsMod";
import MoreNews from "components/MoreNews/MoreNews";
import NewsDetilsUP from "components/NewsDetilsUP/NewsDetilsUP";
import NewsLetter from "components/NewsLetter/NewsLetter";
import assest from "json/assest";
import React from "react";
import { AboutWrap } from "styles/StyledComponents/AboutWrap";

const NewsDetails = () => {
  return (
    <Wrapper>
      <NewsDetilsUP />
      <Container fixed>
        <AboutWrap>
          <Box className="add_wrap">
            <AdvertisementSec img={assest.advertiseImage} />
          </Box>
        </AboutWrap>
      </Container>
      <DetailsMod />
      <MoreNews />

      <NewsLetter />
    </Wrapper>
  );
};

export default NewsDetails;
