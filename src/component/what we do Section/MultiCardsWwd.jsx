import React from "react";
import Card from "../card/Card";
import internet from "../../assets/internet.png";
import sync from "../../assets/Synchronize.png";
import layers from "../../assets/Layers.png";

const MultiCardsWwd = (elem) => {
  return (
    <>
      <div id="What" className="gap-5 mt-15 flex flex-col items-center justify-center">
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
            png={internet}
            heading="A solid first website"
            subtext="A clear, reliable starting point for businesses building their online presence for the first time."
          />
          <Card
            png={sync}
            heading="Thoughtful redesigns"
            subtext="Improvements for existing websites that feel outdated, unclear, or no longer reflect the business."
          />
          <Card
            png={layers}
            heading="Simple, handled 
end-to-end"
            subtext="Built to grow with the business — easy updates, clean structure, and no technical headaches later."
          />
        </div>
      </div>
    </>
  );
};

export default MultiCardsWwd;
