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

const PopularNewsWrap = styled(Box)`
padding-top: 90px;
@media (max-width:1199px) {
  padding-top: 60px;
}
@media (max-width:899px) {
  padding-top: 50px;
}
@media (max-width:599px) {
  padding-top: 40px;
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


.popular_btm{
padding-bottom: 75px;
border-top: 1px solid ${primaryColors.colorC4C4C4};
padding-top: 35px;
@media (max-width: 899px) {
  padding-bottom: 50px;
}
@media (max-width: 599px) {
  padding-bottom: 40px;
}
}
`;


interface props {
  isHeader?:boolean;
  isGap?:boolean;

}

export default function PopularNewsSec({isHeader,isGap}:props) {
  return (
    <PopularNewsWrap>
      <Container fixed>
        {!isHeader &&     <Box className='recnt_hdr'>
            <Typography variant="h2" >Popular News</Typography>
            <Button>
                <FilterIcon2/>
            </Button>
        </Box>}
        <Box className={!isGap ? ""  : 'popular_btm'}  >
        <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
            <Box className="podcast_inr">
              {cardMock5.map((item) => (
                <SmallCard {...item} />
              ))}
            </Box>
          </Grid>


          <Grid item xs={12} md={6}>
            <Box className="podcast_inr">
              {cardMock5.map((item) => (
                <SmallCard {...item} />
              ))}
            </Box>
          </Grid>
        </Grid>
        </Box>
    
  
      </Container>
    </PopularNewsWrap>
  );
}
