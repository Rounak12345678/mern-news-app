import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Wrapper from "Layout/Wrapper/Wrapper";
import CommonBanner from "components/CommonBanner/CommonBanner";
import NewsLetter from "components/NewsLetter/NewsLetter";
import React from "react";
import { PaymentWrap } from "styles/StyledComponents/PaymentWrap";
import InputFieldCommon from "ui/CommonInput/CommonInput";
import CustomButtonPrimary from "ui/CustomButtons/CustomButtonPrimary";

const Payment = () => {
  return (
    <Wrapper>
      <CommonBanner
        title="Payment"
        subTitle="Morbi id convallis nunc. Pellentesque vehicula velit ac velit gravida, non consectetur leo varius. Phasellus et libero congue, cursus justo at, faucibus dui.  "
      />
      <PaymentWrap>
        <Container fixed >
        <Typography variant="h3">
        Card Information
        </Typography>
        <Box className="payWrap">
            <Grid container rowSpacing={2.5} columnSpacing={3.8}>
                <Grid item xs={12} md={6}>
                    <InputFieldCommon placeholder="Enter Card holder name" isHeading inputHead="Card holder name"/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputFieldCommon placeholder="Enter Card number" isHeading inputHead="Card Number"/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputFieldCommon placeholder="00/00" isHeading inputHead="Expiry Date"/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputFieldCommon placeholder="Enter CVV Number" isHeading inputHead="CVV number"/>
                </Grid>

            </Grid>
            <Stack className="btn_stack" direction="row" alignItems="center" justifyContent="center">
            <CustomButtonPrimary color="primary" variant="contained">
            Pay Now
              </CustomButtonPrimary>
              <CustomButtonPrimary color="inherit" variant="outlined">
              Cancel
              </CustomButtonPrimary>
            </Stack>
        </Box>
        </Container>
      </PaymentWrap>
      <NewsLetter/>
    </Wrapper>
  );
};

export default Payment;
