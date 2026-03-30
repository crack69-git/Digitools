import React from 'react';
import { Check } from 'lucide-react';

const ProductCard = ({ data, setCartData }) => {
    return (
        <div className='border-2 border-gray-200 rounded-lg relative'>
            <div className={`badge badge-soft ${data.tagType == 'Popular' ? 'bg-purple-100 text-purple-700' : data.tagType == 'Best seller' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'} absolute right-3 top-3`}>{data.tagType}</div>
            <div className='w-11/13 mx-auto py-6'>
                <img src={data.icon} alt={data.name} className='object-cover border border-gray-300 rounded-full p-1 mb-4' />
                <h1 className='text-2xl font-bold mb-4'>{data.name}</h1>
                <p className='leading-5 text-gray-600 mb-4'>{data.description}</p>
                <h4 className='mb-5'><span className='text-2xl font-bold'>${data.price}</span><span className='text-gray-600'>/{data.period}</span></h4>
                {
                    data.features.map((feature, index) => <p key={index} className='flex items-center gap-2'>
                        <Check className='text-green-500' />
                        {feature}
                    </p>)
                }
                <button className='btn w-full mt-5 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-3xl' onClick={() => setCartData(prev => [...prev, data])}>Buy Now</button>
            </div>
        </div>
    );
};

export default ProductCard;