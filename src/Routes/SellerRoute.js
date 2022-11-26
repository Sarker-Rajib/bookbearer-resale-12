import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Component/Loader/Loader';
import { AuthContext } from '../Contexts/AuthContext/AuthProvider';
import useSeller from '../Hooks/useSeller';

const SellerRoute = ({ children }) => {
    const { currentUser, loading } = useContext(AuthContext);
    const [isSeller, sellerLoading] = useSeller(currentUser?.email);
    const location = useLocation();

    if (loading || sellerLoading) {
        return <Loader></Loader>
    }

    if (currentUser && isSeller) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default SellerRoute;