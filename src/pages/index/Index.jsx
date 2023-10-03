import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import carouselImg from '@/assets/images/carousel.png';
import line_end_arrow_defaultImg from '@/assets/images/line_end_arrow_default.png';
import line_start_arrow_hoverImg from '@/assets/images/line_start_arrow_hover.png';
import long_line_end_arrow_notchImg from '@/assets/images/long_line_end_arrow_notch.png';
import carousel_mobileImg from '@/assets/images/carousel_mobile.png';
import emergencyImg from '@/assets/images/emergency.png';
import seeMoreImg from '@/assets/images/see-more.png';
import point_scanImg from '@/assets/images/point_scan.png';
import ALPHABOXTextImg from '@/assets/images/ALPHABOX+.png';
import Swiper from './components/swiper/Swiper';

const AIInfo = [
  {
    name: 'Diane',
    type: '知識型',
    detail: '學術領導/知識分享/智能問答',
    bgImgUrl: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week8-ai/diane.png?raw=true'
  },
  {
    name: 'Felix',
    type: '娛樂型',
    detail: '音樂播放/語音互動/遊戲陪伴',
    bgImgUrl: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week8-ai/felix.png?raw=true'
  },
  {
    name: 'Karina',
    type: '生活型',
    detail: '健康提醒/日程安排/智能家居',
    bgImgUrl: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week8-ai/karina.png?raw=true'
  },
  {
    name: 'Vito',
    type: '情感型',
    detail: '情感識別/心情分析/心靈支持',
    bgImgUrl: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week8-ai/vito.png?raw=true'
  },
]

const DisplayAICard = ({index, name, type, detail, bgImgUrl}) => {
  return (
    <Link 
      className={[
        styles['displayAIcard'],
        'text-white text-center w-1/2 px-2-1/2 py-5',
        'tablet:w-1/4 tablet:px-[2.5rem] tablet:py-[3.5rem]'
      ].join(' ')}
      style={{
        backgroundImage: `url(${bgImgUrl})`
      }}
      to={`/products/${name}`}
    >
      <span className='fs-128 tablet:text-[25rem] saira-extra-condensed'>{index}</span>
      <p className='shrikhand fs-32 mb-15'>{name}</p>
      <div className='text-left'>
        <p className='font-bold'>{type}</p>
        <p className='flex flex-wrap tablet:flex-nowrap justify-between'>
          <span className='mr-2-1/2'>{detail}</span>
          <img 
            src={long_line_end_arrow_notchImg} 
            alt="" 
            className='object-contain w-full max-w-[155px] mt-2-1/2 tablet:mt-0'
          />
        </p>
      </div>
    </Link>
  )
}

