import React from 'react'
import heroImg1 from '../images/kokchi1.jpg'
import heroImg2 from '../images/kokchi2.jpg'
import heroImg3 from '../images/kokchi3.jpg'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Carousel = (props) => {
    return (
        <div className='swiper-container'>
            <Swiper
                slidesPerView={'auto'}
                centeredSlides
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <img src={heroImg1} alt='Hero' className='hero-img' loading='eager' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={heroImg2} alt='Hero' className='hero-img' loading='eager' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={heroImg3} alt='Hero' className='hero-img' loading='eager' />
                </SwiperSlide>
    </Swiper>
        </div>
    )
}

Carousel.propTypes = {}

export default Carousel
