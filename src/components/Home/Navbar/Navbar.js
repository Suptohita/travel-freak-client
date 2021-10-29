import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='Nav'>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid container">
                    <h2 className="me-5 pe-5"><u>Travel Freak</u></h2>
                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ms-lg-5">
                                <h6 className="nav-link text-light" href=" ">All Services</h6>
                            </li>
                            <li className="nav-item ms-lg-5">
                                <h6 className="nav-link text-light" href=" ">My Orders</h6>
                            </li>
                            <li className="nav-item ms-lg-5">
                                <h6 className="nav-link text-light" href=" ">Manage All Orders</h6>
                            </li>
                            <li className="nav-item ms-lg-5">
                                <h6 className="nav-link text-light" href=" ">Add Service</h6>
                            </li>
                            <li className="nav-item ms-lg-5 text-light">
                                <h6 className="nav-link text-light" href=" ">About Us</h6>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button className="btn btn-outline-danger" type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;