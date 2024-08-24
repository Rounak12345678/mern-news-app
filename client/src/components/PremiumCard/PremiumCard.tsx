import { Box, List, ListItem, Typography, styled } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";
import React from "react";
import CustomButtonPrimary from "ui/CustomButtons/CustomButtonPrimary";
import BlueTickIcon from "ui/Icons/BlueTickIcon";
import { useNavigate } from 'react-router-dom';
import WhiteTickIcon from "ui/Icons/WhiteTickIcon";
export const PremiumCardWrap = styled(Box)`
  padding: 40px 25px 25px;
  border-radius: 10px;
  h3 {
    margin-bottom: 10px;
  }
  p {
    margin-bottom: 15px;
  }
  .price {
    font-size: 39px;
    margin-bottom: 30px;
  }
  button {
    margin-bottom: 30px;
  }
  ul {
    li {
      align-items: start;
      :not(:last-child){
        margin-bottom: 15px;
      }
      i {
        display: inline-block;
        line-height: 0;
        margin-right: 10px;
      }
      p {
        line-height: 1.6;
      }
    }
  }

  &.lowLigt {
    background-color: #f6fdff;
  }
  &.deepLight {
    background-color: ${primaryColors.primary};
    h3{
        color: ${primaryColors.white};
    }
    h2{
        color: ${primaryColors.white};
    }
    p{
        color: ${primaryColors.white};
    }
    button{
        background-color: ${primaryColors.white} !important;
        color: ${primaryColors.primary} !important;
        border: 1px solid ${primaryColors.white};
        :hover{
          background-color: transparent !important;
          border: 1px solid ${primaryColors.white};
          color: ${primaryColors.white} !important;
        }
    }
  }
`;

interface colorProp {
  classname?: boolean;
  isDeep?: boolean;
  heading?: string;
  price?: string;
}
const dataCardDetails = [
  {
    data: "Etiam eget lobortis metus. Sed nec facilisis eros, et mattis ante.",
  },
  {
    data: "Etiam eget lobortis metus. Sed nec facilisis eros, et mattis ante.",
  },
  {
    data: "Etiam eget lobortis metus. Sed nec facilisis eros, et mattis ante.",
  },
];
const PremiumCard = ({ classname, isDeep, heading, price }: colorProp) => {
  const navigate = useNavigate();
  return (
    <PremiumCardWrap className={classname ? "lowLigt" : "deepLight"}>
      <Typography variant="h3">{heading}</Typography>
      <Typography variant="body1">
        Donec bibendum vel ipsum a sodales. Nunc neque nulla, varius sit amet mi
        eu.
      </Typography>
      <Typography variant="h2" className="price">
        {price}
      </Typography>
      <CustomButtonPrimary variant="contained" color="primary" fullWidth onClick={() => navigate('/payment')}>
        Get Started
      </CustomButtonPrimary>
      <List>
        {dataCardDetails.map((data, index) => (
          <ListItem disablePadding key={index}>
            <i>{isDeep ? <WhiteTickIcon /> : <BlueTickIcon />}</i>

            <Typography variant="body1">{data.data}</Typography>
          </ListItem>
        ))}
      </List>
    </PremiumCardWrap>
  );
};

export default PremiumCard;
