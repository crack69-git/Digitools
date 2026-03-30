import React from 'react';
import { ShoppingCart } from 'lucide-react';

const hasNoCart = () => {
    console.log('no cart');
    return (
        <div className='my-10'>
            <div className='flex flex-col justify-center items-center'>
                <ShoppingCart className='size-44 text-gray-400' />
                <p className='text-xl text-gray-600'>Your cart is empty</p>
            </div>
        </div>
    );
};

export default hasNoCart;