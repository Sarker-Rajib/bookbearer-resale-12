import React from 'react';
import '../Banner/Banner.css';
// import bannerImage from '../../../../src/Assets/Images/s.png';
// import bannerbg from '../../../../src/Assets/Images/banner-bg.jpg';

const Banner = () => {
    return (
        <div className='banner-home flex items-center'>
            <div className='text'>
                <h2 className=' text-4xl pb-2'>Welcome !</h2>
                <h3 className='text-5xl '>Buy and Sell Books <span>Online</span></h3>
                <p className='pt-4 text-xl'>Online platform for book seller and buyer for second hand books</p>
            </div>
        </div>
    );
};

export default Banner;