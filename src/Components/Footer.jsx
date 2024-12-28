import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6"
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className='w-[98%] h-auto mb-2 mt-5 bg-[#101010] flex flex-col mx-auto rounded-xl p-5'>
            <div className='w-full h-auto flex flex-col gap-8 md:flex-row md:pt-7 md:justify-between lg:px-10'>
                <div className='w-full h-[150px] flex flex-col justify-between text-white md:w-[40%]'>
                    <h1 className='text-xl'>Hi, thats all about me</h1>
                    <p className='text-sm text-gray-300'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, nesciunt perferendis dolorum sed quo dolore molestias similique doloremque delectus cumque.</p>
                </div>
                <div className='w-full h-[200px] flex flex-col justify-between md:w-[60%] lg:w-[50%] xl:w-[40%]'>
                    <div className='w-auto h-auto flex gap-3 text-white justify-end'>
                        <span className='p-3 border border-[#00ABAE] rounded-full md:hover:bg-[#00ABAE] md:hover:text-black duration-500'><FaInstagram size={25} /></span>
                        <span className='p-3 border border-[#00ABAE] rounded-full md:hover:bg-[#00ABAE] md:hover:text-black duration-500'><FaFacebookF size={25} /></span>
                        <Link to='https://www.linkedin.com/in/sudhir-kumar-chouhan/' target='_blank' className='p-3 border border-[#00ABAE] rounded-full md:hover:bg-[#00ABAE] md:hover:text-black duration-500'><FaLinkedinIn size={25} /></Link>
                    </div>
                    <div className='w-full h-auto grid grid-cols-2 gap-5 sm:grid-cols-3'>
                        <div className='w-auto h-auto flex flex-col text-sm'>
                            <h1 className='text-gray-300'>BASED IN</h1>
                            <span className='text-white'>New Delhi, India</span>
                        </div>
                        <div className='w-auto h-auto flex flex-col text-sm'>
                            <h1 className='text-gray-300'>EMAIL ME AT</h1>
                            <span className='text-white'>example@gmail.com</span>
                        </div>
                        <div className='w-auto h-auto flex flex-col text-sm'>
                            <h1 className='text-gray-300'>BUSINESS NUMBER</h1>
                            <span className='text-white'>+91 739287999</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[95%] h-[1px] bg-gray-400 mx-auto my-5 lg:my-10'></div>
            <div className='w-full h-auto flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3 lg:mb-5'>
                <div className='w-full h-auto flex flex-col gap-5 justify-center md:flex-row items-center text-white font-satoshi md:justify-between'>
                    <Link to='/'>About us</Link>
                    <Link to='/contact'>Contact us</Link>
                    <span>Help</span>
                    <span>Privacy Policy</span>
                    <span>Disclaimer</span>
                </div>
                <div className='w-full h-auto text-white text-center'>
                    © 2022 – 2025 | Sudhir, made with 💖 by Campaigning Source, all rights reserved
                </div>
            </div>
        </footer>
    )
}

export default Footer









