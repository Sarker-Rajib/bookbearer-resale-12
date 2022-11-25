import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { currentUser, loading } = useContext(AuthContext)
    const location = useLocation();

    if (loading) {
        return <>Loading</>
    }

    if (currentUser) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;