import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react'
import { Navigation,Pagination,Autoplay } from 'swiper/modules'
import img1 from "../assets/swipperImages/bday_slider_desktop.webp" 
import img2 from "../assets/swipperImages/bsn_slider_desktop.webp" 
import img3 from "../assets/swipperImages/cell_slider_desktop.webp" 
import img4 from "../assets/swipperImages/mut_slider_desktop.webp" 
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const StoreSwipper = () => {
    return (
        <Swiper 
        className='lg:w-[90%]'
        modules={[Navigation,Pagination,Autoplay]}
          slidesPerView={1}
          navigation
          pagination={{clickable:true}}
          autoplay={true}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className='lg:w-[90%]'><img className='lg:w-full' src={img1} alt='sw1'/></SwiperSlide>
          <SwiperSlide className='lg:w-[90%]'><img className='lg:w-full' src={img2} alt='sw2'/></SwiperSlide>
          <SwiperSlide className='lg:w-[90%]'><img className='lg:w-full' src={img3} alt='sw3'/></SwiperSlide>
          <SwiperSlide className='lg:w-[90%]'><img className='lg:w-full' src={img4} alt='sw4'/></SwiperSlide>
      
        </Swiper>
      );
}

export default StoreSwipper