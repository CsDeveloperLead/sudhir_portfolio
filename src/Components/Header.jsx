import { HiBars3 } from "react-icons/hi2";
import { NavLink } from 'react-router-dom';
import SideNavbar from "./SideNav";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
// import { div } from "framer-motion/m";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <header className='w-full h-auto p-3 flex justify-between md:p-6 lg:px-10'>
                <div className='w-auto h-auto'>
                    <span className='w-10 h-10 bg-black flex justify-center items-center text-white rounded-full'>
                        S
                    </span>
                </div>
                <div className='hidden md:flex font-satoshi justify-center items-center gap-14 lg:gap-20 lg:text-lg'>
                    <NavLink to='/' className={({ isActive }) => `${isActive ? 'text-blue-700 underline' : 'text-black'} underline-offset-4`}>Home</NavLink>
                    <NavLink to='/blogs' className={({ isActive }) => `${isActive ? 'text-blue-700 underline' : 'text-black'} underline-offset-4`}>Blogs</NavLink>
                    <NavLink to='/events' className={({ isActive }) => `${isActive ? 'text-blue-700 underline' : 'text-black'} underline-offset-4`}>Events</NavLink>
                    <NavLink to='/contact' className={({ isActive }) => `${isActive ? 'text-blue-700 underline' : 'text-black'} underline-offset-4`}>Contact</NavLink>
                </div>
                <div className='w-auto h-auto flex gap-4 justify-center items-center font-satoshi'>
                    <NavLink onClick={() => setIsOpen(false)} to='/contact' className='text-center py-2 underline-offset-4 bg-[#3071AA] md:hover:bg-[#3783c5] text-white font-bold px-7 rounded-md'>Get in Touch</NavLink>
                    {
                        isOpen
                            ? <IoClose size={35} className='text-black md:hidden cursor-pointer' onClick={() => setIsOpen(false)} />
                            : <HiBars3 size={35} className='text-black md:hidden cursor-pointer' onClick={() => setIsOpen(true)} />
                    }
                </div>
                <SideNavbar />
            </header>
            {
                isOpen && (
                    <div className={`${isOpen ? 'translate-y-0' : '-translate-y-full'} duration-500 transition-all ease-in-out w-full h-auto flex flex-col p-3 gap-2 font-satoshi shadow-xl rounded-b-xl`}>
                        <NavLink onClick={() => setIsOpen(false)} to='/' className={({ isActive }) => `${isActive ? 'text-blue-700 underline' : 'text-black'} text-center py-2 sm:text-lg underline-offset-4`}>Home</NavLink>
                        <NavLink onClick={() => setIsOpen(false)} to='/blogs' className={({ isActive }) => `${isActive ? 'text-blue-700 underline' : 'text-black'} text-center py-2 sm:text-lg underline-offset-4`}>Blogs</NavLink>
                        <NavLink onClick={() => setIsOpen(false)} to='/events' className={({ isActive }) => `${isActive ? 'text-blue-700 underline' : 'text-black'} text-center py-2 sm:text-lg underline-offset-4`}>Events</NavLink>
                        <NavLink onClick={() => setIsOpen(false)} to='/contact' className={({ isActive }) => `${isActive ? 'text-blue-700 underline' : 'text-black'} text-center py-2 sm:text-lg underline-offset-4`}>Contact</NavLink>
                        <div className="w-full h-auto flex justify-center items-center font-satoshi">
                            <NavLink onClick={() => setIsOpen(false)} to='/contact' className='text-center py-2 underline-offset-4 bg-[#3071AA] text-white font-bold px-7 rounded-md'>Get in Touch</NavLink>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Header