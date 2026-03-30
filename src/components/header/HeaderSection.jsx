import React from 'react';
import { ShoppingCart } from 'lucide-react';

const HeaderSection = ({ cartData }) => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className='w-11/12 mx-auto flex justify-between items-center max-sm:flex-col'>
                <div>
                    <p className='text-3xl font-extrabold bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent pb-3 max-sm:text-5xl'>DigiTools</p>
                </div>
                <div className='flex gap-5 max-[900px]:hidden  text-[#101727]'>
                    <a href="">Products</a>
                    <a href="">Features</a>
                    <a href="">Pricing</a>
                    <a href="">Testimonials</a>
                    <a href="">FAQ</a>
                </div>

                <div>
                    <div role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <ShoppingCart />
                            <span className={`${cartData.length > 0 ? 'badge badge-sm indicator-item' : 'hidden'}`}>{cartData.length}</span>
                        </div>
                    </div>
                    {/* BUTTON START */}
                    <button className="btn rounded-3xl bg-none border-none mx-2">Login</button>
                    <button className="btn text-white rounded-3xl bg-linear-to-r from-blue-500 to-purple-500">Get Started</button>
                </div>
            </div>
        </div>

    );
};

export default HeaderSection;