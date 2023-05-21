import React from 'react';
import Banner from '../Banner/Banner';
import ToyGallary from '../ToyGallary/ToyGallary';
import HotDeal from '../HotDeal/HotDeal';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HotDeal></HotDeal>
            <ToyGallary></ToyGallary>
        </div>
    );
};

export default Home;