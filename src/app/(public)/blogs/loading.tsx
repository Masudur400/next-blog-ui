import Loading from '@/components/ui/Loading';
import React from 'react';

const blogsLoadingPage = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <Loading></Loading>
        </div>
    );
};

export default blogsLoadingPage;