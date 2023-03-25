import React from 'react';
import card from '../assets/card.png';

const CardDeal = () => {
  return (
    <div className='text-white py-16 px-4 max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <div className='flex flex-col justify-center'>
            <p className='text-6xl font-bold py-4'>Find a better card deal in few easy steps.</p>
            <p className='text-xl text-gray-300 py-4'>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
            <button className='bg-teal-400 p-3 w-[150px] rounded text-black text-xl font-medium hover:bg-teal-200'>Get Started</button>
        </div>
        <div>
            <img src={card}/>
        </div>
    </div>
  )
}

export default CardDeal