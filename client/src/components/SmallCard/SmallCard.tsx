/* eslint-disable jsx-a11y/anchor-is-valid */

import { Button, List, ListItem, styled } from "@mui/material";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { primaryColors } from "Theme/_muiPalette";
import AudioIcon from "ui/Icons/AudioIcon";
import CalenderIcon from "ui/Icons/CalenderIcon";
import CrossIcon from "ui/Icons/CrossIcon";

const SmallCardWrapper = styled(Box)`
  display: flex;
  position: relative;
  border-bottom: 1px solid ${primaryColors.colorC4C4C4};
  :not(:last-child) {
    margin-bottom: 17px;
    padding-bottom: 17px;
  }
  @media (max-width: 599px) {
    flex-wrap: wrap;
  }
  &:last-child {
    border-bottom: 0;
  }
  figure {
    margin-right: 15px;
    min-width: 126px;
    height: 126px;
    @media (max-width: 599px) {
      width: 100%;
      margin-right: 0;
      height: 200px;
    }
    a {
      width: 100%;
      height: 100%;
      line-height: 0;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 6px;
    }
  }
  h3 {
    margin: 12px 0;
    a{
      text-decoration: none;
    }
  }
  .tag {
    background: ${primaryColors.colorEFF8FB};
    backdrop-filter: blur(4px);
    border-radius: 4px;
    display: inline-block;
    line-height: 1.5;
    font-size: 12px;
    padding: 6px 22px;
    color: ${primaryColors.mainFontColor};
    text-transform: uppercase;
    @media (max-width: 599px) {
      margin-top: 15px;
    }
  }
  .card_bottom {
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
    .reason {
      font-size: 14px;
      color: ${primaryColors.mainFontColor};
      span {
        display: inline-block;
        color: ${primaryColors.colorD6614C};
        font-size: inherit;
        font-family: "Merriweather";
        padding-right: 5px;
      }
    }
  }

  h3 {
    a {
      color: ${primaryColors.mainFontColor};
      font-family: inherit;
      &:hover {
        color: ${primaryColors.primary};
      }
    }
  }
  .close_btn {
    position: absolute;
    top: 0;
    right: 0;
    min-width: auto;
    padding: 0;
  }
  .approved_text {
    color: ${primaryColors.color16C098};
    font-size: 14px;
  }
`;

interface props {
  image: string;
  tag: string;
  text: string;
  noImage?: boolean;
  isBtn?: true;
  audio?: any;
  iconTextName?: string;
  isApproved?: boolean;
  isRejected?: boolean;
  reasonText?: string;
  isNoTag?:boolean;
  to?:any;
}

export default function SmallCard({
  image,
  tag,
  text,
  noImage,
  isBtn,
  audio,
  iconTextName,
  isApproved,
  isRejected,
  reasonText,
  isNoTag,
  to,
}: props) {
  return (
    <SmallCardWrapper>
      {isBtn && (
        <Button className="close_btn">
          <CrossIcon />
        </Button>
      )}

      {!noImage && (
        <figure>
          <Link to="/">
            <img src={image} alt="" width={126} height={126} />
          </Link>
        </figure>
      )}

      <Box className="card_rgt">
       {!isNoTag  && <span className="tag">{tag}</span>}
        <Typography variant="h3">
          <Link to={to}>{text}</Link>
        </Typography>
        <Box className="card_bottom">
          {isRejected ? (
            <Typography variant="body1" className="reason">
              <Typography variant="caption">Reason: </Typography>
               {reasonText}
            </Typography>
          ) : (
            <List disablePadding>
              <ListItem disablePadding>
                <CalenderIcon />
                Dec 9, 24
              </ListItem>
              <ListItem disablePadding>
                {audio || <AudioIcon />}
                {iconTextName || "Audio"}
              </ListItem>
              {isApproved && (
                <ListItem disablePadding>
                  <Typography variant="body1" className="approved_text">
                    Approved
                  </Typography>
                </ListItem>
              )}
            </List>
          )}
        </Box>
      </Box>
    </SmallCardWrapper>
  );
}
