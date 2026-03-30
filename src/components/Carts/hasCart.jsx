import React from 'react';
import CartsCard from './CartsCard';
import { toast, Bounce } from 'react-toastify';
const hasCart = ({ cartData, setCartData, total, setTotal }) => {
    const HandleCheckout = () => {
        toast.success(`Checkout successful!`, {
            transition: Bounce,
            autoClose: 1000,
            position: 'top-center'
        });
        setCartData([]);
        setTotal(0);
    }
    return (
        <div className='flex flex-col gap-3'>
            {
                cartData.map(cart => <CartsCard key={cart.id} cart={cart} cartData={cartData} setCartData={setCartData} total={total} setTotal={setTotal} />)
            }
            <div className='flex justify-between mt-10'>
                <p>Total</p>
                <p>${total.toFixed(2)}</p>
            </div>
            <button className='btn py-6 w-full mt-5 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-3xl mb-10' onClick={HandleCheckout}>Proceed to  Checkout</button>
        </div>
    );
};

export default hasCart;