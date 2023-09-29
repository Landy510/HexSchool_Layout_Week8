import { useEffect } from 'react';
import styles from './contactUs.module.scss';
import point_scanImg from '@/assets/images/point_scan.png';
import diane_horizontalImg from '@/assets/images/diane_horizontal.png';
import felix_horizontalImg from '@/assets/images/felix_horizontal.png';
import karina_horizontalImg from '@/assets/images/karina_horizontal.png';
import vito_horizontalImg from '@/assets/images/vito_horizontal.png';
import diane_chooseImg from '@/assets/images/diane_choose.png';
import felix_chooseImg from '@/assets/images/felix_choose.png';
import karina_chooseImg from '@/assets/images/karina_choose.png';
import vito_chooseImg from '@/assets/images/vito_choose.png';
import AOS from 'aos';

const ContactUs = () => {

  useEffect(() => {
    AOS.init({
      offset: 120,
      once: true
    })
  }, [])

  return (
    <>
      <div
        className={[
          styles['container-bg'],
          'pt-[3.75rem] pb-15 tablet:py-[10rem] desktop:py-[10rem]'
        ].join(' ')}
      >
        <div className="desktop:container px-2-1/2 text-white">
          <h2 className='font-black text-[2.5rem] tracking-[2.5rem] mb-8 tablet:mb-3 desktop:mb-3 tablet:text-[3rem] tablet:tracking-[3rem] desktop:text-[4rem] desktop:tracking-[4rem]'>聯絡我們</h2>
          <div className='flex flex-wrap -mx-2-1/2'>
            <div className='hidden tablet:hidden desktop:block tablet:w-[calc(100%/12)] desktop:w-[calc(100%/12)] px-2-1/2'></div>
            <div className='w-full tablet:w-1/2 desktop:w-1/2 px-2-1/2'>
              <p className='mb-12'>
                您的意見與需求對我們至關重要！如果您對 ALPHABOX+ 有任何疑問、建議或需求，請隨時填寫以下表單，我們將在 24 小時內回覆您。您的寶貴意見將幫助我們不斷改進產品與服務，為您帶來更優質的體驗。
              </p>
              <p className='font-bold mb-12'>
                我們期待您的來信與來電，竭誠為您解答。讓我們攜手共創更美好的未來！
              </p>
              <form onSubmit={e => e.preventDefault()}>
                <input 
                  type="text" 
                  placeholder='姓名' 
                  className='w-full mb-3'
                />
                <input type="email" placeholder='EMAIL' className='w-full mb-3' />
                <input type="tel" placeholder='連絡電話' className='w-full mb-3' />
                <textarea 
                  cols="30" 
                  rows="10" 
                  placeholder='COMMENTS'
                  className='w-full mb-3'
                ></textarea>
                <button 
                  type='submit'
                  className='flex text-white justify-center items-center py-2-1/2 bg-primary-200 w-full rounded-[0.25rem]'
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
            <div className='hidden tablet:block desktop:block tablet:w-[calc(100%/12)] desktop:w-[calc(100%/12)] px-2-1/2'></div>
            <div className='pt-[3.75rem] tablet:pt-[0px] desktop:pt-[0px] w-full tablet:w-1/4 desktop:w-1/4 px-2-1/2'>
              <div className='mb-8'>
                <p className='text-white/[.5]'>客服時間</p>
                <p>
                  <time>週一至週五 09:00-18:00</time>
                </p>
              </div>
              <div className='mb-8'>
                <p className='text-white/[.5]'>聯絡地址</p>
                <p>高雄市新興區民生一路 56 號</p>
              </div>
              <div>
                <p className='text-white/[.5]'>客服時間</p>
                <a 
                  href="tel:+886-2-12345678"
                  className='block'
                >+886-2-12345678</a>
                <a 
                  href="mailto:customer@alphabox.com"
                  className='block'
                >mailto:customer@alphabox.com</a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div className='bg-black border-t-[0px] tablet:border-t-[1px] desktop:border-t-[1px] border-solid border-white tablet:pt-8 desktop:pt-8 pb-9 '>
        <div className='mx-2-1/2 block tablet:hidden desktop:hidden pb-8 border-t-[1px] border-solid border-white'></div>
        <div className='desktop:container flex px-2-1/2'>
          <ul className='flex flex-wrap text-white tablet:ml-auto'>
            <li className='w-full tablet:w-auto mb-3 tablet:mb-[0] desktop:mb-[0]'>
              <a 
                href=""
                className='block tablet:px-2-1/2 desktop:px-2-1/2 mr-[2.25rem]'
              >INSTAGRAM</a>
            </li>

            <li className='w-full tablet:w-auto mb-3 tablet:mb-[0] desktop:mb-[0]'>
              <a 
                href=""
                className='block tablet:px-2-1/2 desktop:px-2-1/2 mr-[2.25rem]'
              >FACEBOOK</a>
            </li>

            <li className='w-full tablet:w-auto mb-3 tablet:mb-[0] desktop:mb-[0]'>
              <a 
                href=""
                className='block tablet:px-2-1/2 desktop:px-2-1/2 mr-[2.25rem]'
              >TWITTER</a>
            </li>

            <li className='w-full tablet:w-auto'>
              <a 
                href=""
                className='block tablet:px-2-1/2 desktop:px-2-1/2'
              >LINKEDIN</a>
            </li>
          </ul>
        </div>
      </div>

      <div className='bg-white pt-[3.75rem] tablet:pt-[10rem] desktop:pt-[10rem] pb-[2.5rem] tablet:pb-[7.5rem] desktop:pn-[7.5rem]'>
        <div className="desktop:container px-2-1/2 mb-5 tablet:mb-15 desktop:mb-15">
          <h2 className='font-black text-[2.5rem] tracking-[2.5rem] tablet:text-[3rem] tablet:tracking-[3rem] desktop:text-[4rem] desktop:tracking-[4rem] mb-5'>選擇自己要的角色</h2>
          <p className='text-[1.5rem] tablet:text-[3rem] desktop:text-[3rem] font-black'>
            <span className='text-primary-200 mr-5'>20K+</span>
            使用者喜歡我們的服務
          </p>
        </div>

        <div className='overflow-y-hidden'>
        <div className='relative'>
          <picture>
            <source 
                media="(min-width:768px)" 
                srcSet={diane_horizontalImg} 
            />
            <img 
                src={diane_chooseImg} 
                className='tablet:max-w-[1388px] tablet:w-full desktop:max-w-[1388px] desktop:w-full '
                data-aos="fade-right"
            />
          </picture>
          <p className='desktop:container px-2-1/2 absolute shrikhand text-white text-[2.5rem] tablet:text-[3rem] desktop:text-[4rem] top-1/2 left-[0] right-[0] -translate-y-1/2'>
            Diane
          </p>
          
        </div>
        <div className='relative'>
          <picture>
            <source 
                media="(min-width:768px)" 
                srcSet={felix_horizontalImg} 
            />
            <img 
                src={felix_chooseImg} 
                className='tablet:max-w-[1388px] tablet:w-full desktop:max-w-[1388px] desktop:w-full ml-auto '
                data-aos="fade-left"
            />
          </picture>
          <p className='text-end desktop:container px-2-1/2 absolute shrikhand text-white text-[2.5rem] tablet:text-[3rem] desktop:text-[4rem] top-1/2 left-[0] right-[0] -translate-y-1/2'>
            Felix
          </p>
          
        </div>
        <div className='relative'>
          <picture>
            <source 
                media="(min-width:768px)" 
                srcSet={karina_horizontalImg} 
            />
            <img 
                src={karina_chooseImg} 
                className='tablet:max-w-[1388px] tablet:w-full desktop:max-w-[1388px] desktop:w-full '
                data-aos="fade-left"
            />
          </picture>
          <p className='desktop:container px-2-1/2 absolute shrikhand text-white text-[2.5rem] tablet:text-[3rem] desktop:text-[4rem] top-1/2 left-[0] right-[0] -translate-y-1/2'>
            Karina
          </p>
          
        </div>
        <div className='relative'>
          <picture>
            <source 
                media="(min-width:768px)" 
                srcSet={vito_horizontalImg} 
            />
            <img 
                src={vito_chooseImg} 
                className='tablet:max-w-[1388px] tablet:w-full desktop:max-w-[1388px] desktop:w-full ml-auto '
                data-aos="fade-right"
            />
          </picture>
          <p className='text-end desktop:container px-2-1/2 absolute shrikhand text-white text-[2.5rem] tablet:text-[3rem] desktop:text-[4rem] top-1/2 left-[0] right-[0] -translate-y-1/2'>
            Vito
          </p>
          
        </div>
        </div>
        
      </div>
    </>
  )
}

export default ContactUs;