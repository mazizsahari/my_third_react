import React from 'react';
import bill from '../assets/bill.png';
import apple from '../assets/apple.svg';
import google from '../assets/google.svg';

const Billing = () => {
  return (
    <div id="product" className='text-white py-16 px-4 max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8'>
        <div className='flex flex-col justify-center items-center'>
            <img src={bill} />
        </div>
        <div className='flex flex-col justify-center items-center'>
            <p className='text-6xl font-bold py-4'>Easily control your billing & invoicing.</p>
            <p className='text-xl text-gray-300 py-4'>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
            <div className='flex gap-8 py-4'>
                <img src={apple} />
                <img src={google} />
            </div>
        </div>
    </div>
  )
}

export default Billing