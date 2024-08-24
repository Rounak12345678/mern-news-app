/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */

/* eslint-disable no-use-before-define */

import styled from "@emotion/styled";

import {
  Avatar,
  Box,
  BoxProps,
  Button,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import assest from "json/assest";

import React, { useEffect, useRef, useState } from "react";
import { primaryColors } from "Theme/_muiPalette";

export const DashboardHeaderStyled = styled(Box)`
  position: fixed;
  right: 20px;
  top: 20px;
  width: calc(100% - 307px);
  padding: 0 0 30px 25px;
  @media (max-width:1199px){
    width: 100%;
    padding: 0 0 25px 40px;
  
  }
  .headTop {
    border-bottom: 1px solid ${primaryColors.colorC4C4C4};
    padding-bottom: 20px;
  }
  .header_title {
    h1 {
      font-weight: 600;
      font-size: 30px;
      color: ${primaryColors?.color060606};
      @media (max-width:599px){
        font-size: 22px;
      }
    }
  }
  .jhonDoe{
    font-weight: 400;
    margin-left: 10px;
  }
  .notification_icon {
    width: 47px;
    height: 42px;
    background: ${primaryColors?.primary_600};
    border-radius: 5px;
    min-width: auto;
    padding: 0;
    margin-right: 12px;
    .is_active {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      &::after {
        content: "";
        width: 8px;
        height: 8px;
        border-radius: 100%;
        background-color: ${primaryColors?.primary};
        position: absolute;
        right: 0;
        top: 1px;
        z-index: 1;
      }
    }
  }
  .avatar_block {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .avatar_btn {
    padding: 5px 12px;
    border-radius: 5px;
    border: 1px solid ${primaryColors?.primary};
    i {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      border-radius: 100%;
      overflow: hidden;
      border: 1px solid ${primaryColors?.primary};
      margin-right: 10px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    p {
      font-family: "Roboto";
      font-weight: 500;
      font-size: 15px;
      line-height: 1.5;
      text-transform: capitalize;
      color: ${primaryColors?.color060606};
    }
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 12px;
    }
  }
`;

interface headerProps extends BoxProps {
  headerHeightCallBack: (data: number) => void;
  headerTitle: string;
}
const DashboardHeader: React.FC<headerProps & BoxProps> = ({
  headerHeightCallBack,
  headerTitle,
  ...props
}) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const avatarBlockRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState<number | undefined>(0);
  const [avatarMenuWidth, setAvatarMenuWidth] = useState<number | undefined>(0);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (avatarBlockRef.current) {
      setAvatarMenuWidth(avatarBlockRef.current?.clientWidth);
      const adjustWidth = () => {
        setAvatarMenuWidth(avatarBlockRef.current?.clientWidth);
      };

      window.addEventListener("resize", adjustWidth);

      return () => {
        window.removeEventListener("resize", adjustWidth);
      };
    }
  }, [avatarBlockRef.current]);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current?.clientHeight);
      const adjustHeight = () => {
        setHeaderHeight(headerRef.current?.clientHeight);
      };

      window.addEventListener("resize", adjustHeight);

      return () => {
        window.removeEventListener("resize", adjustHeight);
      };
    }
  }, [headerRef.current]);

  useEffect(() => {
    if (headerHeight) {
      headerHeightCallBack(headerHeight);
    }
  }, [headerHeight]);

  return (
    <DashboardHeaderStyled ref={headerRef} {...props}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        className="headTop"
      >
        <Box className="header_title">
          
          <Typography variant="h1">{headerTitle}</Typography>
        </Box>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          className="header_options"
          ref={avatarBlockRef}
        >
          {/* <Button className="notification_icon" disableRipple>
            <Typography variant="caption" className="is_active">
             icon
            </Typography>
          </Button> */}
          <Avatar alt="Remy Sharp" src={assest.DashboardAvtarImg}/>
          <Typography className="jhonDoe">Jhon Doe</Typography>
          {/* <Box className="avatar_block">
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              className="avatar_btn"
              disableRipple
            >
              <Typography component="i" className="avatar_image">
                <img
                  src={assest?.logo_img}
                  alt="avatar image"
                  width={30}
                  height={30}
                />
              </Typography>
              <Typography>Howard</Typography>
              <Typography variant="caption">
                icon
              </Typography>
            </Button>
            <AvatarMenu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button"
              }}
              avatarMenuWidth={avatarMenuWidth}
            >
              <MenuItem onClick={handleClose}>become a consumer</MenuItem>
              <MenuItem onClick={handleClose}>My Profile </MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </AvatarMenu>
          </Box> */}
        </Stack>
      </Stack>
    </DashboardHeaderStyled>
  );
};

export default DashboardHeader;

export const AvatarMenu = styled(Menu, {
  shouldForwardProp: (data) => data !== "avatarMenuWidth",
})<{ avatarMenuWidth: number | undefined }>`
  .MuiPaper-root {
    width: ${({ avatarMenuWidth }) => `${avatarMenuWidth}px`};
    background: ${primaryColors?.white};
    box-shadow: 0px 3px 28px -6px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
    ul {
      padding: 17px 17px;
      li {
        font-family: "Roboto";
        font-weight: 400;
        font-size: 15px;
        line-height: 1.5;
        text-transform: capitalize !important;
        color: ${primaryColors?.primary};
        padding: 9px 0;
        &:first-child {
          padding-top: 0px;
        }
        &:last-child {
          padding-bottom: 0px;
        }
        &:hover {
          background-color: transparent;
          color: ${primaryColors?.primary};
        }
      }
    }
  }
`;
