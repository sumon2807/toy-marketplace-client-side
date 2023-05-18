import React from 'react';

const ToyCards = ({ toy }) => {
    const {toyName,price,rating,photo}=toy;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Toy" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {toyName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p><span>Price:</span>{price}</p>
                <p><span>Rating:</span>{rating}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">View Details</div>
                </div>
            </div>
        </div>
    );
};

export default ToyCards;