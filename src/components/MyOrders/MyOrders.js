import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Footer from '../Home/Footer/Footer';
import Navbar from '../Home/Navbar/Navbar';

const MyOrders = () => {

    const [userOrders, setUserOrders] = useState([])
    const { user } = useAuth()

    useEffect(() => {
        fetch('https://suptohita-travel-server.herokuapp.com/myorders')
            .then(res => res.json())
            .then(data => setUserOrders(data.filter(order => order.userName === user.displayName)))
    }, [])


    const handleCancleOrder = (id) => {
        const proceed = window.confirm("Are you sure!! You want to delete this order...")
        if (proceed) {

            // fetch for delete user order 
            fetch(`https://suptohita-travel-server.herokuapp.com/myorders/deleteorder/${id}`, {
                method: "DELETE",
                headers: { "Content-type": "application/json" }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully')
                        const remainOrder = userOrders.filter(userOrder => userOrder._id !== id)
                        setUserOrders(remainOrder)
                    }
                })
        }
    }


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
                                        <img src={userOrder.image} style={{ height: "451px", objectFit: 'cover' }} className="card-img-top" alt="..." />
                                        <div className="card-body">

                                            <h3 className='fw-bold mb-3'>{userOrder.name}</h3>
                                            <h5 className='fs-5 fw-light'>Travel Date: {userOrder.date}</h5>
                                            <h5 className='fs-5 fw-light'>Person: {userOrder.person}</h5>
                                            <h6 className='fw-normal'>${userOrder.price}</h6>

                                            <button onClick={() => handleCancleOrder(userOrder._id)} style={{ backgroundColor: '#9bb8b7' }} className='p-2 mt-2 btn'>Cancle Order</button>
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