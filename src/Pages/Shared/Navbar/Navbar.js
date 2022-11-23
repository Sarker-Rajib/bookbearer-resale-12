import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItems = <>
        <li className='mr-2'><Link to='/'>Home</Link></li>
        <li className='mr-2'><Link to='/'>Image-Gallery</Link></li>
        <li className='mr-2'><Link to='/blog'>Blog</Link></li>
        <li><Link to='/'>Profile</Link></li>
    </>

    return (
        <nav className=''>
            <div className="flex justify-between items-center">
                <h1 className='text-2xl'>resell-com-bazar</h1>

                <ul className='flex'>
                    {menuItems}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;