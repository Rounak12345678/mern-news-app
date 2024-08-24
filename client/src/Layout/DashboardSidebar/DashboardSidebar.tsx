/* eslint-disable no-use-before-define */
/* eslint-disable react/no-array-index-key */

import styled from "@emotion/styled";
import { Box, BoxProps, Button, Grid, List, ListItem, Typography } from "@mui/material";
import MuiModalWrapper from "components/CommonModal/CommonModal";
import assest from "json/assest";

import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LinkModalWrap } from "styles/StyledComponents/ModalStyled";
import { primaryColors } from "Theme/_muiPalette";
import CustomButtonPrimary from "ui/CustomButtons/CustomButtonPrimary";
import BuildingIcon from "ui/Icons/BuildingIcon";
import DhasboarIcon from "ui/Icons/DhasboarIcon";
import LogOutIcon2 from "ui/Icons/LogOutIcon2";
import MyNewsIcon from "ui/Icons/MyNewsIcon";
import MyProfileIcon from "ui/Icons/MyProfileIcon";
import SubmitNewsIcon from "ui/Icons/SubmitNewsIcon";

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

interface sidebarProps extends BoxProps {}

const DashboardSidebar: React.FC<sidebarProps & BoxProps> = ({ ...props }) => {
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

  return (
    <DashboardSidebarWrapper
      logoutSecHeight={getLogoutSecheight}
      listHeight={getLogoSecHeight}
      {...props}
    >
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
    </DashboardSidebarWrapper>
  );
};

export default DashboardSidebar;

export const DashboardSidebarWrapper = styled(Box, {
  shouldForwardProp: (data) => data !== "listHeight",
})<{
  listHeight: number | undefined;
  logoutSecHeight: number | undefined;
}>`
  width: 253px;
  flex-basis: 253px;
  position: fixed;
  left: 20px;
  top: 20px;
  height: calc(100vh - 40px);
  overflow-y: auto;
  z-index: 5;
  background-color: ${primaryColors?.primary};
  border-radius: 10px;
  @media (max-width:1199px){
    display: none;
  }
  .logo_sec {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px 20px 45px;
    border-bottom: 1px solid ${primaryColors.color55B1D2};
    a {
      display: inline-block;
    }
  }
  .sidebar_menu {
    padding: 0 15px;
    margin-top: 25px;
    height: calc(
      100vh -
        (
          ${({ listHeight }) => `${listHeight}px`} + 100px +
            (${({ logoutSecHeight }) => `${logoutSecHeight}px`})
        )
    );
    overflow-y: auto;
    margin-bottom: ${({ logoutSecHeight }) => `${logoutSecHeight}px`};
    li {
      :not(:last-child){
        margin-bottom:10px;
      }
      a {
        font-family: "Noticia";
        font-weight: 400;
        font-size: 16px;
        text-transform: none;
        line-height: 1.5;
        color: ${primaryColors?.white};
        width: 100%;
        justify-content: flex-start;
        padding: 15px 20px;
        background: ${primaryColors?.primary};
        border-radius: 10px;
        padding-left:32px;

        .MuiButton-startIcon {
          margin-left: 0px;
          margin-right: 12px;
        }
        &:hover {
          background: ${primaryColors.white};
          color: ${primaryColors.primary};
          svg {
            filter: brightness(0) saturate(100%) invert(48%) sepia(20%) saturate(1655%) hue-rotate(150deg) brightness(102%) contrast(85%);
          }
        }
        &.active{
      background: ${primaryColors.white};
      color: ${primaryColors.primary};
      svg {
            filter: brightness(0) saturate(100%) invert(48%) sepia(20%) saturate(1655%) hue-rotate(150deg) brightness(102%) contrast(85%);
          }
    }
      }
  
    }
  }
  .logout_block {
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: ${primaryColors?.primary};
    width: 100%;
    padding: 20px 20px 40px 20px;
    z-index: 3;
    border-top: 1px solid ${primaryColors.color55B1D2};

    button {
      font-family: "Roboto";
      font-weight: 500;
      font-size: 14px;
      line-height: 1.5;
      color: ${primaryColors?.white};
      width: 100%;
      justify-content: flex-start;
      padding: 19.5px 20px;
      background: ${primaryColors?.primary};
      border-radius: 10px;
      svg {
        fill: ${primaryColors.primary};
      }
      .MuiButton-startIcon {
        margin-left: 0px;
        margin-right: 12px;
      }
      &:hover {
        background: ${primaryColors.white};
        color: ${primaryColors.primary};
        svg {
            path {
              stroke: ${primaryColors.primary};
            }
          }
      }
    }
  }
`;
