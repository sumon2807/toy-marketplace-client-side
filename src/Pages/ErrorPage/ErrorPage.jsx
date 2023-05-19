import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const { error, status } = useRouteError();
    return (
        <div className='text-center'>
            <div>
                <h2 className='text-8xl font-extrabold text-center mt-40 text-primary'>{status}</h2>
                <p className='text-2xl font-bold text-center text-primary'>{error.message}</p>
            </div>
                <Link to="/"><button className='btn btn-primary mt-4'>Back To Homepage</button></Link>
        </div>
    );
};

export default ErrorPage;