import { useEffect, useRef } from "react";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

const Button = ({direction = 'prev'}) => {
  const swiper = useSwiper()
  console.log()
  return (
    <button 
      type="button" 
      className={[
        `material-symbols-outlined absolute z-[1] text-white top-1/2 -translate-y-1/2 text-[60px] text-white`,
        direction === 'prev' ? 'left-[16px]' : 'right-[16px]',
        direction === 'prev' && swiper.activeIndex === 0 ? 'text-red' : '',
        direction === 'next' && swiper.activeIndex === swiper.slides.length - 1 ? 'text-black' : ''
      ].join(' ')}
      onClick={
        direction === 'prev' ? 
        () => {
          swiper.slidePrev()
        } : 
        () => {
          swiper.slideNext()
        }
      }
    >
      {direction === 'prev' ? 'arrow_circle_left' : 'arrow_circle_right'}
    </button>
  )
}

const ProductImageHaul = ({imgUrls = []}) => {
  return (
    <Swiper
      className="relative"
    >
      {
          imgUrls.map((imgUrl, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={imgUrl} alt="" />
              </SwiperSlide>
            )
          })
        }
      
      <Button direction="prev" />
      <Button direction="next"/>
    </Swiper>
  )
}

const ProductDetail = ({productInfo = {}}) => {
  return (
    <div className="flex">
      <div className="w-1/2">
        <ProductImageHaul imgUrls={[productInfo.imgUrl1, productInfo.imgUrl2]}/>
      </div>
      <div className="bg-black w-1/2"></div>
    </div>
  )
}

export default ProductDetail;