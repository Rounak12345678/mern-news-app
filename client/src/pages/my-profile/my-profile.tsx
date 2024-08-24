import { Box, styled, Container, Typography, Grid } from "@mui/material";

import Wrapper from "Layout/Wrapper/Wrapper";
import { parseCookies } from "nookies";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser } from "redux-toolkit/slices/userSlice";

import { primaryColors } from "Theme/_muiPalette";
import InputFieldCommon from "ui/CommonInput/CommonInput";


const MyProfileWrap = styled(Box)`
  padding: 100px 0;
  @media (max-width: 1199px) {
      padding: 80px 0px;
    }
    @media (max-width: 899px) {
      padding: 60px 0px;
    }
    @media (max-width: 599px) {
      padding: 50px 0px;
    }
  .profile_card {
    background: ${primaryColors.white};
    box-shadow: 0px 4px 20px rgba(37, 150, 190, 0.12);
    border-radius: 10px;
    max-width: 790px;
    margin: auto;
    padding: 75px 110px;
    @media (max-width: 1199px) {
      padding: 45px 50px;
    }
    @media (max-width: 599px) {
      padding: 35px 30px;
    }
  }
  .profile_img {
    width: 135px;
    height: 135px;
    margin-bottom: 50px;
    margin-left: auto;
    margin-right: auto;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 100%;
    }
  }
  .profile_hdr {
    max-width: 620px;
    margin: 0 auto 50px;
    text-align: center;
    h2 {
      font-size: 30px;
    }
  }
`;

export default function MyProfile() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const cookies = parseCookies();
  const userId:any = cookies?.userId

  const dispatch = useDispatch()

  
const singleUser = useSelector((s:any)=>s.userSlice.singleUser)
console.log(singleUser,'singleUser')

  useEffect(()=>{
    dispatch(getSingleUser(userId) as any)
  },[userId])

  return (
    <Wrapper>
      <MyProfileWrap>
        <Container fixed>
          <Box className="profile_outr">
            <Box className="profile_hdr">
              <Typography variant="h2">My Profile</Typography>
              <Typography variant="body1">
                Morbi id convallis nunc. Pellentesque vehicula velit ac velit
                gravida, non consectetur leo varius. Phasellus et libero congue,
                cursus justo at, faucibus dui.{" "}
              </Typography>
            </Box>

            <Box className="profile_card">
           
              <Grid container spacing={3}>
                <Grid item xs={12} >
                  <InputFieldCommon
                    placeholder="Jhon"
                    isHeading
                    inputHead="First Name"
                    value={singleUser?.name}
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <InputFieldCommon
                    placeholder="abcd1922@gmail.com"
                    isHeading
                    inputHead="Email Address"
                    value={singleUser?.email}
                  />
                </Grid>
          
            
                <Grid item xs={12}>
                  <InputFieldCommon
                    placeholder=""
                    isHeading
                    inputHead="Role"
                    value={singleUser?.role}
                  />
                </Grid>
        
              </Grid>
            </Box>
          </Box>
        </Container>
      </MyProfileWrap>

    </Wrapper>
  );
}
