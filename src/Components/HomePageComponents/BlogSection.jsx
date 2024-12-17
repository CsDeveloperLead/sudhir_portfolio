import React from 'react'

function BlogSection() {
  return (
    <div className='w-full h-auto flex flex-col px-5 my-5 lg:my-10 md:px-10 xl:px-20'>
        <h1 className='text-4xl font-bold font-satoshi lg:text-5xl'>
            <span className='bg-gradient-to-r from-[#3071AA] to-[#787EFF] bg-clip-text text-transparent'>My </span>
            Blogs!
        </h1>
        <p className='text-[#8E7777] my-2'>I turn ideas into impactful designs</p>
        <div className='w-full h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-5 mt-5'>
            <div className='w-[320px] mx-auto h-auto flex flex-col gap-2 xl:w-[350px]'>
                <div className='w-full h-auto relative'>
                    <img src="" alt="" className='bg-gray-400 h-[200px] rounded-2xl xl:h-[250px]' />
                    <div className='h-16 w-16 rounded-2xl font-bold text-xl border-4 absolute -bottom-3 -right-3 border-white flex justify-center items-center bg-black text-white'>
                        01
                    </div>
                </div>
                <div className='w-full h-auto flex flex-col gap-1 px-1'>
                    <h1 className='font-bold text-lg'>Impact of Collections Manag? - </h1>
                    <p className='text-[#8E7777] text-sm font-bold'>4d Ago</p>
                    <p className='text-[#8E7777] text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laborum ipsam ab voluptas laudantium ea libero fugit assumenda, minus consequuntur?</p>
                </div>
            </div>
            <div className='w-[320px] mx-auto h-auto flex flex-col gap-2 xl:w-[350px]'>
                <div className='w-full h-auto relative'>
                    <img src="" alt="" className='bg-gray-400 h-[200px] rounded-2xl xl:h-[250px]' />
                    <div className='h-16 w-16 rounded-2xl font-bold text-xl border-4 absolute -bottom-3 -right-3 border-white flex justify-center items-center bg-black text-white'>
                        02
                    </div>
                </div>
                <div className='w-full h-auto flex flex-col gap-1 px-1'>
                    <h1 className='font-bold text-lg'>Impact of Collections Manag? - </h1>
                    <p className='text-[#8E7777] text-sm font-bold'>4d Ago</p>
                    <p className='text-[#8E7777] text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laborum ipsam ab voluptas laudantium ea libero fugit assumenda, minus consequuntur?</p>
                </div>
            </div>
            <div className='w-[320px] mx-auto h-auto flex flex-col gap-2 xl:w-[350px]'>
                <div className='w-full h-auto relative'>
                    <img src="" alt="" className='bg-gray-400 h-[200px] rounded-2xl xl:h-[250px]' />
                    <div className='h-16 w-16 rounded-2xl font-bold text-xl border-4 absolute -bottom-3 -right-3 border-white flex justify-center items-center bg-black text-white'>
                        03
                    </div>
                </div>
                <div className='w-full h-auto flex flex-col gap-1 px-1'>
                    <h1 className='font-bold text-lg'>Impact of Collections Manag? - </h1>
                    <p className='text-[#8E7777] text-sm font-bold'>4d Ago</p>
                    <p className='text-[#8E7777] text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laborum ipsam ab voluptas laudantium ea libero fugit assumenda, minus consequuntur?</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogSection