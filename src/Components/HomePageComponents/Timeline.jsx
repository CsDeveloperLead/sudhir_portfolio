// import React, { useState } from "react";
// import ti from "../../assets/arrow1.png";
// import sqaurebox from "../../assets/square.png";
// import sqaurebg from "../../assets/box.png";
// import { IoIosContact } from "react-icons/io";
// const Timeline = () => {
//   const [showPopup1, setShowPopup1] = useState(false);
//   const [showPopup2, setShowPopup2] = useState(false);
//   const [showPopup3, setShowPopup3] = useState(false);
//   const [showPopup4, setShowPopup4] = useState(false);

//   const togglePopup = (setShowPopup) => {
//     setShowPopup((prev) => !prev);
//   };

//   return (
//     <div className="md:relative  w-full h-auto md:h-[110vh] overflow-hidden mt-20 mb-40 ">
//       <h1 className="font-satoshi text-5xl text-[#3783c5] font-bold px-10 md:px-8 ">My Timeline</h1>
//       <div className="relative w-full h-full hidden md:block">
//         {/* 2001-2008 */}
//         <div
//           className="absolute bottom-20 w-1/4 h-[260px]"
//           onMouseEnter={() => setShowPopup1(true)}
//           onMouseLeave={() => setShowPopup1(false)}
//         >
//           <img className="w-full h-full" src={ti} alt="Timeline Arrow" />
//           <h1 className='text-black text-center text-3xl font-satoshi font-bold '>2001-2008</h1>
//            {/* <h2 className="text-3xl text-center text-black border-2 border-red-500 font-bold font-satoshi">
//             2001-2008
//           </h2> */}

//           {showPopup1 && (
//             <div className="relative -top-60 -right-20">
//             <div className="absolute top-0 left-4 w-[250px] h-[65px] z-50">
//               <img src={sqaurebox} alt="Popup Decoration" />
//               <div className="w-full flex items-center pl-2 mt-2  rounded-md">
//                 {/* Icon */}
//                 <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
//                   <IoIosContact size={100} className="text-gray-800" />
//                 </div>
//                 {/* Title */}
//                 <h2 className="text-3xl text-center font-bold font-satoshi">
//             2009-2014
//           </h2>
//               </div>

//               {/* extra code */}
//               <div className="w-[200px] h-[80px] mt-2 pl-2 ">
//                 <p className="text-white text-[10px] md:text-sm">
//                   {`Got into a relationship with one of the senior leaders as a mentee. This relationship helped me realize the importance of having a mentor in life/career, and helped sharpen my acquired skills. Since then, I’ve been with many mentors, who were instrumental in shaping who I am today`.slice(
//                     0,
//                     80
//                   )}
//                   ...
//                 </p>
//               </div>
//             </div>
//             <div className="absolute top-0 left-4 w-[250px] h-[180px] z-20">
//               <img src={sqaurebg} alt="Popup Background" />
//             </div>
//           </div>
//           )}
//         </div>

//         {/* 2009-2014 */}
//         <div
//           className="absolute bottom-48 left-[390px] w-1/4 h-[260px] "
//           onMouseEnter={() => setShowPopup2(true)}
//           onMouseLeave={() => setShowPopup2(false)}
//         >
//           <img className="w-full h-full" src={ti} alt="Timeline Arrow" />
//           <h2 className="text-3xl text-center font-bold font-satoshi">
//             2009-2014
//           </h2>
//           {showPopup2 && (
//             <div className="relative -top-60 -right-20">
//               <div className="absolute top-0 left-4 w-[250px] h-[65px] z-50">
//                 <img src={sqaurebox} alt="Popup Decoration" />
//                 <div className="w-full flex items-center pl-2 mt-2  rounded-md">
//                   {/* Icon */}
//                   <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
//                     <IoIosContact size={100} className="text-gray-800" />
//                   </div>
//                   {/* Title */}
//                   <h1 className="ml-3 text-white font-medium text-lg">
//                     2009-2014
//                   </h1>
//                 </div>

