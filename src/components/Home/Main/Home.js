import React from 'react';
import Feature from '../Feature/Feature';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Feature></Feature>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;