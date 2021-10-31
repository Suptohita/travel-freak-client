import React, { useEffect, useState } from 'react';
import Footer from '../Home/Footer/Footer';
import Navbar from '../Home/Navbar/Navbar';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/manageallorders')
        .then(res => res.json())
        .then(data => setAllOrders(data))
    },[])

    const handleDeleteOrder = (id) =>{
        const proceed = window.confirm("Are you sure!! You want to delete this order...")
        if (proceed) {

            // fetch for delete user order 
            fetch(`http://localhost:8000/manageallorders/deleteorder/${id}`, {
                method: "DELETE",
                headers: { "Content-type": "application/json" }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully')
                        const remainOrder = allOrders.filter(allOrder => allOrder._id !== id)
                        setAllOrders(remainOrder)
                    }
                })
    }
}

    return (
        <div>
             <Navbar></Navbar>
            <div>
                <h3 className='text-center mt-5 p-2'>All Orders</h3>
                <div className='row row-cols-1 row-cols-md-3 g-4 mb-5 pb-5 ms-2 me-2'>
                    {
                        allOrders.map((allOrder, i) =>
                            <div key={i}>
                                <div className="col">
                                    <div className="card">
                                        <img src={allOrder.image} style={{ height: "451px", objectFit: 'cover' }} className="card-img-top" alt="..." />
                                        <div className="card-body">

                                            <h3 className='fw-bold mb-3'>{allOrder.name}</h3>
                                            <h5 className='fs-5 fw-light'>Travel Date: {allOrder.date}</h5>
                                            <h5 className='fs-5 fw-light'>Person: {allOrder.person}</h5>
                                            <h6 className='fw-normal'>${allOrder.price}</h6>

                                            <button onClick={() => handleDeleteOrder(allOrder._id)} style={{ backgroundColor: '#9bb8b7' }} className='p-2 mt-2 btn'>Delete Order</button>
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

export default ManageAllOrders;