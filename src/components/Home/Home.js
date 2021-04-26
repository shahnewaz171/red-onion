import React from 'react';
import About from '../About/About';
import Foods from '../Foods/Foods';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Foods></Foods>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;