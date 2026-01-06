import React from 'react'
import { ArrowRight } from 'lucide-react';

const GetBtn = () => {
  return (
    <div className='group bg-[#6214D9] hover:bg-[#F1F1F1] hover:text-[#6214D9] text-[#F1F1F1] sm:text-[1rem]  cursor-pointer h-fit w-fit px-5 py-2 rounded-3xl transition-all duration-200 ease-in-out'>
      <a href="#" className='inline-flex items-center gap-2' style={{fontFamily:"Syne"}}>
        Get In Touch<ArrowRight className="transition-transform scale-x-140 sm:scale-x-100 sm:-rotate-30 duration-300 group-hover:rotate-0 group-hover:scale-x-140"/>
        </a>
    </div>
  )
}
export default GetBtn
