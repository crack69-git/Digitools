import React from 'react';
import CartsCard from './CartsCard';
import HasCart from './hasCart';
import HasNoCart from './hasNoCart';
const Carts = ({ cartData, setCartData, total, setTotal }) => {

    return (
        <div className='w-11/12 mx-auto my-20 border-2 border-gray-200 rounded-lg '>
            <div className='w-11/12 mx-auto'>
                <h3 className='pt-8 pb-5 text-2xl font-bold'>Your Cart</h3>
                {
                    cartData.length > 0 ? <HasCart cartData={cartData} setCartData={setCartData} total={total} setTotal={setTotal} /> : <HasNoCart />
                }

            </div>
        </div>
    );
};

export default Carts;