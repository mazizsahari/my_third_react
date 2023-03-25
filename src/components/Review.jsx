import React from 'react';
import quotes from '../assets/quotes.svg';
import people01 from '../assets/people01.png';
import people02 from '../assets/people02.png';
import people03 from '../assets/people03.png';

const Review = () => {
  return (
    <div id="clients" className='py-16 px-4 max-w-[1240px] mx-auto text-white'>
        <div className='grid md:grid-cols-2 py-4'>
            <div>
                <p className='text-5xl font-bold'>What people are saying about us</p>
            </div>
            <div className='flex flex-col justify-center'>
                <p className='text-xl text-gray-300'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>
        </div>
        <div className='grid md:grid-cols-3 gap-8 py-20'>
            <div className='flex flex-col justify-between gap-8 hover:bg-gradient-to-r from-gray-900 to-teal-700 p-5 rounded'>
                <img src={quotes} className='w-[40px]'/>
                <p className='text-xl'>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
                <div className='flex'>
                    <img src={people01} className='w-[80px] pr-4'/>
                    <div className='flex flex-col justify-center'>
                        <p className='text-xl font-bold'>Herman Jensen</p>
                        <p className='text-gray-300'>Founder & Leader</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-between gap-8 hover:bg-gradient-to-r from-gray-900 to-teal-700 p-5 rounded'>
                <img src={quotes} className='w-[40px]'/>
                <p className='text-xl'>Money makes your life easier. If you're lucky to have it, you're lucky.</p>
                <div className='flex'>
                    <img src={people02} className='w-[80px] pr-4'/>
                    <div className='flex flex-col justify-center'>
                        <p className='text-xl font-bold'>Steve Mark</p>
                        <p className='text-gray-300'>Founder & Leader</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-between gap-8 hover:bg-gradient-to-r from-gray-900 to-teal-700 p-5 rounded'>
                <img src={quotes} className='w-[40px]'/>
                <p className='text-xl'>It is usually people in the money business, finance, and international trade that are really rich.</p>
                <div className='flex'>
                    <img src={people03} className='w-[80px] pr-4'/>
                    <div className='flex flex-col justify-center'>
                        <p className='text-xl font-bold'>Kenn Gallagher</p>
                        <p className='text-gray-300'>Founder & Leader</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Review