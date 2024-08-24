import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";
import assest from "json/assest";
import React from "react";
import { NewsDetilsUPWrap } from "styles/StyledComponents/NewsDetilsUPWrap";
import Calender from "ui/Icons/Calender";
import Music from "ui/Icons/Music";
import SavedIcon from "ui/Icons/SavedIcon";
import Share from "ui/Icons/Share";

const NewsDetilsUP = () => {
  return (
    <NewsDetilsUPWrap>
      <Container fixed>
        <Typography variant="h2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
          sodales orci. Etiam turpis ante, pellentesque in velit in, consequat
          ullamcorper augue.
        </Typography>
        <Typography variant="body1">
          Sed id risus quam. Duis gravida vulputate ante, ut molestie purus
          luctus nec. In tincidunt pharetra nibh, eu sollicitudin nisl vehicula
          vel. Nullam rutrum nunc arcu, ac blandit dolor malesuada vitae. Sed
          dapibus nisi sapien, at venenatis sapien suscipit bibendum. Nam
          fringilla gravida sapien, ut tincidunt lorem consectetur quis. Nunc
          facilisis, tellus a porta consequat, arcu dui porttitor mauris, sed
          ultricies diam.
        </Typography>
        <Typography variant="h3">By: Jhon Doe</Typography>
        <figure>
          <img src={assest.UnImage} alt="" />
        </figure>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          className="left_box"
          flexWrap="wrap"
        >
          <Box className="muisc_box">
            <Typography variant="body1">
              <Calender />
              December 9, 2024
            </Typography>
            <Typography variant="body1">Business</Typography>
            <Typography variant="body1">
              <Music />
              Audio
            </Typography>
          </Box>
          <Stack className="btn_stack" direction="row" alignItems="center">
            <Button variant="text" startIcon={<Share />}>
              Share
            </Button>
            <Button variant="text" startIcon={<SavedIcon />}>
              Save
            </Button>
          </Stack>
        </Stack>
      </Container>
    </NewsDetilsUPWrap>
  );
};

export default NewsDetilsUP;
