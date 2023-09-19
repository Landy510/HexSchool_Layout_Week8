import pointScanImg from '@/assets/images/point_scan.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isDropDownShow, setIsDropDownShow] = useState(false)
  return (
    <header className={[
      'bg-primary-300 py-[16px] relative border-[1px] border-l-[0] border-r-[0] border-t-[0] border-white border-solid',
    ].join(' ')}>
      <div 
        className="desktop:container px-2-1/2 flex items-center justify-between"
      >
        <Link  
          to={'/'}
          className="shrikhand fs-32 text-white"
        >
          ALPHABOX+
        </Link>
        <ul className="text-white hidden tablet:flex">
          <li>
            <Link  
              to={'/products/Diane'}
              className='px-[20px]'
            >
              產品
            </Link>
          </li>
          <li>
            <a 
              href=""
              className='px-[20px]'
            >關於我們</a>
          </li>
          <li>
            <a 
              href=""
              className='px-[20px]'
            >最新消息</a>
          </li>
          <li>
            <a 
              href=""
              className='px-[20px]'
            >FAQ</a>
          </li>
          <li>
            <a 
              href=""
              className='px-[20px]'
            >聯絡我們</a>
          </li>
        </ul>
        <ul className="text-white items-center hidden tablet:flex">
          <li>
            <a 
              href=""
              className='px-[12px]'
            >註冊</a>
          </li>
          <li>
            <a 
              href=""
              className='px-[12px]'
            >登入</a>
          </li>
          <li>
            <a 
              href=""
              className='flex px-[16px] py-[8px] bg-white ml-[20px] text-black rounded-[4px] font-medium'
            >
              <img 
                src={pointScanImg} 
                alt="" 
                className='mr-[4px]'
              />
              訂閱
            </a>
          </li>
        </ul>
        <div className='tablet:hidden'>
          <button 
            type='button'
            className="material-symbols-outlined text-white"
            onClick={() => setIsDropDownShow(prev => !prev)}
          >
            menu
          </button>
        </div>
        <ul className={[
          'top-[100%] left-0 right-0 bg-gradient-to-b from-primary-300 to-primary-500 text-white font-medium pt-[24px] pb-[32px] mt-[1px]',
          isDropDownShow ? 'absolute' : 'hidden'
        ].join(' ')}>
          <li>
            <a 
              href=""
              className='py-[8px] w-full block text-center'
            >產品</a>
          </li>
          <li>
            <a 
              href=""
              className='py-[8px] w-full block text-center'
            >關於我們</a>
          </li>
          <li>
            <a 
              href=""
              className='py-[8px] w-full block text-center'
            >最新消息</a>
          </li>
          <li>
            <a 
              href=""
              className='py-[8px] w-full block text-center'
            >FAQ</a>
          </li>
          <li>
            <a 
              href=""
              className='py-[8px] w-full block text-center'
            >聯絡我們</a>
          </li>
          <li>
            <a 
              href=""
              className='py-[8px] w-full block text-center'
            >註冊</a>
          </li>
          <li>
            <a 
              href=""
              className='py-[8px] w-full block text-center'
            >登入</a>
          </li>
          <li className='text-center'>
            <a 
              href=""
              className='inline-flex px-[16px] py-[8px] bg-white text-black rounded-[4px] font-medium'
            >
              <img 
                src={pointScanImg} 
                alt="" 
                className='mr-[4px]'
              />
              訂閱
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header;