import { useRef } from "react";
import { Link } from "react-router-dom";
import Checkbox from "@/components/checkbox/Checkbox";
import point_scanImg from '@/assets/images/point_scan.png';

const Register = () => {
  const checkRef = useRef(null);

  return (
    <div>
      <form onSubmit={e => e.preventDefault()}>
        <input 
          type="text" 
          placeholder='姓名' 
          className='w-full mb-3'
        />
        <input type="email" placeholder='EMAIL' className='w-full mb-3' />
        <input type="password" placeholder='密碼' className='w-full mb-3' />
        <Checkbox ref={checkRef}>
          <p className="text-white ml-1">
            我已經詳細閱讀<span className="underline">相關條例</span>
          </p>
        </Checkbox>
        <button 
          type='submit'
          className='flex text-white justify-center items-center py-2 bg-primary-200 w-full rounded-[0.25rem] mt-6'
        >
          <img 
            src={point_scanImg} 
            alt="" 
            className='w-[18px] h-[18px] mr-2'
          />
          建立帳號
        </button>
      </form>
      <p className="text-white text-right mt-2">
        已有帳號嗎？前往<Link to={'/user/login'} className="underline">登入</Link>
      </p>
    </div>
  )
}

export default Register;