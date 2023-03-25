import React from 'react';
import airbnb from '../assets/airbnb.png';
import binance from '../assets/binance.png';
import coinbase from '../assets/coinbase.png';
import dropbox from '../assets/dropbox.png';


const Service = () => {
  return (
    <div className='py-16 px-4 max-w-[1240px] mx-auto text-white'>
        <div className='grid md:grid-cols-4 gap-8'>
            <div className='flex justify-center items-center hover:bg-gray-400 p-2 rounded-full'>
                <img src={airbnb} className='w-[240px]' />
            </div>
            <div className='flex justify-center items-center hover:bg-gray-400 p-2 rounded-full'>
                <img src={binance} className='w-[240px]' />
            </div>
            <div className='flex justify-center items-center hover:bg-gray-400 p-2 rounded-full'>
                <img src={coinbase} className='w-[240px]' />
            </div>
            <div className='flex justify-center items-center hover:bg-gray-400 p-2 rounded-full'>
                <img src={dropbox} className='w-[240px]' />
            </div>
        </div>
        <div className='my-4 py-12 grid md:grid-cols-4 bg-gradient-to-r from-black via-sky-900 to-black rounded-3xl'>
            <div className='px-4 md:col-span-3'>
                <p className='text-5xl font-bold py-4'>Let’s try our service now!</p>
                <p className='text-xl text-gray-200'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>
            <div className='flex flex-col justify-center items-center py-8'>
                <button className='bg-teal-400 w-[200px] p-4 rounded text-black text-xl font-bold hover:bg-teal-200'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Service