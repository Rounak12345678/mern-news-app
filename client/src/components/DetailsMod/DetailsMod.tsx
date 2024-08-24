import { Box, Container, Grid, Typography, styled } from "@mui/material";
import assest from "json/assest";
import ReactPlayer from 'react-player'
import React from "react";
export const DetailsModWrap = styled(Box)`
padding: 90px 0;
@media (max-width:1199px) {
  padding: 70px 0;
}
@media (max-width:899px) {
  padding: 60px 0;
}
@media (max-width:599px) {
  padding: 50px 0;
}
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
.details_down{
    margin-top: 50px;
}
.video{
    figure{
        width: 100%;
        height: 533px;
        margin-top: 50px;
        border-radius: 0;
     .video_player{
        width: 100% !important;
        height: 100% !important;
    }
    }
}
`;
const DetailsMod = () => {
  return (
    <DetailsModWrap>
      <Container fixed>
        <Box className="detils_up">
        <Grid container alignItems="center" spacing={3.5}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              sodales orci. Etiam turpis ante, pellentesque in velit in,
              consequat ullamcorper augue. Ut non mattis ipsum. Cras tellus est,
              tincidunt et dolor eu, luctus sagittis dui. Nunc ornare eros diam,
              at gravida neque viverra eu. Praesent nisi purus, finibus a urna
              in, ultricies faucibus augue. Vivamus fringilla ipsum cursus,
              egestas arcu ut, vehicula eros. Donec ac augue nisl. Aenean
              dapibus ultrices laoreet. Sed sagittis aliquet lectus.
              <br />
              <br />
              Nam interdum quis tellus at feugiat. Mauris et enim at elit
              ullamcorper vehicula aliquet vitae metus. Nulla facilisi. Proin id
              euismod felis. Quisque vel dapibus dui. Nam erat libero, interdum
              et pellentesque vitae, tincidunt quis ligula. Maecenas rutrum enim
              ante, id porttitor urna volutpat et. Vivamus fermentum nibh nec
              sapien volutpat, ut convallis tortor elementum ulla facilisi.
              Proin id euismod felis.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <figure>
                <img src={assest.details1} alt="" />
            </figure>
          </Grid>
        </Grid>
        </Box>
        <Box className="details_down">
            <Grid container alignItems="center" spacing={3.5}>
                <Grid item xs={12} md={6}>
                <figure>
                <img src={assest.details2} alt="" />
            </figure>
                </Grid>
                <Grid item xs={12} md={6}>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              sodales orci. Etiam turpis ante, pellentesque in velit in,
              consequat ullamcorper augue. Ut non mattis ipsum. Cras tellus est,
              tincidunt et dolor eu, luctus sagittis dui. Nunc ornare eros diam,
              at gravida neque viverra eu. Praesent nisi purus, finibus a urna
              in, ultricies faucibus augue. Vivamus fringilla ipsum cursus,
              egestas arcu ut, vehicula eros. Donec ac augue nisl. Aenean
              dapibus ultrices laoreet. Sed sagittis aliquet lectus.
              <br />
              <br />
              Nam interdum quis tellus at feugiat. Mauris et enim at elit
              ullamcorper vehicula aliquet vitae metus. Nulla facilisi. Proin id
              euismod felis. Quisque vel dapibus dui. Nam erat libero, interdum
              et pellentesque vitae, tincidunt quis ligula. Maecenas rutrum enim
              ante, id porttitor urna volutpat et. Vivamus fermentum nibh nec
              sapien volutpat, ut convallis tortor elementum ulla facilisi.
              Proin id euismod felis.
            </Typography>
          </Grid>
            </Grid>
        </Box>
        <Box className="video">
            <figure>
            <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' className="video_player"/>
            </figure>
        </Box>
      </Container>
    </DetailsModWrap>
  );
};

export default DetailsMod;
