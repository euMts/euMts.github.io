import React from 'react';
import '../App.css';
import './HeroSection.css';
// import video from './videos/video-2.mp4';

function HeroSection() {
  return (
    <section className='hero-container' id='hero'>
        {/* <video src={video} autoPlay loop muted /> */}
        <h1>MATHEUS EDUARDO</h1>
        <p>Software engineer/developer and professional problem-solver.</p>
        <p className='info-container'>400 followers - 15 projects</p>
    </section>
  );
};

export default HeroSection;
