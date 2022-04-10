import React, { useState } from "react";
import '../styles/InputForm.css'

export default function InputForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function sendMail() {
        alert("Estamos trabalhando nisso, sua mensagem não pode ser enviada no momento.")
    };

    return (
        <div className="input-form">
            <form>
                <div className="form-group">
                    <label htmlFor="name">Your name
                        <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Your email
                        <input 
                        type="text" 
                        id="email" 
                        email="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Your message
                        <textarea 
                        type="text" 
                        id="message" 
                        message="message" 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} />
                    </label>
                </div>
                <button type="submit" onClick={() => sendMail()}>Send</button>
            </form>
        </div>
    )
}