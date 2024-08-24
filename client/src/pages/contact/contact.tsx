import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Wrapper from "Layout/Wrapper/Wrapper";
import assest from "json/assest";
import React from "react";
import { Link } from "react-router-dom";
import { ConatctWrap } from "styles/StyledComponents/ConatctWrap";
import InputFieldCommon from "ui/CommonInput/CommonInput";
import CustomButtonPrimary from "ui/CustomButtons/CustomButtonPrimary";
import LocBIg from "ui/Icons/LocBIg";
import MailBig from "ui/Icons/MailBig";
import PhoneBig from "ui/Icons/PhoneBig";

const Contact = () => {
  return (
    <Wrapper>
      <ConatctWrap>
        <Container fixed>
          <Box className="inner_wrpa">
            <Box className="up_box">
              <Grid container spacing={{lg:2,md:3 }} rowSpacing={{sm:4,xs:4}}>
                <Grid item xs={12} md={4}>
                  <Stack direction="row" alignItems="center">
                    <i>
                      <PhoneBig />
                    </i>
                    <Box className="rgt_box">
                      <Typography variant="h3">Contact number</Typography>
                      <Link to="tel:(702) 555-0122">(702) 555-0122</Link>
                    </Box>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Stack direction="row" alignItems="center">
                    <i>
                      <MailBig />
                    </i>
                    <Box className="rgt_box">
                      <Typography variant="h3">Email</Typography>
                      <Link to="mailto:abcd1922@gmail.com">
                        abcd1922@gmail.com
                      </Link>
                    </Box>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Stack direction="row" alignItems="center">
                    <i>
                      <LocBIg />
                    </i>
                    <Box className="rgt_box">
                      <Typography variant="h3">Address</Typography>
                      <Typography variant="body1">
                        6A. Lorem ipsum dolor
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
            <Box className="lower_box">
              <Grid container spacing={5}>
                <Grid item xs={12} md={5}>
                  <figure>
                    <img src={assest.contactImg} alt="" />
                  </figure>
                </Grid>
                <Grid item xs={12} md={7}>
                  <Box className="form">
                    <Typography variant="h2">Get in touch</Typography>
                    <Typography variant="body1" className="long_txt">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur sollicitudin erat nec sagittis commodo. Morbi
                      suscipit.
                    </Typography>
                    <Box className="details_form">
                      <Grid container spacing={2.5}>
                        <Grid item xs={12} md={6}>
                          <InputFieldCommon
                            placeholder="Jhon"
                            isHeading
                            inputHead="First Name"
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <InputFieldCommon
                            placeholder="Doe"
                            isHeading
                            inputHead="Last Name"
                          />
                        </Grid>
                        <Grid item xs={12} md={12}>
                          <InputFieldCommon
                            placeholder="abcd1922@gmail.com"
                            isHeading
                            inputHead="Email Address"
                          />
                        </Grid>
                        <Grid item xs={12} md={12}>
                          <InputFieldCommon
                            placeholder="Type your feedback here......"
                            isHeading
                            inputHead="Feedback"
                            multiline
                            rows={4}
                          />
                        </Grid>
                      </Grid>
                      <CustomButtonPrimary color="primary" variant="contained" className="submit">
                      Submit
                      </CustomButtonPrimary>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ConatctWrap>
    </Wrapper>
  );
};

export default Contact;
