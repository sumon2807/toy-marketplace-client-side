import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MyCollections from './MyCollections';

const MyToys = () => {
    const myToys = useLoaderData();
    console.log(myToys);
    return (
        <div className='lg:my-12'>
            <h2 className='text-7xl font-extrabold text-center'>My Toys Collection</h2>
            <div className='lg:grid lg:grid-cols-1 gap-4 lg:mt-8'>
                {
                    myToys.map(collection => <MyCollections
                    key={collection._id}
                    collection={collection}
                    ></MyCollections>)
                }
            </div>
        </div>
    );
};

export default MyToys;