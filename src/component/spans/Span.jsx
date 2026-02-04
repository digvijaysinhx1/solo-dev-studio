import React from 'react'

const Span = (props) => {
  return (
    <div className='bg-[#010100] w-fit h-fit px-4 py-1 border rounded-2xl'>
      <h1 className='text-center'>{props.text}</h1>
    </div>
  )
}

export default Span
