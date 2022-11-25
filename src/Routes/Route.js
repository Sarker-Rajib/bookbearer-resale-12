import { createBrowserRouter } from "react-router-dom";
import DashBoard from "../Layouts/DashBoardLayout/DashBoard";
import Main from "../Layouts/Main/Main";
import Blog from "../Pages/Blog/Blog";
import CategoryDisplay from "../Pages/CategoryDisplay/CategoryDisplay";
import AddProduct from "../Pages/DashBoard/AddProduct/AddProduct";
import NotFound from "../Pages/Error/NotFound";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import MyProducts from "../Pages/MyProducts/MyProducts";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

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
                path: '/category/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/books?categoryId=${params.id}`),
                element:
                    <PrivateRoute>
                        <CategoryDisplay></CategoryDisplay>
                    </PrivateRoute>
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
        element: <DashBoard></DashBoard>,
        children: [
            {
                path: '/dashboard/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myproduct',
                element: <MyProducts></MyProducts>
            },
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);

