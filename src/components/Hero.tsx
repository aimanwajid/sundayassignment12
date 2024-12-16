import React from "react";
import { IoArrowForward } from "react-icons/io5";

interface data {
  heading: string;
  para: string;
  button: string;
}

const Herosection = (props: data) => {
  return (
    <div  id='pricing' className="max-w-[1920px] h-auto lg:px-[220px] xs:px-7 sm:px-8 md:px-11 py-8 sm:py-10 md:py-[140px] bg-[#043873] flex flex-col sm:flex-row">
      {/* Left Section */}
      <div className="w-full sm:w-[656px] flex flex-col gap-4 sm:gap-6 md:gap-[60px] items-start justify-center mb-6 sm:mb-10 md:mb-0">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl leading-tight font-bold">
          {props.heading}
        </h1>
        <p className="text-[#FFFFFF] text-base sm:text-[16px] md:text-[18px]">
          {props.para}
        </p>
        <button className="w-full sm:w-[219px] h-12 sm:h-[50px] md:h-[63px] bg-[#4F9CF9] p-4 sm:p-6 md:p-[20px] rounded-md text-white flex items-center justify-center gap-4">
          {props.button}
          <IoArrowForward />
        </button>
      </div>

      {/* Right Section */}
      <div className="w-full sm:w-[824px] h-48 sm:h-64 md:h-[549px] bg-[#C4DEFD]">
        {/* Add Content Here */}
      </div>
    </div>
  );
};

export default Herosection;