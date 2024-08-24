import { Box, Container, Grid, Typography, styled } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";
import { valueList } from "json/mock/ValueMock";
import React from "react";

export const ValuesWrap = styled(Box)`
padding: 90px 0;
@media (max-width: 1199px) {
  padding: 70px 0;
}
@media (max-width: 899px) {
  padding: 50px 0;
}
@media (max-width: 599px) {
  padding: 40px 0;
}
  h2 {
    font-size: 30px;
    margin-bottom: 20px;
    text-align: center;
  }
  p {
    max-width: 726px;
    margin: 0 auto;
    text-align: center;
  }
  .lower_cont {
    margin-top: 50px;
    @media (max-width: 899px) {
      margin-top: 30px;
    }
    .value_card {
      padding: 45px 25px 30px;
      background: ${primaryColors.white};
      box-shadow: 0px 5px 20px 1px rgba(92, 176, 206, 0.1);
      border-radius: 6px;

      i {
        margin-bottom: 20px;
        display: inline-block;
        line-height: 0;
        position: relative;
        z-index: 2;
        :before{
            content: "";
            position: absolute;
            left: -12px;
            top: -16px;
            width: 44px;
            height: 44px;
            background-color: ${primaryColors.colorEFF8FB};
            border-radius: 50%;
            z-index: -1;
        }
      }
      h3 {
        margin-bottom: 10px;
      }
      p {
        text-align: left;
      }
    }
  }
`;
const Values = () => {
  return (
    <ValuesWrap>
      <Container fixed>
        <Typography variant="h2">Our Values</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
          sodales orci. Etiam turpis ante, pellentesque in velit in, consequat
          ullamcorper augue. Ut non mattis ipsum. Cras tellus est.
        </Typography>
        <Box className="lower_cont">
          <Grid container spacing={3.5}>
            {valueList.map((data,index)=>(
                  <Grid item xs={12} md={4} key={index}>
                  <Box className="value_card">
                    <i>
                      {data.icon}
                    </i>
                    <Typography variant="h3">{data.text}</Typography>
                    <Typography variant="body1">
                      {data.subText}
                    </Typography>
                  </Box>
                </Grid>
            ))}
          
          </Grid>
        </Box>
      </Container>
    </ValuesWrap>
  );
};

export default Values;
