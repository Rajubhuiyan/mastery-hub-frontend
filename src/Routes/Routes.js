import { lazy } from 'react';
import GuestAccess from '../SharedComponent/AuthControllers/GuestAccess';


const ForgetPassword = lazy(() => import('../Pages/ForgetPassword/ForgetPassword'));
const Homepage = lazy(() => import('../Pages/Homepage/Homepage'));
const Login = lazy(() => import('../Pages/Login/Login'));
const Register = lazy(() => import('../Pages/Register/Register'));
const ResetPassword = lazy(() => import('../Pages/ResetPassword/ResetPassword'));



export const routes = [
    {
        path: '/',
        element: <Homepage />,
    },
    {
        path: '/login',
        element: (
            <GuestAccess>
                <Login />
            </GuestAccess>
        ),
    },
    {
        path: '/register',
        element: (
            <GuestAccess>
                <Register />
            </GuestAccess>
        ),
    },
    {
        path: '/forget-password',
        element: (
            <GuestAccess>
                <ForgetPassword />
            </GuestAccess>
        ),
    },
    {
        path: '/reset-password/:token',
        element: (
            <GuestAccess>
                <ResetPassword />
            </GuestAccess>
        ),
    },
];