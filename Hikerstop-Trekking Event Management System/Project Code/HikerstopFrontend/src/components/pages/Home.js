import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../Herosection';
import Navbar from '../Navbarhome';
import Footer from '../Footer';
import eventcards from './eventcards';

function Home() {
  return (
    <>
        <Navbar/>
        <HeroSection />
        <Cards />
  
        <Footer />
    </>
  );
}

export default Home
