import React from 'react';
import { Link } from 'react-router-dom';
import brandImage from '../../../Assets/Images/brand-logo.png';

const Navbar = () => {
    const menuItems = <>
        <li className='mr-2'><Link to='/'>Home</Link></li>
        <li className='mr-2'><Link to='/blog'>Blog</Link></li>
        <li><Link to='/'>Profile</Link></li>
    </>

    return (
        <nav className='mt-4'>
            <div className="flex justify-between items-center">
                <img className='max-w-[200px]' src={brandImage} alt="brand-icon" />

                <ul className='flex'>
                    {menuItems}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;