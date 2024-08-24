import { Box, Container, Grid, Typography, styled } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";
import SmallCard from "components/SmallCard/SmallCard";
import { cardMock2, moreNews, moreNewsTwo } from "json/mock/demo.mock";
import React from "react";
export const MoreNewsWrap = styled(Box)`
padding-bottom: 90px;
@media (max-width:1199px) {
  padding-bottom: 70px ;
}
@media (max-width:899px) {
  padding-bottom: 60px ;
}
@media (max-width:599px) {
  padding-bottom: 50px ;
}
h2{
    font-size: 24px;
    color: ${primaryColors.primary1};
    margin-bottom: 30px;
}
.lower_sec{
    padding-top: 50px;
    border-top: 1px solid rgb(196, 196, 196,0.2);
}
`;
const MoreNews = () => {
  return (
    <MoreNewsWrap>
      <Container fixed>
        <Typography variant="h2">Most Popular News</Typography>
        <Box className="lower_sec">
          <Grid container spacing={7}>
            <Grid item xs={12} md={6}>
              {moreNews.map((item) => (
                <SmallCard {...item} />
              ))}
            </Grid>
            <Grid item xs={12} md={6}>
              {moreNewsTwo.map((item) => (
                <SmallCard {...item} />
              ))}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </MoreNewsWrap>
  );
};

export default MoreNews;
