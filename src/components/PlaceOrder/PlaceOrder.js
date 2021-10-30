import React from 'react';
import { useParams } from 'react-router';
import Navbar from '../Home/Navbar/Navbar';

const PlaceOrder = () => {
    const {destinationId} = useParams()
    console.log(destinationId)

    return (

        <div>
            <Navbar></Navbar>
        </div>
    );
};

export default PlaceOrder;