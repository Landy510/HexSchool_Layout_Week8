import styles from './contactUs.module.scss';
import point_scanImg from '@/assets/images/point_scan.png';

const ContactUs = () => {
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
    </>
    
  )
}

export default ContactUs;