const Index = () => {
  return (
    <div>
      {/* --- desktop layout | START  --- */}
      <div className={`${styles['gradient-bg']} hidden tablet:block`}>
        <div className='desktop:px-15 px-5 pt-11'>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-3 flex">
              <p className='pb-2 mt-auto text-white border-[1px] border-solid border-t-0 border-l-0 border-r-0 border-white font-bold'>最新消息！新版本 v15.4 釋出，搶先體驗！</p>
            </div>
            <div className="col-span-6">
              <img 
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-ai/circle.png?raw=true" 
                alt="" 
                className='w-[196px] h-[196px] mx-auto spin_animation'
              />
            </div>
            <div className="col-span-3 flex flex-col">
              <p className='pt-2 mb-11 text-white border-[1px] border-solid border-b-0 border-l-0 border-r-0 border-white font-bold'>ALPHABOX+ STUDIO</p>
              <p className='text-[#AD93CF] font-medium mt-auto'>Copyright © 2023 Hexschool.</p>
            </div>
          </div>
        </div>
        <div className="px-5 desktop:px-15 relative bottom-[-100px]">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-3 flex flex-col">
              <img 
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-ai/diane.png?raw=true" 
                alt="" 
                className='mt-auto hover:shadow-[#8F00FFCC]/[.8] hover:shadow-[0_0_1rem_0.5rem] hover:-translate-y-[1rem] duration-500'
              />
            </div>
            <div className="col-span-6 flex flex-col">
              <h2 className='shrikhand fs-32 flex justify-between text-white'>
                {
                  'ALPHABOX+'.split('').map((letter, index) => {
                    return <span key={index}>{letter}</span>
                  })
                }
              </h2>
              <p className='text-center text-white font-bold tracking-[1.5rem] mb-5'>擁抱未來科技，專屬您的3D立體投影陪伴機器人</p>
              <div className="grid grid-cols-12 gap-6 grow">
                <div className="col-span-6 flex">
                  <img 
                    src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-ai/felix.png?raw=true" 
                    alt="" 
                    className='mt-auto hover:shadow-[#8F00FFCC]/[.8] hover:shadow-[0_0_1rem_0.5rem] hover:-translate-y-[1rem] duration-500'
                  />
                </div>
                <div className="col-span-6 flex">
                  <img 
                    src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-ai/karina.png?raw=true" 
                    alt="" 
                    className='mt-auto hover:shadow-[#8F00FFCC]/[.8] hover:shadow-[0_0_1rem_0.5rem] hover:-translate-y-[1rem] duration-500'
                  />
                </div>
              </div>
            </div>
            <div className="col-span-3 flex flex-col">
              <img 
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-ai/vito.png?raw=true" 
                  alt="" 
                  className='mt-auto hover:shadow-[#8F00FFCC]/[.8] hover:shadow-[0_0_1rem_0.5rem] hover:-translate-y-[1rem] duration-500'
                />
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles['img-bg']} fs-48 text-white font-bold tracking-[3rem] pb-[52px] pt-[144px] hidden tablet:block`}>
        <div className='px-5 desktop:px-15'>
          <div className='bg-gradient-to-r from-primary-500 to-primary-300 h-[40px]'></div>
          <p className='mb-[12px]'>什麼是</p>
          <p className='mb-3'>ALPHABOX+</p>
        </div>
        <div className="bg-white h-[1px]"></div>
        <div className='flex items-center justify-center py-6 px-5 desktop:px-15'>
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
        <div className='bg-gradient-to-r from-primary-500 to-primary-300 h-[40px] mx-5 desktop:mx-15'></div>
      </div>
      {/* --- END  --- */}

      {/* --- mobile layout | START  --- */}
      <div className={`${styles['gradient-bg']} block tablet:hidden px-2-1/2 pt-[28px]`}>
        <p className='pt-2 mb-11 text-white border-[1px] border-solid border-b-0 border-l-0 border-r-0 border-white font-bold tracking-[calc(1rem*0.1)]'>ALPHABOX+ STUDIO</p>
        <img 
          src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-ai/circle.png?raw=true" 
          alt="" 
          className='w-[196px] h-[196px] mx-auto mb-6 spin_animation'
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

      <div className={`${styles['news-bg']} pt-[160px] pb-[40px] px-2-1/2`}>
        <div className='desktop:container desktop:px-2-1/2 text-white font-bold overflow-hidden'>
          <h2 className='tracking-[2.5rem] fs-40 text-center -mr-[40px] tablet:mr-[0] tablet:tracking-[3rem] tablet:fs-48 tablet:text-left mb-8'>最新消息</h2>
          <div className='grid grid-cols-12'>
            <div className="col-span-12 py-8 px-3 border-y border-solid border-white border-l-0 border-r-0">
              <p className='tracking-[1rem] flex items-center mb-2'>
                <img 
                  src={emergencyImg} 
                  alt=""
                  className='w-[24px] h-[24px] mr-2'
                />
                <time>2023.06.30</time>
              </p>
              <h3 className='fs-20 tracking-[1.25rem] mb-4'>產品升級公告</h3>
              <p className='flex items-center justify-between'>
                榮幸地宣布，ALPHABOX+ 已成功完成最新一代的升級！本次升級包括提升投影解析度、優化語音辨識技術，以及擴充情感識別功能。
                <img 
                  src={long_line_end_arrow_notchImg} 
                  alt="" 
                  className='w-[192px] h-[24px] object-contain hidden tablet:block'
                />
              </p>
              <p>歡迎您了解本次升級帶來的更為卓越的性能！</p>
              <img 
                src={long_line_end_arrow_notchImg} 
                alt="" 
                className='w-[192px] h-[24px] mt-2-1/2 object-contain block tablet:hidden'
              />
            </div>
            <div className="col-span-12 tablet:col-span-6 py-8 px-3 border-solid border-b border-white">
              <p className='tracking-[1rem] flex items-center mb-2'>
                <img 
                  src={emergencyImg} 
                  alt=""
                  className='w-[24px] h-[24px] mr-2'
                />
                <time>2023.06.30</time>
              </p>
              <h3 className='fs-20 tracking-[1.25rem] mb-4'>產品升級公告</h3>
              <p className='flex items-center justify-between mb-2-1/2'>
                為答謝廣大用戶的支持，本月將舉辦一場限時優惠活動。訂閱 ALPHABOX+ 的顧客，皆可享受九折優惠。機會難得，請勿錯過此良機 ！
              </p>
              <img 
                src={line_end_arrow_defaultImg} 
                alt="" 
                className='w-[90px] h-[24px] block object-contain'
              />
            </div>
            <div className="col-span-12 tablet:col-span-6 px-3 py-8 border-l-0 tablet:border-l border-white border-b border-solid">
              <p className='tracking-[1rem] flex items-center mb-2'>
                <img 
                  src={emergencyImg} 
                  alt=""
                  className='w-[24px] h-[24px] mr-2'
                />
                <time>2023.06.30</time>
              </p>
              <h3 className='fs-20 tracking-[1.25rem] mb-4'>產品升級公告</h3>
              <p className='flex items-center justify-between mb-2-1/2'>
                為答謝廣大用戶的支持，本月將舉辦一場限時優惠活動。訂閱 ALPHABOX+ 的顧客，皆可享受九折優惠。機會難得，請勿錯過此良機 ！
              </p>
              <img 
                src={line_end_arrow_defaultImg} 
                alt="" 
                className='w-[90px] h-[24px] block object-contain'
              />
            </div>
          </div>
          <a 
            href="#"
            className='flex justify-center mt-[76px] mb-[96px]'
          >
            <img 
              src={seeMoreImg} 
              alt=""
              className='w-[132px] h-[132px]'
            />
          </a>
          <p className='text-end hidden tablet:block'>為環保盡一份心力，我們的包裝盒和紙質說明書都使用環保材料</p>
        </div>
      </div>

      {/* 使用分享 區塊 */}
      <div className={`${styles['share-section-bg']} relative overflow-hidden text-white px-2-1/2 pt-[60px] pb-15 tablet:pt-[10rem] tablet:pb-[2.5rem]`}>
        <div className='desktop:container'>
          <div className='flex items-center font-bold mb-3'>
            <p className='text-[2.5rem] tracking-[2.5rem] tablet:fs-48 tablet:tracking-[3rem]'>使用分享</p>
            <span className='text-base hidden tablet:inline-block'>展示其他使用者對於產品的真實體驗與評價，讓您更加放心選擇。</span>  
          </div>
          <p className='font-bold mb-[2.5rem]'>01 — 04</p>
          <p className='block tablet:hidden mb-5'>展示其他使用者對於產品的真實體驗與評價，讓您更加放心選擇。</p>
          <img 
            src={emergencyImg} 
            alt="" 
            className='w-[60px] h-[60px] mb-5'
          />
          <div className='hidden tablet:block'>
            <Swiper />
          </div>
          <div className='block tablet:hidden'>
            {
              Array.from({length: 4}).map((val, index) => {
                return (
                  <div 
                    key={index}
                    className={[
                    'p-5 font-bold',
                    `${index % 2 === 0 ? 'bg-primary-100 text-white' : 'bg-white text-black'}`,
                    `${index < 3 ? 'mb-5': ''}`
                    ] .join(' ')}
                  >
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
              })
            }
          </div>
          <p className='mt-[136px] hidden tablet:block'>若您有任何疑問或建議，歡迎隨時與我們聯絡，我們將竭誠為您解答。</p>
        </div>
        <img 
          src={ALPHABOXTextImg} 
          alt="" 
          className='absolute bottom-[10px] left-[0px] right-[0px]'
        />
      </div>

      {/* 聯絡我們 區塊 */}
      <div className='bg-primary-400 text-white py-[3.75rem] tablet:py-[9rem]'>
        <div className="desktop:container px-2-1/2">
          <div className="grid grid-cols-12">
            <div className="col-span-12 mb-5 tablet:mb-0 tablet:col-span-5">
              <p className='text-[2.5rem] tracking-[2.5rem] tablet:fs-48 tablet:tracking-[3rem] font-bold mb-6'>聯絡我們</p>
              <div className='mb-[54px]'>
                <span className='inline-block mr-2 w-[12px] h-[12px] rounded-full bg-white'></span>
                <span className='inline-block w-[124px] h-[12px] rounded-full bg-white'></span>
              </div>
              <p className='mb-1'>讓科技成為您的最佳夥伴</p>
              <p>立即體驗神奇功能並享限時優惠！</p>
            </div>
            <div className="col-span-12 tablet:col-span-7">
              <img 
                src={emergencyImg} 
                alt="" 
                className='max-w-[80px] max-h-[80px] mb-5 p-[10px]'
              />
              <form className='flex flex-col'>
                <input 
                  type="text" 
                  className='mb-3'
                  placeholder='EMAIL'
                />
                <textarea 
                  cols="30" 
                  rows="10"
                  placeholder='COMMENTS'
                  className='max-h-[7.5rem]'
                ></textarea>
                <button 
                  className='bg-primary-200 w-full tablet:w-1/2 py-2 rounded-[0.25rem] ml-auto mt-3 flex items-center justify-center' 
                  type='submit'
                >
                  <img 
                    src={point_scanImg} 
                    alt="" 
                    className='w-[18px] h-[18px] mr-2'
                  />
                  送出
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* 展覽 AI 區塊 */}
      <div className='flex flex-wrap'>
        {
          AIInfo.map((info, index) => {
            return <DisplayAICard 
              key={index}
              index={index+1}
              name={info.name}
              type={info.type}
              detail={info.detail}
              bgImgUrl={info.bgImgUrl}
            />
          })
        }
      </div>
    </div>
  )
}

export default Index;

DisplayAICard.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string, 
  type: PropTypes.string,
  detail: PropTypes.string, 
  bgImgUrl: PropTypes.string 
}