import React from 'react'
import { MdWavingHand } from "react-icons/md";
import { MdThumbUp } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import Card from '../../assets/home/Card.png'
import Card2 from '../../assets/home/Card2.png'
import Marquee from 'react-fast-marquee';

function LandingPage() {
    return (
        <>
            <div className='w-full h-auto flex flex-col px-5 my-5 gap-10 md:flex-row-reverse lg:justify-between lg:px-10 2xl:px-20 xl:justify-center xl:gap-28'>
                <div className='w-full h-auto flex flex-col gap-3 md:w-[50%] lg:w-[60%] xl:w-[45%] lg:gap-5 lg:pt-4'>
                    <h1 className='text-xl font-satoshi flex items-center gap-1.5 font-bold sm:text-2xl md:text-xl lg:text-2xl'>
                        Hi <MdWavingHand size={25} className='text-[#EBBC00] transform -scale-x-100' />, I'm <a href="https://www.linkedin.com/in/sudhir-kumar-chouhan/" className='underline underline-offset-4' target='_blank'>Sudhir Kumar Chouhan</a>
                    </h1>
                    <div className='w-full h-auto text-[40px] sm:text-6xl flex flex-col sm:gap-3 font-satoshi font-bold md:text-[40px] md:gap-0 lg:text-6xl xl:text-7xl'>
                        <h1 className="text-transparent sm:pb-3 h-auto bg-clip-text"
                            style={{
                                backgroundImage: 'linear-gradient(90.89deg, #3071AA 8.25%, #787EFF 91.95%)',
                            }}>Organiser,</h1>
                        <h1>Event Planner &</h1>
                        <h1>Your Partner</h1>
                    </div>
                    <p className='text-[#1B222D] font-satoshi xl:text-lg'>Completed multiple events over the last 15 years</p>
                    <div className='w-full h-auto flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-center md:flex-col my-3 lg:my-5 lg:flex-row'>
                        <div className='w-auto h-auto flex gap-24 xl:gap-28'>
                            <div className='w-auto h-auto flex relative items-center'>
                                <img src="" alt="" className='w-10 h-10 rounded-full bg-gray-500 lg:w-11 lg:h-11 xl:w-12 xl:h-12' />
                                <img src="" alt="" className='w-10 h-10 rounded-full left-7 absolute bg-gray-500 lg:w-11 lg:h-11 xl:w-12 xl:h-12 xl:left-8' />
                                <img src="" alt="" className='w-10 h-10 rounded-full absolute left-14 bg-gray-500 lg:w-11 lg:h-11 xl:w-12 xl:h-12 xl:left-[60px]' />
                                <span className='w-10 h-10 rounded-full absolute left-[80px] bg-[#EEA69F] flex justify-center items-center lg:w-11 lg:h-11 xl:w-12 xl:h-12 xl:left-[90px]'>
                                    4.1k
                                </span>
                            </div>
                            <div className='w-auto h-auto flex flex-col font-satoshi xl:text-lg'>
                                <span className='font-bold'>200+ Companies</span>
                                <span className='text-sm'>trust Cotamoni</span>
                            </div>
                        </div>
                        <div className='w-auto h-auto flex gap-4 items-center xl:gap-6 xl:text-lg'>
                            <MdThumbUp size={35} className='text-[#EBBC00] xl:size-10' />
                            <div className='w-auto h-auto flex flex-col font-satoshi'>
                                <span className='font-bold'>The Best Consultant</span>
                                <span className='text-sm'>with highest ratings</span>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-auto flex justify-between items-center gap-3'>
                        <Link to='' className='w-32 text-center rounded-2xl font-satoshi text-white bg-[#3071AA] py-2 md:hover:bg-[#428ac9] xl:py-3 xl:w-36'>Let's Talk</Link>
                        <div className='w-auto h-auto flex gap-3'>
                            <span className='p-3 border border-[#00ABAE] rounded-full'><FaFacebookF size={25} /></span>
                            <span className='p-3 border border-[#00ABAE] rounded-full'><FaInstagram size={25} /></span>
                            <span className='p-3 border border-[#00ABAE] rounded-full'><FaLinkedinIn size={25} /></span>
                        </div>
                    </div>
                </div>
                <div className='w-full h-auto relative md:w-[50%] lg:w-[40%]'>
                    <img src="" alt="" className='w-full h-[440px] bg-gray-200 rounded-3xl lg:h-[500px] xl:h-[550px]' />
                    <img src={Card} alt="card image" className='absolute object-cover -top-7 -left-4 h-48 w-40 xl:w-60 xl:h-64 xl:-left-10 xl:-top-10' />
                    <img src={Card2} alt="card image" className='absolute object-cover bottom-6 h-14 w-40 -right-5 md:-right-8 xl:h-24 xl:w-60 xl:-right-14' />
                </div>
            </div>
            <div className='w-full h-10 bg-[#130D0C] py-1.5 my-5 text-white flex items-center lg:text-xl lg:h-12'>
                <Marquee direction='left' speed={70} className=''>
                    <div className='w-auto h-auto flex justify-center items-center gap-2 ml-3 lg:ml-8'>
                        <span className='h-3 w-3 bg-[#3071AA] rounded-full'></span>
                        <span className=''>Mentor</span>
                    </div>
                    <div className='w-auto h-auto flex justify-center items-center gap-2 ml-3 lg:ml-8'>
                        <span className='h-3 w-3 bg-[#3071AA] rounded-full'></span>
                        <span className=''>Mentor</span>
                    </div>
                    <div className='w-auto h-auto flex justify-center items-center gap-2 ml-3 lg:ml-8'>
                        <span className='h-3 w-3 bg-[#3071AA] rounded-full'></span>
                        <span className=''>Mentor</span>
                    </div>
                    <div className='w-auto h-auto flex justify-center items-center gap-2 ml-3 lg:ml-8'>
                        <span className='h-3 w-3 bg-[#3071AA] rounded-full'></span>
                        <span className=''>Mentor</span>
                    </div>
                    <div className='w-auto h-auto flex justify-center items-center gap-2 ml-3 lg:ml-8'>
                        <span className='h-3 w-3 bg-[#3071AA] rounded-full'></span>
                        <span className=''>Mentor</span>
                    </div>
                    <div className='w-auto h-auto flex justify-center items-center gap-2 ml-3 lg:ml-8'>
                        <span className='h-3 w-3 bg-[#3071AA] rounded-full'></span>
                        <span className=''>Mentor</span>
                    </div>
                    <div className='w-auto h-auto flex justify-center items-center gap-2 ml-3 lg:ml-8'>
                        <span className='h-3 w-3 bg-[#3071AA] rounded-full'></span>
                        <span className=''>Mentor</span>
                    </div>
                    <div className='w-auto h-auto flex justify-center items-center gap-2 ml-3 lg:ml-8'>
                        <span className='h-3 w-3 bg-[#3071AA] rounded-full'></span>
                        <span className=''>Mentor</span>
                    </div>
                    <div className='w-auto h-auto flex justify-center items-center gap-2 ml-3 lg:ml-8'>
                        <span className='h-3 w-3 bg-[#3071AA] rounded-full'></span>
                        <span className=''>Mentor</span>
                    </div>
                    <div className='w-auto h-auto flex justify-center items-center gap-2 ml-3 lg:ml-8'>
                        <span className='h-3 w-3 bg-[#3071AA] rounded-full'></span>
                        <span className=''>Mentor</span>
                    </div>
                    <div className='w-auto h-auto flex justify-center items-center gap-2 ml-3 lg:ml-8'>
                        <span className='h-3 w-3 bg-[#3071AA] rounded-full'></span>
                        <span className=''>Mentor</span>
                    </div>
                    <div className='w-auto h-auto flex justify-center items-center gap-2 ml-3 lg:ml-8'>
                        <span className='h-3 w-3 bg-[#3071AA] rounded-full'></span>
                        <span className=''>Mentor</span>
                    </div>
                    <div className='w-auto h-auto flex justify-center items-center gap-2 ml-3 lg:ml-8'>
                        <span className='h-3 w-3 bg-[#3071AA] rounded-full'></span>
                        <span className=''>Mentor</span>
                    </div>
                    <div className='w-auto h-auto flex justify-center items-center gap-2 ml-3 lg:ml-8'>
                        <span className='h-3 w-3 bg-[#3071AA] rounded-full'></span>
                        <span className=''>Mentor</span>
                    </div>
                    <div className='w-auto h-auto flex justify-center items-center gap-2 ml-3 lg:ml-8'>
                        <span className='h-3 w-3 bg-[#3071AA] rounded-full'></span>
                        <span className=''>Mentor</span>
                    </div>
                    <div className='w-auto h-auto flex justify-center items-center gap-2 ml-3 lg:ml-8'>
                        <span className='h-3 w-3 bg-[#3071AA] rounded-full'></span>
                        <span className=''>Mentor</span>
                    </div>
                </Marquee>
            </div>
        </>
    )
}

export default LandingPage