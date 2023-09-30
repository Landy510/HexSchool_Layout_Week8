import pointScanImg from '@/assets/images/point_scan.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isDropDownShow, setIsDropDownShow] = useState(false)
  return (
    <header className={[
      'shadow-[0_0_1rem_rgba(0,0,0,0.5)] tablet:shadow-none desktop:shadow-none bg-primary-300 py-[16px] relative border-[1px] border-l-[0] border-r-[0] border-t-[0] border-white border-solid',
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
            <Link  
              to={'/aboutUs'}
              className='px-[20px]'
            >
              關於我們
            </Link>
          </li>
          <li>
            <Link  
              to={'/news'}
              className='px-[20px]'
            >
              最新消息
            </Link>
          </li>
          <li>
            <Link  
              to={'/FAQ'}
              className='px-[20px]'
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link  
              to={'/contactUs'}
              className='px-[20px]'
            >
              聯絡我們
            </Link>
          </li>
        </ul>
        <ul className="text-white items-center hidden tablet:flex">
          <li>
            <Link 
              to={'/user/register'}
              className='px-[12px]'
            >
              註冊
            </Link>
          </li>
          <li>
            <Link 
              to={'/user/login'}
              className='px-[12px]'
            >
              登入
            </Link>
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
          'top-[100%] left-[0px] right-[0px] bg-gradient-to-b from-primary-300 to-primary-500 text-white font-medium pt-[24px] pb-[32px] mt-[1px] z-10',
          isDropDownShow ? 'absolute' : 'hidden'
        ].join(' ')}>
          <li>
            <Link  
              to={'/products/Diane'}
              className='py-2 w-full block text-center'
            >
              產品
            </Link>
          </li>
          <li>
            <Link  
              to={'/aboutUs'}
              className='py-[8px] w-full block text-center'
            >
              關於我們
            </Link>
          </li>
          <li>
            <Link  
              to={'/news'}
              className='py-[8px] w-full block text-center'
            >
              最新消息
            </Link>
          </li>
          <li>
            <Link  
              to={'/FAQ'}
              className='py-[8px] w-full block text-center'
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link  
              to={'/contactUs'}
              className='py-[8px] w-full block text-center'
            >
              聯絡我們
            </Link>
          </li>
          <li>
            <Link 
              className='py-[8px] w-full block text-center'
              to={'/user/register'}
            >
              註冊
            </Link>
          </li>
          <li>
            <Link 
              to={'/user/login'}
              className='py-[8px] w-full block text-center'
            >
              登入
            </Link>
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