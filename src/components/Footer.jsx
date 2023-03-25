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
            <div className='flex justify-between'>
                <div>
                    <p className='text-xl font-bold py-2'>Useful Links</p>
                    <p className='py-2 cursor-pointer'>Content</p>
                    <p className='py-2 cursor-pointer'>How it Works</p>
                    <p className='py-2 cursor-pointer'>Create</p>
                    <p className='py-2 cursor-pointer'>Explore</p>
                    <p className='py-2 cursor-pointer'>Terms & Services</p>
                </div>
                <div>
                    <p className='text-xl font-bold py-2'>Community</p>
                    <p className='py-2 cursor-pointer'>Help Center</p>
                    <p className='py-2 cursor-pointer'>Partners</p>
                    <p className='py-2 cursor-pointer'>Suggestions</p>
                    <p className='py-2 cursor-pointer'>Blog</p>
                    <p className='py-2 cursor-pointer'>Newsletters</p>
                </div>
                <div>
                    <p className='text-xl font-bold py-2'>Partner</p>
                    <p className='py-2 cursor-pointer'>Our Partner</p>
                    <p className='py-2 cursor-pointer'>Become a Partner</p>
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