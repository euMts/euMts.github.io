import React from 'react';
// import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
// import { Button } from './Button';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
        {/* <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
            Join the Adventure newsletter to receive our best vacation deals
            </p>
            <p className='footer-subscription-text'>
            You can unsubscribe at any time.
            </p>
            <div className='input-areas'>
            <form>
                <input
                className='footer-input'
                name='email'
                type='email'
                placeholder='Your Email'
                />
                <Button buttonStyle='btn--outline'>Subscribe</Button>
            </form>
            </div>
        </section> */}
        {/* <div className='footer-links'>
            <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
                <h2>About Us</h2>
                <Link to='/sign-up'>How it works</Link>
                <Link to='/'>Testimonials</Link>
                <Link to='/'>Careers</Link>
                <Link to='/'>Investors</Link>
                <Link to='/'>Terms of Service</Link>
            </div>
            <div className='footer-link-items'>
                <h2>Contact Us</h2>
                <Link to='/'>Contact</Link>
                <Link to='/'>Support</Link>
                <Link to='/'>Destinations</Link>
                <Link to='/'>Sponsorships</Link>
            </div>
            </div>
            <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
                <h2>Videos</h2>
                <Link to='/'>Submit Video</Link>
                <Link to='/'>Ambassadors</Link>
                <Link to='/'>Agency</Link>
                <Link to='/'>Influencer</Link>
            </div>
            <div className='footer-link-items'>
                <h2>Social Media</h2>
                <Link to='/'>Instagram</Link>
                <Link to='/'>Facebook</Link>
                <Link to='/'>Youtube</Link>
                <Link to='/'>Twitter</Link>
            </div>
            </div>
        </div> */}
        <section className='social-media'>
            <div className='social-media-wrap'>
            <div className='footer-logo'>
                <ScrollLink to='hero' className='social-logo' spy={true} smooth={true} offset={-80} duration={600}>
                    MTS
                </ScrollLink>
                {/* <Link to='/' className='social-logo'>MTS</Link> */}
            </div>
            {/* <small className='website-rights'>MTS © 2022</small> */}
            <div className='social-icons'>
                {/* <Link
                className='social-icon-link facebook'
                to='/'
                target='_blank'
                aria-label='Facebook'
                >
                <i className='fab fa-facebook-f' />
                </Link> */}
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
                {/* <Link
                className='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='Twitter'
                >
                <i className='fab fa-twitter' />
                </Link> */}
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
                aria-label='Email'
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
