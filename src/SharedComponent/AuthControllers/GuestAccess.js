import React from 'react';
import useAuthencation from '../../CustomHooks/useAuthencation';
import { Navigate } from 'react-router-dom';

const GuestAccess = ({ children }) => {

    const { loggedUser } = useAuthencation()

    if (loggedUser) {
        return <Navigate to="/" />
    }
    return  children;
};

export default GuestAccess;