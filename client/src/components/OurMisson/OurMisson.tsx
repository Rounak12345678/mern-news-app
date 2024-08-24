import { Box, Container, Grid, Typography, styled } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";
import assest from "json/assest";
import React from "react";
export const OurMissonWrap = styled(Box)`
padding: 90px 0;
@media (max-width:1199px) {
  padding: 70px 0;
}
@media (max-width:899px) {
  padding: 50px 0;
}
@media (max-width:599px) {
  padding: 40px 0;
}
.left_box{
  height: 100%;
  h2{
    font-size: 30px;
    margin-bottom: 10px;
  }
 
}
.rgt_box{
  height: 100%;
  figure{
    width: 100%;
    line-height: 0;
    border-radius: 6px;
    overflow: hidden;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

  }
}
`;
const OurMisson = () => {
  return (
    <OurMissonWrap>
      <Container fixed>
        <Grid container alignItems="center" spacing={3.5}>
          <Grid item xs={12} md={6}>
            <Box className="left_box">
              <Typography variant="h2">Our Mission</Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                et sodales orci. Etiam turpis ante, pellentesque in velit in,
                consequat ullamcorper augue. Ut non mattis ipsum. Cras tellus
                est, tincidunt et dolor eu, luctus sagittis dui. Nunc ornare
                eros diam, at gravida neque viverra eu. Praesent nisi purus,
                finibus a urna in, ultricies faucibus augue. Vivamus fringilla
                ipsum cursus, egestas arcu ut, vehicula eros. Donec ac augue
                nisl. Aenean dapibus ultrices laoreet. Sed sagittis aliquet
                lectus. <br /> <br />
                Nam interdum quis tellus at feugiat. Mauris et enim at elit
                ullamcorper vehicula aliquet vitae metus. Nulla facilisi. Proin
                id euismod felis. Quisque vel dapibus dui. Nam erat libero,
                interdum et pellentesque vitae, tincidunt quis ligula. Maecenas
                rutrum enim ante, id porttitor urna volutpat et. Vivamus
                fermentum nibh nec sapien volutpat, ut convallis tortor
                elementum ulla facilisi. Proin id euismod felis.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className="rgt_box">
            <Grid container spacing={2.5}>
              <Grid item xs={12} md={6}>
                <figure className="Misson1">
                <img src={assest.Misson1} alt="" />
                </figure>
              </Grid>
              <Grid item xs={12} md={6}>
                <figure className="Misson1">
                <img src={assest.Misson2} alt="" />
                </figure>
              </Grid>
              <Grid item xs={12} md={12}>
                <figure className="Misson1">
                <img src={assest.Misson3} alt="" />
                </figure>
              </Grid>
            </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </OurMissonWrap>
  );
};

export default OurMisson;
