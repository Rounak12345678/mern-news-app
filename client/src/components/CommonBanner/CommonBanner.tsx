import { Box, Container, Typography, styled } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";
import React from "react";
export const CommonBannerWrap = styled(Box)`
padding: 100px 0 0;
@media (max-width:1199px) {
  padding: 60px 0 0;
}
@media (max-width:599px) {
  padding: 40px 0 0;
}
.bannerWrap{
    h1{
        font-size: 30px;
        text-align: center;

    }
    p{
        max-width: 620px;
        margin: 0 auto;
        text-align: center;
        color: ${primaryColors.color565656};
    }
}
`;
interface bannerProp {
    title:string;
    subTitle:string;
}
const CommonBanner = ({title,subTitle}:bannerProp) => {
  return (
    <CommonBannerWrap>
      <Container fixed>
        <Box className="bannerWrap">
          <Typography variant="h1">{title}</Typography>
          <Typography variant="body1">
           {subTitle}
          </Typography>
        </Box>
      </Container>
    </CommonBannerWrap>
  );
};

export default CommonBanner;
