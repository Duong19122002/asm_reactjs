import React from 'react'
import styled from 'styled-components'
import SideBar from './sidebar'
import Slider from './slider'

type Props = {}

const Banner = (props: Props) => {
   return (
      <BannerWrapper>
         <BannerContainer>
            <SideBar />
            <Slider />
         </BannerContainer>
      </BannerWrapper>
   )
}

const BannerWrapper = styled.div`
   margin-top: 19px;
`

const BannerContainer = styled.div`
   max-width : 1000px;
   margin : 0 auto;
   display : flex;
   gap :51px;
`

export default Banner