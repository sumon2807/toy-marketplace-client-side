import React from 'react';
import { Link } from 'react-router-dom';

const MyCollections = ({ collection }) => {
    const { _id, toyName, photo, price, rating, quantity, detail } = collection;
    return (
        <div className="card card-side bg-base-100 shadow-xl p-8">
            <figure><img className=' w-1/3 fluid' src={photo} alt="Movie" /></figure>
            <div className="w-2/3 lg:flex justify-between">
                <div>
                    <h2 className="card-title">{toyName}</h2>
                    <p>{detail}</p>
                    <p>Price: {price}</p>
                    <p>Quantity: {quantity}</p>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`}><button className="btn btn-primary">Buy Now</button></Link>
                </div>
            </div>
        </div>
        
    );
};

export default MyCollections;