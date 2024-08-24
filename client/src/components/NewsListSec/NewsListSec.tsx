import React from "react";
import { NewsListSecStyled } from "styles/StyledComponents/NewsListSecStyled";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import CommonTable from "components/CommonTable/CommonTable";

const NewsListSec = () => {
  return (
    <NewsListSecStyled className="cmn_body_white">
      <CommonTable/>
    </NewsListSecStyled>
  );
};

export default NewsListSec;
