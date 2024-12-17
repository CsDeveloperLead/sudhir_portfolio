import React from 'react'
import Card3 from '../../assets/home/Card3.png'
import ProfilePic from '../../assets/home/profileImage.png'

function Section3() {
    return (
        <div className='w-full h-auto flex flex-col px-5 my-5'>
            <div className='w-full relative h-[450px] mx-auto'>
                <img src={ProfilePic} alt="profile image" className='h-full w-full object-cover rounded-3xl' />
                <img src={Card3} alt="card" className='absolute -top-5 -right-4 h-40 w-32' />
            </div>
            <div className='w-full h-auto flex flex-col'>
                <div className='w-full h-auto flex flex-col'>
                    <h1></h1>
                </div>
            </div>
        </div>
    )
}

export default Section3