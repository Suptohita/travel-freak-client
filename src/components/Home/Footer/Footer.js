import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-div'>
            <div className='footer'>
                <div>
                    <h4 className='mb-4'><u>Company</u></h4>
                    <h6>About Us</h6>
                    <h6>Blog</h6>
                    <h6>Contact</h6>
                </div>

                <div>
                    <h4 className='mb-4'><u>Links</u></h4>
                    <h6>Places</h6>
                    <h6>Events</h6>
                    <h6>Gallery</h6>
                </div>
                
                <div>
                    <h4 className='mb-4'><u>Booking</u></h4>
                    <h6>Tickets</h6>
                    <h6>Season Pass</h6>
                    <h6>Offer</h6>
                </div>
            </div>
            <h6 className='text-center pb-4'>©️ Copyright Reserved</h6>
        </div>
    );
};

export default Footer;