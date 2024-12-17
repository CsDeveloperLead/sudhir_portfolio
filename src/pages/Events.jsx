import React from "react";

const MyEvents = () => {
  const events = [
    {
      id: "01",
      title: "Business Strategy Development",
      description:
        "We collaborate closely with you to design practical, long-term strategies that lead to sustainable business growth.",
    },
    {
      id: "02",
      title: "Operational Efficiency Improvements",
      description:
        "Our expert assessments identify ways to refine processes, cut unnecessary costs, and boost overall productivity.",
    },
    {
      id: "03",
      title: "Market Research and Insights",
      description:
        "We provide detailed industry and competitor insights, allowing you to make well-informed decisions and capitalize on new opportunities.",
    },
    {
      id: "04",
      title: "Leadership Coaching and Training",
      description:
        "We offer programs that help your leadership team build skills and develop approaches that create positive change within your organization.",
    },
  ];

  return (
    <div className="mx-4 md:mx-10 mt-8 md:mt-10">
      <div className="w-full flex md:h-[105px]">
        <h1 className="w-[55%] md:w-[35%] font-semibold text-3xl md:text-[95px]">
          My Events
        </h1>
        <span className="w-[55%] md:w-[65%] border-b-2 border-black md:mt-10"></span>
      </div>

      {/* Event Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 md:my-20">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex items-center p-3 md:p-6 bg-gray-50 rounded-lg shadow-md h-[300px]"
          >
            {/* Placeholder Image */}
            <div className="w-1/2 h-full bg-gray-200 rounded-lg"></div>

            {/* Content */}
            <div className="w-1/2 pl-3 md:pl-6 space-y-2 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-base md:text-lg font-bold">{event.title}</h3>
                <p className="text-gray-600 text-[12px] md:text-sm mt-4">{event.description}</p>
              </div>

              <div className="flex justify-between items-center mt-4">
                {/* Icon */}
                <button className="bg-black text-white px-6 py-4 rounded-xl hover:opacity-80">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.4 13L0 11.6L9.6 2H1V0H13V12H11V3.4L1.4 13Z"
                      fill="white"
                    />
                  </svg>
                </button>
                {/* Event ID */}
                <span className="text-[#00ABAE] font-bold text-xl">
                  {event.id}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyEvents;
