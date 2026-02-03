import React from 'react'
import Card from '../card/Card'
import Compass from '../../assets/Compass.png'
import Pen from '../../assets/Pen.png'
import Rocket from '../../assets/Rocket.png'
import Span from '../spans/Span'

const MultiCardsHiw = () => {
  return (
    <>
      <div className="gap-5 flex flex-col items-center justify-center">
        <Span text="Process"/>
        <div className="heading" style={{ fontFamily: "Syne" }}>
          <h1 className="text-5xl font-normal">
            What We{" "}
            <span className="italic" style={{ fontFamily: "Instrument Serif" }}>
              Do
            </span>
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 md:flex-row w-[90%]">
          <Card
            png={Compass}
            heading="Direction"
            subtext="You tell us about your business, what you need from the website, and what you want to improve or build."
          />
          <Card
            png={Pen}
            heading="Build"
            subtext="The website is designed and built with clarity, structure, and usability in mind, based on what actually matters."
          />
          <Card
            png={Rocket}
            heading="Launch"
            subtext="Final refinements are made, and your website is prepared and launched for real use."
          />
        </div>
      </div>
    </>
  )
}

export default MultiCardsHiw
