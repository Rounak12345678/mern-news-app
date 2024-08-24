import { Box, styled, Container, Typography, Grid, Stack } from '@mui/material'
import PopularNewsSec from 'components/PopularNewsSec/PopularNewsSec'
import SmallCard from 'components/SmallCard/SmallCard'
import { cardMock5 } from 'json/mock/demo.mock'
import Wrapper from 'Layout/Wrapper/Wrapper'
import React from 'react'
import CustomButtonPrimary from 'ui/CustomButtons/CustomButtonPrimary'

const SavedNewsWrap = styled(Box)`
padding: 100px 0;
@media (max-width: 1199px) {
      padding: 80px 0px;
    }
    @media (max-width: 899px) {
      padding: 60px 0px;
    }
    @media (max-width: 599px) {
      padding: 50px 0px;
    }
.profile_hdr{
    max-width: 620px;
    margin:0 auto 50px;
    text-align: center;
    h2{
        font-size: 30px;
    }
    + div{
        padding-top: 0;
    }
}
.btn_load{
  margin-top: 60px;
}
`

export default function SavedNews() {
  return (
    <Wrapper>
        <SavedNewsWrap>
            <Container maxWidth="lg">
            <Box className="profile_hdr">
              <Typography variant="h2">Saved News</Typography>
              <Typography variant="body1">
                Morbi id convallis nunc. Pellentesque vehicula velit ac velit
                gravida, non consectetur leo varius. Phasellus et libero congue,
                cursus justo at, faucibus dui.{" "}
              </Typography>
            </Box>

            <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
            <Box className="podcast_inr">
              {cardMock5.map((item) => (
                <SmallCard isBtn {...item} />
              ))}
            </Box>
          </Grid>


          <Grid item xs={12} md={6}>
            <Box className="podcast_inr">
              {cardMock5.map((item) => (
                <SmallCard isBtn {...item} />
              ))}
            </Box>
          </Grid>
        </Grid>
        <Stack direction="row" alignItems="center" justifyContent="center" className='btn_load'>
          <CustomButtonPrimary color='primary' variant='contained'>
          Load More
          </CustomButtonPrimary>
        </Stack>
            </Container>
      
        </SavedNewsWrap>
    </Wrapper>
  )
}
