import React from 'react';
import bannerImage from '../../Assets/Images/banner-image.png';

const Home = () => {
    return (
        <div>
            <img className='mt-6' src={bannerImage} alt="banner-imag" />
        </div>
    );
};

export default Home;