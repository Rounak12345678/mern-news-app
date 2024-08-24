

import { Box, Container, Grid, Typography, styled } from "@mui/material";
import CmnCard from "../CmnCard/CmnCard";
import SmallCard from "../SmallCard/SmallCard";
import { primaryColors } from "Theme/_muiPalette";
import { cardMock, cardMock2, cardMock3 } from "json/mock/demo.mock";

const PodcastSecWrapper = styled(Box)`
  padding-bottom: 85px;
  @media (max-width: 899px) {
    padding-bottom: 65px;
  }
  @media (max-width:479px) {
    padding-bottom: 40px ;
}

  .card_wrap {
    margin-bottom: 35px;
  }
  h2 {
    color: ${primaryColors.primary};
    font-size: 24px;
    border-bottom: 1px solid ${primaryColors.colorC4C4C4};
    margin-bottom: 25px;
    padding-bottom: 25px;
  }
`;

export default function PodcastSec() {
  return (
    <PodcastSecWrapper>
      <Container fixed>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3.5}>
            <Box className="podcast_inr">
              <Typography variant="h2">Podcasts </Typography>
              {cardMock.map((item) => (
                <CmnCard {...item} />
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box className="podcast_inr">
              <Typography variant="h2">News </Typography>
              {cardMock2.map((item) => (
                <SmallCard {...item} />
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={3.5}>
            <Box className="podcast_inr">
              <Typography variant="h2">Popular </Typography>
              {cardMock3.map((item) => (
                <SmallCard {...item}  noImage/>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </PodcastSecWrapper>
  );
}
