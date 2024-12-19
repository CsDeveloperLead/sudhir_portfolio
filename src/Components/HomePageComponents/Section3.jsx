import React from 'react'
import Card3 from '../../assets/home/Card3.png'
import ProfilePic from '../../assets/home/profileImage.png'
import Sign from '../../assets/home/Signature.png'
import { Link } from 'react-router-dom'

function Section3() {
    return (
        <div className='w-full h-auto flex flex-col px-5 my-5 gap-4 sm:flex-row sm:justify-center md:gap-10 lg:gap-40 md:my-10 lg:px-10 2xl:px-20'>
            <div className='w-full relative h-[450px] sm:w-[45%] md:w-[40%] lg:h-[550px] xl:w-[35%] 2xl:w-[35%] xl:h-[600px]'>
                <img src={ProfilePic} alt="profile image" className='h-full w-full rounded-3xl' />
                <img src={Card3} alt="card" className='absolute -top-5 -right-4 h-40 w-32 sm:-right-7 sm:-top-10 md:-right-12 md:h-48 md:w-36 xl:md:h-60 xl:w-48 xl:-right-20' />
            </div>
            <div className='w-full h-auto flex flex-col gap-5 sm:w-[50%] md:w-[45%] sm:justify-between lg:py-8'>
                <div className='w-full h-auto flex flex-col font-bold text-4xl gap-1 font-satoshi lg:text-5xl xl:text-6xl lg:gap-2'>
                    <h1 className="pb-[2px] bg-gradient-to-r from-[#3071AA] to-[#787EFF] bg-clip-text text-transparent">15+ years,</h1>
                    <h1>driven by trust, love</h1>
                    <h1>in this career.</h1>
                </div>
                <div className='w-full h-auto flex flex-col gap-6 lg:text-lg'>
                    <p>Tortor porttitor tortor ut vitae commodo et. Et morbi at felis vestibulum pulvinar libero ut netus neque. Eget quis condimentum diam et </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, optio?</p>
                </div>
                <div className='w-full h-auto flex justify-between items-center'>
                    <Link to='' className='w-32 text-center rounded-2xl font-satoshi text-white bg-[#3071AA] py-2 md:hover:bg-[#428ac9] xl:py-3 xl:w-36'>Let's Talk</Link>
                    <img src={Sign} alt="signature" className='w-32' />
                </div>
            </div>
        </div>
    )
}

export default Section3