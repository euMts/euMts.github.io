import React from 'react';
import '../styles/App.css';
import '../styles/HeroSection.css';

function HeroSection() {
  return (
    <section className='hero-container' id='hero'>
        <h1>MATHEUS EDUARDO</h1>
        <p>Software engineer/developer and professional problem-solver</p>
        <p className='info-container'>446 followers - 15 projects</p>
    </section>
  );
};

export default HeroSection;
