import React from 'react';
import { Check } from 'lucide-react';
import User from '../../assets/products/user.png';
import Package from '../../assets/products/package.png';
import Rocket from '../../assets/products/rocket.png';
const GetStarted = () => {
    return (
        <div className='bg-[#F9FAFC]'>
            <div className='w-11/12 mx-auto text-center py-10'>
                <h1 className=' text-3xl font-bold mb-4'>Get Started in 3 Steps</h1>
                <p className='text-gray-600'>Start using premium digital tools in minutes, not hours.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-5 mt-10'>
                    <div className='flex flex-col items-center bg-white border-2 rounded-2xl border-gray-300 p-10 px-5 h-full'>
                        <div className='p-5'>
                            <img src={User} alt="" className=' border-2 border-gray-300 rounded-full p-2 bg-purple-100' />
                        </div>
                        <h2 className='text-[20px] font-bold my-4'>Create Account</h2>
                        <p className='text-gray-600'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                    <div className='flex flex-col items-center bg-white border-2 rounded-2xl border-gray-300 p-10 px-5 h-full'>
                        <div className='p-5'>
                            <img src={Package} alt="" className='border-2 border-gray-300 rounded-full p-2 bg-purple-100' />
                        </div>
                        <h2 className='text-[20px] font-bold my-4'>Choose Products</h2>
                        <p className='text-gray-600'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                    <div className='flex flex-col items-center bg-white border-2 rounded-2xl border-gray-300 p-10 px-5 h-full'>
                        <div className='p-5'>
                            <img src={Rocket} alt="" className='border-2 border-gray-300 rounded-full p-2 bg-purple-100 object-contain' />
                        </div>
                        <h2 className='text-[20px] font-bold my-4'>Start Creating</h2>
                        <p className='text-gray-600'>Download and start using your premium tools immediately.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default GetStarted;