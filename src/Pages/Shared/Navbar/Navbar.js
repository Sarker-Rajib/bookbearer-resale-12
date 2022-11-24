import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import brandImage from '../../../Assets/Images/brand-logo.png';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';

const Navbar = () => {
    const { currentUser, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut();
        toast.success('User Log Out Successful')
    }

    const menuItems = <>
        <li className='mr-2'><Link to='/'>Home</Link></li>
        <li className='mr-2'><Link to='/blog'>Blog</Link></li>
        {
            currentUser?.email ?
                <>
                    <li className='mr-2'><Link to='/dashboard'>DashBoard</Link></li>
                    <li className='mr-2'><Link onClick={handleLogOut}>LogOut</Link></li>
                    <li><img className='h-12 w-12 rounded-full' src={currentUser?.photoURL} alt="" /></li>
                </>
                :
                <li><Link to='/login'>LogIn</Link></li>
        }
    </>

    return (
        <nav className='mt-4'>
            <div className="flex justify-between items-center">
                <img className='max-w-[200px]' src={brandImage} alt="brand-icon" />

                <ul className='flex items-center'>
                    {menuItems}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;