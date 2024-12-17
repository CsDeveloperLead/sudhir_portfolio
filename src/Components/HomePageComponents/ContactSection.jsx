import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";

function ContactSection() {
    return (
        <div className='w-full h-auto flex flex-col my-5 gap-7 lg:my-10 px-5 md:px-10 xl:px-20 md:flex-row'>
            <div className='w-full h-80 flex flex-col justify-between'>
                <div className='w-full h-auto flex flex-col'>
                    <h1 className='text-4xl font-bold font-satoshi lg:text-5xl'>
                        <span className='bg-gradient-to-r from-[#3071AA] to-[#787EFF] bg-clip-text text-transparent'>Let's </span>
                        Collaborate!
                    </h1>
                    <p className='font-satoshi text-sm mt-7 lg:pr-10'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam itaque, temporibus officia quidem eos quia! Dolor aut laborum, beatae eligendi, fugit repudiandae magni iusto voluptatibus quidem exercitationem, quasi autem odit.
                    </p>
                </div>
                <div className='w-auto h-auto flex gap-3'>
                    <span className='p-3 border border-[#00ABAE] rounded-full'><FaInstagram size={25} /></span>
                    <span className='p-3 border border-[#00ABAE] rounded-full'><FaFacebookF size={25} /></span>
                    <span className='p-3 border border-[#00ABAE] rounded-full'><FaPinterestP size={25} /></span>
                    <span className='p-3 border border-[#00ABAE] rounded-full'><FaLinkedinIn size={25} /></span>
                </div>
            </div>
            <div className='w-full h-auto flex flex-col gap-6'>
                <div className='w-full h-auto flex flex-col gap-3 lg:gap-5'>
                    <div className='w-full h-auto flex flex-col gap-3 sm:flex-row sm:justify-between'>
                        <div className='w-full h-auto flex flex-col gap-1 font-satoshi sm:w-[45%]'>
                            <label htmlFor="name">Name</label>
                            <input type="text" placeholder='Your Full Name' id='name' className='bg-[#E7E7E7] rounded-xl border py-2 px-3' />
                        </div>
                        <div className='w-full h-auto flex flex-col gap-1 font-satoshi sm:w-[45%]'>
                            <label htmlFor="email">Email</label>
                            <input type="email" placeholder='Your Email Address' id='email' className='bg-[#E7E7E7] rounded-xl border py-2 px-3' />
                        </div>
                    </div>
                    <div className='w-full h-auto flex flex-col font-satoshi gap-1'>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" placeholder='Tell me about your project or ask any questions' className='bg-[#E7E7E7] h-40 rounded-xl border py-2 px-3 resize-none'></textarea>
                    </div>
                </div>
                <div className='w-full h-auto'>
                    <button className='px-8 py-2 text-white bg-black rounded-xl'>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default ContactSection