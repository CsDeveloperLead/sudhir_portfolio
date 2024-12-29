import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const backend = import.meta.env.VITE_BACKEND_URL;

function BlogSection() {
    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = async () => {
        try {
            const response = await axios.post(`${backend}/api/v1/admin/get-blogs`);
            setBlogs(response.data.message.slice(0, 3));
        } catch (error) {
            console.error("Error fetching blog data:", error);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);


    return (
        <div className='w-full h-auto flex flex-col px-5 mb-5 lg:mb-10 md:px-10 xl:px-20'>
            <h1 className='text-4xl font-bold font-satoshi lg:text-5xl'>
                <span className='bg-gradient-to-r from-[#3071AA] to-[#787EFF] bg-clip-text text-transparent'>My </span>
                Blogs!
            </h1>
            <p className='text-[#8E7777] my-2'>Where Ideas Take Flight and Knowledge Ignites.</p>
            <div className='w-full h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-5 mt-5'>
                {blogs.map((item, index) => (
                    <NavLink
                        to={`/singleblog/${item._id}`}
                        key={item._id}
                        className="w-[320px] mx-auto h-auto flex flex-col gap-2 xl:w-[400px] shadow-md duration-500 ease-in-out hover:shadow-xl rounded-md overflow-hidden p-4 relative"
                    >
                        <img
                            src={item.image}
                            alt="Blog Image"
                            className="bg-gray-400 h-auto object-contain rounded-2xl"
                        />
                        {/* Image Section */}
                        <div className="w-full h-auto relative">
                            {/* Number Tag */}
                            <div className="h-16 w-16 rounded-2xl font-bold text-xl border-4 absolute -bottom-3 -right-3 border-white flex justify-center items-center bg-black text-white">
                                {`0${index + 1}`}
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="w-full h-auto flex flex-col gap-1 px-1">
                            <h1 className="font-bold text-lg truncate">{item.title}</h1>
                            <p className="text-[#8E7777] text-sm font-bold">
                                {new Intl.DateTimeFormat("en-IN", {
                                    day: "2-digit",
                                    month: "2-digit",
                                    year: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                    second: "2-digit",
                                    hour12: true,
                                }).format(new Date(item.createdAt))}
                            </p>{" "}
                            <p dangerouslySetInnerHTML={{ __html: item.content.slice(0, 150) + "...." }} className="text-[#8E7777] text-sm leading-relaxed">
                            </p>
                        </div>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default BlogSection