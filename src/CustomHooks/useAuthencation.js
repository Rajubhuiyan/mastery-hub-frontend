import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetLoggedUserData, setLoggedUserData } from '../Redux/LoggedUser/loggedUserReducer';

const useAuthencation = () => {

    const dispatch = useDispatch()
    const loggedUser = useSelector(state => state.loggedUser.loggedUserData)
    const handleLogin = (data) => {
        localStorage.setItem('logged_user', JSON.stringify(data));
        dispatch(setLoggedUserData(data))

    }

    const handleLogOut = () => {
        localStorage.removeItem('logged_user');
        dispatch(resetLoggedUserData())
    }

    console.log({loggedUser})


    return ({
        handleLogin,
        handleLogOut,
        loggedUser
    });
};

export default useAuthencation;