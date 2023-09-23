import styles from './introduction.module.scss';
import about_usImg from '@/assets/images/about_us.png';
import about_us_mobileImg from '@/assets/images/about_us_mobile.png';
import emergencyImg from '@/assets/images/emergency.png';

const Introduction = () => {
  return (
    <div className={[
      styles['container-bg'],
      'pt-[3.75rem] pb-15 tablet:py-[10rem] desktop:py-[10rem]'
    ].join(' ')}>
      <div className="desktop:container px-2-1/2 text-white">
        <h2 className='font-black mb-6 text-[2.5rem] tablet:text-[3rem] desktop:text-[3rem] tracking-[2.5rem] tablet:tracking-[3rem] desktop:tracking-[3rem]'>關於我們</h2>
        <div className="flex flex-wrap justify-between">
          <div className='w-full tablet:w-1/2 mb-6 tablet:mb-0 desktop:mb-0'>
            創立於2021年，我們的使命是將科技與人性化設計相結合，為您打造最佳的3D立體投影陪伴機器人。憑藉創新的技術、卓越的研發團隊以及對品質的追求，我們致力於為全球用戶提供最先進且易用的陪伴機器人。
          </div>
          <div className='w-full tablet:w-1/2 text-left tablet:text-right desktop:text-right'>
            <p className='mb-5 tablet:mb-[0] desktop:mb-[0]'>我們擁抱變革，追求技術創新，以提供更卓越的產品給全球用戶。</p>
            <p className='mb-5 tablet:mb-[0] desktop:mb-[0]'>我們始終以用戶需求為核心，致力於提供最滿意的產品與服務。</p>
            <p className='mb-5 tablet:mb-[0] desktop:mb-[0]'>我們堅持高品質標準，確保每一款產品都經過嚴格的測試與品質把控。</p>
            <p className='mb-5 tablet:mb-[0] desktop:mb-[0]'>我們重視團隊協作，鼓勵創意交流，共同為實現願景而努力。</p>
          </div>
        </div>
      </div>
      <picture>
          <source 
              media="(min-width:768px)" 
              srcSet={about_usImg} 
          />
          <img 
              src={about_us_mobileImg} 
              className='mb-3 tablet:mt-[2.25rem] desktop:mt-[2.25rem] tablet:mb-[3.75rem] desktop:mt-[3.75rem]'
          />
      </picture>
      <div className='text-white flex flex-wrap tablet:flex-nowrap desktop:flex-nowrap items-center max-w-[850px] mx-2-1/2 tablet:mx-auto desktop:mx-auto'>
        <div className='shrink-0 mx-auto mb-3 tablet:mb-[0] desktop:mb-[0]'>
          <img 
            src={emergencyImg} 
            alt="" 
            className='w-[3.75rem] h-[3.75rem] mx-auto tablet:mr-5 desktop:mr-5'
          />
        </div>
        <p>我們相信科技的力量能夠改變人類生活。通過不斷創新與優化，我們期待為您打造一款具有高度智能、豐富功能且呈現真實感的3D立體投影陪伴機器人，讓科技成為您生活中真誠的夥伴。 </p>
      </div>
    </div>
  )
}

export default Introduction;