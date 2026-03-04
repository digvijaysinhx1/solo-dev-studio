import React from 'react'

const Footer = () => {
  return (
    <div className='main flex flex-col h-fit items-center mt-15 pb-15 gap-10' style={{fontFamily:"Syne"}}>
        <div className="top" data-cursor="big">
            
            <h1 className='text-[#E8E4FF] font-semibold text-[96px] w-full md:text-9xl lg:text-[15rem] border-b'>PROVIDENZ</h1>
        </div>
        <div className="copy-rights flex w-full justify-around md:font-semibold">
            <span>© 2025  Providenz. All Rights Reserved .</span>
            <span>Designed <a href="#">Providenz</a></span>
        </div>
      
    </div>
  )
}

export default Footer
