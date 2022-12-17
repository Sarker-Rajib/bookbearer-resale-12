import React from 'react';
import bannerImage from '../../../../src/Assets/Images/s.png';

const Banner = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 py-6'>
            <div className="flex items-center">
                <div>
                    <h2 className='text-purple-600 text-4xl pb-2'>Welcome !</h2>
                    <h3 className='text-5xl text-purple-700'>Buy and Sell Books <span className='text-green-600'>Online</span></h3>
                    <p className='pt-4 text-xl'>Online platform for book seller and buyer for second hand books</p>
                </div>
            </div>
            <div className="image">
                <img src={bannerImage} alt="imag" className="img-fluid" />
            </div>
        </div>
    );
};

export default Banner;