//                 {/* extra code */}
//                 <div className="w-[200px] h-[80px] mt-2 pl-2 ">
//                   <p className="text-white text-[10px] md:text-sm">
//                     {`Started journey in hospitality with Park Royal Intercontinental, EROS Group. My career began as a Credit Assistant, where I developed foundational skills in credit analysis, customer communication, and account reconciliation. This role provided me with a deep understanding of financial operations and the importance of maintaining healthy cash flows`.slice(
//                       0,
//                       80
//                     )}
//                     ...
//                   </p>
//                 </div>
//               </div>
//               <div className="absolute top-0 left-4 w-[250px] h-[180px] z-20">
//                 <img src={sqaurebg} alt="Popup Background" />
//               </div>
//             </div>
//           )}
//         </div>

//         {/* 2015-2020 */}
//         <div
//           className="absolute top-32 left-[790px] w-1/4 h-[260px] z-50 "
//           onMouseEnter={() => setShowPopup3(true)}
//           onMouseLeave={() => setShowPopup3(false)}
//         >
//           <img className="w-full h-full  " src={ti} alt="Timeline Arrow" />
//           <h2 className="text-3xl text-center font-bold font-satoshi">
//             2015-2020
//           </h2>
//           {showPopup3 && (
//             <div className="relative -top-60 -right-20">
//               <div className="absolute top-0 left-4 w-[250px] h-[65px] z-50">
//                 <img src={sqaurebox} alt="Popup Decoration" />
//                 <div className="w-full flex items-center pl-2 mt-2  rounded-md">
//                   {/* Icon */}
//                   <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
//                     <IoIosContact size={100} className="text-gray-800" />
//                   </div>
//                   {/* Title */}
//                   <h1 className="ml-3 text-white font-medium text-lg">
//                     2015-2020
//                   </h1>
//                 </div>

//                 {/* extra code */}
//                 <div className="w-[200px] h-[80px] mt-2 pl-2 ">
//                   <p className="text-white text-[10px] md:text-sm">
//                     {`Blown up my comfort zone and embarked on a journey to change the way “India Geo” has been looked upon from a cash acceleration perspective`.slice(
//                       0,
//                       80
//                     )}
//                     ...
//                   </p>
//                 </div>
//               </div>
//               <div className="absolute top-0 left-4 w-[250px] h-[180px] z-20">
//                 <img src={sqaurebg} alt="Popup Background" />
//               </div>
//             </div>
//           )}
//         </div>

//         {/* 2021-Present */}
//         <div
//           className="absolute top-0 left-[1150px] w-1/4 h-[260px]"
//           onMouseEnter={() => setShowPopup4(true)}
//           onMouseLeave={() => setShowPopup4(false)}
//         >
//           <img className="w-full h-full" src={ti} alt="Timeline Arrow" />
//           <h2 className="text-3xl text-center font-bold font-satoshi">
//             2021-Present
//           </h2>
//           {showPopup4 && (
//             <div className="relative -top-60 -right-20">
//               <div className="absolute top-0 left-4 w-[250px] h-[65px] z-50">
//                 <img src={sqaurebox} alt="Popup Decoration" />
//                 <div className="w-full flex items-center pl-2 mt-2  rounded-md">
//                   {/* Icon */}
//                   <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
//                     <IoIosContact size={100} className="text-gray-800" />
//                   </div>
//                   {/* Title */}
//                   <h1 className="ml-3 text-white font-medium text-lg">
//                     2001-2008
//                   </h1>
//                 </div>

//                 {/* extra code */}
//                 <div className="w-[200px] h-[80px] mt-2 pl-2 ">
//                   <p className="text-white text-[10px] md:text-sm">
//                     {`Thought to challenge myself in different areas of business, hence decided to move on and embark on a journey to contribute in consumer durables (Panasonic India as Regional credit controller). Gained insights on route-to-market business models and how to test the mood of the market, which can help encourage channel business partners to flourish their businesses with new innovative products and schemes`.slice(
//                       0,
//                       80
//                     )}
//                     ...
//                   </p>
//                 </div>
//               </div>
//               <div className="absolute top-0 left-4 w-[250px] h-[180px] z-20">
//                 <img src={sqaurebg} alt="Popup Background" />
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Mobile */}
//       <div className="w-full flex flex-col gap-16 md:hidden px-4 mt-6">
//         <div>
//           <img
//             className="w-full h-full"
//             src={ti}
//             alt="Timeline Arrow"
//             onClick={() => togglePopup(setShowPopup1)}
//           />
//           <h2 className="text-3xl text-center font-bold font-satoshi">
//             2001-2008
//           </h2>
//           {showPopup1 && (
//             <div className="relative -top-64 -right-16 ">
//               <div className="absolute top-0 left-4 w-[200px] h-[65px] z-50">
//                 <img src={sqaurebox} alt="Popup Decoration" />
//                 <div className="w-full flex items-center pl-2 mt-2  rounded-md">
//                   {/* Icon */}
//                   <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
//                     <IoIosContact size={100} className="text-gray-800" />
//                   </div>
//                   {/* Title */}
//                   <h1 className="ml-3 text-white font-medium text-lg">
//                     2001-2008
//                   </h1>
//                 </div>

