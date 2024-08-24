import { Box, Container } from '@mui/material'
import AdvertisementSec from 'components/AdvertisementSec/AdvertisementSec'
import Banner from 'components/Banner/Banner'
import NewsLetter from 'components/NewsLetter/NewsLetter'
import PopularNewsSec from 'components/PopularNewsSec/PopularNewsSec'
import assest from 'json/assest'
import Wrapper from 'Layout/Wrapper/Wrapper'
import React from 'react'
import { AboutWrap } from 'styles/StyledComponents/AboutWrap'

export default function PopularNews() {
  return (
    <Wrapper>             
        <Banner img={assest.newsBanner}/>
        <PopularNewsSec/>
        <AboutWrap>
        <Container fixed>
      <Box className="addsTwo_wrap">
        <AdvertisementSec img={assest.doctor}/>
        </Box>
        </Container>
        </AboutWrap>
        <PopularNewsSec isHeader  isGap/>
        <NewsLetter/>
    </Wrapper>
  )
}

/* Line 38 */



