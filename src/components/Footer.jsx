import React from 'react';
import logo from '../assets/logo.svg';
import twitter from '../assets/twitter.svg';
import facebook from '../assets/facebook.svg';
import linkedin from '../assets/linkedin.svg';
import instagram from '../assets/instagram.svg';

const Footer = () => {
  return (
    <div className='text-white py-16 px-4 max-w-[1240px] mx-auto'>
        <div className='grid md:grid-cols-2'>
            <div>
                <img src={logo} />
                <p className='py-4 text-xl'>A new way to make the payments easy, reliable and secure.</p>
            </div>
            <div className='flex justify-between gap-8'>
                <div>
                    <p className='text-xl font-bold py-2'>Useful Links</p>
                    <p className='py-2 cursor-pointer hover:text-teal-400'>Content</p>
                    <p className='py-2 cursor-pointer hover:text-teal-400'>How it Works</p>
                    <p className='py-2 cursor-pointer hover:text-teal-400'>Create</p>
                    <p className='py-2 cursor-pointer hover:text-teal-400'>Explore</p>
                    <p className='py-2 cursor-pointer hover:text-teal-400'>Terms & Services</p>
                </div>
                <div>
                    <p className='text-xl font-bold py-2'>Community</p>
                    <p className='py-2 cursor-pointer hover:text-teal-400'>Help Center</p>
                    <p className='py-2 cursor-pointer hover:text-teal-400'>Partners</p>
                    <p className='py-2 cursor-pointer hover:text-teal-400'>Suggestions</p>
                    <p className='py-2 cursor-pointer hover:text-teal-400'>Blog</p>
                    <p className='py-2 cursor-pointer hover:text-teal-400'>Newsletters</p>
                </div>
                <div>
                    <p className='text-xl font-bold py-2'>Partner</p>
                    <p className='py-2 cursor-pointer hover:text-teal-400'>Our Partner</p>
                    <p className='py-2 cursor-pointer hover:text-teal-400'>Become a Partner</p>
                </div>
            </div>
        </div>
        <hr className='my-4'/>
        <div className='flex justify-between'>
            <p>2021 HooBank. All Rights Reserved.</p>
            <div className='flex gap-1 md:gap-8'>
                <img src={twitter} className='cursor-pointer'/>
                <img src={facebook} className='cursor-pointer'/>
                <img src={linkedin} className='cursor-pointer'/>
                <img src={instagram} className='cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}

export default Footer