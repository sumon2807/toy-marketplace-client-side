import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Login = () => {
    const {user, signIn, auth, loading}=useContext(AuthContext);
    const provider= new GoogleAuthProvider();
    const navigate=useNavigate();
    const location=useLocation();
    console.log(loading);
    const from=location.state?.from?.pathname || '/';

    const handleGoogleSignIn=()=>{
      signInWithPopup(auth, provider)
      .then(result=>{
        const loggedUser=result.user;
        console.log(loggedUser);
      })
      .catch(error=>console.log(error))
    }

    const handleLogin=event=>{
        event.preventDefault();

        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email, password);


        signIn(email, password)
        .then(result=>{
            const user=result.user;
            const loggedUser={
                email: user.email
            }
            console.log(loggedUser);
           
            fetch('https://toy-marketplace-30cd1.web.app///jwt', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(loggedUser)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log('jwt responce', data);
                // warning access token
                localStorage.setItem('toy-access-token', data.token);
                navigate(from, {
                    replace:true
                })
            })
            Swal.fire({
                title: 'Success!',
                text: 'Successfully Login',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        })
        .catch(error=>console.log(error.message))

    }
    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content w-[50%]">
                <div className="card w-full shadow-2xl bg-base-100">
                    <div className="card-body ">
                        <form onSubmit={handleLogin}>
                            <h2 className='text-4xl font-bold text-center'>Please Login</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <label className="label">
                                    <Link to="/register" className="label-text-alt link link-hover">New to KIDZ? Please Register Now</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={handleGoogleSignIn} className="btn btn-outline"><FcGoogle className='text-2xl'/> Google Sign-In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;