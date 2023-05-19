import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const {error, status}=useRouteError();
    return (
        <div>
        <h2 className='text-7xl font-extrabold text-center'>4 <span></span>  4</h2>
        
        </div>
    );
};

export default ErrorPage;