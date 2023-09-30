import { Outlet, useLocation } from "react-router-dom";
import styles from './index.module.scss';
import appleIconImg from '@/assets/images/apple.png';
import googleIconImg from '@/assets/images/google.png';

const Index = () => {
  const location = useLocation();
  const typeText = location.pathname.includes('register') ? '註冊' : '登入';

  return (
    <div className={[
      styles['container-bg'],
      'px-2-1/2 pt-[3.75rem] pb-15 tablet:pb-[10rem] desktop:pb-[10rem]'
    ].join(' ')}>
      <div className="desktop:container -mx-2-1/2 flex flex-wrap">
        <div className="w-full tablet:w-[33.3333%] desktop:w-[33.3333%] px-2-1/2">
          <p className="tablet:mt-[6.25rem] desktop:mt-[6.25rem] font-black text-[2.5rem] tablet:text-[3rem] desktop:text-[4rem] tracking-[2.5rem] tablet:tracking-[3rem] desktop:tracking-[4rem] text-white">
            {typeText}
          </p>
        </div>
        <div className="w-full tablet:w-[33.3333%] desktop:w-[33.3333%] px-2-1/2">
          <img 
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-ai/circle.png?raw=true" 
            alt="" 
            className='w-[196px] h-[196px] mx-auto mb-5'
          />
          <p className="text-white text-[2rem] shrikhand text-center mb-6">ALPHABOX+</p>
          <a className="mb-3 flex items-center justify-center text-white rounded-[1.5rem] border-[1px] border-solid border-white w-full block py-2">
            <img 
              src={appleIconImg} 
              alt="" 
              className="max-w-[1.25rem] max-h-[1.25rem] mr-2-1/2"
            />
            Continue with Apple
          </a>
          <a className="flex items-center justify-center text-white rounded-[1.5rem] border-[1px] border-solid border-white w-full block py-2">
            <img 
              src={googleIconImg} 
              alt="" 
              className="max-w-[1.25rem] max-h-[1.25rem] mr-2-1/2"
            />
            Continue with Google
          </a>
          <p className={[
            styles['divider'],
            'my-5'
          ].join(' ')}>or</p>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Index; 