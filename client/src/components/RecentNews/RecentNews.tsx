import { Box, Button, Container, Grid, List, ListItem, styled, Typography } from "@mui/material";
import CmnCard from "components/CmnCard/CmnCard";
import SmallCard from "components/SmallCard/SmallCard";
import assest from "json/assest";
import { cardMock, cardMock2, cardMock3, cardMock3New, cardMock5 } from "json/mock/demo.mock";
import React from "react";
import { Link } from "react-router-dom";
import { primaryColors } from "Theme/_muiPalette";
import CustomButtonPrimary from "ui/CustomButtons/CustomButtonPrimary";
import AudioIcon from "ui/Icons/AudioIcon";
import CalenderIcon from "ui/Icons/CalenderIcon";
import FilterIcon2 from "ui/Icons/FilterIcon2";

const RecentNewsWrapper = styled(Box)`
padding-top: 90px;
@media (max-width:1199px) {
  padding-top: 60px;
}
@media (max-width:599px) {
  padding-top: 40px;
}
@media (max-width:479px) {
  padding-top: 30px;
}
  .podcast_in_new {

    figure{
        height: 330px;
        a{
            width: 100%;
            height: 100%;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 10px;
            }
        }
    }
    .tag {
      background: ${primaryColors.colorEFF8FB};
      backdrop-filter: blur(4px);
      border-radius: 4px;
    display: inline-block;
    margin: 15px 0;
      font-size: 12px;
      padding: 6px 22px;
      color: ${primaryColors.mainFontColor};
      text-transform: uppercase;
    }
    h3{
        font-size: 24px;
       
        a{
            color: ${primaryColors.mainFontColor};
            &:hover{
                color: ${primaryColors.primary};
            }
        }
    }
    p{
        font-size: 15px;
        color: ${primaryColors.textTeriaryColor};
        margin-bottom: 20px;
    }
  }
  .card_bottom {
    ul {
      display: flex;
      margin: 15px 0;
      li {
        font-size: 16px;
        width: auto;
        border-right: 1px solid #565656;
        margin-right: 16px;
        padding-right: 16px;
        &:last-child {
          border-right: 0;
          margin-right: 0;
          padding-right: 0;
        }
        svg {
          margin-right: 6px;
        }
      }
    }
  }
  .recnt_hdr{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${primaryColors.colorC4C4C4};
    margin-bottom: 25px;
    padding-bottom: 25px;
    button{
        min-width: auto;
        padding: 0;

    }
    h2{
        font-size: 24px;
        color: ${primaryColors.primary};
    }
  }
`;

export default function RecentNews() {
  return (
    <RecentNewsWrapper>
      <Container fixed>
        <Box className='recnt_hdr'>
            <Typography variant="h2" >Recent News</Typography>
            <Button>
                <FilterIcon2/>
            </Button>
        </Box>
        <Grid container spacing={{lg:4, sm:3, xs:2.8, }} rowSpacing={{md:7, sm:7,xs:5}}>
          <Grid item xs={12} lg={3.8} md={6}>
            <Box className="podcast_inr">
              {cardMock3New.map((item) => (
                <SmallCard {...item} noImage />
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} lg={4.4} md={6}>
            <Box className="podcast_in_new">
              <figure>
                <Link to="/">
                  <img src={assest.cardImage7} alt="" />
               
                </Link>
              </figure>
              <span className="tag">Technology</span>
              <Typography variant="h3">
                <Link to="/">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer
                </Link>
              </Typography>

              <Box className="card_bottom">
          <List disablePadding>
            <ListItem disablePadding>
              <CalenderIcon />
              Dec 9, 24
            </ListItem>
            <ListItem disablePadding>
              <AudioIcon />
              Audio
            </ListItem>
          </List>
        </Box>

              <Typography variant="body1">
                Duis imperdiet urna in tortor vehicula iaculis. Suspendisse
                vulputate odio nec tortor consequat
              </Typography>

              <CustomButtonPrimary color="primary" variant="contained">
                Read More
              </CustomButtonPrimary>
            </Box>
          </Grid>

          <Grid item xs={12} lg={3.8} md={12}>
            <Box className="podcast_inr">
              {cardMock5.map((item) => (
                <SmallCard {...item} />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </RecentNewsWrapper>
  );
}
