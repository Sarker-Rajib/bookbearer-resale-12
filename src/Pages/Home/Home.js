import React from 'react';
import toast from 'react-hot-toast';
import bannerImage from '../../Assets/Images/banner-image.png';
import AdvertisedItems from './AdvertisedItems/AdvertisedItems';
import HomeCategories from './Categories/HomeCategories';
import ContactUs from './ContactUs/ContactUs';

const Home = () => {
    const notify = () => toast.success('Here is your toast.');
  
    return (
        <div>
            <button onClick={notify}>Make me a toast</button>
            <img className='mt-6' src={bannerImage} alt="banner-imag" />

            <HomeCategories></HomeCategories>
            <AdvertisedItems></AdvertisedItems>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;