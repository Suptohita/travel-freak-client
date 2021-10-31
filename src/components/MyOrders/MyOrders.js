import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Footer from '../Home/Footer/Footer';
import Navbar from '../Home/Navbar/Navbar';

const MyOrders = () => {

    const [userOrders, setUserOrders] = useState([])
    const { user } = useAuth()

    useEffect(() => {
        fetch('http://localhost:8000/myorders')
            .then(res => res.json())
            .then(data => setUserOrders(data.filter(order => order.userName === user.displayName)))
    }, [])


    return (
        <div>
            <Navbar></Navbar>
            <div>
            <h3 className='text-center mt-5 p-2'>My Orders</h3>
            <div className='row row-cols-1 row-cols-md-3 g-4 mb-5 pb-5 ms-2 me-2'>
                {
                    userOrders.map((userOrder, i) =>
                        <div key={i}>
                            <div className="col">
                                <div className="card">
                                    <img src={userOrder.image} style={{height:"451px", objectFit:'cover'}} className="card-img-top" alt="..." />
                                    <div className="card-body">

                                        <h3 className='fw-bold mb-3'>{userOrder.name}</h3>
                                        <h5 className='fs-5 fw-light'>Travel Date: {userOrder.date}</h5>
                                        <h5 className='fs-5 fw-light'>Person: {userOrder.person}</h5>
                                        <h6 className='fw-normal'>${userOrder.price}</h6>

                                        {/* <Link to={`/details/${service.id}`}>
                                            <button style={{ backgroundColor: '#9bb8b7' }} className='p-2 mt-2 btn'>See More</button>
                                        </Link> */}

                                    </div>
                                </div>
                            </div>
                        </div>)
                }
            </div>
            <Footer></Footer>
        </div>
        </div>
    );
};

export default MyOrders;