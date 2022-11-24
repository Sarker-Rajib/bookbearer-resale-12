import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Blog from "../Pages/Blog/Blog";
import NotFound from "../Pages/Error/NotFound";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <></>
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);

