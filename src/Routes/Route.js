import { createBrowserRouter } from "react-router-dom";
import DashBoard from "../Layouts/DashBoardLayout/DashBoard";
import Main from "../Layouts/Main/Main";
import AllBuyer from "../Pages/AllBuyer/AllBuyer";
import AllSeller from "../Pages/Allseller/AllSeller";
import Blog from "../Pages/Blog/Blog";
import CategoryDisplay from "../Pages/CategoryDisplay/CategoryDisplay";
import AddProduct from "../Pages/DashBoard/AddProduct/AddProduct";
import NotFound from "../Pages/Error/NotFound";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import MyBuyers from "../Pages/MyBuyers/MyBuyers";
import MyOrders from "../Pages/MyOrders/MyOrders";
import MyProducts from "../Pages/MyProducts/MyProducts";
import Payment from "../Pages/Payment/Payment";
import Register from "../Pages/Register/Register";
import ReportedItems from "../Pages/ReportedItems/ReportedItems";
import AdminRoute from "./AdminRoute";
import BuyerRoute from "./BuyerRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";

export const router = createBrowserRouter(
    [
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
                    loader: ({ params }) => fetch(`https://bookbearer-server.vercel.app/books?categoryId=${params.id}`),
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
                    element:
                        <SellerRoute>
                            <AddProduct></AddProduct>
                        </SellerRoute>
                },
                {
                    path: '/dashboard/myproduct',
                    element:
                        <SellerRoute>
                            <MyProducts></MyProducts>
                        </SellerRoute>
                },
                {
                    path: '/dashboard/mybuyer',
                    element:
                        <SellerRoute>
                            <MyBuyers></MyBuyers>
                        </SellerRoute>
                },
                {
                    path: '/dashboard/myorders',
                    element:
                        <BuyerRoute>
                            <MyOrders></MyOrders>
                        </BuyerRoute>
                },
                {
                    path: '/dashboard/myorders/payment',
                    element:
                        <BuyerRoute>
                            <Payment></Payment>
                        </BuyerRoute>
                },
                {
                    path: '/dashboard/allseller',
                    element:
                        <AdminRoute>
                            <AllSeller></AllSeller>
                        </AdminRoute>
                },
                {
                    path: '/dashboard/allbuyer',
                    element:
                        <AdminRoute>
                            <AllBuyer></AllBuyer>
                        </AdminRoute>
                },
                {
                    path: '/dashboard/reporteditems',
                    element:
                        <AdminRoute>
                            <ReportedItems></ReportedItems>
                        </AdminRoute>
                }
            ]
        },
        {
            path: '*',
            element: <NotFound></NotFound>
        }
    ]);

