import { Box, styled } from "@mui/material";

export const SubscriptionWrap = styled(Box)`
padding-bottom: 90px;
    @media (max-width: 1199px) {
        padding-bottom: 70px;
    }
    @media (max-width: 899px) {
        padding-bottom: 60px;
    }
     @media (max-width: 599px) {
        padding-bottom: 50px;
    }
.switch_base{
    margin-top: 30px;
    @media (max-width: 899px) {
        margin-top: 20px;
    }
}
.premium_card_holder{
    margin-top: 50px;
    @media (max-width: 1199px) {
        margin-top: 40px;
    }
    @media (max-width: 899px) {
        margin-top: 30px;
    }
}
`