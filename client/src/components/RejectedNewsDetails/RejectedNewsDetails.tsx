import { Box, Grid, Stack, Typography } from '@mui/material'
import DashboardWrapper from 'Layout/DashboardWrapper/DashboardWrapper'
import assest from 'json/assest'

import React from 'react'
import ReactPlayer from 'react-player'
import { ActiveNewsDetailsWrap } from 'styles/StyledComponents/ActiveNewsDetailsWrap'
import { EicNewsManagementSecStyled } from 'styles/StyledComponents/EicNewsManagementSecStyled'
import Calender from 'ui/Icons/Calender'
import ListIcon from 'ui/Icons/ListIcon'
import Music from 'ui/Icons/Music'

const RejectedNews = () => {
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
                    <Typography variant="body1" className="rejected">
                    Rejected
                    </Typography>
                </Stack>
         </Stack>
      </Box>
      <EicNewsManagementSecStyled>
      <Grid
        container
        rowSpacing={6}
        columnSpacing={{ xs: 1, sm: 2, md: 5 }}
        alignItems="center"
      >
          <Grid item xs={12} md={6} className="newsImg">
          <figure className="newsDetilsImg">
            <img src={assest.reject1} alt="" />
          </figure>
        </Grid>
        <Grid item xs={12} md={6} className="newsPara">
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            sodales orci. Etiam turpis ante, pellentesque in velit in, consequat
            ullamcorper augue. Ut non mattis ipsum. Cras tellus est, tincidunt
            et dolor eu, luctus sagittis dui. Nunc ornare eros diam, at gravida
            neque viverra eu. Praesent nisi purus, finibus a urna in, ultricies
            faucibus augue. Vivamus fringilla ipsum cursus, egestas arcu ut,
            vehicula eros. Donec ac augue nisl. Aenean dapibus ultrices laoreet.
            Sed sagittis aliquet lectus.
            <br />
            <br />
            Nam interdum quis tellus at feugiat. Mauris et enim at elit
            ullamcorper vehicula aliquet vitae metus. Nulla facilisi. Proin id
            euismod felis. Quisque vel dapibus dui. Nam erat libero, interdum et
            pellentesque vitae, tincidunt quis ligula. Maecenas rutrum enim
            ante, id porttitor urna volutpat et. Vivamus fermentum nibh nec
            sapien volutpat, ut convallis tortor elementum ulla facilisi. Proin
            id euismod felis.
          </Typography>
        </Grid>
      
       
        <Grid item xs={12} md={6} className="newsPara">
          <Typography variant="body1">
            Nam interdum quis tellus at feugiat. Mauris et enim at elit
            ullamcorper vehicula aliquet vitae metus. Nulla facilisi. Proin id
            euismod felis. Quisque vel dapibus dui. Nam erat libero, interdum et
            pellentesque vitae, tincidunt quis ligula. Maecenas rutrum enim
            ante, id porttitor urna volutpat et. Vivamus fermentum nibh nec
            sapien volutpat, ut convallis tortor elementum ulla facilisi. Proin
            id euismod felis.
            <br />
            <br />
            Sed id risus quam. Duis gravida vulputate ante, ut molestie purus
            luctus nec. In tincidunt pharetra nibh, eu sollicitudin nisl
            vehicula vel. Nullam rutrum nunc arcu, ac blandit dolor malesuada
            vitae. Sed dapibus nisi sapien, at venenatis sapien suscipit
            bibendum. Nam fringilla gravida sapien, ut tincidunt lorem
            consectetur quis. Nunc facilisis, tellus a porta consequat, arcu dui
            porttitor mauris, sed ultricies diam ex sit amet odio. Aliquam
            pellentesque, sapien eget egestas pulvinar, quam est aliquet mauris,
            pulvinar maximus odio neque sed elit.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} className="">
          <figure className="newsDetilsImg">
            <img src={assest.reject2} alt="" />
          </figure>
        </Grid>
      </Grid>
      </EicNewsManagementSecStyled>
      <figure className="bottom_img">
        <img src={assest.reject_image} alt="" />
      </figure>
    </ActiveNewsDetailsWrap>


  )
}

export default RejectedNews