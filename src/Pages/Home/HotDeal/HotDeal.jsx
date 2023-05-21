import React, { useEffect, useState } from 'react';
import HotProduct from '../HotProduct/HotProduct';

const HotDeal = () => {
    const [hotProdects, setHotProducts]=useState([]);

    useEffect(()=>{
        fetch('https://b7a11-toy-marketplace-server-side-sigma.vercel.app/hotdeals')
        .then(res=>res.json())
        .then(data=>{
            setHotProducts(data);
        })

    },[])
    return (
        <div className='lg:flex justify-around gap-4 lg:my-8'>
            {
                hotProdects.map(product=> <HotProduct
                key={product._id}
                product={product}
                ></HotProduct>)
            }
        </div>
    );
};

export default HotDeal;