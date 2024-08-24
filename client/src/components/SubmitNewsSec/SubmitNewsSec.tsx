import React from "react";
import { SubmitNewsSecStyled } from "styles/StyledComponents/SubmitNewsSecStyled";
import Typography from "@mui/material/Typography";
import { Box, Grid, MenuItem } from "@mui/material";
import InputFieldCommon from "ui/CommonInput/CommonInput";
import CustomSelect from "components/CustomSelect/CustomSelect";
import assest from "json/assest";
import CustomButtonPrimary from "ui/CustomButtons/CustomButtonPrimary";

interface submitNewsProps {
  headTxt : string;
}

const SubmitNewsSec = ({headTxt}:submitNewsProps) => {
  return (
    <SubmitNewsSecStyled className="cmn_body_white">
      <Typography variant="h1" className="headTxt">
        {headTxt}
      </Typography>
      <Box className="subNewsSec">
        <Grid container spacing={2.5}>
          <Grid item xs={12} md={6}>
            <InputFieldCommon
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              isHeading
              inputHead="News Heading"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomSelect initialValue="6A, Lorem ipsum dolor" label="Location">
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Selected">Selected</MenuItem>
            </CustomSelect>
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomSelect initialValue="Business" label="News Category">
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Selected">Selected</MenuItem>
            </CustomSelect>
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomSelect initialValue="Audio" label="News Mode">
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Selected">Selected</MenuItem>
            </CustomSelect>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <Typography variant="body1" className="input_head">
                News Details
              </Typography>
              <figure>
                <img src={assest.submitNewsImg} />
              </figure>
            </Box>
          </Grid>
        </Grid>
        <CustomButtonPrimary variant="contained" color="primary">
          Submit
        </CustomButtonPrimary>
      </Box>
    </SubmitNewsSecStyled>
  );
};

export default SubmitNewsSec;
