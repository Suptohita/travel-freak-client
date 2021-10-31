import React from 'react';
import Footer from '../Home/Footer/Footer';
import Navbar from '../Home/Navbar/Navbar';

const AddDestination = () => {


    return (
        <div>
            <Navbar></Navbar>
            <div className='container mt-5 pt-5 pb-5 mb-5' style={{maxWidth:'50%'}}>
                <h5 className='mt-3'>Name:</h5>
                <input className='form-control' type="text" name="Name" id="" />

                <h5 className='mt-3'>Price:</h5>
                <input className='form-control' type="text" name="Email" id="" />

                <h5 className='mt-3'>Image URL:</h5>
                <input className='form-control' type="text" name="Image_URL" id="" />

                <h5 className='mt-3'>Description:</h5>
                <input className='form-control' type="text" name="Description" id="" />

                <button className='btn btn-secondary mt-4'>Submit</button>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddDestination;