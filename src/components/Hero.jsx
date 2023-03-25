import React from 'react';
import robot from '../assets/robot.png';
import discount from '../assets/discount.svg';
import arrow_up from '../assets/arrow_up.svg';

const Hero = () => {
  return (
    <div id="home" className='text-white max-w-[1280px] mx-auto py-28 px-4 ease-in-out duration-300'>
        <div className='grid xl:grid-cols-2'>
            <div>
                <div className='flex justify-center items-center bg-gradient-to-r from-black via-gray-800 to-black rounded w-[300px]'>
                    <img src={discount} className='pr-2'/>
                    <p>20% Discount For 1 Month Account</p>
                </div>
                <div className='grid md:grid-cols-4'>
                    <div className='md:col-span-3 py-4'>
                        <p className='text-6xl md:text-7xl font-bold'>The Next <span className='text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-teal-400 to-gray-400'>Generation</span> Payment Method.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center text-center'>
                        <p className='border-2 border-teal-400 rounded-full w-[120px] h-[120px] pt-11 text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-teal-200 to-gray-400 font-bold cursor-pointer hover:scale-105'>Get Started</p>
                    </div>
                </div>
                <p className='text-2xl py-4'>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
            </div>
            <div>
                <img src={robot}/>
            </div>
        </div>
        <div className='grid md:grid-cols-3 gap-8 py-14'>
            <div className='text-center'>
                <p className='text-4xl font-bold'>3800+ <span className='text-2xl text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-teal-400 to-gray-400'>USER ACTIVE</span></p>
            </div>
            <div className='text-center'>
                <p className='text-4xl font-bold'>230+ <span className='text-2xl text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-teal-400 to-gray-400'>TRUSTED BY COMPANY</span></p>
            </div>
            <div className='text-center'>
                <p className='text-4xl font-bold'>$230M+ <span className='text-2xl text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-teal-400 to-gray-400'>TRANSACTION</span></p>
            </div>
        </div>
    </div>
  )
}

export default Hero