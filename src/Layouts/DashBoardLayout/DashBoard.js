import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../../Pages/Shared/Footer/Footer';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const DashBoard = () => {


    const menu = <>
        <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
    </>

    return (
        <>
            <Navbar></Navbar>
            <div className='pt-6'>
                <label htmlFor="my-drawer-4" className="drawer-button lg:hidden btn btn-primary">Open Dahboard Menu</label>
                <div className="drawer drawer-end">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex">
                        <div className='w-[220px] hidden lg:block'>
                            <ul>
                                {menu}
                            </ul>
                        </div>
                        <div className='flex-1'>
                            <Outlet></Outlet>
                        </div>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                            {menu}
                        </ul>
                    </div>
                </div>

                <Footer></Footer>
            </div>
        </>
    );
};

export default DashBoard;