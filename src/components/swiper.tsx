'use client'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Image from 'next/image'

const swiper = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <Image
          src={'/car-wash-from-home-new-website-2025-dekstop-hero-section.png'}
          alt={''}
          width={500}
          height={500}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={'/car-wash-from-home-new-website-2025-dekstop-hero-section.png'}
          alt={''}
          width={500}
          height={500}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={'/car-wash-from-home-new-website-2025-dekstop-hero-section.png'}
          alt={''}
          width={500}
          height={500}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={'/car-wash-from-home-new-website-2025-dekstop-hero-section.png'}
          alt={''}
          width={500}
          height={500}
        />
      </SwiperSlide>
    </Swiper>
  )
}

export default swiper
