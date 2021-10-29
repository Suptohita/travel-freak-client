import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Navbar.css'

const Navbar = () => {
    const { user, logOut } = useAuth()

    return (
        <div className='Nav pt-3 pb-3'>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid container">

                    <h2 className="me-5 pe-5"><Link to='/' style={{color: 'whitesmoke'}}><u>Travel Freak</u></Link></h2>

                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item ms-lg-5">
                                <Link className='text-decoration-none' to='/allDestination'>
                                    <h6 className="nav-link text-light" href=" ">All Destination</h6>
                                </Link>
                            </li>
                            
                            <li className="nav-item ms-lg-5">
                                <Link className='text-decoration-none' to='/myOrders'>
                                    <h6 className="nav-link text-light " href=" ">My Orders</h6>
                                </Link>
                            </li>

                            <li className="nav-item ms-lg-5">
                                <Link className='text-decoration-none' to='/allOrders'>
                                    <h6 className="nav-link text-light" href=" ">Manage All Orders</h6>
                                </Link>
                            </li>

                            <li className="nav-item ms-lg-5">
                                <Link className='text-decoration-none' to='/addDestination'>
                                    <h6 className="nav-link text-light" href=" ">Add Destination</h6>
                                </Link>
                            </li>

                            <li className="nav-item ms-lg-5 text-light">
                                <Link className='text-decoration-none' to='/aboutUs'>
                                    <h6 className="nav-link text-light" href=" ">About Us</h6>
                                </Link>
                            </li>

                        </ul>
                        {
                            user ? <button className="btn btn-outline-danger me-3 mb-3"><span className='link text-white'>Hi {user.displayName}</span></button>
                            :
                            ''
                        }

                        {
                            user ? <form className="d-flex">
                                <button onClick={logOut} className="mb-3 btn btn-outline-danger" type="submit"><span className='link text-warning'>Log Out </span></button>
                            </form> 
                            :
                            <form className="d-flex">
                                <button className="btn btn-outline-danger mb-3" type="submit"><Link className='link text-warning' to='/login'>Log In</Link></button>
                            </form>
                        }

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;