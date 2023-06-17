import Homepage from "../Pages/Homepage/Homepage";
import Login from "../Pages/Login/Login";


export const routes = [
    {
        path: '/',
        element: <Homepage />,
    },
    {
        path: '/login',
        element: <Login />,
    },
];