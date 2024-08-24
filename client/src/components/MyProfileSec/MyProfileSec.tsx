import React, { useState } from "react";
import { MyProfileSecStyled } from "styles/StyledComponents/MyProfileSecStyled";
import Box from "@mui/material/Box";
import assest from "json/assest";
import Typography from "@mui/material/Typography";
import CustomButtonPrimary from "ui/CustomButtons/CustomButtonPrimary";
import EditIcon from "ui/Icons/EditIcon";
import Grid from "@mui/material/Grid";
import ManIcon from "ui/Icons/ManIcon";
import CallingIcon from "ui/Icons/CallingIcon";
import CityIcon from "ui/Icons/CityIcon";
import StateIcon from "ui/Icons/StateIcon";
import SmallCard from "components/SmallCard/SmallCard";
import { myPostedNewsData } from "json/mock/demo.mock";
import { Button } from "@mui/material";
import PostedCard from "components/PostedCard/PostedCard";
import MuiModalWrapper from "components/CommonModal/CommonModal";
import { ChangePassWord } from "styles/StyledComponents/ModalStyled";
import InputFieldCommon from "ui/CommonInput/CommonInput";

export const myInfoData = [
  {
    icon: <ManIcon />,
    fName: "First name",
    name: "Jhon",
  },
  {
    icon: <ManIcon />,
    fName: "Last name",
    name: "Doe",
  },
  {
    icon: <CallingIcon />,
    fName: "Contact number",
    name: "(702) 555-0122",
  },
  {
    icon: <CityIcon />,
    fName: "City",
    name: "Quigleybury",
  },
  {
    icon: <StateIcon />,
    fName: "State",
    name: "Montana",
  },
];

const MyProfileSec = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <MyProfileSecStyled>
      <Box className="myprofileTop cmn_body_white">
        <Box className="topLft">
          <img src={assest.myProfileImg} alt="" />
          <Typography variant="h2" color="initial">
            Jhon Doe
          </Typography>
          <CustomButtonPrimary
            variant="contained"
            color="primary"
            onClick={handleOpen}
          >
            Change Password
          </CustomButtonPrimary>
        </Box>
        <Box className="topRgt">
          <Box className="myInfo">
            <Typography variant="h1">My Information</Typography>
            <Box className="editIcon">
              <Button className="edit_butt">
                <EditIcon />
              </Button>
            </Box>
          </Box>
          <Grid container spacing={2}>
            {myInfoData.map((item, index) => (
              <Grid item xs={12} md={4}>
                <Box className="fullInfo">
                  <Box className="iconPart">{item.icon}</Box>
                  <Box className="txtPart">
                    <Typography variant="h5">{item.fName}</Typography>
                    <Typography variant="caption">{item.name}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Box className="myprofileBtm cmn_body_white">
        <Typography variant="h1" className="headTxt">
          My Posted News
        </Typography>
        <Grid container rowSpacing={2.5} columnSpacing={7}>
          {myPostedNewsData.map((item, index) => (
            <Grid item xs={12} md={12} lg={6} className="card" key={index}>
              <PostedCard
                image={item.img}
                date={item.date}
                heading={item.txt}
                profileText={item.assinged}
                status={item.satus}
                statusClassName={item.statusClassName}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <MuiModalWrapper onClose={handleClose} open={open} isClose>
        <ChangePassWord>
          <Typography variant="h3">Change Password</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <InputFieldCommon
                placeholder="************"
                isHeading
                inputHead="Old Password"
              />
            </Grid>
            <Grid item xs={12}>
              <InputFieldCommon
                placeholder="************"
                isHeading
                inputHead="New Password"
              />
            </Grid>
            <Grid item xs={12}>
              <InputFieldCommon
                placeholder="************"
                isHeading
                inputHead="Confirm Password"
              />
            </Grid>
          </Grid>
          <CustomButtonPrimary
            variant="contained"
            color="primary"
            className="modla_button"
            fullWidth
          >
            Save
          </CustomButtonPrimary>
        </ChangePassWord>
      </MuiModalWrapper>
    </MyProfileSecStyled>
  );
};

export default MyProfileSec;
