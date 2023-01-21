import React from 'react';
import AdvertisedItems from './AdvertisedItems/AdvertisedItems';
import AffiliatedBusiness from './AffiliatedBusiness/AffiliatedBusiness';
import Banner from './Banner/Banner';
import HomeCategories from './Categories/HomeCategories';
import ContactUs from './ContactUs/ContactUs';
import Newsletter from './Newsletter/Newsletter';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-screen-xl mx-auto">
                <HomeCategories></HomeCategories>
                <AdvertisedItems></AdvertisedItems>
                <AffiliatedBusiness></AffiliatedBusiness>
                <ContactUs></ContactUs>
                <Newsletter></Newsletter>
            </div>
        </div>
    );
};

export default Home;