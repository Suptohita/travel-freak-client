import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;