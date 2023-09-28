import DisplayItem from './components/displayItem/DisplayItem';

const contentList = [
  {
    headerTxt: 'ALPHABOX+ 的使用方式是什麼？',
    contentTxt: '首先請確保機器人已安裝並連接至Wi-Fi，然後使用專屬的應用程式進行設定。隨後即可透過語音指令或應用程式與機器人進行互動。'
  },
  {
    headerTxt: 'ALPHABOX+ 支援哪些語言？',
    contentTxt: '首先請確保機器人已安裝並連接至Wi-Fi，然後使用專屬的應用程式進行設定。隨後即可透過語音指令或應用程式與機器人進行互動。'
  },
  {
    headerTxt: 'ALPHABOX+ 的軟體更新方式為何？',
    contentTxt: '首先請確保機器人已安裝並連接至Wi-Fi，然後使用專屬的應用程式進行設定。隨後即可透過語音指令或應用程式與機器人進行互動。'
  },
  {
    headerTxt: 'ALPHABOX+ 的使用方式是什麼？',
    contentTxt: '首先請確保機器人已安裝並連接至Wi-Fi，然後使用專屬的應用程式進行設定。隨後即可透過語音指令或應用程式與機器人進行互動。'
  },
  {
    headerTxt: '購買 ALPHABOX+ 後的售後服務如何？',
    contentTxt: '首先請確保機器人已安裝並連接至Wi-Fi，然後使用專屬的應用程式進行設定。隨後即可透過語音指令或應用程式與機器人進行互動。'
  },
  {
    headerTxt: 'ALPHABOX+ 與其他智能家居設備的相容性如何？',
    contentTxt: '首先請確保機器人已安裝並連接至Wi-Fi，然後使用專屬的應用程式進行設定。隨後即可透過語音指令或應用程式與機器人進行互動。'
  }
]

const FAQ = () => {
  return (
    <div className='bg-neutral-200 pt-[3.75rem] pb-15 desktop:pb-[7.5rem]'>
      <div className="desktop:container px-2-1/2">
        <h2 className="border-dashed border-b-[1px] border-white pb-8 desktop:pb-12 font-black text-[2.5rem] tracking-[2.5rem] desktop:text-[3rem] desktop:tracking-[3rem]">FAQ</h2>
        <div className="flex flex-wrap pt-5 desktop:pt-8">
          <div className="w-full pb-5 border-b-[1px] border-dashed border-white tablet:border-0 desktop:border-0 tablet:pb-0 desktop:pb-0 tablet:w-[25%] desktop:w-[25%] font-medium">
            <p className="mb-3 border-b-[1px] border-black border-solid tablet:border-b-0 desktop:border-b-0">ALPHABOX+ 使用問題</p>
            <p className="mb-3">訂購與運送</p>
            <p className="mb-3">產品保養與維修</p>
          </div>
          <div className="w-full tablet:w-[75%] tablet:w-[60%]">
            <ul className='pt-6 tablet:pt-[0] desktop:pt-[0]'>
              {
                contentList.map((content, index) => {
                  return <li 
                    className={[
                      'pb-8 border-dashed border-b-[1px] border-white',
                      index !== 0 && 'pt-8'
                    ].join(' ')}
                    key={index}
                  >
                    <DisplayItem content={content} />
                  </li>
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ;