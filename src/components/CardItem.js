import React from 'react';
// import { Link } from 'react-router-dom';

function CardItem(props) {
    let lang = props.lang.toLowerCase();
    let classNameByObject = `cards__item__pic-wrap_${lang}`;
  return (
      <>
        <li className='cards__item' style={{cursor: "pointer"}}> 
            {/* a -> link */}
            {/* onClick={() => openWebsite(props.url)} */}
            <a className='cards__item__link' href={props.url} target="_blank" rel="noreferrer">
                <figure className={classNameByObject} data-category={props.label}>
                    <img src={props.src} alt="card_image" className='cards__item__img' />   
                </figure>
                <div className='cards__item__info'>
                    <h5 className='cards__item__text'>{props.text}</h5>    
                </div>
            </a>    
        </li>
      </>
  )
}

export default CardItem
