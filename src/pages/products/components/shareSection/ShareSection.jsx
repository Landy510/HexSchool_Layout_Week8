import styles from './ShareSection.module.scss';
const ShareSection = () => {
  return (
    <div 
      className={styles['container-bg']}
    >
      <div className='desktop:container px-2-1/2 pt-[65px] pb-[80px] tablet:pt-[88px] tablet:pb-[7.5rem] desktop:pt-[88px] desktop:pb-[7.5rem]'>
        <div className='grid grid-cols-12 gap-x-3 mb-6 tablet:mb-15 desktop:mb-15'>
          <div className='col-span-12 tablet:col-span-4 desktop:col-span-4 text-white'>
            <h2 className='mb-2-1/2 text-[2.5rem] tablet:text-[3rem] desktop:text-[3rem] text-bold tracking-[2.5rem] tablet:tracking-[3rem] desktop:tracking-[3rem]'>使用分享</h2>
            <p>展示其他使用者對於產品的真實體驗與評價，讓您更加放心選擇。</p>
          </div>
        </div>
        <ul className='grid grid-cols-12 gap-x-5 gap-y-5'>
          <li className="col-span-12 tablet:col-span-4 desktop:col-span-4">
            <div className='flex flex-col bg-primary-100 text-white p-5 tablet:p-8 desktop:p-8 h-[351px] tablet:h-[416px] desktop:h-[416px] font-bold'>
              <p className='flex items-center mb-6'>
                Zichi
                <span className='inline-block mx-2 w-2 h-2 bg-white rounded-full'></span>
                Kaohsiung
              </p>
              <p>自從家裡有了Felix，孩子們的學習興趣提高了不少，他們都喜歡透過Felix的3D立體投影來探索新知識，家庭氛圍變得更加和樂融融！</p>
              <p className='flex items-center mt-auto'>
                <span className='inline-block w-3 h-3 bg-white rounded-full'></span>
                <span className='inline-block mx-2 w-3 h-3 bg-white rounded-full mx-3'></span>
                ALPHABOX+ Felix
              </p>
            </div>
          </li>
          <li className="col-span-12 tablet:col-span-4 desktop:col-span-4">
            <div className='flex flex-col bg-white p-5 tablet:p-8 desktop:p-8 h-[351px] tablet:h-[416px] desktop:h-[416px] font-bold'>
              <p className='flex items-center mb-6'>
                Zichi
                <span className='inline-block mx-2 w-[0.5rem] h-[0.5rem] bg-black rounded-full'></span>
                Kaohsiung
              </p>
              <p>自從家裡有了Felix，孩子們的學習興趣提高了不少，他們都喜歡透過Felix的3D立體投影來探索新知識，家庭氛圍變得更加和樂融融！</p>
              <p className='flex items-center mt-auto'>
                <span className='inline-block w-3 h-3 bg-black rounded-full'></span>
                <span className='inline-block mx-2 w-3 h-3 bg-black rounded-full mx-3'></span>
                ALPHABOX+ Felix
              </p>
            </div>
          </li>
          <li className="col-span-12 tablet:col-span-4 desktop:col-span-4">
            <div className='flex flex-col bg-primary-100 text-white p-5 tablet:p-8 desktop:p-8 h-[351px] tablet:h-[416px] desktop:h-[416px] font-bold'>
              <p className='flex items-center mb-6'>
                Zichi
                <span className='inline-block w-[0.5rem] h-[0.5rem] bg-white rounded-full mx-2'></span>
                Kaohsiung
              </p>
              <p>自從家裡有了Felix，孩子們的學習興趣提高了不少，他們都喜歡透過Felix的3D立體投影來探索新知識，家庭氛圍變得更加和樂融融！</p>
              <p className='flex items-center mt-auto'>
                <span className='inline-block w-3 h-3 bg-white rounded-full'></span>
                <span className='inline-block mx-2 w-3 h-3 bg-white rounded-full mx-3'></span>
                ALPHABOX+ Felix
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ShareSection;