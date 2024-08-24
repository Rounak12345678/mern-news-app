/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */


import {
  Box,
  BoxProps,

  Grid,
  List,
  ListItem,
  Typography,
  styled
} from "@mui/material";
import assest from "json/assest";
import { bigMenuLIst1, bigMenuLIst2, bigMenuLIst3 } from "json/mock/demo.mock";
import { Link } from "react-router-dom";
import { primaryColors } from "Theme/_muiPalette";
import Calender from "ui/Icons/Calender";
import Music from "ui/Icons/Music";



export const BigMenuWrap = styled(Box)`
  background: ${primaryColors.white};
  border: 1px solid ${primaryColors.colorF3F3F3};
  box-shadow: 0px 4px 10px rgba(45, 45, 45, 0.1);
  border-radius: 10px;
  .lft_grd {
    padding: 50px 53px 60px;
    border-right: 1px solid rgb(196, 196, 196, 0.2);
    ul {
      li {
        padding: 0;
        a {
          font-size: 15px;
          font-weight: 400;
          color: ${primaryColors.textPrimaryColor};
          text-decoration: none;
          :hover {
            color: ${primaryColors.primary};
          }
        }
        :not(:last-child) {
          margin-bottom: 18px;
        }
      }
    }
  }
  .rgt_grid {
    padding: 40px 40px 45px 30px;
    figure {
      width: 100%;
      height: 233px;
      line-height: 0;
      border-radius: 6px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .rgt_cont {
      .muisc_box {
        margin-top: 18px;
        display: flex;
        align-items: center;

        p {
          display: flex;
          align-items: center;
          padding-right: 13px;
          font-size: 14px;
          color: ${primaryColors.color565656};
          svg {
            margin-right: 5px;
          }
          :last-child {
            padding-left: 13px;
            border-left: 1px solid ${primaryColors.color565656};
          }
        }
      }
      .longText{
        margin-top: 15px;
        color: ${primaryColors.color565656};
        line-height: 1.6;
        padding-right: 30px;
      }
    }
  }
`;
const BigMenu:React.FC<BoxProps> = ({...props}) => {
  return (

      <BigMenuWrap {...props} >
        <Grid container>
          <Grid item xs={12} md={5}>
            <Box className="lft_grd">
              <Grid container>
                <Grid item md={5}>
                  <List>
                    {bigMenuLIst1.map((data, index) => (
                      <ListItem key={index}>
                        <Link to="#">{data}</Link>
                      </ListItem>
                    ))}
                  </List>
                </Grid>
                <Grid item md={5}>
                  <List>
                    {bigMenuLIst2.map((data, index) => (
                      <ListItem key={index}>
                        <Link to="#">{data}</Link>
                      </ListItem>
                    ))}
                  </List>
                </Grid>
                <Grid item md={2}>
                  <List>
                    {bigMenuLIst3.map((data, index) => (
                      <ListItem key={index}>
                        <Link to="#">{data}</Link>
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item md={7} xs={12}>
            <Box className="rgt_grid">
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <figure>
                    <img
                      width={292}
                      height={233}
                      alt=""
                      src={assest.bIgmenuIMG}
                    />
                  </figure>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Box className="rgt_cont">
                    <Typography variant="h2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>
                    <Box className="muisc_box">
                      <Typography variant="body1">
                        <Calender />
                        Dec 9, 24
                      </Typography>
                      <Typography variant="body1">
                        <Music />
                        Audio
                      </Typography>
                    </Box>
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
        </Grid>
      </BigMenuWrap>

  );
};

export default BigMenu;
