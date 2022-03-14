import React, { useEffect } from 'react';
import '../../App.css'
import profilePic from '../images/profilepic.jpg'
import Container from '../container/Container'

function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return (
        <>
            <section className='mainBox-div'>
                <div className='mainBox'>
                    <h1>Coming soon!!!</h1>
                    {/* <div className='mainBox-header'>
                        <img src={profilePic} />
                        <h1>Matheus Eduardo</h1>
                        <h2>20 years old</h2>
                    </div> */}
                </div>
            </section>
        </>
    );
}

export default Contact;