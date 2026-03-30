import React from 'react';
import { toast, Bounce } from 'react-toastify';
const CartsCard = ({ cart, cartData, setCartData, total, setTotal }) => {
    const handleRemove = (cart) => {
        toast.error(`${cart.name} is removed from cart!`, {
            transition: Bounce,
            autoClose: 1000,
            position: 'top-center',
            theme: 'colored'
        });
        const filteredCart = cartData.filter(c => c.id !== cart.id);
        setCartData(filteredCart);
        setTotal(total - cart.price);
    }
    return (
        <div className='flex items-center justify-between bg-[#F9FAFC] rounded-2xl p-4'>
            <div className='flex items-center gap-2'>
                <div className='border-2 border-gray-300 bg-white rounded-full p-1'>
                    <img src={cart.icon} alt="" />
                </div>
                <div>
                    <h3 className='text-[20px] font-semibold'>{cart.name}</h3>
                    <p className='leading-5 text-gray-500'>${cart.price}</p>
                </div>
            </div>
            <div>
                <p className='cursor-pointer hover:underline text-red-600' onClick={() => handleRemove(cart)}>Remove</p>
            </div>
        </div>
    );
};

export default CartsCard;