import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import OrderTable from '../OrderTable/OrderTable';

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/checkouts?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBookings(data)
            })
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <h2 className='text-3xl font-bold '>Your Order List</h2>
            <div className="overflow-x-auto w-full my-8">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Toy Name</th>
                            <th>Details</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookings.map(order=> <OrderTable
                            key={order._id}
                            order={order}
                            ></OrderTable>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Bookings;