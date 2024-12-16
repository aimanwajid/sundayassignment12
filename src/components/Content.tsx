import React from "react";
import { IoArrowForward } from "react-icons/io5";

const Content = () => {
  return (
    <div className="max-w-[1920px] h-auto bg-[#043873] px-4 sm:px-8 lg:px-[220px] py-[140px]" id="solutions">
      <div className="w-full h-full flex items-center justify-center">
        <div className="max-w-[1064px] w-full text-center flex flex-col justify-center items-center space-y-8 sm:space-y-10 lg:space-y-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-bold">
            Your work, everywhere you are
          </h1>
          <p className="text-sm sm:text-base lg:text-md text-white mt-4">
            Access your notes from your computer, phone or tablet by synchronising
            with various services, including whitepace, Dropbox and OneDrive. The
            app is available on Windows, macOS, Linux, Android and iOS. A terminal
            app is also available!
          </p>
          <div className="flex justify-center w-full">
            <button className="w-[150px] sm:w-[201px] h-[50px] sm:h-[63px] bg-[#4F9CF9] p-[16px] sm:p-[20px] flex items-center gap-2 text-white">
              Get Started
              <IoArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;