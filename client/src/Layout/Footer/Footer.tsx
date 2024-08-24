
import styled from "@emotion/styled";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import assest from "json/assest";
import { Link, useLocation } from "react-router-dom";
import { primaryColors } from "Theme/_muiPalette";
import FbIcon from "ui/Icons/FbIcon";
import InstsIcon from "ui/Icons/InstsIcon";


const FooterWrap = styled(Box)`
  background-color: ${primaryColors.secondary};
  padding: 45px 0 0;
  .ftr-list {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    @media (max-width: 1199px) {
      justify-content: center;
      margin: 8px 0;
      flex-wrap: wrap;
    }
    @media (max-width: 899px) {
    flex-direction: column;
      }
    li {
      width: auto;
      padding-right: 50px;
      padding-left: 50px;
      border-right: 1px solid ${primaryColors.white};

      @media (max-width: 1199px) {
        padding-right: 30px;
      padding-left: 30px;
      }
      @media (max-width: 899px) {
     border-right: 0;
     padding: 0;
     margin-bottom: 15px;
      }
      &:last-child {
        margin-right: 0;
        border-right: 0;

   
      }
      a {
        line-height: 1;
        font-weight: 400;
        font-size: 16px;
        color: ${primaryColors.white};
        text-transform: capitalize;
        &:hover {
          color: ${primaryColors.primary};
        }
        &.active{
          color: ${primaryColors.primary};
        }
      }
    }
  }
  .ftr-logo {
    line-height: 0;
    @media (max-width: 1199px) {
      max-width: 110px;
      margin: 0 auto;
    }
  }

  .copy {
    margin-left: auto;

    font-size: 14px;
    color: var(--color3A4950);

    a {
      color: var(--color3A4950);
      &:hover {
        color: var(--black);
      }
    }
  }
  .ftr-wrapper {
    text-align: center;
  }
  .ftr_para {
    max-width: 720px;
    margin: 20px auto 40px;
    color: ${primaryColors.white};
    @media (max-width: 899px) {
      margin: 25px 0;
    }
  }
  .social_list {
    display: flex;
    align-items: center;
    @media (max-width: 899px) {
      justify-content: center;
      margin-top: 15px;
    }
    li {
      width: auto;
      margin-left: 8px;
      a {
        svg {
          transition: all 0.5s;
          &:hover {
            transform: rotate(360deg);
          }
        }
      }
    }
  }
  .copy {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
    border-top: 1px solid ${primaryColors.white};
    margin-top: 40px;
    @media (max-width: 899px) {
      display: block;
      margin-top: 25px;
    }
    p {
      font-size: 16px;
      color: ${primaryColors.white};
      @media (max-width: 899px) {
        font-size: 14px;
    }
      a {
        color: ${primaryColors.white};
        &:hover {
          color: ${primaryColors.primary};
        }
      }
    }
  }
`;

const Footer = () => {
  const navItems = [
    {
      name: "About Us",
      route: "/about"
    },
    {
      name: "Popular News",
      route: "/popular-news"
    },
    {
      name: "Latest News",
      route: "/"
    },
    {
      name: "Subscription",
      route: "/subscription"
    },
    {
      name: "Contact Us",
      route: "/contact"
    }
  ];
  const location = useLocation();
  return (
    <FooterWrap>
      <Container fixed>
        <Box className="ftr-wrapper">
          <Link to="/" className="ftr-logo">
            <img src={assest.ftr_logo} alt="" width={135} height={73} />
          </Link>
          <Typography variant="body1" className="ftr_para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            efficitur tellus eget erat mollis, et dictum purus maximus. Donec
            commodo arcu quis tempor luctus.
          </Typography>

          <List className="ftr-list">
            {navItems.map((item: any) => (
              <ListItem disablePadding>
                <Link
                  to={item.route}
                  key={item.name}
                  className={location.pathname === item.route ? "active" : ""}
                >
                  {item?.name}
                </Link>
              </ListItem>
            ))}
          </List>

          <Box className="copy">
            <Typography variant="body1">
              Copyright 2024 ©{" "}
              <Link to="/">WNO world news organisation.</Link> All rights
              reserved.
            </Typography>
            <List disablePadding className="social_list">
              <ListItem disablePadding>
                <Link to="/">
                  <FbIcon />
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link to="/">
                  <InstsIcon />
                </Link>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Container>
    </FooterWrap>
  );
};

export default Footer;
