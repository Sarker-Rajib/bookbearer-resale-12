import React from 'react';
import bannerImage from '../../Assets/Images/banner-image.png';
import AdvertisedItems from './AdvertisedItems/AdvertisedItems';
import HomeCategories from './Categories/HomeCategories';
import ContactUs from './ContactUs/ContactUs';
import Newsletter from './Newsletter/Newsletter';

const Home = () => {
  
    return (
        <div>
            <img className='mt-6' src={bannerImage} alt="banner-imag" />

            <HomeCategories></HomeCategories>
            <AdvertisedItems></AdvertisedItems>
            <ContactUs></ContactUs>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;