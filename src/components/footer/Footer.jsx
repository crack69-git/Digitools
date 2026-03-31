import React from 'react';
import Instagram from '../../assets/products/Instagram.png';
import Facebook from '../../assets/products/Facebook.png';
import Twitter from '../../assets/products/Twitter.png';
const Footer = () => {
    return (
        <div className='bg-black'>
            <div className='w-11/12 mx-auto text-white'>
                <div className='grid md:grid-cols-4 lg:grid-cols-5 py-10 gap-5'>
                    <div className=' max-lg:col-span-4'>
                        <h1 className='text-4xl font-bold mb-5'>DigiTools</h1>
                        <p className='text-gray-100'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <a className='text-lg font-semibold'>Product</a>
                        <a className='text-gray-100'>Features</a>
                        <a className='text-gray-100'>Pricing</a>
                        <a className='text-gray-100'>Templates</a>
                        <a className='text-gray-100'>Integrations</a>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <a className='text-lg font-semibold'>Company</a>
                        <a className='text-gray-100'>About</a>
                        <a className='text-gray-100'>Blog</a>
                        <a className='text-gray-100'>Careers</a>
                        <a className='text-gray-100'>Press</a>
                    </div>
                    <div className='flex flex-col gap-2 max-sm:col-span-2'>
                        <a className='text-lg font-semibold'>Resources</a>
                        <a className='text-gray-100'>Documentation</a>
                        <a className='text-gray-100'>Community</a>
                        <a className='text-gray-100'>Contact</a>
                    </div>
                    <div className='flex flex-col gap-2 items-center '>
                        <a className='text-lg font-semibold'>Social Links</a>
                        <div className='flex gap-2  items-center a'>
                            <img src={Instagram} alt="Instagram" />
                            <img src={Facebook} alt="Facebook" />
                            <img src={Twitter} alt="Twitter" />
                        </div>
                    </div>
                </div>

                <div className="h-0.5 mb-4 bg-gray-600"></div>
                <div className='flex justify-between max-sm:flex-col max-sm:text-center pb-10'>
                    <p>© 2026 Digitools. All rights reserved.</p>
                    <div className='flex gap-4 max-sm:justify-center'>
                        <p>Privacy Policy</p>
                        <p> Terms of Service</p>
                        <p>Cookies</p>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Footer;