import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Home/Navbar/Navbar';

const NotFound = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div  className='mt-5 pt-5 pb-5 bg-secondary w-85 mx-5 text-white text-center border border-3 rounded-3'>
                <h1>404!! You Lost..</h1>
                <br />
                <span className='fs-1 w-85 rounded'>😒😒</span>
                <br />
                <Link to='/home'><button className='btn btn-dark mt-3'>Back To Home</button></Link>
            </div>
        </div>
    );
};

export default NotFound;