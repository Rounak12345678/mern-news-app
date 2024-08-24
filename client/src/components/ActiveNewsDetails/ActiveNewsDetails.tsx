import { Share } from "@mui/icons-material";
import { Box, Button, Stack, Typography, styled } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";
import CmnNewsDetails from "components/CmnNewsDetails/CmnNewsDetails";
import assest from "json/assest";
import React from "react";
import ReactPlayer from "react-player";
import { ActiveNewsDetailsWrap } from "styles/StyledComponents/ActiveNewsDetailsWrap";
import Calender from "ui/Icons/Calender";
import ListIcon from "ui/Icons/ListIcon";
import Music from "ui/Icons/Music";
import SavedIcon from "ui/Icons/SavedIcon";

const ActiveNewsDetails = () => {
  return (
    <ActiveNewsDetailsWrap className="cmn_body_white">
      <Typography variant="h2" className="wrapper_heading">
        News Details
      </Typography>
      <Box className="topSec">
        <Typography variant="h2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
          sodales orci. Etiam turpis ante, pellentesque in velit in, consequat
          ullamcorper augue.
        </Typography>
        <Typography variant="body1" className="long_texts">
          Sed id risus quam. Duis gravida vulputate ante, ut molestie purus
          luctus nec. In tincidunt pharetra nibh, eu sollicitudin nisl vehicula
          vel. Nullam rutrum nunc arcu, ac blandit dolor malesuada vitae. Sed
          dapibus nisi sapien, at venenatis sapien suscipit bibendum. Nam
          fringilla gravida sapien, ut tincidunt lorem consectetur quis. Nunc
          facilisis, tellus a porta consequat, arcu dui porttitor mauris, sed
          ultricies diam.
        </Typography>
        <Typography variant="h3">
        By: Jhon Doe
        </Typography>
        <Box className="video">
            <figure>
            <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' className="video_player"/>
            </figure>
        </Box>
        <Stack direction="row" alignItems="center" justifyContent="space-between" className="left_box" flexWrap="wrap">
         <Box className="muisc_box">
                  <Typography variant="body1">
                    <Calender />
                    December 9, 2024
                  </Typography>
                  <Typography variant="body1">
                  Business
                  </Typography>
                  <Typography variant="body1">
                    <Music />
                    Audio
                  </Typography>
                </Box>
                <Stack className="btn_stack" direction="row" alignItems="center">
                   <Typography>
                    <ListIcon/>
                    100
                   </Typography>
                    <Typography variant="body1" className="colored_text">
                    Active
                    </Typography>
                </Stack>
         </Stack>
      </Box>
      <CmnNewsDetails image1={assest.active1} image2={assest.active2}/>
      <figure className="bottom_img">
        <img src={assest.skateBoat} alt="" />
      </figure>
    </ActiveNewsDetailsWrap>
  );
};

export default ActiveNewsDetails;
