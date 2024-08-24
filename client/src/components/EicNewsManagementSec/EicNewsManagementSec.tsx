import React from "react";
import { EicNewsManagementSecStyled } from "styles/StyledComponents/EicNewsManagementSecStyled";
import Typography from "@mui/material/Typography";
import assest from "json/assest";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CmnNewsDetails from "components/CmnNewsDetails/CmnNewsDetails";
import { Button, Stack } from "@mui/material";
import CustomButtonPrimary from "ui/CustomButtons/CustomButtonPrimary";
import EditIcon from "ui/Icons/EditIcon";
import ReactPlayer from "react-player";
import Calender from "ui/Icons/Calender";
import Music from "ui/Icons/Music";
import ListIcon from "ui/Icons/ListIcon";
interface cardProp{
  isStatus?:boolean;
  isButtons?:boolean;
}
const EicNewsManagementSec = ({isStatus,isButtons}:cardProp) => {
  return (
    <EicNewsManagementSecStyled className="cmn_body_white">
      <Typography variant="h1" className="headTxt">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
        sodales orci. Etiam turpis ante, pellentesque in velit in, consequat
        ullamcorper augue.
      </Typography>
      <Typography variant="body1" className="headPara">
        Sed id risus quam. Duis gravida vulputate ante, ut molestie purus luctus
        nec. In tincidunt pharetra nibh, eu sollicitudin nisl vehicula vel.
        Nullam rutrum nunc arcu, ac blandit dolor malesuada vitae. Sed dapibus
        nisi sapien, at venenatis sapien suscipit bibendum. Nam fringilla
        gravida sapien, ut tincidunt lorem consectetur quis. Nunc facilisis,
        tellus a porta consequat, arcu dui porttitor mauris, sed ultricies diam.
      </Typography>
      <Box className="newsSec">
        <Typography variant="h2" className="name">
          By: Jhon Doe
        </Typography>
        <figure className="camImg">
          <img src={assest.eicNewsMngDetailsImg} alt="" />
        </figure>
        <Stack direction="row" alignItems="center" justifyContent="space-between" flexWrap="wrap">
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
{isStatus&&(
   <Stack className="btn_stack" direction="row" alignItems="center">
   <Typography>
    <ListIcon/>
    100
   </Typography>
    <Typography variant="body1" className="colored_text">
    Approved
    </Typography>
</Stack>
)}
         
      </Stack>

      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CmnNewsDetails image1={assest.newsSecImg1} image2={assest.newsSecImg2}/>
        </Grid>
      </Grid>
      <Box className="video">
        <figure>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            className="video_player"
          />
        </figure>
      </Box>
      {!isButtons &&(
        <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        className="btnStack"
      >
        <Box className="lftBtn">
          <CustomButtonPrimary
            variant="contained"
            color="primary"
            className="cmnBtnStyle approveBtn"
          >
            Approve
          </CustomButtonPrimary>
          <CustomButtonPrimary
            variant="contained"
            className="cmnBtnStyle rejectBtn"
          >
            Reject
          </CustomButtonPrimary>
        </Box>
        <Box className="rgtBtn">
          {/* <Button className="cmnBtnStyle editBtn">
            <EditIcon />
            <Typography variant="body1">Edit News</Typography>
          </Button> */}
          <CustomButtonPrimary
            variant="outlined"
            color="inherit"
            startIcon={<EditIcon />}
            className="cmnBtnStyle editBtn"
          >
            Edit News
          </CustomButtonPrimary>
        </Box>
      </Stack>
      )}
      
    </EicNewsManagementSecStyled>
  );
};

export default EicNewsManagementSec;
