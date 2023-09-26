import handImg from '@/assets/images/hand.png';
import screenImg from '@/assets/images/screen.png';
import boxImg from '@/assets/images/box.png';
import meetingImg from '@/assets/images/meeting.png';
import point_scanInBlackImg from '@/assets/images/point_scanInBlack.png';

const ProductIntroduction = () => {
  return (
    <>
      <div className="px-2-1/2 tablet:px-15 desktop:px-15 pt-3 tablet:pt-8 desktop:pt-8">
        <div className="flex flex-wrap -mx-2-1/2 tablet:-mx-4 tablet:-mx-4">
          <div className='w-full tablet:w-1/2 desktop:w-1/3 p-2-1/2 tablet:p-4 desktop:p-4'>
            <img 
              src={handImg} 
              alt="" 
              className=''
            />
          </div>
          <div className='w-full hidden tablet:block desktop:block tablet:w-1/2 desktop:w-1/3 p-2-1/2 tablet:p-4 desktop:p-4'>
            <img 
              src={screenImg} 
              alt="" 
              className=''
            />
          </div>
          <div className='w-full hidden tablet:block desktop:block tablet:w-1/2 desktop:w-1/3 p-2-1/2 tablet:p-4 desktop:p-4'>
            <img 
              src={boxImg} 
              alt="" 
              className=''
            />
          </div>
        </div>
        <h2 className='text-[1.5rem] tablet:text-[2.5rem] desktop:text-[6rem] tracking-[1.5rem] tablet:tracking-[2.5rem] desktop:tracking-[3rem] font-black text-center'>
          ALPHABOX+
        </h2>
        <div className='flex flex-wrap justify-between'>
          <p className='w-full tablet:w-[45%] desktop:w-[45%]'>
            我們提供多款3D立體投影陪伴機器人，涵蓋知識型、娛樂型、生活型和情感型等不同類別，以滿足您的各種需求。每款產品都經過精心設計，具備高度智能化、多功能和人性化操作等特點，讓您在日常生活中獲得更便利的陪伴體驗。
          </p>
          <p className='pt-3 w-full tablet:w-[45%] desktop:w-1/3'>
            此外，我們還提供完善的售後服務，包括
            <span className='px-2 bg-[length:100%_60%] bg-bottom bg-no-repeat bg-gradient-to-r from-neutral-200 to-neutral-200'>產品保固</span>、
            <span className='px-2 bg-[length:100%_60%] bg-bottom bg-no-repeat bg-gradient-to-r from-neutral-200 to-neutral-200'>技術支援</span>及
            <span className='px-2 bg-[length:100%_60%] bg-bottom bg-no-repeat bg-gradient-to-r from-neutral-200 to-neutral-200'>線上客服</span>
            協助，確保您在購買與使用過程中得到全面支持。
          </p>
        </div>
        
        <p className='bg-black h-[1px] mt-5 desktop:mt-15'></p>
        <p className='bg-black h-2-1/2 mt-2-1/2'></p>
        <div className="pt-[3.75rem] pb-[3.75rem] desktop:py-[10rem] desktop:container flex flex-wrap items-center justify-between">
          <img 
            src={meetingImg} 
            alt="" 
            className='max-w-[746px] w-full mb-3 desktop:mb-0 desktop:w-[60%] mx-auto'
          />
          <p className='font-medium desktop:pl-5 desktop:w-[40%]'>展望未來，我們將繼續投入研發，引領3D立體投影陪伴機器人技術的發展。通過結合虛擬現實、擴增現實和人工智能等領域的最新技術，我們將努力為用戶帶來更多前所未有的創新體驗。</p>
        </div>
      </div>
      <div className='bg-black py-5 px-2-1/2'>
        <div className="desktop:container flex flex-wrap justify-center items-center -mx-2-1/2">
          <div className='tablet:w-[50%] desktop:w-[66.666%] px-2-1/2 py-5'>
            <p className='text-white'>我們熱忱歡迎有志之士加入我們的團隊，共同創造更美好的未來。如果您對科技充滿熱情，並擁有相關領域的專業知識，請隨時查看我們的招聘信息或與我們聯繫，讓我們攜手共進。</p>
          </div>
          <div className='w-full tablet:w-[25%] desktop:w-[16.666%] px-2-1/2 py-5'>
            <a 
              href='#' 
              className='bg-white py-2 block rounded-[0.25rem] flex items-center justify-center font-medium'
            >
              <img 
                src={point_scanInBlackImg} 
                alt="" 
                className='w-5 h-5 mr-1'
              />
              查看職缺
            </a>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default ProductIntroduction;