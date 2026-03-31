import React from 'react';
import { Check } from 'lucide-react';

const Subscription = () => {
    return (
        <div className='my-20 text-center'>
            <h1 className='text-3xl font-bold mb-4'>Simple, Transparent Pricing</h1>
            <p className='text-gray-600 mb-10'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            <div className='w-11/12 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {/* card start */}
                    <div className="card w-full bg-base-100 shadow-sm text-left">
                        <div className="card-body">

                            <h2 className="text-3xl font-bold">Started</h2>
                            <p>Perfect for getting started</p>
                            <p ><span className="text-2xl font-bold">$0</span> /mo</p>

                            <ul className="mt-6 flex flex-col justify-start items-start text-start gap-2 text-xs">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Access to 10 free tools</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Basic templates</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Community support</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>1 project per month</span>
                                </li>

                            </ul>
                            <div className="mt-6">
                                <button className="btn btn-primary btn-block rounded-3xl bg-linear-to-r from-blue-600 to-purple-600 text-white">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-full bg-base-100 shadow-sm text-left">

                        <div className="card-body bg-linear-to-r from-blue-600 to-purple-600 text-white relative rounded-lg">
                            <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                                <p className='text-yellow-600 bg-yellow-100 p-2 rounded-3xl'>Most Popular</p>
                            </div>
                            <h2 className="text-3xl font-bold m-0">Pro</h2>
                            <p>Best for professionals</p>
                            <p ><span className="text-2xl font-bold">$29</span> /Month</p>
                            <div>
                                <p className='flex gap-2'><Check className='w-5' /><span>Access to all premium tools</span></p>
                                <p className='flex gap-2'><Check className='w-5' /><span>Advanced templates</span></p>
                                <p className='flex gap-2'><Check className='w-5' /><span>Priority support</span></p>
                                <p className='flex gap-2'><Check className='w-5' /><span>Unlimited projects</span></p>
                                <p className='flex gap-2'><Check className='w-5' /><span>Custom branding</span></p>
                                <p className='flex gap-2'><Check className='w-5' /><span>API access</span></p>
                            </div>
                            <div className="mt-6">
                                <button className="btn text-purple-800 btn-block rounded-3xl">Start Pro Trial</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-full bg-base-100 shadow-sm text-left">
                        <div className="card-body">

                            <h2 className="text-3xl font-bold">Enterprise</h2>
                            <p>For teams and businesses</p>
                            <p ><span className="text-2xl font-bold">$99</span> /Month</p>

                            <ul className="mt-6 flex flex-col gap-2 text-xs">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Everything in Pro</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Team collaboration</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Custom integrations</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Dedicated support</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>SLA guarantee</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Custom branding</span>
                                </li>

                            </ul>
                            <div className="mt-6">
                                <button className="btn btn-primary btn-block rounded-3xl bg-linear-to-r from-blue-600 to-purple-600 text-white">Contact Sales</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscription;