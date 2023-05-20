import React from 'react';
import { Link } from 'react-router-dom';

const ToyCard = ({ product }) => {
    const { _id,toyName, photo, price, rating } = product;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {toyName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p><span>Price:</span>{price}</p>
                <p><span>Rating:</span>{rating}</p>
                <div className="card-actions justify-end">
                    <Link to={`/viewDetails/${_id}`}><button onClick={()=>handleViewDetails(_id)} className="badge badge-outline">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;