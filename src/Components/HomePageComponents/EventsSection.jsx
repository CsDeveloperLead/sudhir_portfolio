import React from 'react'
import Card4 from '../../assets/home/Card4.webp'
import { Link } from 'react-router-dom'
import { events } from "../../EventsData"

function EventsSection() {
  
  return (
    <div className='w-full h-auto flex flex-col px-5 my-10 md:flex-row-reverse md:justify-between  lg:mb-20 md:px-10 xl:px-20'>
        <div className='w-full h-auto relative sm:w-[70%] mx-auto md:w-[45%] lg:w-[40%]'>
            <img src={events[0].cardImage} alt="event logo" className='w-full mx-auto h-[200px] sm:h-[250px] lg:h-[300px] xl:h-[350px] rounded-xl bg-gray-500' />
            <img src={Card4} alt="Card image" className='absolute -bottom-8 -right-4 h-28 w-28 sm:h-36 sm:w-36 md:h-44 md:w-44 xl:h-52 xl:w-52 xl:-bottom-16 xl:-right-14 sm:-bottom-10 sm:-right-8' />
        </div>
        <div className='w-full h-auto flex flex-col font-satoshi mt-7 sm:w-[70%] mx-auto md:w-[50%] md:mx-0'>
            <div className='w-full h-auto text-3xl font-bold md:text-5xl xl:text-6xl'>
                <h1>Mentor in the</h1>
                <h1 className='bg-gradient-to-r from-[#3071AA] to-[#787EFF] bg-clip-text text-transparent pb-2'>Chandigarh Event</h1>
            </div>
            <p className='my-8 lg:text-lg lg:my-12'>{events[0].cardDesc}</p>
            <Link to={`/events/${events[0].id}`} className='w-32 text-center rounded-2xl font-satoshi text-white bg-[#3071AA] py-2 md:hover:bg-[#428ac9] xl:py-3 xl:w-36'>Read More</Link>
        </div>
    </div> 
  )
}

export default EventsSection