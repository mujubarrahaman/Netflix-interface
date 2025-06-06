import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "../index.css"



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import v1 from "../assetsContent/v1.jpg"
import v2 from "../assetsContent/v2.jpg"
import v3 from "../assetsContent/v3.jpg"
import v4 from "../assetsContent/v4.jpg"
import v5 from "../assetsContent/v5.jpg"
import v6 from "../assetsContent/v6.jpg"
import v7 from "../assetsContent/v7.jpg"
import v8 from "../assetsContent/v8.jpg"
import v9 from "../assetsContent/v9.jpg"




const Slider = () => {
  return (
    <Swiper
    spaceBetween={20}
    centeredSlides={false}
    slidesPerView={3}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    className="mySwiper"
    loop={true}
  >
    <SwiperSlide>
      <img src={v1} alt="" />
      <h3>Seassion 3 Trailer: Dark</h3>
    </SwiperSlide>

    <SwiperSlide>
      <img src={v2} alt="" />
      <h3>Franchise Trailer: Dark</h3>
    </SwiperSlide>

    <SwiperSlide>
      <img src={v3} alt="" />
      <h3>The epic Confrontation</h3>
    </SwiperSlide>

    <SwiperSlide>
      <img src={v4} alt="" />
      <h3>Seassion 2 (Trailer)</h3>
    </SwiperSlide>

    <SwiperSlide>
      <img src={v5} alt="" />
      <h3>Dark (Trailer)</h3>
    </SwiperSlide>

    <SwiperSlide>
      <img src={v6} alt="" />
      <h3>The Mysterious</h3>
    </SwiperSlide>

    <SwiperSlide>
      <img src={v7} alt="" />
      <h3>Seassion 2 Recap: Dark</h3>
    </SwiperSlide>

    <SwiperSlide>
      <img src={v8} alt="" />
      <h3>The Hero's Journey</h3>
    </SwiperSlide>

    
    <SwiperSlide>
      <img src={v9} alt="" />
      <h3>Seassion 3 Trailer: Dark</h3>
    </SwiperSlide>
   
  </Swiper>
  )
}

export default Slider