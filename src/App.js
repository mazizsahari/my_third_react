import React from 'react';
import Billing from './components/Billing';
import Business from './components/Business';
import CardDeal from './components/CardDeal';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Review from './components/Review';
import Service from './components/Service';

function App() {
  return (
    <div className='bg-gradient-to-r from-black via-sky-900 to-black'>
      <Navbar/>
      <Hero/>
      <Business/>
      <Billing/>
      <CardDeal/>
      <Review/>
      <Service/>
      <Footer/>
    </div>
  );
}

export default App;
