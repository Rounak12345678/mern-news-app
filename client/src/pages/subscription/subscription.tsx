import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Wrapper from "Layout/Wrapper/Wrapper";
import CommonBanner from "components/CommonBanner/CommonBanner";
import NewsLetter from "components/NewsLetter/NewsLetter";
import PremiumCard from "components/PremiumCard/PremiumCard";
import SwichCommon from "components/SwichCommon/SwichCommon";
import { premiumCard } from "json/mock/demo.mock";
import React from "react";
import { SubscriptionWrap } from "styles/StyledComponents/SubscriptionWrap";

const Subscription = () => {
  return (
    <Wrapper>
      <CommonBanner
        title="Subscription"
        subTitle="Morbi id convallis nunc. Pellentesque vehicula velit ac velit gravida, non consectetur leo varius. Phasellus et libero congue, cursus justo at, faucibus dui.  "
      />
      <SubscriptionWrap>
        <Container fixed>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
            className="switch_base"
          >
            <Typography variant="h3">Monthly</Typography>
            <SwichCommon />
            <Typography variant="h3">Yearly</Typography>
          </Stack>
          <Box className="premium_card_holder">
            <Grid container spacing={2.5}>
                {premiumCard.map((data,index)=>(
                     <Grid item xs={12} md={4} key={index}>
                     <PremiumCard  heading={data.title} price={data.price} classname={data.classname} isDeep={data.isDeep}/>
                   </Grid>
                ))}
            </Grid>
          </Box>
        </Container>
      </SubscriptionWrap>
      <NewsLetter/>
    </Wrapper>
  );
};

export default Subscription;
