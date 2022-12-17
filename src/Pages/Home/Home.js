import React from 'react';
import AdvertisedItems from './AdvertisedItems/AdvertisedItems';
import Banner from './Banner/Banner';
import HomeCategories from './Categories/HomeCategories';
import ContactUs from './ContactUs/ContactUs';
import Newsletter from './Newsletter/Newsletter';

const Home = () => {  
    return (
        <div>
            <Banner></Banner>
            <HomeCategories></HomeCategories>
            <AdvertisedItems></AdvertisedItems>
            <ContactUs></ContactUs>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;