//                 {/* extra code */}
//                 <div className="w-[200px] h-[80px] mt-2 pl-2 ">
//                   <p className="text-white text-[10px] md:text-sm">
//                     {`Started journey in hospitality with Park Royal Intercontinental, EROS Group. My career began as a Credit Assistant, where I developed foundational skills in credit analysis, customer communication, and account reconciliation. This role provided me with a deep understanding of financial operations and the importance of maintaining healthy cash flows`.slice(
//                       0,
//                       80
//                     )}
//                     ...
//                   </p>
//                 </div>
//               </div>
//               <div className="absolute top-0 left-4 w-[250px] h-[180px] z-20">
//                 <img src={sqaurebg} alt="Popup Background" />
//               </div>
//             </div>
//           )}
//         </div>

//         <div>
//           <img
//             className="w-full h-full"
//             src={ti}
//             alt="Timeline Arrow"
//             onClick={() => togglePopup(setShowPopup2)}
//           />
//           <h2 className="text-3xl text-center font-bold font-satoshi">
//             2009-2014
//           </h2>
//           {showPopup2 && (
//             <div className="relative -top-64 -right-16 ">
//               <div className="absolute top-0 left-4 w-[200px] h-[65px] z-50">
//                 <img src={sqaurebox} alt="Popup Decoration" />
//                 <div className="w-full flex items-center pl-2 mt-2  rounded-md">
//                   {/* Icon */}
//                   <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
//                     <IoIosContact size={100} className="text-gray-800" />
//                   </div>
//                   {/* Title */}
//                   <h1 className="ml-3 text-white font-medium text-lg">
//                     2001-2008
//                   </h1>
//                 </div>

//                 {/* extra code */}
//                 <div className="w-[200px] h-[80px] mt-2 pl-2 ">
//                   <p className="text-white text-[10px] md:text-sm">
//                     {`Started journey in hospitality with Park Royal Intercontinental, EROS Group. My career began as a Credit Assistant, where I developed foundational skills in credit analysis, customer communication, and account reconciliation. This role provided me with a deep understanding of financial operations and the importance of maintaining healthy cash flows`.slice(
//                       0,
//                       80
//                     )}
//                     ...
//                   </p>
//                 </div>
//               </div>
//               <div className="absolute top-0 left-4 w-[250px] h-[180px] z-20">
//                 <img src={sqaurebg} alt="Popup Background" />
//               </div>
//             </div>
//           )}
//         </div>

//         <div>
//           <img
//             className="w-full h-full"
//             src={ti}
//             alt="Timeline Arrow"
//             onClick={() => togglePopup(setShowPopup3)}
//           />
//           <h2 className="text-3xl text-center font-bold font-satoshi">
//             2015-2020
//           </h2>
//           {showPopup3 && (
//             <div className="relative -top-64 -right-16 ">
//               <div className="absolute top-0 left-4 w-[200px] h-[65px] z-50">
//                 <img src={sqaurebox} alt="Popup Decoration" />
//                 <div className="w-full flex items-center pl-2 mt-2  rounded-md">
//                   {/* Icon */}
//                   <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
//                     <IoIosContact size={100} className="text-gray-800" />
//                   </div>
//                   {/* Title */}
//                   <h1 className="ml-3 text-white font-medium text-lg">
//                     2015-2020
//                   </h1>
//                 </div>

