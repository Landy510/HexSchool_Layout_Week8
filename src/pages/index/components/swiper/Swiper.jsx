import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';

const DisplayCard = ({index}) => {
  return (
    <div className={[
      'p-[2.5rem] font-bold',
      `${index % 2 === 0 ? 'bg-primary-100 text-white' : 'bg-white text-black'}`
      ] .join(' ')}>
      <p className='mb-6 flex items-center'>
        Zona 
        <span className={`w-2 h-2 rounded-full ${index % 2 === 0 ? 'bg-white' : 'bg-black'} mx-2`}></span>
        Taipei
      </p>
      <p className='mb-[10rem]'>
        ALPHABOX+ 真的很夯！每次把它打開，感覺就像是身臨其境一樣。它陪我度過了很多寂寞的時光，讓我在家裡也能享受到優質的休閒時光。
      </p>
      <p>
        <span className={`w-3 h-3 rounded-full ${index % 2 === 0 ? 'bg-white' : 'bg-black'} inline-block mr-3`}></span>
        <span className={`w-3 h-3 rounded-full ${index % 2 === 0 ? 'bg-white' : 'bg-black'} inline-block mr-3`}></span>
        ALPHABOX+ Dianne
      </p>
    </div>
  )
}

const CustomizedSwiper = () => {

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={24}
        scrollbar={{
          hide: false,
          el: '.swiper-scrollbar',
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        
        {
          Array.from({length: 4}).map((val, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="max-w-[416px]">
                  <DisplayCard index={index} />
                </div>
              </SwiperSlide>
            )
          })
        }
        <div className='flex items-center mt-9'>
          <div className="swiper-scrollbar" />
          <p className='text-white font-bold ml-5'>SCROLL</p>
        </div>
        
      </Swiper>
    </>
  )
}

export default CustomizedSwiper

DisplayCard.propTypes = {
  index: PropTypes.number
}