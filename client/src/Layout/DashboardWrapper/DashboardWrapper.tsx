/* eslint-disable no-use-before-define */
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

import Stack, { StackProps } from "@mui/material/Stack";

import React, { useCallback, useEffect, useRef, useState } from "react";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import DashboardSidebar from "../DashboardSidebar/DashboardSidebar";
import { primaryColors } from "Theme/_muiPalette";
import { DashboardWrapperStyled } from "styles/StyledComponents/DashboardWrapperStyled";
import { Button, Drawer, Grid, List, ListItem, Typography } from "@mui/material";
import { SmartButton } from "@mui/icons-material";
import DhasboarIcon from "ui/Icons/DhasboarIcon";
import BuildingIcon from "ui/Icons/BuildingIcon";
import SubmitNewsIcon from "ui/Icons/SubmitNewsIcon";
import MyProfileIcon from "ui/Icons/MyProfileIcon";
import { CustomDrawer } from "styles/StyledComponents/CustomDrawer";
import { Link, useLocation } from "react-router-dom";
import assest from "json/assest";
import LogOutIcon2 from "ui/Icons/LogOutIcon2";
import MuiModalWrapper from "components/CommonModal/CommonModal";
import { LinkModalWrap } from "styles/StyledComponents/ModalStyled";
import CustomButtonPrimary from "ui/CustomButtons/CustomButtonPrimary";

interface dashBoardProps extends StackProps {
  headerTitle: string;
  dashed?:string;
}
const commonpath = "/reporter";
const navItems = [
  {
    name: "Dashboard",
    route: `${commonpath}/dashboard`,
    icon: <DhasboarIcon />,
  },
  {
    name: "My News",
    route: `${commonpath}/dashboard/news`,
    icon: <BuildingIcon />,
  },
  {
    name: "Submit News",
    route: `${commonpath}/dashboard/submit-news`,
    icon: <SubmitNewsIcon />,
  },
  {
    name: "My Profile",
    route: `${commonpath}/dashboard/my-profile`,
    icon: <MyProfileIcon />,
  },
];


const DashboardWrapper: React.FC<dashBoardProps & StackProps> = ({
  headerTitle,
  dashed,
  ...props
}) => {
  const [getHeaderHeight, setGetHeaderHeight] = useState<number>(0);

  const headerHeightCallBack = useCallback((data: number) => {
    setGetHeaderHeight(data);
  }, []);
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const logoRef = useRef<HTMLDivElement>(null);
  const LogoutRef = useRef<HTMLDivElement>(null);

  const [getLogoSecHeight, setGetLogoSecHeight] = useState<number>(0);
  const [getLogoutSecheight, setGetLogoutSecheight] = useState<number>(0);

  useEffect(() => {
    if (logoRef.current && LogoutRef.current) {
      setGetLogoSecHeight(logoRef.current.clientHeight);
      setGetLogoutSecheight(LogoutRef.current.clientHeight);
    }
  }, [logoRef.current, logoRef.current]);
  const [logOut, setLogOut] = React.useState(false);
  const handleModalLogout = () => {
    setLogOut(!logOut);
  };
  const handleLoginClose = () => {
    setLogOut(false);
  };
  const location = useLocation();
  const DrawerList = (
    <CustomDrawer logoutSecHeight={getLogoutSecheight}
      listHeight={getLogoSecHeight}
     >
    <Box sx={{ width: 255 }} role="presentation" >
    <Box className="logo_sec" ref={logoRef}>
        <Link to={`${commonpath}/dashboard`}>
          <img src={assest?.dashBoardLogo} alt="logo" width={113} height={67} />
        </Link>
      </Box>
      <List disablePadding className="sidebar_menu">
        {navItems?.map((data, index) => (
          <ListItem disablePadding key={index}>
            <Button href={data?.route} startIcon={data?.icon} className={location.pathname === data.route ? "active" : ""}>
              {data?.name}
            </Button>
          </ListItem>
        ))}
      </List>
      <Box className="logout_block" ref={LogoutRef}>
        <Button  startIcon={<LogOutIcon2 />} onClick={handleModalLogout}>
          Logout
        </Button>
      </Box>
    </Box>
    <MuiModalWrapper open={logOut} onClose={handleLoginClose} isClose>
        <LinkModalWrap>
          <i>
            <img src={assest.logout} alt="" />
          </i>
          <Typography variant="h3">Are You Sure Want to Logout?</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur. Congue sed sed eget id
            blandit pretium penatibus quam.
          </Typography>
          <Grid container spacing={2} className="btnStack">
            <Grid item xs={12} md={6}>
              <CustomButtonPrimary
                color="primary"
                variant="contained"
                fullWidth
              >
                Yes
              </CustomButtonPrimary>
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomButtonPrimary color="inherit" variant="outlined" fullWidth>
                No
              </CustomButtonPrimary>
            </Grid>
          </Grid>
        </LinkModalWrap>
      </MuiModalWrapper>
    </CustomDrawer>
   
  );
  return (
    <DashboardWrapperStyled
      headerHeight={getHeaderHeight}
      direction="row"
      flexWrap="wrap"
      {...props}
    >
      <DashboardSidebar />
      <Box className="wrapper_rgt">
        <DashboardHeader
          headerTitle={headerTitle}
          headerHeightCallBack={headerHeightCallBack}
        />
         <Button onClick={toggleDrawer(true)} className="dwaer_butt">
         <DhasboarIcon />
        </Button>
        <Box className={dashed||"dashboard_body "}>{props?.children}</Box>
       
      </Box>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </DashboardWrapperStyled>
  );
};

export default DashboardWrapper;