//                 {/* extra code */}
//                 <div className="w-[200px] h-[80px] mt-2 pl-2 ">
//                   <p className="text-white text-[10px] md:text-sm">
//                     {`Started journey in hospitality with Park Royal Intercontinental, EROS Group. My career began as a Credit Assistant, where I developed foundational skills in credit analysis, customer communication, and account reconciliation. This role provided me with a deep understanding of financial operations and the importance of maintaining healthy cash flows`.slice(
//                       0,
//                       80
//                     )}
//                     ...
//                   </p>
//                 </div>
//               </div>
//               <div className="absolute top-0 left-4 w-[250px] h-[180px] z-20">
//                 <img src={sqaurebg} alt="Popup Background" />
//               </div>
//             </div>
//           )}
//         </div>

//         <div>
//           <img
//             className="w-full h-full"
//             src={ti}
//             alt="Timeline Arrow"
//             onClick={() => togglePopup(setShowPopup4)}
//           />
//           <h2 className="text-3xl text-center font-bold font-satoshi">
//             2021-Present
//           </h2>
//           {showPopup4 && (
//             <div className="relative -top-64 -right-16 ">
//               <div className="absolute top-0 left-4 w-[200px] h-[65px] z-50">
//                 <img src={sqaurebox} alt="Popup Decoration" />
//                 <div className="w-full flex items-center pl-2 mt-2  rounded-md">
//                   {/* Icon */}
//                   <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
//                     <IoIosContact size={100} className="text-gray-800" />
//                   </div>
//                   {/* Title */}
//                   <h1 className="ml-3 text-white font-medium text-lg">
//                     2021-Present
//                   </h1>
//                 </div>

