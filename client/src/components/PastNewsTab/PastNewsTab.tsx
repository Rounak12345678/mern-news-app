import React from "react";
import { PastNewsTabStyled } from "styles/StyledComponents/PastNewsTabStyled";
import Grid from "@mui/material/Grid";
import { pastNewsTabCardData } from "json/mock/demo.mock";
import SmallCard from "components/SmallCard/SmallCard";
import CommonPagination from "components/CommonPagination/CommonPagination";
import ListIcon from "ui/Icons/ListIcon";

const PastNewsTab = () => {
  return (
    <PastNewsTabStyled>
      <Grid container spacing={2} className="pastNews">
        {pastNewsTabCardData.map((item, index) => (
          <Grid item xs={12} md={12} lg={6} key={index}>
            <SmallCard
              image={item.img}
              tag={item.chipTxt}
              text={item.text}
              audio={<ListIcon />}
              iconTextName={item.texticon}
              isApproved
              to="/reporter/dashboard/past-news-details"
            />
          </Grid>
        ))}
      </Grid>
      <CommonPagination />
    </PastNewsTabStyled>
  );
};

export default PastNewsTab;
