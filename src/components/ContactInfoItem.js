import React from "react";
import '../styles/ContactInfoItem.css';

export default function ContactInfoItem({
    cursorStyle = 'default',
    website,
    target = '_blank',
    icon, text
}
) {
    return (
        <a className="itemAnchor" href={website} rel="noreferrer" target={target}>
            <div className="itemStyles" style={{cursor:cursorStyle}}>
                <i className={icon} />
                <div className="info"><p>{text}</p></div>
            </div>
        </a>
    )
}