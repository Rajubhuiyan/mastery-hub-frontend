import ForgetPassword from "../Pages/ForgetPassword/ForgetPassword";
import Homepage from "../Pages/Homepage/Homepage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ResetPassword from "../Pages/ResetPassword/ResetPassword";


export const routes = [
    {
        path: '/',
        element: <Homepage />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />,
    },
    {
        path: '/forget-password',
        element: <ForgetPassword />,
    },
    {
        path: '/reset-password/:token',
        element: <ResetPassword />,
    },
];