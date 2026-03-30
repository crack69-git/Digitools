import React from 'react';
import { use } from 'react';
import ProductCard from './ProductCard';
const Products = ({ fetchPromise }) => {
    const data = use(fetchPromise);
    return (
        <div className='w-11/12 mx-auto'>
            <div className='mt-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    data.map(product => <ProductCard key={product.id} data={product} />)
                }
            </div>
        </div>
    );
};

export default Products;