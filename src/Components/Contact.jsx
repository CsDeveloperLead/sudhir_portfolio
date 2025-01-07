import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Contact = () => {
  const [details, setDetails] = useState({
    name: '',
    email: '',
    message: ''
  })
  

  async function sendEmail() {
    try {
      const response = await axios.post(`${backend}/api/v1/admin/contact-admin`, details)

      if (response.data.status === 200) {
        alert("Message Sent successfully !!")
      }

    } catch (error) {
      console.log("Error while sending email to admin :", error);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="mx-4 md:mx-10 mt-8 md:mt-14 font-satoshi flex flex-col gap-4 md:gap-10">
      <div className="w-full flex md:h-[105px]">
        <h1 className="w-[55%] md:w-[35%] font-semibold text-3xl md:text-7xl lg:text-[95px]">Contact Us</h1>
        <span className="w-[45%] md:w-[65%] border-b-2 border-black md:mt-20"></span>
      </div>
      <div className="flex flex-wrap justify-between items-center my-6 md:my-20 ">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 space-y-6 ">
          {/* Heading */}
          <h1 className="text-4xl md:text-[80px] lg:text-6xl xl:text-7xl font-bold w-full  text-center md:text-start">
            <span className="bg-gradient-to-r from-[#3071AA] to-[#787EFF] bg-clip-text text-transparent">Let’s</span> Collaborate!
          </h1>
          <p className="text-gray-700 text-base md:text-2xl text-center md:text-start w-full md:w-[80%] md:leading-10 py-2 md:py-8">
            Believe in yourself and take charge of your journey. Together, we’ll transform challenges into opportunities and unlock your true potential.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center justify-start space-y-4 md:space-y-0 md:space-x-14 text-sm text-gray-700 md:pb-10">
            <div>
              <p className="font-bold text-center md:text-start">BASED IN</p>
              <p className="text-center md:text-start">New Delhi, India</p>
            </div>
            <span className="mx-6 w-2 h-2 rounded-full bg-[#00ABAE]"></span>
            <div>
              <p className="font-bold text-center md:text-start">EMAIL ME AT</p>
              <p className="text-center md:text-start">sudhirchouhan@hotmail.com</p>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className=" space-x-8 md:hidden flex justify-center items-center">
            <Link to={"https://www.linkedin.com/in/sudhir-kumar-chouhan/"} target="_blank" className="w-16 h-16 rounded-full border border-[#00ABAE] flex items-center justify-center">
              <svg
                width="40"
                height="30"
                viewBox="0 0 51 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.244141 5.99507C0.244141 4.4368 0.807019 3.15125 1.93273 2.13843C3.05843 1.12555 4.52191 0.619141 6.32305 0.619141C8.09206 0.619141 9.5233 1.11775 10.6169 2.11505C11.7426 3.14349 12.3055 4.48355 12.3055 6.13531C12.3055 7.63123 11.7587 8.87779 10.6651 9.87509C9.53942 10.9035 8.05988 11.4178 6.22656 11.4178H6.17831C4.4093 11.4178 2.97806 10.9035 1.88448 9.87509C0.790905 8.84665 0.244141 7.5533 0.244141 5.99507ZM0.87133 46.8989V15.6718H11.5818V46.8989H0.87133ZM17.516 46.8989H28.2264V29.4622C28.2264 28.3714 28.3551 27.5299 28.6124 26.9378C29.0627 25.8782 29.7461 24.9822 30.6628 24.2499C31.5795 23.5175 32.7293 23.1513 34.1123 23.1513C37.7147 23.1513 39.5158 25.5042 39.5158 30.2101V46.8989H50.2263V28.9947C50.2263 24.3823 49.1006 20.8841 46.8491 18.5C44.5976 16.1158 41.6225 14.9238 37.9237 14.9238C33.7746 14.9238 30.5422 16.6534 28.2264 20.1127V20.2062H28.1782L28.2264 20.1127V15.6718H17.516C17.5803 16.669 17.6125 19.7699 17.6125 24.9744C17.6125 30.179 17.5803 37.4871 17.516 46.8989Z"
                  fill="#292929"
                />
              </svg>
            </Link>
          </div>
          <div className=" md:space-x-14 hidden md:flex">
            <Link to={"https://www.linkedin.com/in/sudhir-kumar-chouhan/"} target="_blank" className="group w-24 h-24 rounded-full border border-[#00ABAE] duration-500 md:hover:bg-[#00ABAE] flex items-center justify-center">
              <svg
                width="51"
                height="47"
                viewBox="0 0 51 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.244141 5.99507C0.244141 4.4368 0.807019 3.15125 1.93273 2.13843C3.05843 1.12555 4.52191 0.619141 6.32305 0.619141C8.09206 0.619141 9.5233 1.11775 10.6169 2.11505C11.7426 3.14349 12.3055 4.48355 12.3055 6.13531C12.3055 7.63123 11.7587 8.87779 10.6651 9.87509C9.53942 10.9035 8.05988 11.4178 6.22656 11.4178H6.17831C4.4093 11.4178 2.97806 10.9035 1.88448 9.87509C0.790905 8.84665 0.244141 7.5533 0.244141 5.99507ZM0.87133 46.8989V15.6718H11.5818V46.8989H0.87133ZM17.516 46.8989H28.2264V29.4622C28.2264 28.3714 28.3551 27.5299 28.6124 26.9378C29.0627 25.8782 29.7461 24.9822 30.6628 24.2499C31.5795 23.5175 32.7293 23.1513 34.1123 23.1513C37.7147 23.1513 39.5158 25.5042 39.5158 30.2101V46.8989H50.2263V28.9947C50.2263 24.3823 49.1006 20.8841 46.8491 18.5C44.5976 16.1158 41.6225 14.9238 37.9237 14.9238C33.7746 14.9238 30.5422 16.6534 28.2264 20.1127V20.2062H28.1782L28.2264 20.1127V15.6718H17.516C17.5803 16.669 17.6125 19.7699 17.6125 24.9744C17.6125 30.179 17.5803 37.4871 17.516 46.8989Z"
                  fill="#292929"
                  className="fill-black group-hover:fill-white duration-500"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 mt-8">
          <form className="space-y-8" onSubmit={sendEmail}>
            {/* Name and Email */}
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="w-full">
                <label className="block text-xl font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={details.name}
                  onChange={(e) => setDetails({ ...details, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full p-4 bg-[#e7e7e7] rounded-2xl focus:outline-none"
                />
              </div>
              <div className="w-full mt-4 md:mt-0">
                <label className="block text-xl font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={details.email}
                  onChange={(e) => setDetails({ ...details, email: e.target.value })}
                  placeholder="Where I can reach you"
                  className="w-full p-4 bg-[#e7e7e7] rounded-2xl focus:outline-none"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xl font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows="10"
                value={details.message}
                onChange={(e) => setDetails({ ...details, message: e.target.value })}
                placeholder="Tell me about your project or ask any questions"
                className="w-full p-3 bg-[#e7e7e7] rounded-2xl focus:outline-none"
              ></textarea>
            </div>

            {/* Send Message Button */}
            <div>
              <button
                type="submit"
                className="bg-black text-white py-3 w-[250px] rounded-2xl font-medium hover:opacity-90 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
