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

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: ()=>fetch('http://localhost:5000/products')
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
          element: <AddToys></AddToys>
        },
        {
          path: 'mytoys',
          element: <MyToys></MyToys>,
          loader: ()=>fetch('http://localhost:5000/toys')
        },
        {
          path: 'blog',
          element: <Blogs></Blogs>
        },
        {
          path: '/viewDetails/:id',
          element: <ProductDetails></ProductDetails>,
          loader: ({params})=>fetch(`http://localhost:5000/products/${params.id}`)
        },
        {
          path: 'checkout/:id',
          element: <CheckOut></CheckOut>,
          loader: ({params})=>fetch(`http://localhost:5000/toys/${params.id}`)
        },
        {
          path: 'bookings',
          element: <PrivateRouts><Bookings></Bookings></PrivateRouts>
        }
      ]
    },
  ]);

  export default router;