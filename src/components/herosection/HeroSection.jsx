import React from 'react';
import { Play } from 'lucide-react';
import banner from '../../assets/products/banner.png';
import dot from '../../assets/products/Group 5.png';
const HeroSection = () => {
    return (
        <div className='flex justify-between max-md:flex-col-reverse gap-4 w-11/12 mx-auto mt-20 mb-10 items-center'>
            <div>
                <div className="badge mb-5 bg-blue-100 py-5 px-3 rounded-4xl text-purple-600"><img src={dot} alt="Dot" />New: AI-Powered Tools Available</div>
                <h1 className='mb-5 text-4xl sm:text-5xl md:text-7xl font-bold'>Supercharge Your<br></br>Digital Workflow</h1>
                <p className='text-[#627382] mb-5'>Access premium AI tools, design assets, templates, and productivity software all in one place. Start creating faster today.Explore Products</p>
                <div className='flex max-sm:justify-center'>
                    <button className="btn  text-white rounded-3xl bg-linear-to-r from-blue-500 to-purple-600 py-6 mr-1">Explore Products</button>
                    <button className="btn rounded-3xl text-purple-700 border-2 border-purple-800 py-6"><Play className='text-purple-800' />Watch Demo</button>
                </div>
            </div>
            <div>
                <img src={banner} alt="Hero Banner" className='max-md:w-3/4 max-md:h-1/2 mx-auto' />
            </div>
        </div>
    );
};

export default HeroSection;