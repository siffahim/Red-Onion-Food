import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Foods from '../Foods/Foods';
import Information from '../Information/Information';

const Home = () => {
    return (
        <div>
            <Banner />
            <Foods />
            <Information />
            <Footer />
        </div>
    );
};

export default Home;