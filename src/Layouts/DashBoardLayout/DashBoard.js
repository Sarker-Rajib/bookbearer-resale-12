import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';
import useBuyer from '../../Hooks/useBuyer';
import useSeller from '../../Hooks/useSeller';
import Footer from '../../Pages/Shared/Footer/Footer';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const DashBoard = () => {
    const { currentUser } = useContext(AuthContext)
    const [isAdmin] = useAdmin(currentUser?.email);
    const [isSeller] = useSeller(currentUser?.email);
    const [isBuyer] = useBuyer(currentUser?.email);

    // console.log('buyer' + isBuyer);
    // console.log('Seller' + isSeller);
    // console.log('admin' + isAdmin);

    const menu = <>
        {
            isAdmin && <>
                <li className='my-2'><Link className='btn text-white w-full text-lg' to='/dashboard/allseller'>All Sellers</Link></li>
                <li className='my-2'><Link className='btn text-white w-full text-lg' to='/dashboard/allbuyer'>All Buyers</Link></li>
                <li className='my-2'><Link className='btn text-white w-full text-lg' to='/dashboard/reporteditems'>Reported Items</Link></li>
            </>
        }
        {
            isSeller && <>
                <li className='my-2'><Link className='btn text-white w-full text-lg' to='/dashboard/addproduct'>Add a Product</Link></li>
                <li className='my-2'><Link className='btn text-white w-full text-lg' to='/dashboard/myproduct'>My Products</Link></li>
                <li className='my-2'><Link className='btn text-white w-full text-lg' to='/dashboard/mybuyer'>My Buyers</Link></li>
            </>
        }
        {
            isBuyer && <li className='my-2'><Link className='btn text-white w-full text-lg' to='/dashboard/myorders'>My Orders</Link></li>
        }
    </>

    return (
        <>
            <Navbar></Navbar>
            <div className='mt-24 dashboard max-w-screen-xl mx-auto'>
                <label htmlFor="my-drawer-4" className="mb-4 drawer-button lg:hidden btn">Open Dahboard Menu</label>
                <div className="drawer h-auto drawer-end">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex">
                        <div className='w-[220px] hidden lg:block border p-2 rounded'>
                            <ul>
                                {menu}
                            </ul>
                        </div>
                        <div className='flex-1 rounded border'>
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
            </div>
            <Footer></Footer>
        </>
    );
};

export default DashBoard;