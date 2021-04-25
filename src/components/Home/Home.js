import React from 'react';
import About from '../About/About';
import Foods from '../Foods/Foods';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Foods></Foods>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;