import React from 'react';
import star from '../assets/star.svg';
import shield from '../assets/shield.svg';
import send from '../assets/send.svg';

const Business = () => {
  return (
    <div id="features" className='text-white max-w-[1280px] mx-auto px-4 py-16 grid xl:grid-cols-2 gap-8'>
        <div>
            <p className='text-6xl font-bold'>You do the business, we’ll handle the money.</p>
            <p className='py-6 text-xl text-gray-300'>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
            <button className='bg-teal-400 w-[150px] p-3 rounded text-black font-medium text-xl hover:bg-teal-200'>Get Started</button>
        </div>
        <div>
            <div className='flex gap-4 py-5 my-2 items-center hover:bg-gray-500 rounded-full p-3'>
                <div className='flex justify-center items-center rounded-full bg-gray-900 w-[64px] h-[64px]'>
                    <img src={star}/>
                </div>
                <div>
                    <p className='text-2xl font-bold'>Rewards</p>
                    <p className='font-medium text-gray-200'>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
                </div>
            </div>
            <div className='flex gap-4 py-5 my-2 items-center hover:bg-gray-500 rounded-full p-3'>
                <div className='flex justify-center items-center rounded-full bg-gray-900 w-[64px] h-[64px]'>
                    <img src={shield}/>
                </div>
                <div>
                    <p className='text-2xl font-bold'>100% Secured</p>
                    <p className='font-medium text-gray-200'>We take proactive steps make sure your information and transactions are secure.</p>
                </div>
            </div>
            <div className='flex gap-4 py-5 my-2 items-center hover:bg-gray-500 rounded-full p-3'>
                <div className='flex justify-center items-center rounded-full bg-gray-900 w-[64px] h-[64px]'>
                    <img src={send}/>
                </div>
                <div>
                    <p className='text-2xl font-bold'>Balance Transfer</p>
                    <p className='font-medium text-gray-200'>A balance transfer credit card can save you a lot of money in interest charges.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Business