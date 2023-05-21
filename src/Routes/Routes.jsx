import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddToys from "../Pages/AddToys/AddToys";
import Blogs from "../Pages/Blogs/Blogs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import MyToys from "../Pages/MyToys/MyToys";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRouts from "./PrivateRouts";
import HotDeal from "../Pages/Home/HotDeal/HotDeal";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: ()=>fetch('https://b7a11-toy-marketplace-server-side-sigma.vercel.app/products')
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'register',
            element: <Register></Register>
        },
        {
          path: 'addtoys',
          element: <PrivateRouts><AddToys></AddToys></PrivateRouts>
        },
        {
          path: 'mytoys',
          element: <PrivateRouts><MyToys></MyToys></PrivateRouts>,
          loader: ()=>fetch('https://b7a11-toy-marketplace-server-side-sigma.vercel.app/toys')
        },
        {
          path: 'hotdeal',
          element: <HotDeal></HotDeal>
        },
        {
          path: 'blog',
          element: <Blogs></Blogs>
        },
        {
          path: '/viewDetails/:id',
          element: <ProductDetails></ProductDetails>,
          loader: ({params})=>fetch(`https://b7a11-toy-marketplace-server-side-sigma.vercel.app/products/${params.id}`)
        },
        {
          path: 'checkout/:id',
          element: <CheckOut></CheckOut>,
          loader: ({params})=>fetch(`https://b7a11-toy-marketplace-server-side-sigma.vercel.app/toys/${params.id}`)
        },
        {
          path: 'bookings',
          element: <PrivateRouts><Bookings></Bookings></PrivateRouts>
        }
      ]
    },
  ]);

  export default router;