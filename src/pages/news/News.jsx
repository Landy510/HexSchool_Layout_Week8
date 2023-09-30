import styles from './news.module.scss';
import emergencyImg from '@/assets/images/emergency.png';

import newsImg from '@/assets/images/news.png';
import newsMobileImg from '@/assets/images/news_mobile.png';

import exhibitionImg from '@/assets/images/exhibition.png';
import exhibitionMobileImg from '@/assets/images/exhibition_mobile.png';

import interviewMobileImg from '@/assets/images/interview_mobile.png';
import interviewImg from '@/assets/images/interview.png';

import thanksMobileImg from '@/assets/images/thanks_mobile.png';
import thanksImg from '@/assets/images/thanks.png';

import updateMobileImg from '@/assets/images/update_mobile.png';
import updateImg from '@/assets/images/update.png';

const listInfo = [
  {
    imgUrl: newsImg,
    imgMobileUrl: newsMobileImg,
    date: '2023.06.30',
    titleTxt: '產品最新公告',
    contentTxt: '榮幸地宣布，ALPHABOX+ 已成功完成最新一代的升級！本次升級包括提升投影解析度、優化語音辨識技術，以及擴充情感識別功能。歡迎您了解本次升級帶來的更為卓越的性能！' 
  },
  {
    imgUrl: exhibitionImg,
    imgMobileUrl: exhibitionMobileImg,
    date: '2023.06.30',
    titleTxt: '參加科技展覽',
    contentTxt: '本公司將參與今年的台灣國際科技展覽，屆時將展示最新款的3D立體陪伴機器人。誠摯邀請您親臨現場，親自體驗這款創新的產品！屆時將展示最新款的3D立體陪伴機器人。誠摯邀請您親臨現場，親自體驗這款創新的產品！' 
  },
  {
    imgUrl: interviewImg,
    imgMobileUrl: interviewMobileImg,
    date: '2023.06.30',
    titleTxt: '用戶見面會',
    contentTxt: '為進一步滿足客戶需求，並優化產品性能，我們將舉行用戶見面會。屆時，我們將向您展示我們的研發成果，同時聆聽您的意見和建議，讓我們共同打造更完美的產品！同時聆聽您的意見和建議！' 
  },
  {
    imgUrl: thanksImg,
    imgMobileUrl: thanksMobileImg,
    date: '2023.06.01',
    titleTxt: '限時優惠活動',
    contentTxt: '為答謝廣大用戶的支持，本月將舉辦一場限時優惠活動。購買 ALPHABOX+ 的顧客，皆可享受九折優惠。機會難得，請勿錯過此良機！本月將舉辦一場限時優惠活動。購買 ALPHABOX+ 的顧客，皆可享受九折優惠。' 
  },
  {
    imgUrl: updateImg,
    imgMobileUrl: updateMobileImg,
    date: '2023.06.30',
    titleTxt: '新功能上線',
    contentTxt: '為使您的3D立體陪伴機器人更趨完善，我們不懈地研發創新功能。近期，我們新推出智慧家居控制功能，使您的機器人能更便利地協助您操作家中各類智能設備。近期，我們新推出智慧家居控制功能。' 
  }
]

const News= () => {
  return (
    <div className={
        [
          styles['container-bg'],
          'text-white px-2-1/2 pt-[3.75rem] pb-15 tablet:pt-[10rem] tablet:pb-[7.5rem] desktop:pt-[10rem] desktop:pb-[7.5rem]'
        ].join(' ')
      }
    >
      <h2 className='mb-[3.75rem] text-left tablet:text-center desktop:text-center font-black text-[2.5rem] tracking-[2.5rem] tablet:text-[3rem] desktop:text-[3rem] tablet:tracking-[3rem] desktop:tracking-[3rem]'>最新消息</h2>
      <ol>
        {
          listInfo.map((info, index) => {
            return <li 
              className={
                [
                  'flex flex-wrap tablet:flex-nowrap desktop:flex-nowrap justify-center',
                  index !== listInfo.length - 1 && 'mb-8 tablet:mb-[3.75rem] desktop:mb-[3.75rem]'
                ].join(' ')
              }
              key={index}
            >
            <div className='flex items-center tablet:mr-5 desktop:mr-5'>
              <span className='text-[6rem] tablet:text-[8rem] desktop:text-[8rem] saira-extra-condensed mr-3 tablet:mr-[81px] desktop:mr-[81px]'>{index + 1}</span>
              <picture>
                <source 
                  media="(min-width:768px)" 
                  srcSet={info.imgUrl} 
                />
                <img 
                  src={info.imgMobileUrl}
                  alt="" 
                  className='tablet:max-w-[16rem] tablet:max-h-[14.125rem] desktop:max-w-[16rem] desktop:max-h-[14.125rem]'
                />
              </picture>
            </div>
            <div className='py-5 tablet:py-8 desktop:py-8 px-3 border-b-[1px] border-t-[1px] border-white border-solid max-w-[39.75rem]'>
              <p className='flex mb-2'>
                <img 
                  src={emergencyImg} 
                  alt="" 
                  className='w-[1.5rem] h-[1.5rem] mr-3'
                />
                <time className='font-medium tracking-[1rem]'>{info.date}</time>
              </p>
              <p className='text-[1.25rem] tracking-[1.25rem] font-medium mb-2'>{info.titleTxt}</p>
              <p>{info.contentTxt}</p>
            </div>
            <a 
              href=""
              className='material-symbols-outlined text-[2.5rem] flex items-end mt-3 ml-auto tablet:ml-5 desktop:ml-5'
            >
              arrow_forward
            </a>
          </li>
          })
        }
      </ol>
    </div>
  )
}

export default News;