import React from 'react'

const Blogs = () => {
    const cardsData = [
        {
          id: "01",
          title: "Impact of Collections Management",
          date: "4d Ago",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laborum ipsam ab voluptas laudantium ea libero fugit assumenda, minus consequuntur?",
        },
        {
          id: "02",
          title: "Future of Technology in 2024",
          date: "1w Ago",
          description:
            "Explore how upcoming tech advancements will shape industries globally, with AI and automation leading the way.",
        },
        {
          id: "03",
          title: "Marketing Strategies That Work",
          date: "2d Ago",
          description:
            "Discover top strategies to boost engagement and drive conversions in a competitive digital world.",
        },
      ];
  return (
    <div className="mx-4 md:mx-10 mt-8 md:mt-10">
    <div className="w-full flex flex-col gap-4 md:gap-14">
      <h1 className="font-semibold text-3xl md:text-[95px]">
        My Blogs
      </h1>
      <div className='w-full flex flex-col md:flex-row gap-2'>
        <span className='w-full md:w-1/4 text-base md:text-xl text-[#8e7777]'>I turn ideas into impactful designs</span>
        <span className="w-full md:w-3/4 border-b-2 border-black "></span>

      </div>
    </div>
    <div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-20">
        {cardsData.map((card) => (
          <div
            key={card.id}
            className="w-[320px] mx-auto h-auto flex flex-col gap-2 xl:w-[350px]  overflow-hidden p-4 relative"
          >
            {/* Image Section */}
            <div className="w-full h-auto relative">
              <img
                src=""
                alt="Blog Image"
                className="bg-gray-400 h-[200px] xl:h-[250px] rounded-2xl"
              />
              {/* Number Tag */}
              <div className="h-16 w-16 rounded-2xl font-bold text-xl border-4 absolute -bottom-3 -right-3 border-white flex justify-center items-center bg-black text-white">
                {card.id}
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full h-auto flex flex-col gap-1 px-1">
              <h1 className="font-bold text-lg truncate">{card.title}</h1>
              <p className="text-[#8E7777] text-sm font-bold">{card.date}</p>
              <p className="text-[#8E7777] text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Blogs
