import React from 'react';

const Trust = () => {
    return (
        <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-16'>
            <div>
                <h2 className='text-4xl text-center font-bold'>Trusted by Millions, Built for You</h2>
            </div>
            <div className='grid grid-cols-3 mt-16'>
                <div className='text-center flex flex-col gap-4'>
                    <h3>Total Downloads</h3>
                    <h2 className='text-7xl font-bold'>29.6M</h2>
                    <p>21% more than last month</p>
                </div>
                <div className='text-center flex flex-col gap-4'>
                    <h3>Total Reviews</h3>
                    <h2 className='text-7xl font-bold'>906K</h2>
                    <p>46% more than last month</p>
                </div>
                <div className='text-center flex flex-col gap-4'>
                    <h3>Total Downloads</h3>
                    <h2 className='text-7xl font-bold'>29.6M</h2>
                    <p>21% more than last month</p>
                </div>
            </div>
        </div>
    );
};

export default Trust;