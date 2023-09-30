import { useParams, Link } from 'react-router-dom';
import styles from './newsDetail.module.scss';

import emergencyImg from '@/assets/images/emergency.png';
import line_start_arrow_notchImg from '@/assets/images/line_start_arrow_notch.png';
import line_end_arrow_disableImg from '@/assets/images/line_end_arrow_disable.png';
import { listInfo } from '../../utils/data';

const NewsDetail = () => {
  const id = +useParams().id;
  const info = listInfo.find(item => item.id === id);
  
  if(!info) return null;

  return (
    <div className={
      [
        styles['container-bg'],
        'text-white px-2-1/2 pt-[3.75rem] tablet:pt-[10rem] desktop:pt-[10rem] pb-15 tablet:pb-[7.5rem] desktop:pb-[7.5rem]'
      ].join(' ')
    }>
      <div className='desktop:container px-2-1/2'>
        <h2 className='mb-[3.75rem] text-left tablet:text-center desktop:text-center font-black text-[2.5rem] tracking-[2.5rem] tablet:text-[3rem] desktop:text-[3rem] tablet:tracking-[3rem] desktop:tracking-[3rem]'>最新消息</h2>
        <div className='flex flex-wrap -mx-2-1/2'>
          <div className='px-2-1/2 w-full tablet:w-[33.3333%] desktop:tablet:w-[33.3333%] flex flex-col'>
            <Link 
              className='text-white font-medium flex items-center mb-2'
              to={'/news'}
            >
              <span 
                className='material-symbols-outlined text-[2.5rem]'
              >
                arrow_insert
              </span>
              返回
            </Link>
            
            <img 
              src={info.imgInDetail} 
              alt="" 
              className='grow'
            />
          </div>
          <div className='px-2-1/2 w-full mt-8 tablet:mt-0 desktop:mt-0 tablet:w-[66.6667%] desktop:tablet:w-[66.6667%]'>
            <div className='py-8 px-3 border-b-[1px] border-t-[1px] border-solid border-white'>
              <p className='flex mb-2'>
                  <img 
                    src={emergencyImg} 
                    alt="" 
                    className='w-[1.5rem] h-[1.5rem] mr-3'
                  />
                  <time className='font-medium tracking-[1rem]'>2023.06.30</time>
              </p>
              <p className='text-[1.25rem] tracking-[1.25rem] font-medium mb-2'>產品升級公告</p>

              <p className='mb-2-1/2'>親愛的客戶們：</p>
              <p className='mb-2-1/2'>我們榮幸地向您宣布，經過不懈的努力與研發，ALPHABOX+ 已成功完成最新一代的升級！這次的升級將為您帶來更高的投影解析度、更精準的語音辨識技術，以及更豐富的情感識別功能。我們致力於為您打造最佳的陪伴機器人，讓科技更貼近您的生活。</p>
              <p className='mb-2-1/2'>在這次升級中，我們提升了投影解析度，讓影像更加清晰細緻，呈現出更真實的視覺效果。您將能夠更加享受在家中觀看高清影片或欣賞美景的樂趣。同時，我們優化了語音辨識技術，使機器人能更迅速且準確地識別您的聲音指令，提高互動體驗。</p>
              <p className='mb-2-1/2'>此外，我們增加了情感識別功能，使得機器人能更好地理解您的情緒，並根據您的需求提供適當的陪伴與支持。無論您需要傾聽、建議還是安慰，ALPHABOX+ 都將成為您身邊的貼心夥伴。</p>
              <p className='mb-2-1/2'>為感謝您一直以來對我們的支持，我們將在本月舉辦限時優惠活動，凡購買升級版3D立體投影陪伴機器人的客戶，均可享有九折優惠。機會難得，千萬不要錯過喔！</p>
              <p className='mb-2-1/2'>在未來的日子裡，我們將繼續投入研發，並積極採納用戶意見，以不斷完善產品功能並提高使用體驗。同時，我們承諾會為您提供優質的售後服務，確保您在購買與使用過程中得到全面支持。</p>
              <p className='mb-2-1/2'>再次感謝您對我們的信任與支持，讓我們攜手共創更美好的未來！若您對升級版3D立體投影陪伴機器人有任何疑問或建議，請隨時與我們的客服團隊聯繫，我們將竭誠為您解答。</p>
              <p className='mb-2-1/2'>敬祝 興旺發達！</p>
              <p>ALPHABOX+ 團隊敬上 </p>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap -mx-2-1/2'>
          <div className='px-2-1/2 w-full tablet:w-[33.3333%] desktop:tablet:w-[33.3333%]'></div>
          <div className='flex justify-between items-start mt-5 px-2-1/2 w-full tablet:w-[66.6667%] desktop:tablet:w-[66.6667%]'>
            {
              id === 0 ? 
              <img 
                src={line_end_arrow_disableImg} 
                alt="" 
                className='max-w-[155px] rotate-180 object-contain'
              />
              :
              <Link to={`/news/${id - 1}`}>
                <img 
                  src={line_start_arrow_notchImg} 
                  alt="" 
                  className='max-w-[155px]'
                />
                <p>上一則</p>
              </Link>
            }
            
            {
              listInfo.length - 1 === id ? 
              <img 
                src={line_end_arrow_disableImg} 
                alt="" 
                className='max-w-[155px] object-contain'
              />
              :
              <Link to={`/news/${id + 1}`}>
                <img 
                  src={line_start_arrow_notchImg} 
                  alt="" 
                  className='max-w-[155px] rotate-180'
                />
                <p>下一則</p>
              </Link>
            }
          </div>
        </div>   
      </div>
    </div>
  )
}

export default NewsDetail;