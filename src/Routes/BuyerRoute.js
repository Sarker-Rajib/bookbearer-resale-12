import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Component/Loader/Loader';
import { AuthContext } from '../Contexts/AuthContext/AuthProvider';
import useBuyer from '../Hooks/useBuyer';

const BuyerRoute = ({ children }) => {
    const { currentUser, loading } = useContext(AuthContext);
    const [isBuyer, buyerLoading] = useBuyer(currentUser?.email);
    const location = useLocation();

    // console.log(isBuyer, currentUser);

    if (loading || buyerLoading) {
        return <Loader></Loader>
    }

    if (currentUser && isBuyer) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default BuyerRoute;