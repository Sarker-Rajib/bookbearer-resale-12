import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Component/Loader/Loader';
import { AuthContext } from '../Contexts/AuthContext/AuthProvider';
import useAdmin from '../Hooks/useAdmin';

const AdminRoute = ({ children }) => {
    const { currentUser, loading } = useContext(AuthContext);
    const [isAdmin, adminLoading] = useAdmin(currentUser?.email);
    const location = useLocation();

    if (loading || adminLoading) {
        return <Loader></Loader>
    }

    if (currentUser && isAdmin) {
        return children;
    }
    // console.log(isAdmin);

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;