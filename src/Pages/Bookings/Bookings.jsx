import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import OrderTable from '../OrderTable/OrderTable';
import Swal from 'sweetalert2';

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `https://b7a11-toy-marketplace-server-side-sigma.vercel.app/checkouts?email=${user?.email}`;

    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('toy-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setBookings(data)
            })
            .catch(error => console.log(error))
    }, []);

    const handleDelete=id=>{
        const proceed=confirm('Are You Sure Want To Delete?')
        if(proceed){
            fetch(`https://b7a11-toy-marketplace-server-side-sigma.vercel.app/checkouts/${id}`, {
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Deleted Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                      })
                    const remaining=bookings.filter(booking=> booking._id !==id)
                    setBookings(remaining)
                }
            })
           
        }
    }

    const handleUpdate=id=>{
        fetch(`https://b7a11-toy-marketplace-server-side-sigma.vercel.app/checkouts/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({status: 'updated'})
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
                // update state
                const remaining=bookings.filter(booking=> booking._id !== id);
                const updated=bookings.find(booking=> booking._id === id);
                updated.status = 'updated'
                const newUpdated= [updated, ...remaining];
                setBookings(newUpdated)
            }
        })
    }
    return (
        <div>
            <h2 className='text-3xl font-bold '>Your Order List</h2>
            <div className="overflow-x-auto w-full my-8">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Toy Image</th>
                            <th>Details</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookings.map(order=> <OrderTable
                            key={order._id}
                            order={order}
                            handleDelete={handleDelete}
                            handleUpdate={handleUpdate}
                            ></OrderTable>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Bookings;