/* eslint-disable jsx-a11y/anchor-is-valid */

import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { primaryColors } from "Theme/_muiPalette";
import AudioIcon from "ui/Icons/AudioIcon";
import CalenderIcon from "ui/Icons/CalenderIcon";


const CmnCardWrapper = styled(Box)`
  figure {
    width: 100%;
   line-height: 1;
    position: relative;
    a{
      width: 100%;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 6px;
    }
  }
  .tag {
    background: rgba(45, 45, 45, 0.2);
    backdrop-filter: blur(4px);
    line-height: 1.8;
    border-radius: 4px;
    position: absolute;
    top: 12px;
    left: 12px;
    font-size: 12px;
    padding: 6px 22px;
    color: ${primaryColors.white};
    text-transform: uppercase;
  }
  p {
    color: ${primaryColors.textTeriaryColor};
    margin-top: 10px;
  }
  .card_top {
    margin: 20px 0;
    ul {
      display: flex;
      li {
        font-size: 14px;
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
  h3{
    a{
        color: ${primaryColors.mainFontColor};
        &:hover{
            color: ${primaryColors.primary};
        }
    }
  }
  
`;

interface props {
  image: string;
  tag: string;
}

export default function CmnCard({ image, tag }: props) {
  return (
    <CmnCardWrapper className="card_wrap">
      <figure>
        <Link to='/'>
        <img alt="" src={image} width={266} height={175} />
        <span className="tag">{tag}</span>
        </Link>
     
      </figure>
      <Box className="card_top">
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
      <Typography variant="h3">
        <Link to="#">Lorem ipsum dolor sit amet, consectetur</Link>
      </Typography>
      <Typography variant="body1">
        Duis imperdiet urna in tortor vehicula iaculis. Suspendisse{" "}
      </Typography>
    </CmnCardWrapper>
  );
}
