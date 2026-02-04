import React from 'react'
import Bg from "../../assets/vector.png"
import Link1 from '../btn/Link1'
import Link2 from '../btn/Link2'

const Talk = () => {
  return (
    <div id='Lets-Talk' className='h-80 mt-15 md:h-screen flex flex-col justify-between items-center w-full bg-center bg-no-repeat bg-cover' style={{ backgroundImage: `url(${Bg})`, }}>
      <div className="text h-fit flex flex-col items-center font-semibold" style={{fontFamily:"Syne"}}>
        <div className="sub-heading  text-[13px] md:text-3xl lg:text-4xl">
          <h1>Have a project in mind? Just let us know!</h1>
        </div>
        <div className="heading text-[33px] md:text-5xl lg:text-6xl" >
          <h1>Let’s Start Talk</h1>
        </div>
      </div>
      <div className="cal flex flex-col items-center gap-4">
        <Link1/>
        <Link2/>
      </div>
    </div>
  )
}

export default Talk
