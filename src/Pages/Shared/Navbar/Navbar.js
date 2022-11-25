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
        <nav className='p-3' style={{background: "#efdbb4"}}>
            <div className="flex justify-between items-center">
                <img className='max-w-[200px]' src={brandImage} alt="brand-icon" />

                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box">
                        {menuItems}
                    </ul>
                </div>

                <ul className='lg:flex items-center hidden'>
                    {menuItems}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;