import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const PrivateRouter = ({ children }) => {
    const { user, isWaiting } = useAuth()
    const location = useLocation();
    if (isWaiting) {
        return <p>Loading...</p>
    }
    if (user.email) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} />

};

export default PrivateRouter;