import emergencyInBlackImg from '@/assets/images/emergencyInBlack.png';
const Footer = () => {
  return (
    <div className={[
      'p-[2.5rem] font-bold flex flex-wrap justify-between items-center',
      'tablet:py-[3.25rem] tablet:px-2-1/2',
      'desktop:container'
    ].join(' ')}>
      <div>
        <p className='shrikhand fs-32'>ALPHABOX+</p>
        <p className='hidden tablet:block'>Copyright © 2023 Hexschool.</p>
      </div>
      <div className='w-full tablet:w-auto'>
        <img 
          src={emergencyInBlackImg} 
          alt="" 
          className='max-w-[5rem] max-h-[5rem] p-[10px]'
        />
      </div>
      <ul className='flex flex-col tablet:flex-row'>
        <li>
          <a 
            href="#"
            className={[
              'py-2 block',
              'tablet:px-2-1/2'
            ].join(' ')}
          >關於我們</a>
        </li>
        <li>
          <a 
            href="#"
            className={[
              'py-2 block',
              'tablet:px-2-1/2'
            ].join(' ')}
          >產品資訊</a>
        </li>
        <li>
          <a 
            href="#"
            className={[
              'py-2 block',
              'tablet:px-2-1/2'
            ].join(' ')}
          >常見問題</a>
        </li>
        <li>
          <a 
            href="#"
            className={[
              'py-2 block',
              'tablet:px-2-1/2'
            ].join(' ')}
          >隱私政策</a>
        </li>
      </ul>
      <p className='block tablet:hidden w-full'>Copyright © 2023 Hexschool.</p>
    </div>
  )
}

export default Footer;