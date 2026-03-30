import React, { use, useState } from 'react';
import Products from '../Products/Products';
import Carts from '../Carts/Carts';
const ToogleSection = ({ fetchPromise }) => {
    const data = use(fetchPromise);
    const [state, setState] = useState(true);
    const handleToggle = () => {
        setState(!state);
    }
    return (
        <div>
            <div className='mt-20 items-center text-center'>
                <div className='text-center mb-9'>
                    <h1 className='text-4xl font-bold'>Premium Digital Tools</h1>
                    <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed<br />to boost your productivity and creativity.</p>
                </div>
                <div className='flex justify-center gap-2'>
                    <button onClick={handleToggle} className={`btn py-6  rounded-3xl ${state ? 'text-white bg-linear-to-r from-blue-500 to-purple-600' : 'bg-white text-black'}`} >Products</button>
                    <button onClick={handleToggle} className={`btn py-6  rounded-3xl ${!state ? 'text-white bg-linear-to-r from-blue-500 to-purple-600' : 'bg-white text-black'}`} >Carts({data.length})</button>
                </div>
            </div>
            {state ? <Products fetchPromise={fetchPromise} /> : <Carts fetchPromise={fetchPromise} />}
        </div>
    );
};

export default ToogleSection;