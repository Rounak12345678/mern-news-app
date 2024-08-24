/* eslint-disable no-console */

import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";
import { useAppSelector } from "hooks/redux/useAppSelector";
import { useAppDispatch } from "hooks/redux/useAppDispatch";
import { logout } from "redux-toolkit/slices/userSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CustomButtonPrimary from "ui/CustomButtons/CustomButtonPrimary";
import BellIcon from "ui/Icons/BellIcon";
import LoveIcon from "ui/Icons/LoveIcon";
import ProfileIcon from "ui/Icons/ProfileIcon";
import SearchIcon from "ui/Icons/SearchIcon";
import {
  CustomDrawer,
  HeaderWrap,
} from "styles/StyledComponents/HeaderWrapper";
import HeaderMenu from "components/HeaderMenu/HeaderMenu";
import assest from "json/assest";
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Button, Grid, Menu, MenuItem, Popover } from "@mui/material";
import NotificationMainPopup from "components/NotificationPopUp/NotificationPopUp";
import Profilemenu from "ui/Icons/Profilemenu";
import { Logout } from "@mui/icons-material";
import MuiModalWrapper from "components/CommonModal/CommonModal";
import { LinkModalWrap } from "styles/StyledComponents/ModalStyled";
import DropDownIcon from "ui/Icons/DropdownIcon";
import BigMenu from "components/BigMenu/BigMenu";
import { bigMenuLIst1, bigMenuLIst2, bigMenuLIst3 } from "json/mock/demo.mock";

// const CustomButton = dynamic(() => import("@/ui/Buttons/CustomButton"));

const drawerWidth = 280;

