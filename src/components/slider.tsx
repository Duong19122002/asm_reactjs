import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import './../index.css';
// import required modules
import { Navigation } from "swiper";
import styled from 'styled-components';

type Props = {}


const Slider = (props: Props) => {
   return (
      <SliderWrapper>
         <SliderMain
            navigation={true}
            modules={[Navigation]}
         >
            <SwiperSlide><SliderImg src="https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/air%20m22.png" alt="" /></SwiperSlide>
            <SwiperSlide><SliderImg src="https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/690x300.png" alt="" /></SwiperSlide>
            <SwiperSlide><SliderImg src="https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/note%2011.png" alt="" /></SwiperSlide>
         </SliderMain>
      </SliderWrapper>
   )
}


const SliderWrapper = styled.div`
   max-width : 690px;
`

const SliderMain = styled(Swiper)`
   border-radius: 10px;
`

const SliderImg = styled.img`
   object-fit: cover;
`

export default Slider