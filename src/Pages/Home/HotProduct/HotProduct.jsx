import React from 'react';

const HotProduct = ({ product }) => {
    const { _id, toyName, image_url, price, details } = product;
    return (
        <div className="card w-96 h-32 bg-base-100 shadow-xl image-full lg:mb-20">
            <figure><img  src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title mt-8">{toyName}</h2>
                <p className='text-2xl font-bold text-yellow-500'>{price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default HotProduct;