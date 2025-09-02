import React from 'react';

const ErrorPage = () => {
    return (
        <div className='flex items-center justify-center h-[500px] bg-blue-300 flex-col'> 
            <h2 className='text-6xl text-red-500'>404</h2>
            <h3 className='text-7xl text-white '>Not Found</h3>
        </div>
    );
};

export default ErrorPage;