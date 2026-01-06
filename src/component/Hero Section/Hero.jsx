import React from 'react'
import HeroHeading from './HeroHeading'
import HeroPara from './HeroPara'
import GetBtn from '../btn/GetBtn'
import Span from '../spans/Span'

const Hero = (elem) => {
  return (
    <div className='h-[50%] top-0 w-[90%] bg-[#010100] flex flex-col items-center justify-center gap-5' >
        <Span text="Get Your Online Present, Now!!"/>
        <HeroHeading/>
        <HeroPara/>
        <GetBtn/>
    </div>
  )
}

export default Hero
