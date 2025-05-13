import React from 'react';
import { useAppContext } from '../context/AppContext';
import { useParams } from 'react-router-dom';

const ProductCategory = () => {

    const { products } = useAppContext();
    const { category } = useParams();

    const filteredProducts = products.filter((product) => product.category.toLowerCase() === category)

    return (
        <div className='mt-16'>

        </div>
    )
}

export default ProductCategory;
