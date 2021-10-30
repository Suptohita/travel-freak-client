import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Destination.css'

const Destination = () => {
    const [destinations, setDestinations] = useState([])

    useEffect(() => {
        fetch('https://suptohita-travel-server.herokuapp.com/destinations')
            .then(res => res.json())
            .then(data => setDestinations(data.slice(0,6)))
    }, [])

    return (
        <div>
            <h3 className='text-center mt-5 p-2'>Explore....</h3>
            <div className='row row-cols-1 row-cols-md-3 g-4 mb-5 pb-5 ms-2 me-2'>
                {
                    destinations.map((destination, i) => <div key={i}>
                        <div className="col">
                            <div className="card rounded-3">

                                <img className="card-img-top img-fluid rounded-top"  style={{width:'600px', height:'500px', objectFit:'cover'}} src={destination?.image} alt="Not Found" />

                                <div className="card-body card-div">

                                    <h4 className='fw-bold mb-3 text-center'>{destination.name}</h4>
                                    <hr />

                                    <h6 className='fs-6 fw-normal'>From</h6>
                                    <h4>$ {destination.price}</h4>

                                    <h5 className='mt-4 mb-2 fs-6'>{(destination.description).substring(0, 50)}....</h5>

                                    <Link to={`/placeOrder/${destination._id}`}>
                                        <button className='p-2 mt-2 btn btn-warning  fw-bold rounded-pill ps-3 pe-3'>Book For Ticket</button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default Destination;