import React from 'react';
import '../styles/App.css';
import HeroSection from '../components/HeroSection';
import Cards from '../components/Cards';
import About from '../components/About';
import Footer from '../components/Footer';

function Home() {
    return (
        <>
            <HeroSection />
            <About />
            <Cards />
            <Footer />
        </>
    );
}

export default Home;