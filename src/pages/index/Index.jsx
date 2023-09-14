import styles from './index.module.scss';
import carouselImg from '@/assets/images/carousel.png';
import line_end_arrow_defaultImg from '@/assets/images/line_end_arrow_default.png';
import line_start_arrow_hoverImg from '@/assets/images/line_start_arrow_hover.png';
import carousel_mobileImg from '@/assets/images/carousel_mobile.png';

const Index = () => {
  return (
    <div>
      {/* --- desktop layout | START  --- */}
      <div className={`${styles['gradient-bg']} hidden tablet:block`}>
        <div className='px-5 pt-11'>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-3 flex">
              <p className='pb-2 mt-auto text-white border-[1px] border-solid border-t-0 border-l-0 border-r-0 border-white font-bold'>最新消息！新版本 v15.4 釋出，搶先體驗！</p>
            </div>
            <div className="col-span-6">
              <img 
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-ai/circle.png?raw=true" 
                alt="" 
                className='w-[196px] h-[196px] mx-auto'
              />
            </div>
            <div className="col-span-3 flex flex-col">
              <p className='pt-2 mb-11 text-white border-[1px] border-solid border-b-0 border-l-0 border-r-0 border-white font-bold'>ALPHABOX+ STUDIO</p>
              <p className='text-[#AD93CF] font-medium mt-auto'>Copyright © 2023 Hexschool.</p>
            </div>
          </div>
        </div>
        <div className="px-5 relative bottom-[-100px]">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-3 flex flex-col">
              <img 
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-ai/diane.png?raw=true" 
                alt="" 
                className='mt-auto'
              />
            </div>
            <div className="col-span-6">
              <h2 className='shrikhand fs-32 flex justify-between text-white'>
                {
                  'ALPHABOX+'.split('').map((letter, index) => {
                    return <span key={index}>{letter}</span>
                  })
                }
              </h2>
              <p className='text-center text-white font-bold tracking-[1.5rem] mb-5'>擁抱未來科技，專屬您的3D立體投影陪伴機器人</p>
              <div className="row">
                <div className="col-6">
                  <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-ai/felix.png?raw=true" alt="" />
                </div>
                <div className="col-6">
                  <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-ai/karina.png?raw=true" alt="" />
                </div>
              </div>
            </div>
            <div className="col-span-3 flex flex-col">
              {/* <p className='py-2 mt-auto mb-11 text-white border-[1px] border-solid border-b-0 border-l-0 border-r-0 border-white font-bold'>ALPHABOX+ STUDIO</p>
              <p className='text-[#AD93CF] font-medium mb-11'>Copyright © 2023 Hexschool.</p> */}
              <img 
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-ai/vito.png?raw=true" 
                  alt="" 
                  className='mt-auto'
                />
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles['img-bg']} fs-48 text-white font-bold tracking-[3rem] pb-[52px] pt-[144px] hidden tablet:block`}>
        <div className='px-5'>
          <div className='bg-gradient-to-r from-primary-500 to-primary-300 h-[40px]'></div>
          <p className='mb-[12px]'>什麼是</p>
          <p className='mb-3'>ALPHABOX+</p>
        </div>
        <div className="bg-white h-[1px]"></div>
        <div className='flex items-center justify-center py-6 px-5'>
          <div>
            <img 
              src={line_start_arrow_hoverImg} 
              alt="" 
              className='w-full max-w-[180px]'
            />
          </div>
          <div className='mx-[52px]'>
            <img 
              src={carouselImg} 
              alt="" 
              className='max-w-[1296px] w-full'
            />
          </div>
          <div>
            <img 
              src={line_end_arrow_defaultImg} 
              alt="" 
              className='w-full max-w-[180px]'
            />
          </div>
        </div>
        <div className='bg-gradient-to-r from-primary-500 to-primary-300 h-[40px] mx-5'></div>
      </div>
      {/* --- END  --- */}

      {/* --- mobile layout | START  --- */}
      <div className={`${styles['gradient-bg']} block tablet:hidden px-2-1/2`}>
        <p className='pt-2 mb-11 text-white border-[1px] border-solid border-b-0 border-l-0 border-r-0 border-white font-bold tracking-[calc(1rem*0.1)]'>ALPHABOX+ STUDIO</p>
        <img 
          src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-ai/circle.png?raw=true" 
          alt="" 
          className='w-[196px] h-[196px] mx-auto mb-6'
        />
        <h2 className='shrikhand fs-20 flex justify-between text-white'>
          {
            'ALPHABOX+'.split('').map((letter, index) => {
              return <span key={index}>{letter}</span>
            })
          }
        </h2>
        <p className='text-white font-bold tracking-[calc(1rem*0.3)] text-center mb-6'>擁抱未來科技，專屬您的3D立體投影陪伴機器人</p>
        <div className='mb-3 relative'>
            <p className='shrikhand text-white fs-32 text-center absolute left-1/2 top-4 -translate-x-1/2'>Diane</p>
            <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-ai/diane_square1.png?raw=true" alt="" />
          </div>
          <div className='mb-3 relative'>
          <p className='shrikhand text-white fs-32 text-center absolute left-1/2 top-4 -translate-x-1/2'>Felix</p>
            <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-ai/felix_square1.png?raw=true" alt="" />
          </div>
          <div className='mb-3 relative'>
            <p className='shrikhand text-white fs-32 text-center absolute left-1/2 top-4 -translate-x-1/2'>Karina</p>
            <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-ai/karina_square1.png?raw=true" alt="" />
          </div>
          <div className='relative'>
            <p className='shrikhand text-white fs-32 text-center absolute left-1/2 top-4 -translate-x-1/2'>Vito</p>
            <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-ai/vito_square1.png?raw=true" alt="" />
          </div>
      </div>

      <div className={`${styles['img-bg']} fs-24 text-white font-bold pb-[52px] pt-[140px] -mt-[80px] block tablet:hidden`}>
        <div className='px-2-1/2'>
          <div className='bg-gradient-to-r from-primary-500 to-primary-300 h-[40px]'></div>
          <p className='mb-[12px] tracking-[calc(1rem*1.5)]'>什麼是</p>
          <p className='mb-3 flex justify-between'>
            {
              'ALPHABOX+'.split('').map((letter, index) => {
                return <span key={index}>{letter}</span>
              })
            }
          </p>
        </div>
        <div className="bg-white h-[1px]"></div>
        <div className='flex items-center justify-center pt-3 pb-6 px-2-1/2'>
          <div className='relative'>
            <div className='text-white absolute bottom-[0] p-3'>
              <p className='shrikhand fs-64'>01</p>
              <p className='fs-24 mb-2'>立體投影技術</p>
              <p>透過高科技立體投影技術，讓您感受真實的科技世界。</p>
            </div>
            <img 
              src={carousel_mobileImg} 
              alt="" 
              className='w-full'
            />
          </div>
        </div>
        <div className='bg-gradient-to-r from-primary-500 to-primary-300 h-[40px] mx-2-1/2'></div>
      </div>
      {/* --- END  --- */}
    </div>
  )
}

export default Index;