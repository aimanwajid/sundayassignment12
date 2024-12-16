import React from "react";
import { IoArrowForward } from "react-icons/io5";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className=" bg-white max-w-[1920px] px-4 sm:px-8 lg:px-[220px] py-[140px] flex flex-col gap-[100px]"
    id="products">
      {/* Section 1 */}
      <div className="bg-white max-w-[1480px] h-[
547px] flex flex-col lg:flex-row items-center gap-[60px]">
        <div className="w-full lg:w-[672px] flex flex-col items-center text-center lg:items-start lg:text-left space-y-7">
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl text-black font-bold">
            Project Management
          </h1>
          <p className="text-lg">
            Images, videos, PDFs and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with the
            mobile app and save them to a note.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="w-[201px] h-[63px] bg-[#4F9CF9] p-[20px] rounded-md text-white flex items-center gap-4">
              Get Started
              <IoArrowForward />
            </button>
          </div>
        </div>
        <div className="w-full lg:w-[748px] bg-[#C4DEFD] h-[300px] sm:h-[500px] md:h-[600px] max:lg:h-[
547px]"></div>
      </div>

      {/* Section 2 */}
      <div className=" max-w-[1480px] flex flex-col lg:flex-row gap-[60px]">
        <div className="w-full lg:w-[710px]">
          <Image
            src="/pic.png"
            alt="A descriptive text about the picture"
            width={400}
            height={400}
            className="w-full h-auto"
          />
        </div>
        <div className="w-full lg:w-[672px] flex flex-col text-center lg:text-left space-y-7">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black font-bold">
            Project Management
          </h1>
          <p className="text-lg">
            Images, videos, PDFs and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with the
            mobile app and save them to a note.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="w-[201px] h-[63px] bg-[#4F9CF9] p-[20px] rounded-md text-white flex items-center gap-4">
              Get Started
              <IoArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;