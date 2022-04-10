import React from 'react';
import '../styles/About.css';
// import profilePic from './images/me/test.png';

function About() {
    return (
      <section className='about' id='about' name='about-name'>
          <div className='about__container'>
              <div className='about__rectangle'>
                  <div className='about__left'>
                    {/* <img src={profilePic} /> */}
                  </div>
                  <div className='about__right'>
                    <h1>My work</h1>
                    <h2>
                    My name is Matheus and I work with technology-oriented solutions.
                    </h2>
                    <h3>
                    I started my studies in programming at the age of 14 and have been working professionally in the area since 2021. I have experience with scrum, network structures, database, automation and software development.
                    </h3>
                    <h3>
                    In addition to writing lines of code, my passion is to improve people's daily lives through technology.                    </h3>
                    <h3>
                    Feel free to contact me if you are interested in my work.
                    </h3>
                  </div>
              </div>
          </div>
      </section>
    )
  }

export default About;
