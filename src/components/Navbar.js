import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [, setButton] = useState(true);
    const [navbar, setNavbar] = useState(false);

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

    const changeNavbar = () => {
        if(window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeNavbar);

  return (
      <>
        <nav className={navbar ? 'navbar set' : 'navbar'}>
            <div className='navbar-container'>
                <ScrollLink to='hero' className={navbar ? 'navbar-logo set' : 'navbar-logo'} spy={true} smooth={true} offset={-80} duration={600} onClick={() => closeMobileMenu('hero')}>MTS
                </ScrollLink>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? (navbar ? 'fas fa-times set' : 'fas fa-times') : (navbar ? 'fas fa-bars set' : 'fas fa-bars')} />
                </div>
                <ul className={click ? (navbar ? 'nav-menu active set' : 'nav-menu active') : (navbar ? 'nav-menu set' : 'nav-menu')}>
                    <li className='nav-item'>
                        <ScrollLink to='hero' className={navbar ? 'nav-links set' : 'nav-links'} spy={true} smooth={true} offset={-80} duration={600} onClick={() => closeMobileMenu('hero')}>
                            Home    
                        </ScrollLink>
                    </li>
                    <li className='nav-item'>
                        <ScrollLink to='about' className={navbar ? 'nav-links set' : 'nav-links'} spy={true} smooth={true} offset={-80} duration={600} onClick={() => closeMobileMenu('cards')}>
                            About    
                        </ScrollLink>
                    </li>
                    <li className='nav-item'>
                        <ScrollLink to='cards' className={navbar ? 'nav-links set' : 'nav-links'} spy={true} smooth={true} offset={-80} duration={600} onClick={() => closeMobileMenu('cards')}>
                            Software    
                        </ScrollLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/contact' className={navbar ? 'nav-links set' : 'nav-links'} offset={-80} duration={600} onClick={() => closeMobileMenu('cards')}>
                            Contact    
                        </NavLink>
                    </li>
                </ul>
            </div>    
        </nav>
      </>
  )
}

export default Navbar
