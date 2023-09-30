import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './news.module.scss';
import Pagination from '@/components/pagination/Pagination';
import emergencyImg from '@/assets/images/emergency.png';
import { listInfo } from './utils/data';

const numShouldBeDisplayedPerPage = 5;

const News = () => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const displayedList = listInfo.slice(currentPageIndex*numShouldBeDisplayedPerPage, (currentPageIndex*numShouldBeDisplayedPerPage + numShouldBeDisplayedPerPage))
                          
  return (
    <>
    <div className={
        [
          styles['container-bg'],
          'text-white px-2-1/2 pt-[3.75rem] tablet:pt-[10rem] desktop:pt-[10rem]'
        ].join(' ')
      }
    >
      <h2 className='mb-[3.75rem] text-left tablet:text-center desktop:text-center font-black text-[2.5rem] tracking-[2.5rem] tablet:text-[3rem] desktop:text-[3rem] tablet:tracking-[3rem] desktop:tracking-[3rem]'>最新消息</h2>
      <ol>
        {
          displayedList.map((info, index) => {
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
              <span className='text-[6rem] tablet:text-[8rem] desktop:text-[8rem] saira-extra-condensed mr-3 tablet:mr-[81px] desktop:mr-[81px]'>{info.id + 1}</span>
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
            <Link 
              to={`/news/${info.id}`}
              className='material-symbols-outlined text-[2.5rem] flex items-end mt-3 ml-auto tablet:ml-5 desktop:ml-5'
            >
              arrow_forward
            </Link>
          </li>
          })
        }
      </ol>
      <div className='pt-8 tablet:pt-15 desktop:pt-15 pb-15 tablet:pb-[7.5rem] desktop:pb-[7.5rem]'>
        <Pagination 
          dataLength={listInfo.length}
          quantityToDisplayPerPage={numShouldBeDisplayedPerPage}
          activePageIndex={currentPageIndex}
          clickEvt={index => setCurrentPageIndex(index)}
        />
      </div>
    </div>
    </>
  )
}

export default News;