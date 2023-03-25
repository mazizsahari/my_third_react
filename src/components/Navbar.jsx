import React, { useState } from 'react'
import logo from '../assets/logo.svg';
import menu from '../assets/menu.svg';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {

  // Open Mobile Navbar
  const [open, setOpen] = useState(false);
  const handleNav = () => {
    setOpen(!open);
  }

  return (
    
      <div className='text-white flex justify-between max-w-[1280px] mx-auto p-4'>

        {/* Desktop Navbar */}
        <img src={logo} alt="hoobank" class="w-[124px]"/>
        <ul className='hidden md:flex gap-8'>
          <li className='cursor-pointer ease-in-out duration-300'><a href="#home">Home</a></li>
          <li className='cursor-pointer ease-in-out duration-300'><a href="#features">Features</a></li>
          <li className='cursor-pointer'><a href="#product">Product</a></li>
          <li className='cursor-pointer'><a href="#clients">Clients</a></li>
        </ul>

        {/* Mobile Navbar */}
        <div className='md:hidden' onClick={handleNav}>
          <div>
            {open ? <AiOutlineClose/> : <AiOutlineMenu/>}
          </div>
          <ul className={open ? 'absolute right-4 top-10 p-8 bg-gradient-to-r from-gray-900 via-teal-900 to-gray-900 rounded-3xl ease-in-out duration-300' : 'fixed bottom-[-100%]'}>
            <li className='cursor-pointer py-4'><a href="#home">Home</a></li>
            <li className='cursor-pointer py-4'><a href="#features">Features</a></li>
            <li className='cursor-pointer py-4'><a href="#product">Product</a></li>
            <li className='cursor-pointer py-4'><a href="#clients">Clients</a></li>
          </ul>
        </div>

      </div>

    // <div class="sm:px-16 px-6 flex justify-center items-center">
    //     <div class="xl:max-w-[1280px] w-full">
    //         <nav class="w-full flex py-6 justify-between items-center navbar">
    //             <img src={logo} alt="hoobank" class="w-[124px] h-[32px]" />
    //             <ul class="sm:flex hidden justify-end items-center">
    //                 <li class="cursor-pointer text-[16px] mr-10 text-white">
    //                     <a href="#home">Home</a>
    //                 </li>
    //                 <li class="cursor-pointer text-[16px] mr-10 text-white">
    //                     <a href="#features">Features</a>
    //                 </li>
    //                 <li class="cursor-pointer text-[16px] mr-10 text-white">
    //                     <a href="#product">Product</a>
    //                 </li>
    //                 <li class="cursor-pointer text-[16px] mr-0 text-white">
    //                     <a href="#clients">Clients</a>
    //                 </li>
    //             </ul>
    //             <div class="sm:hidden flex justify-end items-center">
    //                 <img src={menu} alt="menu" class="w-[28px] h-[28px] object-contain" />
    //                 <div class="hidden p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar">
    //                     <ul class="flex flex-col justify-end items-center flex-1">
    //                         <li class="cursor-pointer text-[16px] mb-4 text-white">
    //                             <a href="#home">Home</a>
    //                         </li>
    //                         <li class="cursor-pointer text-[16px] mb-4 text-white">
    //                             <a href="#features">Features</a>
    //                         </li>
    //                         <li class="cursor-pointer text-[16px] mb-4 text-white">
    //                             <a href="#product">Product</a>
    //                         </li>
    //                         <li class="cursor-pointer text-[16px] mr-0 text-white">
    //                             <a href="#clients">Clients</a>
    //                         </li>
    //                     </ul>
    //                 </div>
    //             </div>
    //         </nav>
    //     </div>
    // </div>
  )
}

export default Navbar