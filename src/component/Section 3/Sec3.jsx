import React from "react";

const Sec3 = () => {
  return (
    <div className="Main w-100 md:w-full items-center justify-center bg-[#010100] flex flex-col gap-9">
      <div className="Text">
        <h1 className="w-full text-5xl font-normal text-center">
          Which{" "}
          <span className="italic" style={{ fontFamily: "Instrument Serif" }}>
            category
          </span>{" "}
          suits you?
        </h1>
      </div>
      <div className="laptops  bg-[#101010] hidden lg:flex flex-col h-fit w-[70%] relative rounded-t-2xl">
        <div className="card1 hover:bg-[#6214D9] bg-[#101010] group flex flex-col gap-7 border-t hover:border-[#B7B7B7] border-[#313131] rounded-t-2xl rounded-b-0 px-3.5 pt-1 hover:pb-8 h-fit w-full">
          <div className="top flex flex-col">
            <div className="heading text-[25px]" style={{ fontFamily: "Syne" }}>
              Getting Online
            </div>
            <div className="sub-text text-[#A5A5A5] text-[13px]">
              First website or simple online presence
            </div>
          </div>
          <ul
            className="points list-disc group-hover:flex flex-col max-h-0 opacity-0 overflow-hidden group-hover:max-h-40 group-hover:opacity-100 transition-all gap-1 ml-10 items-left"
            style={{ fontFamily: "Syne" }}
          >
            <li>Small cafés & local shops</li>
            <li>Home businesses</li>
            <li>Tutors & coaches</li>
            <li>Freelancers</li>
            <li>Personal brands</li>
            <li>First-time founders</li>
          </ul>
        </div>
        <div className="card2 group -mt-5 px-3.5 pt-1 hover:pb-8 hover:bg-[#6214D9] bg-[#101010] flex flex-col gap-7 py-1 h-fit border-t hover:border-[#B7B7B7] border-[#313131] rounded-t-2xl rounded-b-0 w-full">
          <div className="top">
            <div className="heading text-[25px]" style={{ fontFamily: "Syne" }}>
              Establishing presence
            </div>
            <div className="sub-text text-[#A5A5A5] text-[13px]">
              Need a professional website that represents my business properly.
            </div>
          </div>
          <ul
            className="points list-disc group-hover:flex flex-col max-h-0 opacity-0 overflow-hidden group-hover:max-h-40 group-hover:opacity-100 transition-all gap-1 ml-10 items-left"
            style={{ fontFamily: "Syne" }}
          >
            <li>Cafés & restaurants</li>
            <li>Clinics & doctors</li>
            <li>Gyms & fitness studios</li>
            <li>Real estate agents</li>
            <li>Local service businesses</li>
            <li>Agencies & institutes</li>
          </ul>
        </div>
        <div className="card3 group -mt-5 px-3.5 pt-1 hover:pb-8 hover:bg-[#6214D9] bg-[#101010] flex flex-col gap-7 py-1 h-fit border-t hover:border-[#B7B7B7] border-[#313131] rounded-t-2xl rounded-b-0 w-full">
          <div className="top">
            <div className="heading text-[25px]" style={{ fontFamily: "Syne" }}>
              Refining & repositioning
            </div>
            <div className="sub-text text-[#A5A5A5] text-[13px]">
            Already have a website but want to improve clarity, structure, or design.
            </div>
          </div>
          <ul
            className="points list-disc group-hover:flex flex-col max-h-0 opacity-0 overflow-hidden group-hover:max-h-40 group-hover:opacity-100 transition-all gap-1 ml-10 items-left"
            style={{ fontFamily: "Syne" }}
          >
            <li>Startups</li>
            <li>Consultants</li>
            <li>Creators with an audience</li>
            <li>Businesses unhappy with their current site</li>
            <li>Brands going through a redesign or rebrand</li>
          </ul>
        </div>
      </div>
      <div className="Cards bg-[#6214D9] flex flex-col lg:hidden w-90 md:w-[90%] h-fit rounded-2xl overflow-hidden gap-6">
        <div className="card1 border-t border-[#B7B7B7] flex flex-col gap-7 rounded-2xl px-3.5 py-1 h-fit w-full">
          <div className="top">
            <div className="heading text-[25px]" style={{ fontFamily: "Syne" }}>
              Getting Online
            </div>
            <div className="sub-text text-[#A5A5A5] text-[13px]">
              First website or simple online presence
            </div>
          </div>
          <ul
            className="points list-disc flex flex-col gap-1 ml-10 items-left"
            style={{ fontFamily: "Syne" }}
          >
            <li>Small cafés & local shops</li>
            <li>Home businesses</li>
            <li>Tutors & coaches</li>
            <li>Freelancers</li>
            <li>Personal brands</li>
            <li>First-time founders</li>
          </ul>
        </div>
        <div className="card2 border-t border-[#B7B7B7] flex flex-col gap-7 rounded-2xl px-3.5 py-1 h-fit w-full">
          <div className="top">
            <div className="heading text-[25px]" style={{ fontFamily: "Syne" }}>
              Establishing presence
            </div>
            <div className="sub-text text-[#A5A5A5] text-[13px]">
              need a professional website that represents my business properly.
            </div>
          </div>
          <ul
            className="points list-disc flex flex-col gap-1 ml-10 items-left"
            style={{ fontFamily: "Syne" }}
          >
            <li>Cafés & restaurants</li>
            <li>Clinics & doctors</li>
            <li>Gyms & fitness studios</li>
            <li>Real estate agents</li>
            <li>Local service businesses</li>
            <li>Agencies & institutes</li>
          </ul>
        </div>
        <div className="card3 border-t border-[#B7B7B7] flex flex-col gap-7 rounded-2xl px-3.5 py-1 h-fit w-full">
          <div className="top">
            <div className="heading text-[25px]" style={{ fontFamily: "Syne" }}>
              Refining & repositioning
            </div>
            <div className="sub-text text-[#A5A5A5] text-[13px]">
              Already have a website but want to improve clarity, structure, or design.
            </div>
          </div>
          <ul
            className="points list-disc flex flex-col gap-1 ml-10 items-left"
            style={{ fontFamily: "Syne" }}
          >
            <li>Startups</li>
            <li>Consultants</li>
            <li>Creators with an audience</li>
            <li>Businesses unhappy with their current site</li>
            <li>Brands going through a redesign or rebrand</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sec3;