export default function Header() {
  const navItems = [
    {
      name: "Popular News",
      route: "/popular-news",
    },
    {
      name: "Latest news",
      route: "javascript:void(0)",
    },
    {
      name: "Categories",
      route: "javascript:void(0)",
      subMenu: [
        {
          title: "menu1",
        },
      ],
    },
    {
      name: "Contact us",
      route: "/contact",
    },
  ];
  const location = useLocation();
  // const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { userData, isLoggedIn } = useAppSelector((state) => state.userSlice);
  const dispatch = useAppDispatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
  };
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [anchorElTwo, setAnchorElTwo] = React.useState<null | HTMLElement>(
    null
  );
  const openTwo = Boolean(anchorElTwo);
  const handleClickTwo = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElTwo(event.currentTarget);
  };
  const handleCloseTwo = () => {
    setAnchorElTwo(null);
  };
  const [logOut, setLogOut] = React.useState(false);
  const handleModalLogout = () => {
    setLogOut(!logOut);
  };
  const handleLoginClose = () => {
    setLogOut(false);
  };

  const drawer = (
    <CustomDrawer>
      <Box
        sx={{ textAlign: "center" }}
        className="inner_wrap"
      >
        <i>
          <img src={assest.bigLogo} alt="" />
        </i>
        <Divider />
        <List>
          {navItems.map((item, index) => (
            <>
              {index === 2 ? (
                 <Accordion className="header_accordian">
                 <AccordionSummary
                   expandIcon={<DropDownIcon />}
                   aria-controls="panel1-content"
                   id="panel1-header"
                 >
                  Categories
                 </AccordionSummary>
                 <AccordionDetails>
                  <Grid container rowSpacing={1.5} className="lft_grd">
                    <Grid item xs={12} >
                    <List>
                    {bigMenuLIst1.map((data, index) => (
                      <ListItem key={index} disablePadding>
                        <Link to="#">{data}</Link>
                      </ListItem>
                    ))}
                  </List>
                    </Grid>
                    <Grid item xs={12}>
                    <List>
                    {bigMenuLIst2.map((data, index) => (
                      <ListItem key={index} disablePadding>
                        <Link to="#">{data}</Link>
                      </ListItem>
                    ))}
                  </List>
                    </Grid>
                    <Grid item xs={12}>
                    <List>
                    {bigMenuLIst3.map((data, index) => (
                      <ListItem key={index} disablePadding>
                        <Link to="#">{data}</Link>
                      </ListItem>
                    ))}
                  </List>
                    </Grid>
                  </Grid>
                  <Grid item md={7} xs={12}>
            <Box className="rgt_grid">
              <Grid container rowSpacing={2}>
                <Grid item xs={12} >
                  <figure>
                    <img
                      alt=""
                      src={assest.bIgmenuIMG}
                    />
                  </figure>
                </Grid>
                <Grid item  xs={12}>
                  <Box className="rgt_cont">
                    <Typography variant="h2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>
                  
                    <Typography variant="body1" className="longText">
                      Morbi id convallis nunc. Pellentesque vehicula velit ac
                      velit gravida, non consectetur leo varius. Phasellus et
                      libero congue, cursus justo at, faucibus dui.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
                 </AccordionDetails>
               </Accordion>
              ) : (
                <ListItem disablePadding>
                  <Link
                    to={item?.route}
                    className={location.pathname === item.route ? "active" : ""}
                  >
                    {item.name}
                  </Link>
                </ListItem>
              )}
            </>
          ))}
        </List>
        <TextField
          className="header_search"
          placeholder="Search"
          InputProps={{
            endAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
      </Box>
    </CustomDrawer>
  );

  // const container =
  //   window !== undefined ? () => window().document.body : undefined;

  //for adding class to header while scroll
  // const [scroll, setScroll] = React.useState(false);

  // const detectScroll = React.useCallback(() => {
  //   setScroll(window.scrollY > 100);
  // }, []);

  // React.useEffect(() => {
  //   window.addEventListener("scroll", detectScroll);
  //   return () => {
  //     window.removeEventListener("scroll", detectScroll);
  //   };
  // }, []);+

  return (
    <HeaderWrap sx={{ display: "flex" }} className="main_head">
      <AppBar
        component="nav"
        position="static"
        elevation={0}
        className="headerContainer"
      >
        <Container fixed>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { lg: "none" } }}
              className="drawer_butt"
            >
              <MenuIcon />
            </IconButton>
            <Link to="/" className="headerLogo">
              <img src={assest.siteImg} width={170} height={66} alt="Logo" />
            </Link>
            {isLoggedIn ? (
              <Box
                sx={{ display: { xs: "none", sm: "block" } }}
                className="navbar"
              >
                <CustomButtonPrimary
                  onClick={handleLogout}
                  type="button"
                  variant="contained"
                  color="primary"
                >
                  <span>Logout</span>
                </CustomButtonPrimary>

                <CustomButtonPrimary
                  type="button"
                  variant="contained"
                  color="primary"
                >
                  <span>email</span>
                </CustomButtonPrimary>
              </Box>
            ) : (
              <Box
                sx={{ display: { xs: "none", lg: "block" } }}
                className="navbar"
              >
                <List>
                  {navItems.map((item) => (
                    // eslint-disable-next-line react/jsx-no-useless-fragment
                    <>
                      {item.subMenu?.length ? (
                        <HeaderMenu buttonName={item.name} />
                      ) : (
                        <ListItem>
                          <Link
                            to={item.route}
                            key={item?.route}
                            className={
                              location.pathname === item.route ? "active" : ""
                            }
                          >
                            {item?.name}
                          </Link>
                        </ListItem>
                      )}
                    </>
                  ))}
                </List>
              </Box>
            )}
            <Box className="hdr_rgt">
              <TextField
                className="header_search"
                placeholder="Search here something..."
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  ),
                }}
              />
              <List>
                <ListItem>
                  <IconButton aria-describedby={id} onClick={handleClick}>
                    <BellIcon />
               
                  </IconButton>
                  <Popover
                      id={id}
                      open={open}
                      anchorEl={anchorEl}
                      onClose={handleClose} // This will close the Popover when clicking outside
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      className="notificationPopup_boxWrap"
                    >
                      <NotificationMainPopup />
                    </Popover>
                </ListItem>
                <ListItem>
                  <IconButton>
                    <LoveIcon />
                  </IconButton>
                </ListItem>
                <ListItem>
                  <IconButton
                    onClick={handleClickTwo}
                    size="small"
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <ProfileIcon />
                  </IconButton>
                  <Menu
                    anchorEl={anchorElTwo}
                    id="account-menu"
                    open={openTwo}
                    onClose={handleCloseTwo}
                    onClick={handleCloseTwo}
                    slotProps={{
                      paper: {
                        className: "profile_menu",
                      },
                    }}
                  >
                    <MenuItem disableRipple>
                      <Button className="menu_buttone" href="/profile">
                        <Profilemenu /> My Profile
                      </Button>
                    </MenuItem>
                    <MenuItem disableRipple>
                      <Button
                        className="menu_butttwo"
                        onClick={handleModalLogout}
                      >
                        <Logout /> Logout
                      </Button>
                    </MenuItem>
                  </Menu>
                </ListItem>
              </List>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
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
    </HeaderWrap>
  );
}
