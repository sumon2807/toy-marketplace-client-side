import React, { useEffect, useState } from 'react';
import HotProduct from '../HotProduct/HotProduct';

const HotDeal = () => {
    const [hotProdects, setHotProducts]=useState();

    useEffect(()=>{
        fetch('https://b7a11-toy-marketplace-server-side-sigma.vercel.app/hotdeals')
        .then(res=>res.json())
        .then(data=>{
            setHotProducts(data);
        })

    },[])
    return (
        <div className='lg:flex justify-around gap-4 my-8'>
            
        </div>
    );
};

export default HotDeal;