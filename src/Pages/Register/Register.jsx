import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const {user,createUser, updateUserProfile}=useContext(AuthContext);

    const handleRegister=event=>{
        event.preventDefault();

        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        const photo=form.photo.value;
        console.log(name, email, password, photo);

        if(!/(?=.*[A-Z])/.test(password)){
            Swal.fire({
                title: 'Password Error!',
                text: 'Please add at least one uppercase',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
              return
        }
        else if(password.length < 6){
            Swal.fire({
                title: 'Password Error!',
                text: 'Password must be 6 characters',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
              return
        }
        else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            Swal.fire({
                title: 'Error Email!',
                text: 'Please Input Valid Email Address',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
              return
        }

        createUser(email, password)
        .then(result=>{
            const loggedUser=result.user;
            loggedUser.displayName=name;
            loggedUser.photoURL=photo;
            console.log(loggedUser);

            updateUserProfile({
                displayName:name,
                photoURL:photo
            })
            .then(()=>{
                console.log(loggedUser);
                Swal.fire({
                    title: 'Success!',
                    text: 'Registration Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            })
            .catch(error=>console.log(error))
            form.reset();
            
        })
        .catch(error=>{
            console.error(error.message);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content w-[50%]">
                <div className="card w-full shadow-2xl bg-base-100">
                    <div className="card-body ">
                        <form onSubmit={handleRegister}>
                            <h2 className='text-4xl font-bold text-center'>Sign Up</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required/>
                            </div>
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
                                <input type="password" name='password' placeholder="Password" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required/>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <label className="label">
                                    <Link to="/login" className="label-text-alt link link-hover">Already have an account? Please Login</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Register" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;