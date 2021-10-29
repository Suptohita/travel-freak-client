import React from 'react';
import feature1 from './images/feature-1.jpg'
import feature2 from './images/feature-2.jpg'
import feature3 from './images/feature-3.jpg'
import feature4 from './images/feature-4.jpg'
import feature5 from './images/feature-5.jpg'

const Feature = () => {
    return (
        <div className='p-5'>
            <h3 className='text-center mt-5'>We are featured in: </h3>
            <div className='d-flex flex-wrap justify-content-center pt-5'>
                <img className='img-fluid rounded-circle me-4 mb-4' style={{maxWidth:'200px', objectFit:'cover'}} src={feature1} alt="" />
                <img className='img-fluid rounded-circle me-4 mb-4' style={{maxWidth:'200px', objectFit:'cover'}} src={feature2} alt="" />
                <img className='img-fluid rounded-circle me-4 mb-4' style={{maxWidth:'200px', objectFit:'cover'}} src={feature3} alt="" />
                <img className='img-fluid rounded-circle me-4 mb-4' style={{maxWidth:'200px', objectFit:'cover'}} src={feature4} alt="" />
                <img className='img-fluid rounded-circle me-4 mb-4' style={{maxWidth:'200px', objectFit:'cover'}} src={feature5} alt="" />
            </div>
        </div>
    );
};

export default Feature;