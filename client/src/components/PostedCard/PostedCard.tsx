import { Box, List, ListItem, Typography, styled } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";
import React from "react";
import { Link } from "react-router-dom";
import CalenderIcon from "ui/Icons/CalenderIcon";
import ProfileIconSamll from "ui/Icons/ProfileIconSamll";
export const PostedCardWrap = styled(Box)`
display: flex;
align-items: center;
padding-bottom: 20px;
border-bottom:1px solid rgb(196, 196, 196,0.2);
@media (max-width:629px){
      flex-wrap: wrap;
    }
figure{
    margin-right: 15px;
    width: 85px;
    height: 100%;
    border-radius: 6px;
    overflow: hidden;
    line-height: 0;
    @media (max-width:629px){
      width: 100%;
      height: 300px;
      margin-right: 0px;
    }
    a{
        display: inline-block;
        width: 100%;
        height: 100%;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
h3{
  @media (max-width:629px){
      margin-top: 15px;
    }
    a{
        text-decoration: none;
        color: ${primaryColors.mainFontColor};
   
    }
}
.card_rgt{
    width: calc(100% - 85px);
    @media (max-width:629px){
      width: 100%;
    }
    ul {
        margin-top: 5px;
      display: flex;
      @media (max-width: 599px) {
        flex-wrap: wrap;
      }
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
        .pen{
            color: ${primaryColors.colorDFB54A};
            font-family: "Merriweather";
            font-size: 14px;
        }
        .app{
            color: ${primaryColors.color16C098};
            font-family: "Merriweather";
            font-size: 14px;
        }
        .rej{
            color: ${primaryColors.colorD6614C};
            font-family: "Merriweather";
            font-size: 14px;
        }
      }
    }
}

`;
interface cardProp {
  image?: string;
  heading?: string;
  date?: string;
  status?: string;
  statusClassName?: string;
  profileText?: string;
}
const PostedCard = ({
  image,
  heading,
  date,
  status,
  statusClassName,
  profileText,
}: cardProp) => {
  return (
    <PostedCardWrap>
      <figure>
        <Link to="/">
          <img src={image} alt=""  />
        </Link>
      </figure>
      <Box className="card_rgt">
        <Typography variant="h3"><Link to="#">{heading}</Link></Typography>
        <List>
          <ListItem disablePadding>
            <CalenderIcon />
            {date}
          </ListItem>
          <ListItem disablePadding>
            <Typography variant="body1" className={statusClassName}>
              {status}
            </Typography>
          </ListItem>
          <ListItem disablePadding>
            <ProfileIconSamll />
            {profileText}
          </ListItem>
        </List>
      </Box>
    </PostedCardWrap>
  );
};

export default PostedCard;