//                 {/* extra code */}
//                 <div className="w-[200px] h-[80px] mt-2 pl-2 ">
//                   <p className="text-white text-[10px] md:text-sm">
//                     {`Blown up my comfort zone and embarked on a journey to change the way “India Geo” has been looked upon from a cash acceleration perspectiveStarted journey in hospitality with Park Royal Intercontinental, EROS Group. My career began as a Credit Assistant, where I developed foundational skills in credit analysis, customer communication, and account reconciliation. This role provided me with a deep understanding of financial operations and the importance of maintaining healthy cash flows`.slice(
//                       0,
//                       80
//                     )}
//                     ...
//                   </p>
//                 </div>
//               </div>
//               <div className="absolute top-0 left-4 w-[250px] h-[180px] z-20">
//                 <img src={sqaurebg} alt="Popup Background" />
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Timeline;

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
    <div className="px-4 md:px-20">
      {/* desktop */}
      <div className="w-full h-screen relative font-satoshi hidden lg:block ">
        <div className="absolute top-6 left-10 flex flex-col gap-2">
          <h1 className="text-[80px] font-bold text-[#3071aa]">My Timeline</h1>
          <p className="text-2xl text-gray-400">
            I turn ideas into impactful designs
          </p>
        </div>
        <div className="absolute bottom-[45%] left-[75%] z-50" onMouseEnter={() => setShowPopup1(true)} onMouseLeave={() => setShowPopup1(false)}>
          <div className="relative">
          <img src={ti} alt="" className="w-[280px]" />
          <h1 className="text-5xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#474a4d] to-[#3071a9]">
           2010 - 2011
          </h1>
          <p className="text-gray-400 text-xl text-center">Here the things started</p>
          {showPopup1 && (
            <div className="relative bottom-40 left-0">
              <div className="absolute top-0 left-5 w-[45px] h-[40px] z-40">
                <img src={sqaurebox} alt="Popup Decoration" className="" />
              </div>
              <div className="absolute top-0 left-4 w-[350px] h-[180px] z-20">
                <img src={sqaurebg} alt="Popup Background" />
              </div>
              <div className="absolute top-20 left-8 z-50 flex flex-col gap-1 items-center">
                <div className="flex gap-2 items-center">
                <IoIosContact size={60} className="text-white" />
                <h1 className="text-white text-3xl font-bold">2010 - 2011</h1>
                </div>
               
                {/* <p className="text-xl font-bold text-white">Day during the start were</p> */}
              </div>
              <div className=" absolute top-32 left-8 w-full h-auto mt-2 pl-2 z-50">
                  <p className="w-[300px] text-white text-[10px] md:text-sm">
                    {`Eager to challenge myself, I transitioned to consumer durables, joining Panasonic India as a Regional Credit Controller. I gained insights into route-to-market models and market dynamics, enabling me to empower channel partners to grow through innovative products and strategic schemes.`.slice(
                      0,
                      300
                    )}
                  
                  </p>
                </div>
            </div>
          )}
          </div>

        </div>
        <div className="absolute bottom-[30%] left-[50%] z-50" onMouseEnter={() => setShowPopup2(true)} onMouseLeave={() => setShowPopup2(false)}>
          <img src={ti} alt="" className="w-[280px]" />
          <h1 className="text-5xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#474a4d] to-[#3071a9]">
           2007 - 2010
          </h1>
          <p className="text-gray-400 text-xl text-center">Here the things started</p>
          {showPopup2 && (
            <div className="relative bottom-40 left-0">
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
              <div className=" absolute top-32 left-8 w-full h-auto mt-2 pl-2 z-50">
                  <p className="w-[300px] text-white text-[10px] md:text-sm">
                    {`A key career milestone was joining Hewlett Packard India as a Collections Analyst. I streamlined client engagement across BFSI, Defence, and commercial sectors, reducing overdue receivables. This showcased my analytical skills, "go-getter" mindset, and disciplined problem-solving.`.slice(
                      0,
                      300
                    )}
                  
                  </p>
                </div>
            </div>
          )}
        </div>
        <div className="absolute bottom-[15%] left-[25%] z-50" onMouseEnter={() => setShowPopup3(true)} onMouseLeave={() => setShowPopup3(false)}>
          <img src={ti} alt="" className="w-[280px]" />
          <h1 className="text-5xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#474a4d] to-[#3071a9]">
           2004 - 2007
          </h1>
          <p className="text-gray-400 text-xl text-center">Here the things started</p>
          {showPopup3 && (
            <div className="relative bottom-60 left-0">
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
              <div className=" absolute top-32 left-8 w-full h-auto mt-2 pl-2 z-50">
                  <p className="w-[300px] text-white text-[10px] md:text-sm">
                    {`Contributed to ISP, travel trade, and manufacturing industries (Hathway, ITH, NCR Corporation), advancing through roles that expanded my expertise. From managing credit portfolios to streamlining collections, I drove efficiency, reduced risks, and built strong stakeholder relationships.`.slice(
                      0,
                      300
                    )}
                   
                  </p>
                </div>
            </div>
          )}
        </div>
        <div className="absolute bottom-0 left-0 z-50" onMouseEnter={() => setShowPopup4(true)} onMouseLeave={() => setShowPopup4(false)}>
          <img src={ti} alt="" className="w-[280px]" />
          <h1 className="text-5xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#474a4d] to-[#3071a9]">
           2001
          </h1>
          <p className="text-gray-400 text-xl text-center">Here the things started</p>
          {showPopup4 && (
            <div className="relative bottom-64 left-0">
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
               
                {/* <p className="text-xl font-bold text-white">Start of the Journey</p> */}
              </div>
              <div className=" absolute top-32 left-8 w-full h-auto mt-2 pl-2 z-50">
                  <p className="w-[300px] text-white text-[10px] md:text-sm">
                    {`Started my hospitality journey at Park Royal Intercontinental, EROS Group, as a Credit Assistant. I developed expertise in credit analysis, customer communication, and account reconciliation, gaining a strong grasp of financial operations and the importance of maintaining healthy cash flows.`.slice(
                      0,
                      300
                    )}
                    
                  </p>
                </div>
            </div>
          )}
        </div>
      </div>
      {/* tablet */}
      <div className="w-full h-auto md:flex lg:hidden flex-col gap-16 justify-center items-center hidden">
      <div className="flex flex-col gap-4">
          <h1 className="text-6xl text-center font-bold text-[#3071aa]">My Timeline</h1>
          <p className="text-2xl text-gray-400">
            I turn ideas into impactful designs
          </p>
        </div>
        <div className="flex justify-between gap-20">
        <div className="" onClick={() => togglePopup(setShowPopup1)} >
          <div className="relative">
          <img src={ti} alt="" className="w-[280px]" />
          <h1 className="text-5xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#474a4d] to-[#3071a9]">
           2001
          </h1>
          <p className="text-gray-400 text-xl text-center">Here the things started</p>
          {showPopup1 && (
            <div className="relative bottom-60 -left-4">
              <div className="absolute top-0 left-5 w-[35px] h-[30px] z-40">
                <img src={sqaurebox} alt="Popup Decoration" className="" />
              </div>
              <div className="absolute top-0 left-4 w-[320px] h-[220px] z-20">
                <img src={sqaurebg} alt="Popup Background" />
              </div>
              <div className="absolute top-16 left-8 z-50 flex flex-col gap-1 items-center">
                <div className="flex gap-2 items-center">
                <IoIosContact size={60} className="text-white" />
                <h1 className="text-white text-2xl font-bold">2021-Present</h1>
                </div>
               
                {/* <p className="text-xl font-bold text-white">Day during the start were</p> */}
              </div>
              <div className=" absolute top-28 left-8 w-full h-auto mt-2  z-50">
                  <p className="w-[300px] text-white text-[10px] md:text-sm">
                    {`Started my hospitality journey at Park Royal Intercontinental, EROS Group, as a Credit Assistant. I developed expertise in credit analysis, customer communication, and account reconciliation, gaining a strong grasp of financial operations and the importance of maintaining healthy cash flows.`.slice(
                      0,
                      300
                    )}
                  
                  </p>
                </div>
            </div>
          )}
          </div>

        </div>
        <div className="" onClick={() => togglePopup(setShowPopup2)}>
          <img src={ti} alt="" className="w-[280px]" />
          <h1 className="text-5xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#474a4d] to-[#3071a9]">
           2004 - 2007
          </h1>
          <p className="text-gray-400 text-xl text-center">Here the things started</p>
          {showPopup2 && (
            <div className="relative bottom-60 -left-4">
              <div className="absolute top-0 left-5 w-[35px] h-[30px] z-40">
                <img src={sqaurebox} alt="Popup Decoration" className="" />
              </div>
              <div className="absolute top-0 left-4 w-[320px] h-[220px] z-20">
                <img src={sqaurebg} alt="Popup Background" />
              </div>
              <div className="absolute top-16 left-8 z-50 flex flex-col gap-1 items-center">
                <div className="flex gap-2 items-center">
                <IoIosContact size={60} className="text-white" />
                <h1 className="text-white text-2xl font-bold">2004 - 2007</h1>
                </div>
               
                {/* <p className="text-xl font-bold text-white">Day during the start were</p> */}
              </div>
              <div className=" absolute top-28 left-8 w-full h-auto mt-2 z-50">
              <p className="w-[300px] text-white text-[10px] md:text-sm">
                    {`Contributed to ISP, travel trade, and manufacturing industries (Hathway, ITH, NCR Corporation), advancing through roles that expanded my expertise. From managing credit portfolios to streamlining collections, I drove efficiency, reduced risks, and built strong stakeholder relationships.`.slice(
                      0,
                      300
                    )}
                   
                  </p>
                </div>
            </div>
          )}
        </div>
        </div>
        <div className="flex justify-between gap-10">
        <div className="" onClick={() => togglePopup(setShowPopup3)}>
          <img src={ti} alt="" className="w-[280px]" />
          <h1 className="text-5xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#474a4d] to-[#3071a9]">
           2007 - 2010
          </h1>
          <p className="text-gray-400 text-xl text-center">Here the things started</p>
          {showPopup3 && (
            <div className="relative bottom-60 -left-4">
              <div className="absolute top-0 left-5 w-[35px] h-[30px] z-40">
                <img src={sqaurebox} alt="Popup Decoration" className="" />
              </div>
              <div className="absolute top-0 left-4 w-[320px] h-[220px] z-20">
                <img src={sqaurebg} alt="Popup Background" />
              </div>
              <div className="absolute top-16 left-8 z-50 flex flex-col gap-1 items-center">
                <div className="flex gap-2 items-center">
                <IoIosContact size={60} className="text-white" />
                <h1 className="text-white text-2xl font-bold">2007 - 2010</h1>
                </div>
               
                {/* <p className="text-xl font-bold text-white">Day during the start were</p> */}
              </div>
              <div className=" absolute top-28 left-8 w-full h-auto mt-2  z-50">
              <p className="w-[300px] text-white text-[10px] md:text-sm">
                    {`A key career milestone was joining Hewlett Packard India as a Collections Analyst. I streamlined client engagement across BFSI, Defence, and commercial sectors, reducing overdue receivables. This showcased my analytical skills, "go-getter" mindset, and disciplined problem-solving.`.slice(
                      0,
                      300
                    )}
                   
                  </p>
                </div>
            </div>
          )}
        </div>
        <div className="" onClick={() => togglePopup(setShowPopup4)}>
          <img src={ti} alt="" className="w-[280px]" />
          <h1 className="text-5xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#474a4d] to-[#3071a9]">
           2010 - 2011
          </h1>
          <p className="text-gray-400 text-xl text-center">Here the things started</p>
          {showPopup4 && (
            <div className="relative bottom-60 -left-4">
              <div className="absolute top-0 left-5 w-[35px] h-[30px] z-40">
                <img src={sqaurebox} alt="Popup Decoration" className="" />
              </div>
              <div className="absolute top-0 left-4 w-[320px] h-[220px] z-20">
                <img src={sqaurebg} alt="Popup Background" />
              </div>
              <div className="absolute top-16 left-8 z-50 flex flex-col gap-1 items-center">
                <div className="flex gap-2 items-center">
                <IoIosContact size={60} className="text-white" />
                <h1 className="text-white text-2xl font-bold">2010 - 2011</h1>
                </div>
               
                {/* <p className="text-xl font-bold text-white">Day during the start were</p> */}
              </div>
              <div className=" absolute top-28 left-8 w-full h-auto mt-2  z-50">
              <p className="w-[300px] text-white text-[10px] md:text-sm">
                    {`Eager to challenge myself, I transitioned to consumer durables, joining Panasonic India as a Regional Credit Controller. I gained insights into route-to-market models and market dynamics, enabling me to empower channel partners to grow through innovative products and strategic schemes.`.slice(
                      0,
                      300
                    )}
                  
                  </p>
                </div>
            </div>
          )}
        </div>
        </div>
      </div>

      {/* mobile */}
      <div className="w-full h-auto flex flex-col gap-16 justify-center items-center sm:hidden">
      <div className="flex flex-col gap-4">
          <h1 className="text-5xl text-center font-bold text-[#3071aa]">My Timeline</h1>
          <p className="text-xl text-gray-400">
            I turn ideas into impactful designs
          </p>
        </div>
      <div className="" onClick={() => togglePopup(setShowPopup1)} >
          <div className="relative">
          <img src={ti} alt="" className="w-[280px]" />
          <h1 className="text-5xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#474a4d] to-[#3071a9]">
           2001
          </h1>
          <p className="text-gray-400 text-xl text-center">Here the things started</p>
          {showPopup1 && (
            <div className="relative bottom-60 -left-4">
              <div className="absolute top-0 left-5 w-[35px] h-[30px] z-40">
                <img src={sqaurebox} alt="Popup Decoration" className="" />
              </div>
              <div className="absolute top-0 left-4 w-[300px] h-[180px] z-20">
                <img src={sqaurebg} alt="Popup Background" />
              </div>
              <div className="absolute top-16 left-8 z-50 flex flex-col gap-1 items-center">
                <div className="flex gap-2 items-center">
                <IoIosContact size={60} className="text-white" />
                <h1 className="text-white text-2xl font-bold">2021-Present</h1>
                </div>
               
                {/* <p className="text-xl font-bold text-white">Day during the start were</p> */}
              </div>
              <div className=" absolute top-32 left-8 w-full h-auto mt-2  z-50">
                  <p className="w-[250px] text-white text-[11px] md:text-sm">
                    {`Started my hospitality journey at Park Royal Intercontinental, EROS Group, as a Credit Assistant. I developed expertise in credit analysis, customer communication, and account reconciliation, gaining a strong grasp of financial operations and the importance of maintaining healthy cash flows.`.slice(
                      0,
                      300
                    )}
                  </p>
                </div>
            </div>
          )}
          </div>

        </div>
        <div className="" onClick={() => togglePopup(setShowPopup2)}>
          <img src={ti} alt="" className="w-[280px]" />
          <h1 className="text-5xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#474a4d] to-[#3071a9]">
           2004 - 2007
          </h1>
          <p className="text-gray-400 text-xl text-center">Here the things started</p>
          {showPopup2 && (
            <div className="relative bottom-60 -left-4">
              <div className="absolute top-0 left-5 w-[35px] h-[30px] z-40">
                <img src={sqaurebox} alt="Popup Decoration" className="" />
              </div>
              <div className="absolute top-0 left-4 w-[300px] h-[180px] z-20">
                <img src={sqaurebg} alt="Popup Background" />
              </div>
              <div className="absolute top-16 left-8 z-50 flex flex-col gap-1 items-center">
                <div className="flex gap-2 items-center">
                <IoIosContact size={60} className="text-white" />
                <h1 className="text-white text-2xl font-bold">2004 - 2007</h1>
                </div>
               
                {/* <p className="text-xl font-bold text-white">Day during the start were</p> */}
              </div>
              <div className=" absolute top-32 left-8 w-full h-auto mt-2 z-50">
              <p className="w-[250px] text-white text-[11px] md:text-sm">
                    {`Contributed to ISP, travel trade, and manufacturing industries (Hathway, ITH, NCR Corporation), advancing through roles that expanded my expertise. From managing credit portfolios to streamlining collections, I drove efficiency, reduced risks, and built strong stakeholder relationships.`.slice(
                      0,
                      300
                    )}
                   
                  </p>
                </div>
            </div>
          )}
        </div>
        <div className="" onClick={() => togglePopup(setShowPopup3)}>
          <img src={ti} alt="" className="w-[280px]" />
          <h1 className="text-5xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#474a4d] to-[#3071a9]">
           2007 - 2010
          </h1>
          <p className="text-gray-400 text-xl text-center">Here the things started</p>
          {showPopup3 && (
            <div className="relative bottom-60 -left-4">
              <div className="absolute top-0 left-5 w-[35px] h-[30px] z-40">
                <img src={sqaurebox} alt="Popup Decoration" className="" />
              </div>
              <div className="absolute top-0 left-4 w-[300px] h-[180px] z-20">
                <img src={sqaurebg} alt="Popup Background" />
              </div>
              <div className="absolute top-16 left-8 z-50 flex flex-col gap-1 items-center">
                <div className="flex gap-2 items-center">
                <IoIosContact size={60} className="text-white" />
                <h1 className="text-white text-2xl font-bold">2007 - 2010</h1>
                </div>
               
                {/* <p className="text-xl font-bold text-white">Day during the start were</p> */}
              </div>
              <div className=" absolute top-32 left-8 w-full h-auto mt-2  z-50">
              <p className="w-[250px] text-white text-[11px] md:text-sm">
                    {`A key career milestone was joining Hewlett Packard India as a Collections Analyst. I streamlined client engagement across BFSI, Defence, and commercial sectors, reducing overdue receivables. This showcased my analytical skills, "go-getter" mindset, and disciplined problem-solving.`.slice(
                      0,
                      300
                    )}
                   
                  </p>
                </div>
            </div>
          )}
        </div>
        <div className="" onClick={() => togglePopup(setShowPopup4)}>
          <img src={ti} alt="" className="w-[280px]" />
          <h1 className="text-5xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#474a4d] to-[#3071a9]">
           2010 - 2011
          </h1>
          <p className="text-gray-400 text-xl text-center">Here the things started</p>
          {showPopup4 && (
            <div className="relative bottom-60 -left-4">
              <div className="absolute top-0 left-5 w-[35px] h-[30px] z-40">
                <img src={sqaurebox} alt="Popup Decoration" className="" />
              </div>
              <div className="absolute top-0 left-4 w-[300px] h-[180px] z-20">
                <img src={sqaurebg} alt="Popup Background" />
              </div>
              <div className="absolute top-16 left-8 z-50 flex flex-col gap-1 items-center">
                <div className="flex gap-2 items-center">
                <IoIosContact size={60} className="text-white" />
                <h1 className="text-white text-2xl font-bold">2021-Present</h1>
                </div>
               
                {/* <p className="text-xl font-bold text-white">Day during the start were</p> */}
              </div>
              <div className=" absolute top-32 left-8 w-full h-auto mt-2  z-50">
              <p className="w-[250px] text-white text-[11px] md:text-sm">
                    {`Eager to challenge myself, I transitioned to consumer durables, joining Panasonic India as a Regional Credit Controller. I gained insights into route-to-market models and market dynamics, enabling me to empower channel partners to grow through innovative products and strategies.`.slice(
                      0,
                      300
                    )}
                  
                  </p>
                </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Timeline;
