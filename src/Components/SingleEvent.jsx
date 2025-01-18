import React, { useEffect, useState } from 'react'
import { events } from "../EventsData"
import { useParams } from 'react-router-dom'

function SingleEvent() {
    const [singleEvent, setSingleEvent] = useState({})
    const { id } = useParams()
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        window.scrollTo(0, 0);
        const event = events.find((event) => event.id === id)
        if (event) {
            setSingleEvent(event)
        }
    }, [id])

    useEffect(() => {
        const interval = setInterval(() => {
            if (singleEvent?.sliderImg?.length) {
                setCurrentIndex((prevIndex) =>
                    (prevIndex + 1) % singleEvent.sliderImg.length
                )
            }
        }, 3000) // Change every 3 seconds
        return () => clearInterval(interval) // Cleanup interval on unmount
    }, [singleEvent?.sliderImg])

    const handleBulletClick = (index) => {
        setCurrentIndex(index)
    }

    return (
        <div className='w-full h-auto flex flex-col px-5 my-10 md:px-10 xl:px-20'>
            {/* Image Slider */}
            <div className='w-full h-[200px] rounded-xl flex relative overflow-hidden sm:h-[500px] lg:h-[500px] border-2'>
                {/* Images */}
                {singleEvent?.sliderImg?.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt="images"
                        className={`absolute top-0 left-0 w-full h-full object-cover rounded-xl transition-transform duration-500 ${
                            index === currentIndex ? 'translate-x-0' : 'translate-x-full'
                        }`}
                        style={{
                            transform: `translateX(${(index - currentIndex) * 100}%)`,
                        }}
                    />
                ))}
                {/* Bullets */}
                <div className='absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2'>
                    {singleEvent?.sliderImg?.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full ${
                                currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
                            }`}
                            onClick={() => handleBulletClick(index)}
                        ></button>
                    ))}
                </div>
            </div>
            {/* Title */}
            <h1 className='text-2xl font-bold my-5 font-satoshi sm:text-3xl lg:my-10 lg:text-4xl xl:text-5xl'>
                {singleEvent?.title}
            </h1>
            {/* Description */}
            <div className='w-full h-auto'>
                <p
                    className='text-gray-700 text-sm font-satoshi sm:text-base'
                    dangerouslySetInnerHTML={{ __html: singleEvent?.description }}
                    style={{ whiteSpace: 'pre-line' }}
                ></p>
            </div>
        </div>
    )
}

export default SingleEvent
