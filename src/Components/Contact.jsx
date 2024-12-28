import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="mx-4 md:mx-10 mt-8 md:mt-14 font-satoshi flex flex-col gap-4 md:gap-10">
      <div className="w-full flex md:h-[105px]">
        <h1 className="w-[55%] md:w-[35%] font-semibold text-3xl md:text-[95px]">Contact Us</h1>
        <span className="w-[45%] md:w-[65%] border-b-2 border-black md:mt-10"></span>
      </div>
      <div className="flex flex-wrap justify-between items-center my-6 md:my-20 ">
        {/* Left Section */}
        <div className="w-full md:w-1/2 space-y-6 ">
          {/* Heading */}
          <h1 className="text-4xl md:text-[80px] font-bold w-full  text-center md:text-start">
            <span className="bg-gradient-to-r from-[#3071AA] to-[#787EFF] bg-clip-text text-transparent">Let’s</span> Collaborate!
          </h1>
          <p className="text-gray-700 text-base md:text-2xl text-center md:text-start w-full md:w-[80%] md:leading-10 py-2 md:py-8">
            Tortor porttitor tortor ut vitae commodo et. Et morbi at felis
            vestibulum pulvinar libero ut netus neque. Eget quis condimentum
            diam et
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
              <p className="text-center md:text-start">sample@gmail.com</p>
            </div>
            <span className="mx-6 w-2 h-2 rounded-full bg-[#00ABAE]"></span>
            <div>
              <p className="font-bold text-center md:text-start">BUSINESS NUMBER</p>
              <p className="text-center md:text-start">+1 234 1255 1222</p>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className=" space-x-8 md:hidden flex">
            <div className="w-16 h-16 rounded-full border border-[#00ABAE] flex items-center justify-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 55 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M41.9439 10.055C41.3068 10.055 40.684 10.2439 40.1543 10.5978C39.6246 10.9518 39.2118 11.4548 38.968 12.0434C38.7242 12.632 38.6604 13.2796 38.7847 13.9045C38.909 14.5293 39.2157 15.1032 39.6662 15.5537C40.1167 16.0042 40.6906 16.311 41.3155 16.4353C41.9403 16.5595 42.5879 16.4957 43.1765 16.252C43.7651 16.0082 44.2681 15.5953 44.6221 15.0656C44.976 14.5359 45.1649 13.9131 45.1649 13.2761C45.1649 12.4218 44.8256 11.6025 44.2215 10.9984C43.6174 10.3944 42.7981 10.055 41.9439 10.055ZM54.2913 16.5508C54.2391 14.3237 53.822 12.1203 53.0565 10.0282C52.374 8.23814 51.3118 6.61725 49.9428 5.27708C48.6137 3.90121 46.989 2.84564 45.1918 2.19022C43.1052 1.40149 40.8993 0.974827 38.6691 0.928632C35.8238 0.767578 34.9112 0.767578 27.6101 0.767578C20.309 0.767578 19.3964 0.767578 16.5511 0.928632C14.3209 0.974827 12.115 1.40149 10.0284 2.19022C8.23447 2.85228 6.61121 3.90694 5.27732 5.27708C3.90146 6.60625 2.84589 8.23091 2.19046 10.0282C1.40173 12.1147 0.975071 14.3206 0.928876 16.5508C0.767822 19.3961 0.767822 20.3087 0.767822 27.6098C0.767822 34.9109 0.767822 35.8236 0.928876 38.6689C0.975071 40.899 1.40173 43.105 2.19046 45.1915C2.84589 46.9888 3.90146 48.6134 5.27732 49.9426C6.61121 51.3127 8.23447 52.3674 10.0284 53.0295C12.115 53.8182 14.3209 54.2449 16.5511 54.291C19.3964 54.4521 20.309 54.4521 27.6101 54.4521C34.9112 54.4521 35.8238 54.4521 38.6691 54.291C40.8993 54.2449 43.1052 53.8182 45.1918 53.0295C46.989 52.374 48.6137 51.3185 49.9428 49.9426C51.3178 48.6074 52.381 46.9851 53.0565 45.1915C53.822 43.0994 54.2391 40.896 54.2913 38.6689C54.2913 35.8236 54.4523 34.9109 54.4523 27.6098C54.4523 20.3087 54.4524 19.3961 54.2913 16.5508ZM49.4597 38.3467C49.4401 40.0506 49.1315 41.7388 48.547 43.3394C48.1185 44.5076 47.4301 45.5631 46.5339 46.4263C45.6632 47.3134 44.6099 48.0004 43.447 48.4394C41.8464 49.0239 40.1582 49.3325 38.4544 49.3521C35.7701 49.4863 34.777 49.5131 27.7175 49.5131C20.6579 49.5131 19.6648 49.5131 16.9805 49.3521C15.2114 49.3852 13.4497 49.1128 11.7731 48.5468C10.6613 48.0853 9.65625 47.4001 8.8205 46.5336C7.92958 45.6713 7.24981 44.6149 6.83417 43.4468C6.17884 41.8232 5.81536 40.0967 5.76048 38.3467C5.76048 35.6625 5.59943 34.6694 5.59943 27.6098C5.59943 20.5503 5.59943 19.5572 5.76048 16.8729C5.77251 15.131 6.09051 13.4048 6.69996 11.7729C7.17251 10.6399 7.89784 9.62998 8.8205 8.82026C9.63601 7.89733 10.6439 7.16435 11.7731 6.67288C13.4093 6.08246 15.1338 5.77387 16.8732 5.76024C19.5574 5.76024 20.5506 5.59919 27.6101 5.59919C34.6696 5.59919 35.6628 5.59918 38.347 5.76024C40.0509 5.77978 41.7391 6.08838 43.3397 6.67288C44.5594 7.12558 45.6542 7.86158 46.5339 8.82026C47.4135 9.64479 48.1008 10.6529 48.547 11.7729C49.1436 13.4074 49.4524 15.133 49.4597 16.8729C49.5939 19.5572 49.6207 20.5503 49.6207 27.6098C49.6207 34.6694 49.5939 35.6625 49.4597 38.3467ZM27.6101 13.8398C24.8878 13.8451 22.2281 14.6572 19.9672 16.1735C17.7062 17.6898 15.9455 19.8422 14.9073 22.3588C13.8692 24.8754 13.6004 27.6433 14.1347 30.3127C14.6691 32.982 15.9827 35.4331 17.9095 37.3562C19.8363 39.2793 22.29 40.5881 24.9604 41.1173C27.6308 41.6464 30.3981 41.3722 32.9127 40.3291C35.4273 39.2861 37.5763 37.5212 39.0882 35.2573C40.6001 32.9934 41.407 30.3322 41.407 27.6098C41.4106 25.7983 41.0559 24.0039 40.3635 22.3298C39.6711 20.6558 38.6545 19.1352 37.3723 17.8555C36.09 16.5758 34.5675 15.5622 32.8921 14.873C31.2167 14.1838 29.4216 13.8327 27.6101 13.8398ZM27.6101 36.5483C25.8422 36.5483 24.1141 36.0241 22.6441 35.0419C21.1742 34.0597 20.0285 32.6637 19.352 31.0304C18.6755 29.3972 18.4985 27.5999 18.8434 25.866C19.1883 24.1321 20.0396 22.5395 21.2896 21.2894C22.5397 20.0393 24.1324 19.188 25.8663 18.8431C27.6002 18.4982 29.3974 18.6752 31.0307 19.3518C32.664 20.0283 34.06 21.174 35.0422 22.6439C36.0243 24.1138 36.5486 25.842 36.5486 27.6098C36.5486 28.7837 36.3174 29.946 35.8682 31.0304C35.419 32.1149 34.7606 33.1003 33.9305 33.9303C33.1005 34.7603 32.1152 35.4187 31.0307 35.8679C29.9462 36.3171 28.7839 36.5483 27.6101 36.5483Z"
                  fill="#292929"
                />
              </svg>
            </div>
            <div className="w-16 h-16 rounded-full border border-[#00ABAE] flex items-center justify-center">
              <svg
                width="28"
                height="40"
                viewBox="0 0 32 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.1927 10.2066H31.887V0.49339C29.1299 0.204276 26.3597 0.0615372 23.5878 0.065765C15.3492 0.065765 9.71546 5.13617 9.71546 14.4217V22.4244H0.416748V33.2983H9.71546V61.155H20.8618V33.2983H30.1302L31.5235 22.4244H20.8618V15.4908C20.8618 12.2836 21.7099 10.2066 26.1927 10.2066Z"
                  fill="#292929"
                />
              </svg>
            </div>
            <div className="w-16 h-16 rounded-full border border-[#00ABAE] flex items-center justify-center">
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
            </div>
          </div>
          <div className=" md:space-x-14 hidden md:flex">
            <div className="group w-24 h-24 rounded-full border border-[#00ABAE] duration-500 md:hover:bg-[#00ABAE] flex items-center justify-center">
              <svg
                width="55"
                height="55"
                viewBox="0 0 55 55"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M41.9439 10.055C41.3068 10.055 40.684 10.2439 40.1543 10.5978C39.6246 10.9518 39.2118 11.4548 38.968 12.0434C38.7242 12.632 38.6604 13.2796 38.7847 13.9045C38.909 14.5293 39.2157 15.1032 39.6662 15.5537C40.1167 16.0042 40.6906 16.311 41.3155 16.4353C41.9403 16.5595 42.5879 16.4957 43.1765 16.252C43.7651 16.0082 44.2681 15.5953 44.6221 15.0656C44.976 14.5359 45.1649 13.9131 45.1649 13.2761C45.1649 12.4218 44.8256 11.6025 44.2215 10.9984C43.6174 10.3944 42.7981 10.055 41.9439 10.055ZM54.2913 16.5508C54.2391 14.3237 53.822 12.1203 53.0565 10.0282C52.374 8.23814 51.3118 6.61725 49.9428 5.27708C48.6137 3.90121 46.989 2.84564 45.1918 2.19022C43.1052 1.40149 40.8993 0.974827 38.6691 0.928632C35.8238 0.767578 34.9112 0.767578 27.6101 0.767578C20.309 0.767578 19.3964 0.767578 16.5511 0.928632C14.3209 0.974827 12.115 1.40149 10.0284 2.19022C8.23447 2.85228 6.61121 3.90694 5.27732 5.27708C3.90146 6.60625 2.84589 8.23091 2.19046 10.0282C1.40173 12.1147 0.975071 14.3206 0.928876 16.5508C0.767822 19.3961 0.767822 20.3087 0.767822 27.6098C0.767822 34.9109 0.767822 35.8236 0.928876 38.6689C0.975071 40.899 1.40173 43.105 2.19046 45.1915C2.84589 46.9888 3.90146 48.6134 5.27732 49.9426C6.61121 51.3127 8.23447 52.3674 10.0284 53.0295C12.115 53.8182 14.3209 54.2449 16.5511 54.291C19.3964 54.4521 20.309 54.4521 27.6101 54.4521C34.9112 54.4521 35.8238 54.4521 38.6691 54.291C40.8993 54.2449 43.1052 53.8182 45.1918 53.0295C46.989 52.374 48.6137 51.3185 49.9428 49.9426C51.3178 48.6074 52.381 46.9851 53.0565 45.1915C53.822 43.0994 54.2391 40.896 54.2913 38.6689C54.2913 35.8236 54.4523 34.9109 54.4523 27.6098C54.4523 20.3087 54.4524 19.3961 54.2913 16.5508ZM49.4597 38.3467C49.4401 40.0506 49.1315 41.7388 48.547 43.3394C48.1185 44.5076 47.4301 45.5631 46.5339 46.4263C45.6632 47.3134 44.6099 48.0004 43.447 48.4394C41.8464 49.0239 40.1582 49.3325 38.4544 49.3521C35.7701 49.4863 34.777 49.5131 27.7175 49.5131C20.6579 49.5131 19.6648 49.5131 16.9805 49.3521C15.2114 49.3852 13.4497 49.1128 11.7731 48.5468C10.6613 48.0853 9.65625 47.4001 8.8205 46.5336C7.92958 45.6713 7.24981 44.6149 6.83417 43.4468C6.17884 41.8232 5.81536 40.0967 5.76048 38.3467C5.76048 35.6625 5.59943 34.6694 5.59943 27.6098C5.59943 20.5503 5.59943 19.5572 5.76048 16.8729C5.77251 15.131 6.09051 13.4048 6.69996 11.7729C7.17251 10.6399 7.89784 9.62998 8.8205 8.82026C9.63601 7.89733 10.6439 7.16435 11.7731 6.67288C13.4093 6.08246 15.1338 5.77387 16.8732 5.76024C19.5574 5.76024 20.5506 5.59919 27.6101 5.59919C34.6696 5.59919 35.6628 5.59918 38.347 5.76024C40.0509 5.77978 41.7391 6.08838 43.3397 6.67288C44.5594 7.12558 45.6542 7.86158 46.5339 8.82026C47.4135 9.64479 48.1008 10.6529 48.547 11.7729C49.1436 13.4074 49.4524 15.133 49.4597 16.8729C49.5939 19.5572 49.6207 20.5503 49.6207 27.6098C49.6207 34.6694 49.5939 35.6625 49.4597 38.3467ZM27.6101 13.8398C24.8878 13.8451 22.2281 14.6572 19.9672 16.1735C17.7062 17.6898 15.9455 19.8422 14.9073 22.3588C13.8692 24.8754 13.6004 27.6433 14.1347 30.3127C14.6691 32.982 15.9827 35.4331 17.9095 37.3562C19.8363 39.2793 22.29 40.5881 24.9604 41.1173C27.6308 41.6464 30.3981 41.3722 32.9127 40.3291C35.4273 39.2861 37.5763 37.5212 39.0882 35.2573C40.6001 32.9934 41.407 30.3322 41.407 27.6098C41.4106 25.7983 41.0559 24.0039 40.3635 22.3298C39.6711 20.6558 38.6545 19.1352 37.3723 17.8555C36.09 16.5758 34.5675 15.5622 32.8921 14.873C31.2167 14.1838 29.4216 13.8327 27.6101 13.8398ZM27.6101 36.5483C25.8422 36.5483 24.1141 36.0241 22.6441 35.0419C21.1742 34.0597 20.0285 32.6637 19.352 31.0304C18.6755 29.3972 18.4985 27.5999 18.8434 25.866C19.1883 24.1321 20.0396 22.5395 21.2896 21.2894C22.5397 20.0393 24.1324 19.188 25.8663 18.8431C27.6002 18.4982 29.3974 18.6752 31.0307 19.3518C32.664 20.0283 34.06 21.174 35.0422 22.6439C36.0243 24.1138 36.5486 25.842 36.5486 27.6098C36.5486 28.7837 36.3174 29.946 35.8682 31.0304C35.419 32.1149 34.7606 33.1003 33.9305 33.9303C33.1005 34.7603 32.1152 35.4187 31.0307 35.8679C29.9462 36.3171 28.7839 36.5483 27.6101 36.5483Z"
                  fill="#292929"
                  className="fill-black group-hover:fill-white duration-500"
                />
              </svg>
            </div>
            <div className="group w-24 h-24 rounded-full border border-[#00ABAE] duration-500 md:hover:bg-[#00ABAE] flex items-center justify-center">
              <svg
                width="32"
                height="62"
                viewBox="0 0 32 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.1927 10.2066H31.887V0.49339C29.1299 0.204276 26.3597 0.0615372 23.5878 0.065765C15.3492 0.065765 9.71546 5.13617 9.71546 14.4217V22.4244H0.416748V33.2983H9.71546V61.155H20.8618V33.2983H30.1302L31.5235 22.4244H20.8618V15.4908C20.8618 12.2836 21.7099 10.2066 26.1927 10.2066Z"
                  fill="#292929"
                  className="fill-black group-hover:fill-white duration-500"
                />
              </svg>
            </div>
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
        <div className="w-full md:w-1/2 mt-8">
          <form className="space-y-8">
            {/* Name and Email */}
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="w-full">
                <label className="block text-xl font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
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
