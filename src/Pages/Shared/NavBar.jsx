import React, { useContext } from 'react';
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { FaUser, FaBabyCarriage } from 'react-icons/fa';
import { HiShoppingBag } from "react-icons/hi";
import { AuthContext } from '../../Provider/AuthProvider';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    return (
        <div className="navbar bg-base-100 py-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/" className='font-semibold'>Home</Link></li>
                        <li><Link to="/mytoys" className='font-semibold'>My Toys</Link></li>
                        <li><Link to="/addtoys" className='font-semibold'>Add A Toy</Link></li>
                        <li><Link to="/blog" className='font-semibold'>Blogs</Link></li>
                        {
                            user?.email ? <>
                                <li><Link to="/bookings" className='font-semibold'>My Orders</Link></li>
                            </> : <>
                                <li><Link to="/login" className='font-semibold'>Login</Link></li>
                            </>
                        }
                        
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link to="/"><img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-2xl" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                <button className="btn btn-ghost btn-circle">
                    <HiShoppingBag className='text-2xl' />
                </button>
                {
                    user?.email ? <>
                        <img src={user.photoURL} alt="" className='w-10 h-10 rounded-full mx-2' />
                        <button onClick={handleLogOut} className="btn btn-outline btn-primary"><Link to="/">Logout</Link></button>
                    </> : <button className='btn btn-outline btn-primary btn-circle'><Link to="/login" ><FaUser className='text-2xl' /></Link></button>
                }
            </div>
        </div>
    );
};

export default NavBar;