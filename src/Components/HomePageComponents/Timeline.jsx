

import React, { useState } from "react";
import ti from "../../assets/arrow1.jpg";
import sqaurebox from "../../assets/square.jpg";
import sqaurebg from "../../assets/box.jpg";
import { IoIosContact } from "react-icons/io";
const Timeline = () => {
  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [showPopup3, setShowPopup3] = useState(false);
  const [showPopup4, setShowPopup4] = useState(false);

  const togglePopup = (setShowPopup) => {
    setShowPopup((prev) => !prev);
  };

  return (
    <div className="md:relative  w-full h-auto md:h-[98vh] mt-20 mb-40 overflow-hidden">
      <h1 className="font-bold text-center text-3xl">My Timeline</h1>
      <div className="relative w-full h-full hidden md:block">
        {/* 2001-2008 */}
        <div
          className="absolute bottom-10 w-1/4 h-[260px]"
          onMouseEnter={() => setShowPopup1(true)}
          onMouseLeave={() => setShowPopup1(false)}
        >
          <img className="w-full h-full" src={ti} alt="Timeline Arrow" />
          <h2 className="text-3xl text-center font-bold font-satoshi">
            2001-2008
          </h2>
          {showPopup1 && (
            <div className="relative -top-60 -right-20">
              {/* Popup Content */}
              <div className="relative top-0 left-4 w-[250px] h-[180px] z-50">
                <img src={sqaurebox} alt="Popup Decoration" />

                {/* Header Section */}
                <div className="w-full flex items-center pl-2 mt-2  rounded-md">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
                    <IoIosContact size={100} className="text-gray-800" />
                  </div>
                  {/* Title */}
                  <h1 className="ml-3 text-white font-medium text-lg">
                    2001-2008
                  </h1>
                </div>

                {/* Additional Information */}
                <div className="w-[200px] h-[80px] pl-2 mt-4">
                  <h2 className="text-white text-sm font-bold">We guide</h2>
                  <p className="text-white text-sm md:text-base">
                    Let me know if you'd like to customize this further!
                  </p>
                </div>
              </div>

              {/* Background Decoration */}
              <div className="absolute top-0 left-4 w-[250px] h-[180px] z-20">
                <img src={sqaurebg} alt="Popup Background" />
              </div>
            </div>
          )}
        </div>

        {/* 2009-2014 */}
        <div
          className="absolute bottom-48 left-[390px] w-1/4 h-[260px] "
          onMouseEnter={() => setShowPopup2(true)}
          onMouseLeave={() => setShowPopup2(false)}
        >
          <img className="w-full h-full  " src={ti} alt="Timeline Arrow" />
          <h2 className="text-3xl text-center font-bold font-satoshi">
            2009-2014
          </h2>
          {showPopup2 && (
            <div className="relative -top-60 -right-20">
              <div className="absolute top-0 left-4 w-[250px] h-[65px] z-50">
                <img src={sqaurebox} alt="Popup Decoration" />
                <div className="w-full flex items-center pl-2 mt-2  rounded-md">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
                    <IoIosContact size={100} className="text-gray-800" />
                  </div>
                  {/* Title */}
                  <h1 className="ml-3 text-white font-medium text-lg">
                    2001-2008
                  </h1>
                </div>

                {/* extra code */}
                <div className="w-[200px] h-[80px] pl-2 mt-4">
                  <h2 className="text-white font-bold">We guide</h2>
                  <p className="text-white text-base">
                    Let me know if you'd like to customize this further!
                  </p>
                </div>
              </div>
              <div className="absolute top-0 left-4 w-[250px] h-[180px] z-20">
                <img src={sqaurebg} alt="Popup Background" />
              </div>
            </div>
          )}
        </div>

        {/* 2015-2020 */}
        <div
          className="absolute top-32 left-[790px] w-1/4 h-[260px] z-50 "
          onMouseEnter={() => setShowPopup3(true)}
          onMouseLeave={() => setShowPopup3(false)}
        >
          <img className="w-full h-full  " src={ti} alt="Timeline Arrow" />
          <h2 className="text-3xl text-center font-bold font-satoshi">
            2015-2020
          </h2>
          {showPopup3 && (
            <div className="relative -top-60 -right-20">
              <div className="absolute top-0 left-4 w-[250px] h-[65px] z-50">
                <img src={sqaurebox} alt="Popup Decoration" />
                <div className="w-full flex items-center pl-2 mt-2  rounded-md">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
                    <IoIosContact size={100} className="text-gray-800" />
                  </div>
                  {/* Title */}
                  <h1 className="ml-3 text-white font-medium text-lg">
                    2001-2008
                  </h1>
                </div>

                {/* extra code */}
                <div className="w-[200px] h-[80px] pl-2 mt-4">
                  <h2 className="text-white font-bold">I Love my India</h2>
                  <p className="text-white text-base">
                    Let me know if you'd like to customize this further!
                  </p>
                </div>
              </div>
              <div className="absolute top-0 left-4 w-[250px] h-[180px] z-20">
                <img src={sqaurebg} alt="Popup Background" />
              </div>
            </div>
          )}
        </div>

        {/* 2021-Present */}
        <div
          className="absolute top-0 left-[1150px] w-1/4 h-[260px]"
          onMouseEnter={() => setShowPopup4(true)}
          onMouseLeave={() => setShowPopup4(false)}
        >
          <img className="w-full h-full" src={ti} alt="Timeline Arrow" />
          <h2 className="text-3xl text-center font-bold font-satoshi">
            2021-Present
          </h2>
          {showPopup4 && (
            <div className="relative -top-60 -right-20">
              <div className="absolute top-0 left-4 w-[250px] h-[65px] z-50">
                <img src={sqaurebox} alt="Popup Decoration" />
                <div className="w-full flex items-center pl-2 mt-2  rounded-md">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
                    <IoIosContact size={100} className="text-gray-800" />
                  </div>
                  {/* Title */}
                  <h1 className="ml-3 text-white font-medium text-lg">
                    2001-2008
                  </h1>
                </div>

                {/* extra code */}
                <div className="w-[200px] h-[80px] pl-2 mt-4">
                  <h2 className="text-white font-bold">I Love my India</h2>
                  <p className="text-white text-base">
                    Let me know if you'd like to customize this further!
                  </p>
                </div>
              </div>
              <div className="absolute top-0 left-4 w-[250px] h-[180px] z-20">
                <img src={sqaurebg} alt="Popup Background" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile */}
      <div className="w-full flex flex-col gap-16 md:hidden px-4 mt-6">
        <div>
          <img
            className="w-full h-full"
            src={ti}
            alt="Timeline Arrow"
            onClick={() => togglePopup(setShowPopup1)}
          />
          <h2 className="text-3xl text-center font-bold font-satoshi">
            2001-2008
          </h2>
          {showPopup1 && (
            <div className="relative -top-64 -right-16 ">
              <div className="absolute top-0 left-4 w-[200px] h-[65px] z-50">
                <img src={sqaurebox} alt="Popup Decoration" />
                <div className="w-full flex items-center pl-2 mt-2  rounded-md">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
                    <IoIosContact size={100} className="text-gray-800" />
                  </div>
                  {/* Title */}
                  <h1 className="ml-3 text-white font-medium text-lg">
                    2001-2008
                  </h1>
                </div>

                {/* extra code */}
                <div className="w-[200px] h-[80px] pl-2 mt-4">
                  <h2 className="text-white font-bold">I Love my India</h2>
                  <p className="text-white text-base">
                    Let me know if you'd like to customize this further!
                  </p>
                </div>
              
              </div>
              <div className="absolute top-0 left-4 w-[250px] h-[180px] z-20">
                <img src={sqaurebg} alt="Popup Background" />
              </div>
            </div>
          )}
        </div>

        <div>
          <img
            className="w-full h-full"
            src={ti}
            alt="Timeline Arrow"
            onClick={() => togglePopup(setShowPopup2)}
          />
          <h2 className="text-3xl text-center font-bold font-satoshi">
            2009-2014
          </h2>
          {showPopup2 && (
            <div className="relative -top-64 -right-16 ">
              <div className="absolute top-0 left-4 w-[200px] h-[65px] z-50">
                <img src={sqaurebox} alt="Popup Decoration" />
                <div className="w-full flex items-center pl-2 mt-2  rounded-md">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
                    <IoIosContact size={100} className="text-gray-800" />
                  </div>
                  {/* Title */}
                  <h1 className="ml-3 text-white font-medium text-lg">
                    2001-2008
                  </h1>
                </div>

                {/* extra code */}
                <div className="w-[200px] h-[80px] pl-2 mt-4">
                  <h2 className="text-white font-bold">I Love my India</h2>
                  <p className="text-white text-base">
                    Let me know if you'd like to customize this further!
                  </p>
                </div>
              </div>
              <div className="absolute top-0 left-4 w-[250px] h-[180px] z-20">
                <img src={sqaurebg} alt="Popup Background" />
              </div>
            </div>
          )}
        </div>

        <div>
          <img
            className="w-full h-full"
            src={ti}
            alt="Timeline Arrow"
            onClick={() => togglePopup(setShowPopup3)}
          />
          <h2 className="text-3xl text-center font-bold font-satoshi">
            2015-2020
          </h2>
          {showPopup3 && (
            <div className="relative -top-64 -right-16 ">
              <div className="absolute top-0 left-4 w-[200px] h-[65px] z-50">
                <img src={sqaurebox} alt="Popup Decoration" />
                <div className="w-full flex items-center pl-2 mt-2  rounded-md">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
                    <IoIosContact size={100} className="text-gray-800" />
                  </div>
                  {/* Title */}
                  <h1 className="ml-3 text-white font-medium text-lg">
                    2001-2008
                  </h1>
                </div>

                {/* extra code */}
                <div className="w-[200px] h-[80px] pl-2 mt-4">
                  <h2 className="text-white font-bold">I Love my India</h2>
                  <p className="text-white text-base">
                    Let me know if you'd like to customize this further!
                  </p>
                </div>
              </div>
              <div className="absolute top-0 left-4 w-[250px] h-[180px] z-20">
                <img src={sqaurebg} alt="Popup Background" />
              </div>
            </div>
          )}
        </div>

        <div>
          <img
            className="w-full h-full"
            src={ti}
            alt="Timeline Arrow"
            onClick={() => togglePopup(setShowPopup4)}
          />
          <h2 className="text-3xl text-center font-bold font-satoshi">
            2021-Present
          </h2>
          {showPopup4 && (
            <div className="relative -top-64 -right-16 ">
              <div className="absolute top-0 left-4 w-[200px] h-[65px] z-50">
                <img src={sqaurebox} alt="Popup Decoration" />
                <div className="w-full flex items-center pl-2 mt-2  rounded-md">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
                    <IoIosContact size={100} className="text-gray-800" />
                  </div>
                  {/* Title */}
                  <h1 className="ml-3 text-white font-medium text-lg">
                    2001-2008
                  </h1>
                </div>

                {/* extra code */}
                <div className="w-[200px] h-[80px] pl-2 mt-4">
                  <h2 className="text-white font-bold">I Love my India</h2>
                  <p className="text-white text-base">
                    Let me know if you'd like to customize this further!
                  </p>
                </div>
              </div>
              <div className="absolute top-0 left-4 w-[250px] h-[180px] z-20">
                <img src={sqaurebg} alt="Popup Background" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
