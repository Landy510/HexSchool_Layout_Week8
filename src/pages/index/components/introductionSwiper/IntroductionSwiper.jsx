import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import carouselImg from '@/assets/images/carousel.png';
import carousel_1Img from '@/assets/images/carousel_1.jpg';
import line_end_arrow_defaultImg from '@/assets/images/line_end_arrow_default.png';
import line_start_arrow_hoverImg from '@/assets/images/line_start_arrow_hover.png';

const infoList = [
  {
    imgUrl: carouselImg,
    titleTxt: '立體投影技術',
    contentTxt: '透過高科技立體投影技術，讓您感受真實的科技世界。'
  },
  {
    imgUrl: carousel_1Img,
    titleTxt: '細膩聲音技術',
    contentTxt: '透過細膩的聲音技術，讓你彷彿與真人互動。'
  }
]

const IntroductionSwiper = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [justForTriggerRendering, setJustForTriggerRendering] = useState({})

  return (
    <>
      <div className="flex items-center px-5 pt-3 pb-6 desktop:px-15 tablet:py-6 desktop:py-6">
        <button
          className='swiper-button-prev max-w-[180px] w-full hidden tablet:inline-block desktop:inline-block'
          onClick={() => setJustForTriggerRendering({})}
        >
          {
            swiperRef && swiperRef.activeIndex === 0 ?
            <img 
              src={line_start_arrow_hoverImg} 
              alt=""
            />
            :
            <img 
              src={line_end_arrow_defaultImg} 
              alt=""
              className='rotate-180'
            />
          }
        </button>
        <Swiper
            className="relative grow !mx-0 tablet:!mx-[3.25rem] desktop:!mx-[3.25rem]"
            modules={[Navigation]}
            navigation= {{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            onSwiper={swiper => setSwiperRef(swiper)}
            onSlideChange={() => setJustForTriggerRendering({})}
          >
            {
              infoList.map((info, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div 
                      className='aspect-square h-[auto] tablet:aspect-auto tablet:h-[560px] desktop:aspect-auto desktop:h-[560px] bg-cover bg-center bg-no-repeat flex items-end tablet:items-center desktop:items-center justify-end'
                      style={{backgroundImage: `url(${info.imgUrl})`}}
                    >
                      <div className='text-right px-3 py-3 tablet:pr-8 desktop:pr-8'>
                        <p className='shrikhand text-start text-[4rem] desktop:text-[6rem] text-white tracking-normal'>{`0${index+1}`}</p>
                        <p className='text-white text-start text-[1.5rem] tracking-[1.5rem] desktop:text-[2rem] desktop:tracking-[2rem] -mr-[1.5rem] desktop:-mr-6 mb-3'>{info.titleTxt}</p>
                        <p className='text-white text-start text-[1rem] tracking-normal'>{info.contentTxt}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })
            }
        </Swiper>
        <button 
          className='swiper-button-next max-w-[180px] w-full hidden tablet:inline-block desktop:inline-block'
          onClick={() => setJustForTriggerRendering({})}
        >
          {
            (swiperRef && swiperRef.slides) && swiperRef.activeIndex === swiperRef.slides.length -1 ?
            <img 
              src={line_start_arrow_hoverImg} 
              alt=""
              className='rotate-180'
            />
            :
            <img 
              src={line_end_arrow_defaultImg} 
              alt=""
            />
          }
          
        </button>
      </div>
      
    </>
    
  )
}

export default IntroductionSwiper;