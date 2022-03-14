import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import image01 from './images/twitter-to-discord.jpg'
import image02 from './images/insta-bio-updater.jpg'
import image03 from './images/calor-bot.jpg'
import image04 from './images/lightshot-scrapper.jpg'
import image05 from './images/insta-sorteio.jpg'

function Cards() {
  return (
    <section className='cards' id='cards' name='cards-name'>
      <h1>Popular projects</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
              {/* each 'ul' is a row */}
                <ul className='cards__items'>
                    <CardItem 
                    src={image01} 
                    text="Twitter Media to Discord" 
                    label='Python' 
                    url='https://github.com/euMts/twitter_media_to_discord' />
                    <CardItem 
                    src={image02} 
                    text="Instagram Bio Updater" 
                    label='Python' 
                    url='https://github.com/euMts/instagram_bio_updater' />
                </ul>    
                <ul className='cards__items'>
                    <CardItem 
                    src={image03} 
                    text="Bot do Calor" 
                    label='Python' 
                    url='https://github.com/euMts/bot_calor' />
                    <CardItem 
                    src={image04} 
                    text="Lightshot Scrapper" 
                    label='Python' 
                    url='https://github.com/euMts/Lightshot-Scraper' />
                    <CardItem 
                    src={image05} 
                    text="Instagram Auto Commenter" 
                    label='Python' 
                    url='https://github.com/euMts/instaSorteio' />
                </ul>    
            </div>  
        </div>
    </section>
  )
}

export default Cards
