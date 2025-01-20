import React, { useState } from "react";
import ti from "../../assets/arrow1.png";
import sqaurebox from "../../assets/square.png";
import sqaurebg from "../../assets/box.png";
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
    <div className="px-4 md:px-20 my-20">
      
      {/* desktop */}
      <div className="w-full h-screen relative font-satoshi hidden lg:block ">
        <div className="absolute top-6 left-10 flex flex-col gap-2">
          <h1 className="text-[80px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3071aa] to-[#5878d9]">
            My Timeline
          </h1>
          <p className="text-xl text-gray-400">
          Every great journey is built on a timeline of small achievements.
          </p>
        </div>
        <div
          className="absolute bottom-[45%] left-[75%] z-50"
          onMouseEnter={() => setShowPopup1(true)}
          onMouseLeave={() => setShowPopup1(false)}
        >
          <div className="relative">
            <img src={ti} alt="" className="w-[280px]" />
            <h1 className="text-5xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#474a4d] to-[#3071a9]">
              2010 - 2011
            </h1>
            <p className="text-gray-400 text-xl text-center">
              Here the things started
            </p>
            <div
              className={`absolute bottom-40 left-0 transform transition-all duration-700 ${
                showPopup1
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="absolute top-0 left-5 w-[45px] h-[40px] z-40">
                <img src={sqaurebox} alt="Popup Decoration" className="" />
              </div>
              <div className="absolute top-0 left-4 w-[350px] h-[180px] z-20">
                <img src={sqaurebg} alt="Popup Background" />
              </div>
              <div className="w-[300px] absolute top-20 left-8 z-50 ">
                <div className="w-full flex gap-2 items-center ">
                  <IoIosContact size={60} className="text-white" />
                  <h1 className="w-full text-white text-3xl font-bold">
                    2010 - 2011
                  </h1>
                </div>
              </div>
              <div className="absolute top-32 left-8 w-full h-auto mt-2 pl-2 z-50">
                <p className="w-[300px] text-white text-[10px] md:text-sm">
                  {`Eager to challenge myself, I transitioned to consumer durables, joining Panasonic India as a Regional Credit Controller. I gained insights into route-to-market models and market dynamics, enabling me to empower channel partners to grow through innovative products and strategic schemes.`.slice(
                    0,
                    300
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-[30%] left-[50%] z-50"
          onMouseEnter={() => setShowPopup2(true)}
          onMouseLeave={() => setShowPopup2(false)}
        >
          <img src={ti} alt="" className="w-[280px]" />
          <h1 className="text-5xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#474a4d] to-[#3071a9]">
            2007 - 2010
          </h1>
          <p className="text-gray-400 text-xl text-center">
            Here the things started
          </p>
          <div
            className={`relative bottom-40 left-0 transform transition-all duration-700 ${
              showPopup2
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="absolute top-0 left-5 w-[45px] h-[40px] z-40">
              <img src={sqaurebox} alt="Popup Decoration" className="" />
            </div>
            <div className="absolute top-0 left-4 w-[350px] h-[180px] z-20">
              <img src={sqaurebg} alt="Popup Background" />
            </div>
            <div className="absolute top-20 left-8 z-50 flex flex-col gap-1 items-center">
              <div className="flex gap-2 items-center">
                <IoIosContact size={60} className="text-white" />
                <h1 className="text-white text-3xl font-bold">2007 - 2010</h1>
              </div>
            </div>
            <div className="absolute top-32 left-8 w-full h-auto mt-2 pl-2 z-50">
              <p className="w-[300px] text-white text-[10px] md:text-sm">
                {`A key career milestone was joining Hewlett Packard India as a Collections Analyst. I streamlined client engagement across BFSI, Defence, and commercial sectors, reducing overdue receivables. This showcased my analytical skills, "go-getter" mindset, and disciplined problem-solving.`.slice(
                  0,
                  300
                )}
              </p>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-[15%] left-[25%] z-50"
          onMouseEnter={() => setShowPopup3(true)}
          onMouseLeave={() => setShowPopup3(false)}
        >
          <img src={ti} alt="" className="w-[280px]" />
          <h1 className="text-5xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#474a4d] to-[#3071a9]">
            2004 - 2007
          </h1>
          <p className="text-gray-400 text-xl text-center">
            Here the things started
          </p>
          <div
            className={`relative bottom-60 left-0 transform transition-all duration-700 ${
              showPopup3
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="absolute top-0 left-5 w-[45px] h-[40px] z-40">
              <img src={sqaurebox} alt="Popup Decoration" className="" />
            </div>
            <div className="absolute top-0 left-4 w-[350px] h-[180px] z-20">
              <img src={sqaurebg} alt="Popup Background" />
            </div>
            <div className="absolute top-20 left-8 z-50 flex flex-col gap-1 items-center">
              <div className="flex gap-2 items-center">
                <IoIosContact size={60} className="text-white" />
                <h1 className="text-white text-3xl font-bold">2004 - 2007</h1>
              </div>
            </div>
            <div className="absolute top-32 left-8 w-full h-auto mt-2 pl-2 z-50">
              <p className="w-[300px] text-white text-[10px] md:text-sm">
                {`Contributed to ISP, travel trade, and manufacturing industries (Hathway, ITH, NCR Corporation), advancing through roles that expanded my expertise. From managing credit portfolios to streamlining collections, I drove efficiency, reduced risks, and built strong stakeholder relationships.`.slice(
                  0,
                  300
                )}
              </p>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 z-50"
          onMouseEnter={() => setShowPopup4(true)}
          onMouseLeave={() => setShowPopup4(false)}
        >
          <img src={ti} alt="" className="w-[280px]" />
          <h1 className="text-5xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#474a4d] to-[#3071a9]">
            2001
          </h1>
          <p className="text-gray-400 text-xl text-center">
            Here the things started
          </p>
          <div
            className={`relative bottom-64 left-0 transform transition-all duration-700 ${
              showPopup4
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="absolute top-0 left-5 w-[45px] h-[40px] z-40">
              <img src={sqaurebox} alt="Popup Decoration" className="" />
            </div>
            <div className="absolute top-0 left-4 w-[350px] h-[180px] z-20">
              <img src={sqaurebg} alt="Popup Background" />
            </div>
            <div className="absolute top-20 left-8 z-50 flex flex-col gap-1 items-center">
              <div className="flex gap-2 items-center">
                <IoIosContact size={60} className="text-white" />
                <h1 className="text-white text-3xl font-bold">2001</h1>
              </div>
            </div>
            <div className="absolute top-32 left-8 w-full h-auto mt-2 pl-2 z-50">
              <p className="w-[300px] text-white text-[10px] md:text-sm">
                {`Started my hospitality journey at Park Royal Intercontinental, EROS Group, as a Credit Assistant. I developed expertise in credit analysis, customer communication, and account reconciliation, gaining a strong grasp of financial operations and the importance of maintaining healthy cash flows.`.slice(
                  0,
                  300
                )}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* tablet */}
      <div className="w-full h-auto md:flex lg:hidden flex-col gap-16 justify-center items-center hidden">
        <div className="flex flex-col gap-4">
          <h1 className="text-6xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3071aa] to-[#5878d9]">
            My Timeline
          </h1>
          <p className="text-xl text-gray-400">
          Every great journey is built on a timeline of small achievements.
          </p>
        </div>
        <div className="flex justify-between gap-20">
          <div className="" onClick={() => togglePopup(setShowPopup1)}>
            <div className="relative">
              <img src={ti} alt="" className="w-[280px]" />
              <h1 className="text-5xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#474a4d] to-[#3071a9]">
                2001
              </h1>
              <p className="text-gray-400 text-xl text-center">
                Here the things started
              </p>
              <div
                className={`relative bottom-60 -left-4 transition-all duration-700 ease-in-out ${
                  showPopup1
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                {showPopup1 && (
                  <>
                    <div className="absolute top-0 left-5 w-[35px] h-[30px] z-40">
                      <img
                        src={sqaurebox}
                        alt="Popup Decoration"
                        className=""
                      />
                    </div>
                    <div className="absolute top-0 left-4 w-[320px] h-[220px] z-20">
                      <img src={sqaurebg} alt="Popup Background" />
                    </div>
                    <div className="absolute top-16 left-8 z-50 flex flex-col gap-1 items-center">
                      <div className="flex gap-2 items-center">
                        <IoIosContact size={60} className="text-white" />
                        <h1 className="text-white text-2xl font-bold">
                          2021-Present
                        </h1>
                      </div>
                    </div>
                    <div className="absolute top-28 left-8 w-full h-auto mt-2 z-50">
                      <p className="w-[300px] text-white text-[10px] md:text-sm">
                        {`Started my hospitality journey at Park Royal Intercontinental, EROS Group, as a Credit Assistant. I developed expertise in credit analysis, customer communication, and account reconciliation, gaining a strong grasp of financial operations and the importance of maintaining healthy cash flows.`.slice(
                          0,
                          300
                        )}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="" onClick={() => togglePopup(setShowPopup2)}>
            <div className="relative">
              <img src={ti} alt="" className="w-[280px]" />
              <h1 className="text-5xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#474a4d] to-[#3071a9]">
                2004 - 2007
              </h1>
              <p className="text-gray-400 text-xl text-center">
                Here the things started
              </p>
              <div
                className={`relative bottom-60 -left-4 transition-all duration-700 ease-in-out ${
                  showPopup2
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                {showPopup2 && (
                  <>
                    <div className="absolute top-0 left-5 w-[35px] h-[30px] z-40">
                      <img
                        src={sqaurebox}
                        alt="Popup Decoration"
                        className=""
                      />
                    </div>
                    <div className="absolute top-0 left-4 w-[320px] h-[220px] z-20">
                      <img src={sqaurebg} alt="Popup Background" />
                    </div>
                    <div className="absolute top-16 left-8 z-50 flex flex-col gap-1 items-center">
                      <div className="flex gap-2 items-center">
                        <IoIosContact size={60} className="text-white" />
                        <h1 className="text-white text-2xl font-bold">
                          2004 - 2007
                        </h1>
                      </div>
                    </div>
                    <div className="absolute top-28 left-8 w-full h-auto mt-2 z-50">
                      <p className="w-[300px] text-white text-[10px] md:text-sm">
                        {`Contributed to ISP, travel trade, and manufacturing industries (Hathway, ITH, NCR Corporation), advancing through roles that expanded my expertise. From managing credit portfolios to streamlining collections, I drove efficiency, reduced risks, and built strong stakeholder relationships.`.slice(
                          0,
                          300
                        )}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-20">
          <div className="" onClick={() => togglePopup(setShowPopup3)}>
            <img src={ti} alt="" className="w-[280px]" />
            <h1 className="text-5xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#474a4d] to-[#3071a9]">
              2007 - 2010
            </h1>
            <p className="text-gray-400 text-xl text-center">
              Here the things started
            </p>
            <div
              className={`relative bottom-60 -left-4 transition-all duration-700 ease-in-out ${
                showPopup3
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {showPopup3 && (
                <>
                  <div className="absolute top-0 left-5 w-[35px] h-[30px] z-40">
                    <img src={sqaurebox} alt="Popup Decoration" className="" />
                  </div>
                  <div className="absolute top-0 left-4 w-[320px] h-[220px] z-20">
                    <img src={sqaurebg} alt="Popup Background" />
                  </div>
                  <div className="absolute top-16 left-8 z-50 flex flex-col gap-1 items-center">
                    <div className="flex gap-2 items-center">
                      <IoIosContact size={60} className="text-white" />
                      <h1 className="text-white text-2xl font-bold">
                        2007 - 2010
                      </h1>
                    </div>
                  </div>
                  <div className="absolute top-28 left-8 w-full h-auto mt-2 z-50">
                    <p className="w-[300px] text-white text-[10px] md:text-sm">
                      {`A key career milestone was joining Hewlett Packard India as a Collections Analyst. I streamlined client engagement across BFSI, Defence, and commercial sectors, reducing overdue receivables. This showcased my analytical skills, "go-getter" mindset, and disciplined problem-solving.`.slice(
                        0,
                        300
                      )}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="" onClick={() => togglePopup(setShowPopup4)}>
            <img src={ti} alt="" className="w-[280px]" />
            <h1 className="text-5xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#474a4d] to-[#3071a9]">
              2010 - 2011
            </h1>
            <p className="text-gray-400 text-xl text-center">
              Here the things started
            </p>
            <div
              className={`relative bottom-60 -left-4 transition-all duration-700 ease-in-out ${
                showPopup4
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {showPopup4 && (
                <>
                  <div className="absolute top-0 left-5 w-[35px] h-[30px] z-40">
                    <img src={sqaurebox} alt="Popup Decoration" className="" />
                  </div>
                  <div className="absolute top-0 left-4 w-[320px] h-[220px] z-20">
                    <img src={sqaurebg} alt="Popup Background" />
                  </div>
                  <div className="absolute top-16 left-8 z-50 flex flex-col gap-1 items-center">
                    <div className="flex gap-2 items-center">
                      <IoIosContact size={60} className="text-white" />
                      <h1 className="text-white text-2xl font-bold">
                        2010 - 2011
                      </h1>
                    </div>
                  </div>
                  <div className="absolute top-28 left-8 w-full h-auto mt-2 z-50">
                    <p className="w-[300px] text-white text-[10px] md:text-sm">
                      {`Eager to challenge myself, I transitioned to consumer durables, joining Panasonic India as a Regional Credit Controller. I gained insights into route-to-market models and market dynamics, enabling me to empower channel partners to grow through innovative products and strategic schemes.`.slice(
                        0,
                        300
                      )}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="w-full h-auto flex flex-col gap-16 justify-center items-center sm:hidden">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3071aa] to-[#5878d9]">
            My Timeline
          </h1>
          <p className="text-lg text-center text-gray-400">
          Every great journey is built on a timeline of small achievements.
          </p>
        </div>
        <div className="" onClick={() => togglePopup(setShowPopup1)}>
          <div className="relative">
            <img src={ti} alt="" className="w-[280px]" />
            <h1 className="text-5xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#474a4d] to-[#3071a9]">
              2001
            </h1>
            <p className="text-gray-400 text-xl text-center">
              Here the things started
            </p>
            <div
              className={`relative bottom-60 -left-4 transition-all duration-700 ease-in-out ${
                showPopup1
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {showPopup1 && (
                <>
                  <div className="absolute top-0 left-5 w-[35px] h-[30px] z-40">
                    <img src={sqaurebox} alt="Popup Decoration" className="" />
                  </div>
                  <div className="absolute top-0 left-4 w-[300px] h-[180px] z-20">
                    <img src={sqaurebg} alt="Popup Background" />
                  </div>
                  <div className="absolute top-16 left-8 z-50 flex flex-col gap-1 items-center">
                    <div className="flex gap-2 items-center">
                      <IoIosContact size={60} className="text-white" />
                      <h1 className="text-white text-2xl font-bold">
                        2021-Present
                      </h1>
                    </div>
                  </div>
                  <div className="absolute top-32 left-8 w-full h-auto mt-2 z-50">
                    <p className="w-[250px] text-white text-[11px] md:text-sm">
                      {`Started my hospitality journey at Park Royal Intercontinental, EROS Group, as a Credit Assistant. I developed expertise in credit analysis, customer communication, and account reconciliation, gaining a strong grasp of financial operations and the importance of maintaining healthy cash flows.`.slice(
                        0,
                        300
                      )}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="" onClick={() => togglePopup(setShowPopup2)}>
          <img src={ti} alt="" className="w-[280px]" />
          <h1 className="text-5xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#474a4d] to-[#3071a9]">
            2004 - 2007
          </h1>
          <p className="text-gray-400 text-xl text-center">
            Here the things started
          </p>
          <div
            className={`relative bottom-60 -left-4 transition-all duration-700 ease-in-out ${
              showPopup2
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {showPopup2 && (
              <>
                <div className="absolute top-0 left-5 w-[35px] h-[30px] z-40">
                  <img src={sqaurebox} alt="Popup Decoration" className="" />
                </div>
                <div className="absolute top-0 left-4 w-[300px] h-[180px] z-20">
                  <img src={sqaurebg} alt="Popup Background" />
                </div>
                <div className="absolute top-16 left-8 z-50 flex flex-col gap-1 items-center">
                  <div className="flex gap-2 items-center">
                    <IoIosContact size={60} className="text-white" />
                    <h1 className="text-white text-2xl font-bold">
                      2004 - 2007
                    </h1>
                  </div>
                </div>
                <div className="absolute top-32 left-8 w-full h-auto mt-2 z-50">
                  <p className="w-[250px] text-white text-[11px] md:text-sm">
                    {`Contributed to ISP, travel trade, and manufacturing industries (Hathway, ITH, NCR Corporation), advancing through roles that expanded my expertise. From managing credit portfolios to streamlining collections, I drove efficiency, reduced risks, and built strong stakeholder relationships.`.slice(
                      0,
                      300
                    )}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="" onClick={() => togglePopup(setShowPopup3)}>
          <img src={ti} alt="" className="w-[280px]" />
          <h1 className="text-5xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#474a4d] to-[#3071a9]">
            2007 - 2010
          </h1>
          <p className="text-gray-400 text-xl text-center">
            Here the things started
          </p>
          <div
            className={`relative bottom-60 -left-4 transition-all duration-700 ease-in-out ${
              showPopup3
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {showPopup3 && (
              <>
                <div className="absolute top-0 left-5 w-[35px] h-[30px] z-40">
                  <img src={sqaurebox} alt="Popup Decoration" className="" />
                </div>
                <div className="absolute top-0 left-4 w-[300px] h-[180px] z-20">
                  <img src={sqaurebg} alt="Popup Background" />
                </div>
                <div className="absolute top-16 left-8 z-50 flex flex-col gap-1 items-center">
                  <div className="flex gap-2 items-center">
                    <IoIosContact size={60} className="text-white" />
                    <h1 className="text-white text-2xl font-bold">
                      2007 - 2010
                    </h1>
                  </div>
                </div>
                <div className="absolute top-32 left-8 w-full h-auto mt-2 z-50">
                  <p className="w-[250px] text-white text-[11px] md:text-sm">
                    {`A key career milestone was joining Hewlett Packard India as a Collections Analyst. I streamlined client engagement across BFSI, Defence, and commercial sectors, reducing overdue receivables. This showcased my analytical skills, "go-getter" mindset, and disciplined problem-solving.`.slice(
                      0,
                      300
                    )}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="" onClick={() => togglePopup(setShowPopup4)}>
          <img src={ti} alt="" className="w-[280px]" />
          <h1 className="text-5xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#474a4d] to-[#3071a9]">
            2010 - 2011
          </h1>
          <p className="text-gray-400 text-xl text-center">
            Here the things started
          </p>
          <div
            className={`relative bottom-60 -left-4 transition-all duration-700 ease-in-out ${
              showPopup4
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {showPopup4 && (
              <>
                <div className="absolute top-0 left-5 w-[35px] h-[30px] z-40">
                  <img src={sqaurebox} alt="Popup Decoration" className="" />
                </div>
                <div className="absolute top-0 left-4 w-[300px] h-[180px] z-20">
                  <img src={sqaurebg} alt="Popup Background" />
                </div>
                <div className="absolute top-16 left-8 z-50 flex flex-col gap-1 items-center">
                  <div className="flex gap-2 items-center">
                    <IoIosContact size={60} className="text-white" />
                    <h1 className="text-white text-2xl font-bold">
                      2010 - 2011
                    </h1>
                  </div>
                </div>
                <div className="absolute top-32 left-8 w-full h-auto mt-2 z-50">
                  <p className="w-[250px] text-white text-[11px] md:text-sm">
                    {`Eager to challenge myself, I transitioned to consumer durables, joining Panasonic India as a Regional Credit Controller. I gained insights into route-to-market models and market dynamics, enabling me to empower channel partners to grow through innovative products and strategies.`.slice(
                      0,
                      300
                    )}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
