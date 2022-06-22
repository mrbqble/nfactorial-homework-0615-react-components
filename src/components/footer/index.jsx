import React from 'react';

export const Footer = ({darkMode}) => {
    return (
        <div className='footer'>
            <p style = {{
                color: darkMode ? 'white' : 'black',
            }}>Links</p>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">First link</a>
            <a href="https://jut.su/" target="_blank" rel="noreferrer">Second link</a>
        </div>
    )
}