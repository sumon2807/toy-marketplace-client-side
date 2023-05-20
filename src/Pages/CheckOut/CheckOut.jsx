import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const CheckOut = () => {
    const bookings = useLoaderData();
    const { _id, toyName, price, quantity, detail, photo, categoryId, email} = bookings;
    const { user } = useContext(AuthContext);
    console.log(bookings);

    const handleBooking = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const email = form.email.value;
        const order = {
            customerNane: name,
            price,
            quantity,
            detail,
            photo,
            toyName,
            email
        }
        console.log(order);

        fetch('http://localhost:5000/checkouts', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Order Submited Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div className='my-8'>
            <h2 className='text-2xl font-bold text-center'>{toyName}</h2>
            <div className="card-body">
                <form onSubmit={handleBooking}>
                    <div className='flex justify-between gap-4'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' defaultValue={user?.displayName} placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' defaultValue={user?.email} className="input input-bordered" />
                        </div>
                        
                    </div>
                    <div className='flex justify-between gap-4'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name='price' defaultValue={price} className="input input-bordered" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="text" name='quantity' defaultValue={quantity} className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-outline" type="submit" value="Order Confirm" />
                    </div>
                </form>
            </div>
        </div>

    );
};

export default CheckOut;