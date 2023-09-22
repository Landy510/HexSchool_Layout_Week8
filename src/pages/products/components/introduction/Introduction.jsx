import PropTypes from 'prop-types';
import emergencyInBlackImg from '@/assets/images/emergencyInBlack.png' ;
import styles from './introduction.module.scss';

const introductionArr = [
  {
    title: '先進的3D投影技術',
    content: 'Diane 搭載了最新的 3D 投影技術，能夠將虛擬影像清晰地呈現在您的現實空間中，讓您感受身臨其境的體驗！'
  },
  {
    title: '人性化的互動設計',
    content: 'Diane 具有高度智能的語音辨識和回應功能，您可以像跟朋友聊天一樣，與 Diane 進行自然、流暢的對話。'
  },
  {
    title: '豐富的應用場景',
    content: '無論是家庭娛樂、教育培訓還是商業展示，Diane 都能夠輕鬆滿足您的需求，為您提供更多元的互動體驗。'
  },
  {
    title: '高度自主性',
    content: 'Diane 具有強大的自主學習能力，能夠不斷地學習並優化自己，為您創造更加便捷、貼心的生活方式。'
  },
  {
    title: '簡單易用的操作界面',
    content: 'Diane 擁有直觀的操作界面，讓您可以輕鬆地掌握並運用它的各種功能。'
  }
]

const IntroductionDisplayCard = ({info}) => {
  return (
    <li 
      className={[
        'col-span-12 tablet:col-span-6 desktop:col-span-4',
        styles['introduction-card']
      ].join(' ')}
    >
      <p className='font-bold mb-3 tablet:mb-5 desktop:mb-5 border-b-2 border-black border-solid tablet:border-b-0 desktop:border-b-0'>{info.title}</p>
      <p>
        {info.content}
      </p>
    </li>
  )
}

const Introduction = () => {
  return (
    <div className="desktop:container px-2-1/2 pt-[65px] pb-[80px] tablet:pt-[88px] tablet:pb-[7.5rem] desktop:pt-[88px] desktop:pb-[7.5rem]">
      <div className="fs-20 font-medium flex justify-between items-center mb-[30px] tablet:mb-[2.5rem] desktop:mb-[2.5rem]">
        <p className='flex'>
          <img 
            src={emergencyInBlackImg} 
            alt="" 
            className='w-[30px] h-[30px] mr-3'
          />
          學術領導/知識分享/智能問答  
        </p>
        <p className='hidden tablet:block desktop:block'>
          ALPHABOX+
        </p>
      </div>
      <p className='font-bold'>
        歡迎來到ALPHABOX+的全新世界！在這裡，我們很榮幸地向您介紹我們的最新力作 - 3D立體投影機器人 Felix！
      </p>
      <ul className='mt-6 tablet:mt-[7.5rem] desktop:mt-[7.5rem] grid grid-cols-12 gap-y-6 tablet:gap-x-3 tablet:gap-y-[104px] desktop:gap-x-3 desktop:gap-y-[104px]'>
        {
          introductionArr.map((info, index) => {
            return (
              <IntroductionDisplayCard  key={index} info={info}/>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Introduction;

IntroductionDisplayCard.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string
  })
}