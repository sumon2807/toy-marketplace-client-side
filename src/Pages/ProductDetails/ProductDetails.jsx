import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const products = useLoaderData();
    console.log(products);
    const { details, image_url, price, toyName, rating,sellerName,quantity } = products;
    return (
        <div className="card card-side bg-base-100 shadow-xl w-4/5 my-8">
            <figure><img className=' w-3/5' src={image_url} alt="Movie" /></figure>
            <div className="card-body w-1/2">
                <h2 className="card-title">{toyName}</h2>
                <p>{details}</p>
                <p className='font-semibold'>Seller Name:{sellerName}</p>
                <p className='font-semibold text-green-600'>Quantity:{quantity}</p>
                <p className='font-bold text-rose-700'>Price:{price}</p>
                <p className='font-bold'>Rating:{rating}</p>
                <div className="card-actions justify-end">
                    <Link to="/login"><button className="btn btn-primary">Buy Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;