import React from 'react';

const StatusSection = () => {
    return (
        <div className='bg-linear-to-r from-blue-500 to-purple-500'>
            <div className='flex max-sm:flex-col justify-between items-center text-center py-13 w-8/12 mx-auto text-white'>
                <div>
                    <h1 className='text-5xl font-bold'>50k+</h1>
                    <p className='opacity-90'>Active Users</p>
                </div>
                <div className="divider sm:divider-horizontal before:bg-gray-300 after:bg-gray-300"></div>
                <div>
                    <h1 className='text-5xl font-bold'>200+</h1>
                    <p className='opacity-90'>Premium tools</p>
                </div>
                <div className="divider sm:divider-horizontal before:bg-gray-300 after:bg-gray-300"></div>
                <div>
                    <h1 className='text-5xl font-bold'>4.9</h1>
                    <p className='opacity-90'>Rating</p>

                </div>

            </div>
        </div>
    );
};

export default StatusSection;