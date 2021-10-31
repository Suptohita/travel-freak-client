import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Footer from '../Home/Footer/Footer';
import Navbar from '../Home/Navbar/Navbar';


const PlaceOrder = () => {
    const { destinationId } = useParams()
    const [destinations, setDestinations] = useState([])
    const {user} = useAuth()

    useEffect(() => {
        fetch(`http://localhost:8000/destinations/${destinationId}`)
            .then(res => res.json())
            .then(data => setDestinations(data))
    }, [])

    return (

        <div>
            <Navbar></Navbar>
            <div className='rounded-3 justify-content-center mt-5'>
                <div className='text-center'>
                    <img className='img-fluid rounded-3' src={destinations.image} alt="" />
                </div>
                
                <div className='rounded-3 mt-3 mb-2 d-flex flex-wrap container'>
                    <div className='ps-3 ms-5 me-3 fs-6'>
                        <h1 className='text-center'>{destinations.name}</h1>
                        <div className='border border-danger rounded p-3'>
                            <p>{destinations.description}</p>
                            <h5 className='fw-normal'>From</h5>
                            <h5>${destinations.price}</h5>
                        </div>
                    </div>
                    <div className='container mt-3 mb-5' style={{width:'50%'}}>
                        <h3 className='mb-3'><u>BookTicket :</u></h3>
                        <input type='text' className='form-control mt-2 border-danger' value={user?.displayName}/>
                        <input type='text' className='form-control mt-3 border-danger' value={user?.email}/>
                        <input type='number' placeholder='Person' className='form-control mt-3'/>
                        <input type='date' className='form-control mt-3'/>
                        <div className='text-center mt-3'><button className='btn btn-secondary'>Book Now</button></div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default PlaceOrder;