import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import SingleCard from '../../component/data/SingleCard';
import AppnotFound from '../error/AppnotFound';

const AllApps = () => {
    const data = useLoaderData();

    // 🔥 search state
    const [searchTerm, setSearchTerm] = useState("");

    // 🔥 filter logic (real-time)
    const filteredData = data.filter(app =>
        app.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='bg-white py-16'>
            <div className="max-w-7xl mx-auto ">

                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
                        Our All Applications
                    </h1>
                    <p className="text-gray-500 text-lg">
                        Explore All Apps on the Market developed by us. We code for Millions
                    </p>
                </div>

                <div className='flex justify-between py-6'>
                    <div>
                        <h2 className='text-black'>
                            ({filteredData.length}) Apps Found
                        </h2>
                    </div>

                    <div>
                        <label className="input bg-white text-black border border-black">

                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2.5" fill="none"></circle>
                                <path d="m21 21-4.3-4.3" stroke="currentColor" strokeWidth="2.5"></path>
                            </svg>

                            <input
                                type="search"
                                placeholder="Search"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)} // 🔥 live typing
                            />
                        </label>
                    </div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {
                        filteredData.map(singlcard => (
                            <SingleCard
                                key={singlcard.id}
                                singlcard={singlcard}
                            />
                        ))
                    }
                </div>

                {/* Empty */}
                {
                    filteredData.length === 0 && (
                        <AppnotFound></AppnotFound>
                    )
                }

            </div>
        </div>
    );
};

export default AllApps;