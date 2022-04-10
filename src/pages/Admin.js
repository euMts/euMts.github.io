import React from 'react';
import '../styles/App.css'

function Admin() {
    return (
        <>
            <div className='admin'>
                <h1>Pensou mesmo que seria tão fácil?</h1>
                <h1>Did you really think it would be that easy?</h1>
                <button onClick={() => {alert("Thanks!")}}>Click me</button>
            </div>
        </>
    );
}

export default Admin;