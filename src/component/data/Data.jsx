import React from 'react';
import SingleCard from './SingleCard';
import { Link } from 'react-router';

const Data = ({ data }) => {
    return (
        <div className='bg-white py-16'>
            <div className="max-w-7xl mx-auto ">

                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">Trending Apps</h1>
                    <p className="text-gray-500 text-lg">Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {
                        data.slice(0, 8).map(singlcard => <SingleCard key={data.id} singlcard={singlcard}></SingleCard>)
                    }
                </div>
                <div className="flex justify-center">
                    <Link to='/apps'>
                        <button className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-medium py-3 px-10 rounded-lg transition-colors shadow-lg shadow-purple-200 cursor-pointer">
                            Show All
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Data;