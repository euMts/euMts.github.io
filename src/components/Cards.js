import React from 'react';
import CardItem from './CardItem';
import '../styles/Cards.css';
import image01 from '../assets/images/twitter-to-discord.jpg';
import image02 from '../assets/images/insta-bio-updater.jpg';
// import image03 from '../assets/images/calor-bot.jpg';
// import image04 from '../assets/images/lightshot-scrapper.jpg';
// import image05 from '../assets/images/insta-sorteio.jpg';
import image06 from '../assets/images/business-website.jpg';
import image07 from '../assets/images/sickomode.png'

function Cards() {
  return (
    <section className='cards' id='cards' name='cards-name'>
      <h1>Popular projects</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
              {/* each 'ul' is a row */}
                <ul className='cards__items'>
                    {/* <CardItem 
                    src={image01} 
                    text="Twitter Media to Discord" 
                    text2="Download media from a twitter profile and send it to discord" 
                    label='Python' 
                    lang='Python'
                    url='https://github.com/euMts/twitter_media_to_discord' /> */}
                    <CardItem 
                    src={image07} 
                    text="Sickomode" 
                    text2="ESP8266 WiFi Captive Portal" 
                    label='Arduino' 
                    lang='Arduino'
                    url='https://github.com/euMts/sickomode' />
                    <CardItem 
                    src={image02} 
                    text="Instagram Bio Updater" 
                    text2="Automatically update instagram biography" 
                    label='Python' 
                    lang='Python'
                    url='https://github.com/euMts/instagram_bio_updater' />
                    <CardItem 
                    src={image06} 
                    text="Business Website" 
                    text2="My personal website code" 
                    label='React' 
                    lang='React'
                    url='https://github.com/euMts/euMts.github.io' />
                </ul>
                {/* <ul className='cards__items'>
                    <CardItem 
                    src={image03} 
                    text="Twitter Bot" 
                    text2="Interage com usuários do twitter sobre determinado assunto." 
                    label='Python' 
                    lang='Python'
                    url='https://github.com/euMts/bot_calor' />
                    <CardItem 
                    src={image04} 
                    text="Lightshot Scrapper" 
                    text2="Procura por imagens salvas na plataforma Lightshot." 
                    label='Python' 
                    lang='Python'
                    url='https://github.com/euMts/Lightshot-Scraper' />
                    <CardItem 
                    src={image06} 
                    text="Business Website" 
                    text2="Código do meu website." 
                    label='React' 
                    lang='React'
                    url='https://github.com/euMts/euMts.github.io' />
                </ul>     */}
            </div>  
        </div>
        <div className='button-box'>
          <a className='button' href='https://github.com/euMts?tab=repositories' target="_blank" rel="noreferrer">
            <i className="fa-solid fa-folder" />
            <h3>More Projects</h3>
          </a>
        </div>
    </section>
  )
}

export default Cards
