import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const backend = import.meta.env.VITE_BACKEND_URL

function SingleBlog() {
    const [singleBlog, setSingleBlog] = useState({});
    const {id} = useParams();

    async function getSingleBlog() {
        try {
            const response = await axios.post(`${backend}/api/v1/admin/get-single-blog`,{id: id});
            setSingleBlog(response.data.message);
        } catch (error) {
            console.log("Error while fetching single blog", error);
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        getSingleBlog();
    }, []);

    console.log(singleBlog);
    
    
  return (
    <div className='w-full h-auto flex flex-col my-10 px-5 md:px-10 xl:px-20'>
        <div className='w-full h-auto rounded-xl'>
            <img src={singleBlog.image} alt="blog image" className='w-full h-full object-cover rounded-xl md:h-[500px]' />
        </div>
        <div className='w-full h-auto flex flex-col my-5 font-satoshi gap-5'>
            <h1 className='text-xl font-bold'>{singleBlog.title}</h1>
            <p className='text-gray-700 text-sm lg:text-base' dangerouslySetInnerHTML={{__html: singleBlog.content}} style={{whiteSpace: 'pre-wrap'}}></p>
        </div>
    </div>
  )
}

export default SingleBlog