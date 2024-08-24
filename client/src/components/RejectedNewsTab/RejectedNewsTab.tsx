import { Grid } from "@mui/material";
import CommonPagination from "components/CommonPagination/CommonPagination";
import SmallCard from "components/SmallCard/SmallCard";
import { rejectedTabCardData } from "json/mock/demo.mock";
import React from "react";
import { RejectedNewsTabStyled } from "styles/StyledComponents/RejectedNewsTabStyled";

const RejectedNewsTab = () => {
  return (
    <RejectedNewsTabStyled>
      <Grid container spacing={2} className="rejectedNews">
        {rejectedTabCardData.map((item, index) => (
          <Grid item xs={12} md={6} lg={6} >
            <SmallCard
              image={item.img}
              tag={item.chipTxt}
              text={item.text}
              isRejected
              reasonText={item.rejectedText}
              to="/reporter/dashboard/rejected-news-details"
            />
          </Grid>
        ))}
      </Grid>
      <CommonPagination />
    </RejectedNewsTabStyled>
  );
};

export default RejectedNewsTab;
