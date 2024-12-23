import React from 'react'
import Quote from '../../assets/home/quotw.png'
import Rectangle from '../../assets/home/rectangle.png'
import Square from '../../assets/home/square.png'

function Section2() {
    return (
        <div className='w-full h-auto flex flex-col px-5 lg:px-10 2xl:px-20 gap-4 my-6 lg:my-10 md:flex-row md:justify-between'>
            <div className='w-[350px] mx-auto md:mx-0 h-[290px] flex flex-col justify-between p-5 bg-[#F8F8F8] rounded-3xl'>
                <div className='w-full h-auto flex relative'>
                    <img src="" alt="" className='w-12 h-12 rounded-full bg-gray-300 z-0' />
                    <img src="" alt="" className='w-12 h-12 rounded-full bg-gray-300 absolute left-7 z-10' />
                    <img src="" alt="" className='w-12 h-12 rounded-full bg-gray-300 absolute left-14 z-20' />
                </div>
                <div className='w-full h-auto flex flex-col font-satoshi'>
                    <span className='text-[#00000099] text-lg'>Experience</span>
                    <span className='text-6xl'>20+</span>
                </div>
            </div>
            <div className='w-[320px] mx-auto md:mx-0 h-[250px] flex flex-col justify-between p-5 font-satoshi lg:w-[400px]'>
                <img src={Quote} alt="image" className='w-5 mx-auto' />
                <p className='text-center text-xl lg:text-2xl'>“Get Quick solutions with great quality—a recommendation
                    that's indeed”</p>
                <div className='w-full h-auto text-center text-sm font-satoshi lg:text-base'>
                    <span className='font-bold'>Sudhir Chouhan.</span>
                    <span className='text-[#00000066]'> Country Collection manager</span>
                </div>
            </div>
            <div className='w-[350px] mx-auto md:mx-0 h-[290px] flex relative flex-col justify-between p-5 text-white rounded-3xl font-satoshi' style={
                {background : `url(${Rectangle})`,
                backgroundRepeat : 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }
            }>
                <h1>Latest Blogs</h1>
                <h1 className='text-8xl tracking-widest bg-gradient-to-r from-white to-[rgba(246,246,246,0)] bg-clip-text text-transparent'>CAS</h1>
                <div className='w-full h-auto flex flex-col text-2xl'>
                    <h1>Ted X</h1>
                    <h1>Cambridge</h1>
                </div>
                <div className='w-44 h-32 bg-[#C4C4C4] rounded-3xl absolute right-6 top-8 md:w-36 md:top-12 md:right-2 md:h-24 lg:w-48 lg:h-32 lg:right-8 lg:top-14'></div>
                {/* <span className='w-16 h-16 bg-black border-[10px] border-white rounded-2xl absolute -bottom-2.5 -right-2.5'></span> */}
                <img src={Square} alt="square" className='w-12 h-12 absolute bottom-0 right-0.5' />
            </div>
        </div>
    )
}

export default Section2