import React from 'react';

const Cardstat = () => {
    return (
        <div className='bg-violet-600 w-max-[1600px] h-[410px] p-4'>
            <h1 className='text-4xl font-bold text-center p-8'>Trusted by Millions, Built for You</h1>
            <div className="stats justify-items-center  p-16">
                <div className="stat">
                    <div className="stat-figure text-secondary p-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                        </svg>
                    </div>
                    <div className="stat-title text-center">Total Downloads</div>
                    <div className="stat-value text-5xl font-bold">29.6M</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary p-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                            ></path> 
                        </svg>
                    </div>
                    <div className="stat-title text-center">Total Reviews</div>
                    <div className="stat-value text-5xl font-bold">906K</div>
                    <div className="stat-desc">46% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary p-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                            ></path>
                        </svg>
                    </div>
                    <div className="stat-title text-center">Active Apps</div>
                    <div className="stat-value text-5xl font-bold">132+</div>
                    <div className="stat-desc">31 more will Launch</div>
                </div>
            </div>
        </div>
    );
};

export default Cardstat;