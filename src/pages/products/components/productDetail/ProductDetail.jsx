import PropTypes from 'prop-types';
import line_end_arrow_notchImg from '@/assets/images/line_end_arrow_notch.png';
import Group_1Img from '@/assets/images/Group_1.png';
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
    <div className="flex flex-wrap relative">
      <div className="w-full desktop:w-1/2">
        <ProductImageHaul imgUrls={[productInfo.imgUrl1, productInfo.imgUrl2]}/>
      </div>
      <div className={[
        'bg-black w-full flex flex-wrap items-center px-2-1/2 pt-3 pb-5',
        'desktop:w-1/2 desktop:pl-8'
      ].join(' ')}>
        <div className="text-white">
          <h2 className="text-[2.5rem] tablet:text-[4rem] font-bold mb-5 shrikhand">{productInfo.name}</h2>
          <p className="font-bold">知識型</p>
          <p className="mb-3">學術領導/知識分享/智能問答</p>
          <img 
            src={line_end_arrow_notchImg} 
            alt="" 
            className='max-w-[305px]'
          />
        </div>
        <div className='w-full block desktop:hidden mt-3'>
          <img 
            className='max-w-[109px] block mx-auto'
            src={Group_1Img} 
            alt="" 
          />
        </div>
      </div>
      <img 
        className='max-w-[196px] desktop:absolute z-[1] left-1/2 -translate-x-1/2 bottom-[60px] hidden desktop:block'
        src={Group_1Img} 
        alt="" 
      />
    </div>
  )
}

export default ProductDetail;

Button.propTypes = {
  direction: PropTypes.oneOf(['next', 'prev'])
}

ProductImageHaul.propTypes = {
  imgUrls: PropTypes.arrayOf(PropTypes.string)
}

ProductDetail.propTypes = {
  productInfo: PropTypes.shape({
    name: PropTypes.string,
    imgUrl1: PropTypes.string,
    imgUrl2: PropTypes.string
  })
}