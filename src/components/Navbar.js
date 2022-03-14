import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = (section) => {
        setClick(false)
        checkUrl(section)
    };

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        };
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    const checkUrl = (section) => {
        const urlAtual = window.location.pathname;
        if(urlAtual !== "/" && section !== "contact") {
            window.location.assign(`/#${section}`);
        }
    }

  return (
      <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <ScrollLink to='hero' className='navbar-logo' spy={true} smooth={true} offset={-80} duration={600} onClick={() => closeMobileMenu('hero')}>MTS
                    {/* MTS <i className='fab fa-typo3' /> */}
                </ScrollLink>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <ScrollLink to='hero' className='nav-links' spy={true} smooth={true} offset={-80} duration={600} onClick={() => closeMobileMenu('hero')}>
                            Home    
                        </ScrollLink>
                    </li>
                    <li className='nav-item'>
                        <ScrollLink to='cards' className='nav-links' spy={true} smooth={true} offset={-80} duration={600} onClick={() => closeMobileMenu('cards')}>
                            Software    
                        </ScrollLink>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-links' onClick={() => closeMobileMenu('contact')}>
                            Contact    
                        </Link>
                    </li>
                </ul>
            </div>    
        </nav>
      </>
  )
}

export default Navbar
