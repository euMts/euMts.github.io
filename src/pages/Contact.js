import React from 'react';
import '../styles/Contact.css';
import ContactInfoItem from '../components/ContactInfoItem';
import InputForm from '../components/InputForm';

function Contact() {
    return (
        <div className='contact'>
            <section className='section_title'>
                <h2>CONTACT</h2>
            </section>
            <div className='contact__wrapper'>
                <div className='left'>
                    <div className='inside-left'>
                        <ContactInfoItem 
                        website="https://www.linkedin.com/in/matheusetp/" 
                        cursorStyle='pointer'
                        icon="fab fa-linkedin"
                        text="Matheus Eduardo" />

                        <ContactInfoItem 
                        website="mailto:contato@matheus-eduardo.com.br" 
                        cursorStyle='pointer'
                        icon="fa fa-envelope" 
                        text="contato@matheus-eduardo.com.br" />

                        <ContactInfoItem 
                        website="#"
                        target=""
                        icon="fa-solid fa-location-dot" 
                        text="Cascavel, Paraná, Brasil" />
                    </div>
                </div>
                <div className='right'>
                    <InputForm />
                </div>
            </div>
        </div>
    )
  }

export default Contact;
