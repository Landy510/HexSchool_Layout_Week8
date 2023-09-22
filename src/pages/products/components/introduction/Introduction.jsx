import emergencyInBlackImg from '@/assets/images/emergencyInBlack.png' ;
import styles from './introduction.module.scss';

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
        <li 
          className={[
            'col-span-12 tablet:col-span-6 desktop:col-span-4',
            styles['introduction-card']
          ].join(' ')}
        >
          <p className='font-bold mb-5 border-b-2 border-black border-solid tablet:border-b-0 desktop:border-b-0'>先進的3D投影技術</p>
          <p>
            Diane 搭載了最新的 3D 投影技術，能夠將虛擬影像清晰地呈現在您的現實空間中，讓您感受身臨其境的體驗！
          </p>
        </li>
        <li 
          className={[
            'col-span-12 tablet:col-span-6 desktop:col-span-4',
            styles['introduction-card']
          ].join(' ')}
        >
          <p className='font-bold mb-5 border-b-2 border-black border-solid tablet:border-b-0 desktop:border-b-0'>先進的3D投影技術</p>
          <p>
            Diane 搭載了最新的 3D 投影技術，能夠將虛擬影像清晰地呈現在您的現實空間中，讓您感受身臨其境的體驗！
          </p>
        </li>
        <li 
          className={[
            'col-span-12 tablet:col-span-6 desktop:col-span-4',
            styles['introduction-card']
          ].join(' ')}
        >
          <p className='font-bold mb-5 border-b-2 border-black border-solid tablet:border-b-0 desktop:border-b-0'>先進的3D投影技術</p>
          <p>
            Diane 搭載了最新的 3D 投影技術，能夠將虛擬影像清晰地呈現在您的現實空間中，讓您感受身臨其境的體驗！
          </p>
        </li>
        <li 
          className={[
            'col-span-12 tablet:col-span-6 desktop:col-span-4',
            styles['introduction-card']
          ].join(' ')}
        >
          <p className='font-bold mb-5 border-b-2 border-black border-solid tablet:border-b-0 desktop:border-b-0'>先進的3D投影技術</p>
          <p>
            Diane 搭載了最新的 3D 投影技術，能夠將虛擬影像清晰地呈現在您的現實空間中，讓您感受身臨其境的體驗！
          </p>
        </li>
      </ul>
    </div>
  )
}

export default Introduction;