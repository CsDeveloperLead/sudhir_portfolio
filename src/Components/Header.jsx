import { HiBars3 } from "react-icons/hi2";
import {  NavLink } from 'react-router-dom';


function Header() {
  return (
    <header className='w-full h-auto p-3 flex justify-between md:p-6 lg:px-10'>
        <div className='w-auto h-auto'>
            <span className='w-10 h-10 bg-black flex justify-center items-center text-white rounded-full'>
                S
            </span>
        </div>
        <div className='hidden md:flex font-satoshi justify-center items-center gap-14 lg:gap-20 lg:text-lg'>
            <NavLink to='/' className={({ isActive }) => `${isActive ? 'text-blue-700' : 'text-black'}`}>Home</NavLink>
            <span>Work</span>
            <NavLink to='/events' className={({ isActive }) => `${isActive ? 'text-blue-700' : 'text-black'}`}>Events</NavLink>
            <NavLink to='/contact' className={({ isActive }) => `${isActive ? 'text-blue-700' : 'text-black'}`}>Contact</NavLink>
        </div>
        <div className='w-auto h-auto flex gap-4 justify-center items-center'>
            <div className='h-11 w-11 flex flex-col justify-center gap-2 items-center border-2 border-black rounded-full'>
                <span className='h-[1px] w-7 bg-black'></span>
                <span className='h-[1px] w-4 bg-black'></span>
                <span className='h-[1px] w-2 bg-black'></span>
            </div>
            <HiBars3 size={35} className='text-black md:hidden cursor-pointer' />
        </div>
    </header>
  )
}

export default Header