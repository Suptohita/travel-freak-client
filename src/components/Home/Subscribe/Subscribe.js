import React from 'react';
import './Subscribe.css'

const Subscribe = () => {
    return (
        <div className='text-center pb-5 pt-5 subscribe'>
            <h1><u>Getting in touch is simpler than ever</u></h1>
            <h6 className='m-4 text-white'>'Leave us your email address and we contact you back'</h6>
            <input placeholder='Your email' className='p-2' type="email" />
            <button className='p-2'>subscribe</button>
        </div>
    );
};

export default Subscribe;