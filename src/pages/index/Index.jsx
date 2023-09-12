import styles from './index.module.scss';
import carouselImg from '@/assets/images/carousel.png';

const Index = () => {
  return (
    <div>
      <div className={`${styles['gradient-bg']}`}>
        <div className="container-fluid 12312">
          <div className="row 123123">
            <div className="col-3">
              <p className='py-2 mt-auto mb-11 text-white border-[1px] border-solid border-t-0 border-l-0 border-r-0 border-white font-bold'>最新消息！新版本 v15.4 釋出，搶先體驗！</p>
              <img 
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-ai/diane.png?raw=true" 
                alt="" 
              />
            </div>
            <div className="col-6">
              <img 
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-ai/circle.png?raw=true" 
                alt="" 
                className='w-[196px] h-[196px] mx-auto mb-11'
              />
              <h2 className='shrikhand fs-32 flex justify-between text-white'>
                {
                  'ALPHABOX+'.split('').map((letter, index) => {
                    return <span key={index}>{letter}</span>
                  })
                }
              </h2>
              <p className='text-center text-white font-bold tracking-[1.5rem]'>擁抱未來科技，專屬您的3D立體投影陪伴機器人</p>
              <div className="row">
                <div className="col-6">
                  <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-ai/felix.png?raw=true" alt="" />
                </div>
                <div className="col-6">
                  <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-ai/karina.png?raw=true" alt="" />
                </div>
              </div>
            </div>
            <div className="col-3">
              <p className='py-2 mt-auto mb-11 text-white border-[1px] border-solid border-b-0 border-l-0 border-r-0 border-white font-bold'>ALPHABOX+ STUDIO</p>
              <p className='text-[#AD93CF] font-medium mb-11'>Copyright © 2023 Hexschool.</p>
              <img 
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-ai/vito.png?raw=true" 
                  alt="" 
                />
            </div>
          </div>
        </div>
        
      </div>
      <div className={`${styles['img-bg']} fs-48 text-white font-bold tracking-[3rem]`}>
        <p className='mb-[12px]'>什麼是</p>
        <p className='mb-3'>ALPHABOX+</p>
        <div className="bg-white h-[1px]"></div>
        <div>
          <img 
            src={carouselImg} 
            alt="" 
            className='max-w-[1296px]'
          />
        </div>
      </div>
    </div>
  )
}

export default Index;