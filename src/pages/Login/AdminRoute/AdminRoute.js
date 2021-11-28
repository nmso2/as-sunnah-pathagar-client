import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, isLoading, admin } = useAuth();
    const location = useLocation();
    if (!admin || isLoading) {
        return <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
    }
    if (user.email && admin) {
        return children;
    }
    return <Navigate to="/home" state={{ from: location }} />;
};

export default AdminRoute;