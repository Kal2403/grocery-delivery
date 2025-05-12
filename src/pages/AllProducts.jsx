import React from 'react';

const AllProducts = () => {

    return (
        <div className='mt-16 flex flex-col'>
            <div className='flex flex-col items-end w-max'>
                <p className='text-2xl font-medium uppercase'>All Products</p>
                <div className='w-16 h-0.5 bg-primary rounded-full'></div>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 lg:grid-cols-5 mt-6'>

            </div>
        </div>
    )
}

export default AllProducts;
