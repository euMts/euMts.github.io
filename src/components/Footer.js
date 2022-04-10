import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
        <section className='social-media'>
            <div className='social-media-wrap'>
            {/* <div className='footer-logo'> */}
                {/* <ScrollLink to='hero' className='social-logo' spy={true} smooth={true} offset={-80} duration={600}>
                    MTS
                </ScrollLink> */}
                {/* <Link to='/' className='social-logo'>MTS</Link> */}
            {/* </div> */}
            {/* <small className='website-rights'>MTS © 2022</small> */}
            <div className='social-icons'>
                <a href={'https://www.instagram.com/mts.e/'} rel="noreferrer"
                className='social-icon-link instagram'
                to='/'
                target='_blank'
                aria-label='Instagram'
                >
                <i className='fab fa-instagram' />
                </a>
                <a href="https://www.youtube.com/c/MtsPlays/" rel="noreferrer"
                className='social-icon-link youtube'
                to='/'
                target='_blank'
                aria-label='Youtube'
                >
                <i className='fab fa-youtube' />
                </a>
                <a href="https://www.linkedin.com/in/matheusetp/" rel="noreferrer"
                className='social-icon-link linkedin'
                to='/'
                target='_blank'
                aria-label='LinkedIn'
                >
                <i className='fab fa-linkedin' />
                </a>
                <a href="https://www.github.com/euMts/" rel="noreferrer"
                className='social-icon-link github'
                to='/'
                target='_blank'
                aria-label='Github'
                >
                <i className='fab fa-github' />
                </a>
                <a href="mailto:matheusetp@hotmail.com" rel="noreferrer"
                className='social-icon-link email'
                to='/'
                target='_blank'
                aria-label='Email'
                >
                <i className='fa fa-envelope' />
                </a>
            </div>
            </div>
        </section>
        </div>
  )
}

export default Footer
