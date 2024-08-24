import { Grid } from "@mui/material";
import CommonPagination from "components/CommonPagination/CommonPagination";
import SmallCard from "components/SmallCard/SmallCard";
import { activeNewsTabCardData } from "json/mock/demo.mock";
import React from "react";
import { ActiveNewsTabStyled } from "styles/StyledComponents/ActiveNewsTabStyled";
import ProfileIconSamll from "ui/Icons/ProfileIconSamll";

const ActiveNewsTab = () => {
  return (
    <ActiveNewsTabStyled>
      <Grid container spacing={2} className="activeNews">
        {activeNewsTabCardData.map((item, index) => (
          <Grid item xs={12} md={6} lg={6} key={index}>
            <SmallCard
              image={item.img}
              tag={item.chipTxt}
              text={item.text}
              audio={<ProfileIconSamll />}
              iconTextName={item.icontext}
              to="/reporter/dashboard/active-news-details"
            />
          </Grid>
        ))}
      </Grid>
      <CommonPagination />
    </ActiveNewsTabStyled>
  );
};

export default ActiveNewsTab;
