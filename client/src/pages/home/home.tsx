import AdvertisementSec from 'components/AdvertisementSec/AdvertisementSec'
import Banner from 'components/Banner/Banner'
import BigText from 'components/BigText/BigText'
import LatestSec from 'components/LatestSec/LatestSec'
import NewsLetter from 'components/NewsLetter/NewsLetter'
import PodcastSec from 'components/PodcastSec/PodcastSec'
import RecentNews from 'components/RecentNews/RecentNews'
import assest from 'json/assest'
import Wrapper from 'Layout/Wrapper/Wrapper'
import React from 'react'

export default function Home() {
  return (
    <Wrapper>
             <BigText />
             <Banner img={assest.bannerIMg}/>
             <RecentNews/>
             <AdvertisementSec img={assest.advertiseImage}/>
        <LatestSec/>
        <PodcastSec />
        <NewsLetter/>
    </Wrapper>
  )
}
