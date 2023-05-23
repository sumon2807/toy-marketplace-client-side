import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Update = () => {
    const bookings = useLoaderData();
    const { _id, toyName, price, quantity, detail, photo} = bookings;
    const { user } = useContext(AuthContext);
    console.log(bookings);

    const handleUpdate = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const detail=form.details.value;
        const order = {
            customerNane: name,
            price,
            quantity,
            detail,
            toyName
        }
        console.log(order);

        fetch(`http://localhost:5000/toys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div className='my-8'>
            <h2 className='text-2xl font-bold text-center'>Update Information</h2>
            <div className="card-body">
                <form onSubmit={handleUpdate}>
                    <div className='flex justify-between gap-4'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Toys Name</span>
                            </label>
                            <input type="text" name='name' defaultValue={toyName} placeholder="Name" className="input input-bordered" />
                        </div>
                        
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name='price' defaultValue={price} className="input input-bordered" />
                        </div>
                    </div>
                    <div className='flex justify-between gap-4'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="text" name='quantity' defaultValue={quantity} className="input input-bordered" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input type="text" name='details' defaultValue={detail} className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                       <input className="btn btn-outline" type="submit" value="Update" />
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Update;