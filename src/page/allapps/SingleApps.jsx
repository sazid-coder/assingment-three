import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const SingleApps = () => {
    const { appid } = useParams();
    const appinINT = parseInt(appid);
    const appDetails = useLoaderData();
    console.log(appDetails);
    const singleappData = appDetails.find(apps => apps.id === appinINT);
    console.log(singleappData);

    return (
        <div className='bg-white'>
            <div className="max-w-5xl mx-auto p-4 md:p-10 font-sans text-slate-900">

                <div className="flex flex-col md:flex-row gap-8 items-start">

                    {/* App Icon Container */}
                    <div className="relative group flex-shrink-0">
                        <div className="w-44 h-44 bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-50 flex items-center justify-center p-6 transition-transform hover:scale-[1.02]">
                            {/* Alarm/Check SVG Icon */}
                            <svg
                                viewBox="0 0 24 24"
                                className="w-full h-full text-[#2b5a91]"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="12" cy="13" r="8" />
                                <path d="M12 9v4l2 2" />
                                <path d="m5 3 2 2" />
                                <path d="m19 3-2 2" />
                                <rect x="7" y="10" width="2" height="2" rx="0.5" />
                                <rect x="7" y="14" width="2" height="2" rx="0.5" />
                                <path d="m14 11 2 2 4-4" />
                            </svg>
                        </div>
                    </div>

                    {/* Info Content Area */}
                    <div className="flex-1 pt-2">
                        <div className="mb-2">
                            <h1 className="text-3xl font-bold tracking-tight text-slate-800">
                                SmPlan:ToDo List With Reminder
                            </h1>
                            <p className="text-gray-400 text-lg mt-1 font-medium">
                                Developed by <span className="text-[#7c5dfa] hover:underline cursor-pointer">productive.io</span>
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-[1px] bg-gray-100 my-6"></div>

                        {/* Stats Section */}
                        <div className="flex items-center gap-12 mb-10">
                            {/* Downloads */}
                            <div className="flex flex-col">
                                <div className="text-[#52b788] mb-1">
                                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                                </div>
                                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Downloads</span>
                                <span className="text-3xl font-extrabold text-slate-800"></span>
                            </div>

                            {/* Ratings */}
                            <div className="flex flex-col border-l border-gray-100 pl-10">
                                <div className="text-[#f4a261] mb-1">
                                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                </div>
                                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Average Ratings</span>
                                <span className="text-3xl font-extrabold text-slate-800">4.9</span>
                            </div>

                            {/* Reviews */}
                            <div className="flex flex-col border-l border-gray-100 pl-10">
                                <div className="text-[#7c5dfa] mb-1">
                                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><circle cx="12" cy="10" r="2" /></svg>
                                </div>
                                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Total Reviews</span>
                                <span className="text-3xl font-extrabold text-slate-800 uppercase">54K</span>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <button className="bg-[#66d19e] hover:bg-[#58b98b] text-white px-12 py-4 rounded-xl font-bold text-lg shadow-[0_10px_20px_rgba(102,209,158,0.3)] transition-all active:scale-95">
                            Install Now (291 MB)
                        </button>
                    </div>
                </div>

                {/* Bottom Border line from screenshot */}
                <div className="border-t border-gray-200 mt-12"></div>
            </div>
        </div>
    );
};

export default SingleApps;