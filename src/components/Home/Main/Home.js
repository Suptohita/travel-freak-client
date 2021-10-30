import React from 'react';
import Banner from '../Banner/Banner';
import Destination from '../Destination/Destination';
import Feature from '../Feature/Feature';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Destination></Destination>
            <Feature></Feature>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;