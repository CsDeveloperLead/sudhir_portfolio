import axios from 'axios';
import React, { useState } from 'react'
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const backend = import.meta.env.VITE_BACKEND_URL

function ContactSection() {
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

    return (
        <div className='w-full h-auto flex flex-col my-5 gap-7 lg:my-10 px-5 md:px-10 xl:px-20 md:flex-row'>
            <div className='w-full h-80 flex flex-col justify-between'>
                <div className='w-full h-auto flex flex-col'>
                    <h1 className='text-4xl font-bold font-satoshi lg:text-5xl'>
                        <span className='bg-gradient-to-r from-[#3071AA] to-[#787EFF] bg-clip-text text-transparent'>Let's </span>
                        Collaborate!
                    </h1>
                    <p className='font-satoshi text-sm mt-7 lg:pr-10'>
                        Believe in yourself and take charge of your journey. Together, we’ll transform challenges into opportunities and unlock your true potential.
                    </p>
                </div>
                <div className='w-auto h-auto flex gap-3'>
                    <Link to='https://www.linkedin.com/in/sudhir-kumar-chouhan/' target='_blank' className='p-3 border border-[#00ABAE] rounded-full md:hover:bg-[#00ABAE] md:hover:text-black md:hover:text-white duration-500'><FaLinkedinIn size={25} /></Link>
                </div>
            </div>
            <div className='w-full h-auto flex flex-col gap-6'>
                <div className='w-full h-auto flex flex-col gap-3 lg:gap-5'>
                    <div className='w-full h-auto flex flex-col gap-3 sm:flex-row sm:justify-between'>
                        <div className='w-full h-auto flex flex-col gap-1 font-satoshi sm:w-[45%]'>
                            <label htmlFor="name">Name</label>
                            <input type="text" value={details.name} onChange={(e) => setDetails({ ...details, name: e.target.value })} placeholder='Your Full Name' id='name' className='bg-[#E7E7E7] rounded-xl border py-2 px-3' />
                        </div>
                        <div className='w-full h-auto flex flex-col gap-1 font-satoshi sm:w-[45%]'>
                            <label htmlFor="email">Email</label>
                            <input type="email" value={details.email} onChange={(e) => setDetails({ ...details, email: e.target.value })} placeholder='Your Email Address' id='email' className='bg-[#E7E7E7] rounded-xl border py-2 px-3' />
                        </div>
                    </div>
                    <div className='w-full h-auto flex flex-col font-satoshi gap-1'>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" value={details.message} onChange={(e) => setDetails({ ...details, message: e.target.value })} placeholder='Tell me about your project or ask any questions' className='bg-[#E7E7E7] h-40 rounded-xl border py-2 px-3 resize-none'></textarea>
                    </div>
                </div>
                <div className='w-full h-auto'>
                    <button className='px-8 py-2 text-white bg-black rounded-xl md:hover:bg-slate-800' onClick={sendEmail}>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default ContactSection