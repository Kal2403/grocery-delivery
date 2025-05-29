import React from 'react'
import { useAppContext } from '../../context/AppContext';

const ProductList = () => {

    const {products, currency} = useAppContext();

    return (
        <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll flex flex-col justify-between">
            <div className="w-full md:p-10 p-4">
                <h2 className="pb-4 text-lg font-medium">All Products</h2>
            </div>
        </div>
    );
};

export default ProductList;
