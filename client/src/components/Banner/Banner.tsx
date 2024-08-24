
import { Box, Container, Grid, Typography } from "@mui/material";

import CommonChip from "../CommonChip/CommonChip";
import { BannerWrap } from "styles/StyledComponents/BannerWrap";
import CustomButtonPrimary from "ui/CustomButtons/CustomButtonPrimary";
import Calender from "ui/Icons/Calender";
import Music from "ui/Icons/Music";
import assest from "json/assest";
interface bannerProp{
  img: any;
}
const Banner = ({img}:bannerProp) => {
  return (
    <BannerWrap>
      <Container fixed>
        <Box className="main_banner">
          <Grid container alignItems="center" spacing={{lg:6.5, sm:4, xs:2}}>
            <Grid item md={6}>
              <Box className="rgt_box">
                <CommonChip title="Business" />
                <Typography variant="h1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer efficitur tellus
                </Typography>
                <Box className="muisc_box">
                  <Typography variant="body1">
                    <Calender />
                    December 9, 2024
                  </Typography>
                  <Typography variant="body1">
                    <Music />
                    Audio
                  </Typography>
                </Box>
                <Typography variant="body1" className="long_texts">
                  Morbi id convallis nunc. Pellentesque vehicula velit ac velit
                  gravida, non consectetur leo varius. Phasellus et libero
                  congue, cursus justo at, faucibus dui.
                </Typography>
                <CustomButtonPrimary color="primary" variant="contained">
                  Read More
                </CustomButtonPrimary>
              </Box>
            </Grid>
            <Grid item md={6}>
              <figure>
                <img
                  alt=""
                  src={img}
                  width={515}
                  height={388}
                />
              </figure>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </BannerWrap>
  );
};

export default Banner;
