import React from 'react';
import { Link } from 'react-router-dom';
import nFImage from '../../Assets/Images/RVA6.png';


const NotFound = () => {
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className='text-center'>
                <img src={nFImage} alt="404" />
                <Link to='/'><button className='btn bg-primary py-2 px-4 rounded-lg'>Home</button></Link>
            </div>
        </div>
    );
};

export default NotFound;