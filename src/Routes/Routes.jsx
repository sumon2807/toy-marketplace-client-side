import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddToys from "../Pages/AddToys/AddToys";
import Blogs from "../Pages/Blogs/Blogs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRouts from "./PrivateRouts";
import HotDeal from "../Pages/Home/HotDeal/HotDeal";
import Update from "../Pages/Update/Update";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import MyToys from "../Pages/Bookings/MyToys";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: ()=>fetch('https://toy-marketplace-30cd1.web.app//products')
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
          element: <PrivateRouts><MyToys></MyToys></PrivateRouts>
        },
        {
          path: 'updateToys/:id',
          element: <Update></Update>,
          loader: ({params})=>fetch(`https://toy-marketplace-30cd1.web.app//toys/${params.id}`)
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
          loader: ({params})=>fetch(`https://toy-marketplace-30cd1.web.app//products/${params.id}`)
        }
        
      ]
    },
  ]);

  export default router;