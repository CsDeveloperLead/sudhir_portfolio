import React, { useEffect, useState } from 'react'
import Quote from '../../assets/home/quotw.png'
import Rectangle from '../../assets/home/rectangle.png'
import Square from '../../assets/home/square.png'
import CompanyImg1 from '../../assets/hp1.jpeg'
import CompanyImg2 from '../../assets/pana.jpeg'
import CompanyImg3 from '../../assets/hewlet.jpeg'
import axios from 'axios'
import { Link } from 'react-router-dom'

const backend = import.meta.env.VITE_BACKEND_URL;

function Section2() {
    const [singleBlog, setSingleBlog] = useState({});

    const fetchBlogs = async () => {
        try {
            const response = await axios.post(`${backend}/api/v1/admin/get-blogs`);
            setSingleBlog(response.data.message[0]);
        } catch (error) {
            console.error("Error fetching blog data:", error);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);
    return (
        <div className='w-full h-auto flex flex-col px-5 lg:px-10 2xl:px-20 gap-4 my-6 lg:my-10 md:flex-row md:justify-between'>
            <div className='w-[350px] mx-auto md:mx-0 h-[290px] flex flex-col justify-between p-5 bg-[#F8F8F8] rounded-3xl'>
                <div className='w-full h-auto flex relative'>
                    <img src={CompanyImg1} alt="company logo" className='w-12 h-12 rounded-full bg-gray-300 z-0' />
                    <img src={CompanyImg2} alt="company logo" className='w-12 h-12 rounded-full bg-gray-300 absolute left-7 z-10' />
                    <img src={CompanyImg3} alt="company logo" className='w-12 h-12 rounded-full bg-gray-300 absolute border border-[#00b187] left-14 z-20' />
                </div>
                <div className='w-full h-auto flex flex-col font-satoshi'>
                    {/* <span className='text-[#00000099] text-lg'>Experience</span> */}
                    <span className='text-6xl xl:text-8xl'>20+</span>
                    <span className='text-3xl xl:text-5xl text-[#00000099]'>Years of <br /> Experience</span>
                </div>
            </div>
            <div className='w-[320px] mx-auto md:mx-0 h-[250px] flex flex-col justify-between p-5 font-satoshi lg:w-[400px]'>
                <img src={Quote} alt="image" className='w-5 mx-auto' />
                <p className='text-center text-xl lg:text-2xl'>“Essential soft skills are the cornerstone of success, shaping both professional excellence and personal fulfillment."</p>
                <div className='w-full h-auto text-center text-sm font-satoshi lg:text-base'>
                    <span className='font-bold'>Sudhir Chouhan.</span>
                    <span className='text-[#00000066]'> Country Collection manager</span>
                </div>
            </div>
            <div className='w-[350px] mx-auto md:mx-0 h-[290px] flex relative flex-col justify-between p-5 text-white rounded-3xl font-satoshi' style={
                {
                    background: `url(${Rectangle})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }
            }>
                <h1>Latest Blogs</h1>
                <h1 className='text-8xl tracking-widest bg-gradient-to-r from-white to-[rgba(246,246,246,0)] bg-clip-text text-transparent'>CAS</h1>
                <div className='w-full h-auto flex flex-col text-2xl'>
                    <h1>{singleBlog?.title}</h1>
                    <Link to={`/singleblog/${singleBlog?._id}`} className='text-xl md:hover:text-[#428ac9] duration-300 md:hover:underline ease-in-out'>Read Now</Link>
                </div>
                <img src={singleBlog?.image} alt='blog image' className='w-56 object-contain bg-[#C4C4C4] rounded-3xl absolute right-6 top-16 md:w-48 md:top-20 md:right-2 lg:w-56 lg:right-6 lg:top-16' />
                {/* <span className='w-16 h-16 bg-black border-[10px] border-white rounded-2xl absolute -bottom-2.5 -right-2.5'></span> */}
                <img src={Square} alt="square" className='w-12 h-12 absolute bottom-0 right-0.5' />
            </div>
        </div>
    )
}

export default Section2