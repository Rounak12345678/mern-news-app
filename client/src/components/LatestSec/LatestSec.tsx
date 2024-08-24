
import { Box, Container, Grid, Typography, styled } from "@mui/material";

import CmnCard from "../CmnCard/CmnCard";
import { primaryColors } from "Theme/_muiPalette";
import { cardMock4 } from "json/mock/demo.mock";
import { Link } from "react-router-dom";

const LatestSecWrapper = styled(Box)`
  padding: 85px 0;
  @media (max-width:899px) {
    padding: 80px 0;
  }
  @media (max-width:479px) {
  padding: 40px 0;
}
  .hdr_top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    a{
        color: ${primaryColors.primary};
        font-size: 16px;
        &:hover{
            color: ${primaryColors.black};
        }
    }
    h2{
        color: ${primaryColors.primary};
        font-size: 24px;
        
    }
  }
`;

export default function LatestSec() {
  return (
    <LatestSecWrapper>
      <Container fixed>
        <Box className="hdr_top">
          <Typography variant="h2">Latest News </Typography>
          <Link to="/">View all</Link>
        </Box>
        <Grid container spacing={2}>
          {cardMock4.map((item) => (
            <Grid item xs={12} md={3}>
              <CmnCard {...item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </LatestSecWrapper>
  );
}
