import point_scanImg from '@/assets/images/point_scan.png';
 
const Login = () => {
  return (
    <div>
      <form onSubmit={e => e.preventDefault()}>
        <input type="email" placeholder='EMAIL' className='w-full mb-3' />
        <input type="password" placeholder='密碼' className='w-full' />
        <button 
          type='submit'
          className='flex text-white justify-center items-center py-2 bg-primary-200 w-full rounded-[0.25rem] mt-5'
        >
          <img 
            src={point_scanImg} 
            alt="" 
            className='w-[18px] h-[18px] mr-2'
          />
          建立帳號
        </button>
      </form>
      <p className='text-white text-right mt-2'>忘記密碼</p>
    </div>
  )
}

export default Login;