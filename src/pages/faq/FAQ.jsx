const FAQ = () => {
  return (
    <div className='bg-neutral-200 pt-[3.75rem] pb-15 desktop:pb-[7.5rem]'>
      <div className="desktop:container px-2-1/2">
        <h2 className="border-dashed border-b-[1px] border-white pb-8 desktop:pb-12 font-black text-[2.5rem] tracking-[2.5rem] desktop:text-[3rem] desktop:tracking-[3rem]">FAQ</h2>
        <div className="flex pt-5 desktop:pt-8">
          <div className="w-[25%] font-medium">
            <p className="mb-3">ALPHABOX+ 使用問題</p>
            <p className="mb-3">訂購與運送</p>
            <p className="mb-3">產品保養與維修</p>
          </div>
          <div className="w-[75%]"></div>
        </div>
      </div>
    </div>
  )
}

export default FAQ;