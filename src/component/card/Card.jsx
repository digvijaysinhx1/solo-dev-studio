const Card = (props) => {
  return (
    <div className='bg-[#0D0D0D] text-[#F1F1F1] hover:bg-[#181818] transition-colors duration-200 ease-in-out h-70  w-70 flex flex-col justify-between items-center rounded-2xl text-center py-10 px-7 md:py-7 md:px-4 gap-3 md:gap-1 border border-[#343434]' style={{fontFamily:"Syne"}}>
      <div className="cardPng">
        <img src={props.png} alt="internet png" loading='lazy' className="h-14 w-14"/>
      </div>
      <div className='text-2xl md:leading-snug'>
      {props.heading}
    </div>
    <div className='text-sm text-[#9a9a9a]'>
      {props.subtext}
    </div>
    </div>
  )
}

export default Card
