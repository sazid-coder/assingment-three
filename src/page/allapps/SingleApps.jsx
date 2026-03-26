import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Progress from '../../component/progress/Progress';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleApps = () => {

    const { appid } = useParams();
    const appinINT = parseInt(appid);

    const appDetails = useLoaderData();

    const singleappData = appDetails.find(apps => apps.id === appinINT);

    const { id, title, image, companyName, downloads, ratingAvg, reviews, size, ratings, description } = singleappData;

    // 🔥 state
    const [storedIds, setStoredIds] = useState(
        JSON.parse(localStorage.getItem("appIds")) || []
    );

    // install function
    const addtoLocal = (id) => {
        if (!storedIds.includes(id)) {
            const updated = [...storedIds, id];

            localStorage.setItem("appIds", JSON.stringify(updated));
            setStoredIds(updated); // 🔥 fix

            toast.success("App Installed Successfully ✅");
        } else {
            toast.info("Already Installed ⚡");
        }
    };

    // check installed
    const isInstalled = storedIds.includes(id);
    return (
        <div className='bg-white'>
            <ToastContainer />

            <div className="max-w-5xl mx-auto p-4 md:p-10 font-sans text-slate-900">

                <div className="flex flex-col md:flex-row gap-8 items-start">

                    {/* App Icon Container */}
                    <div className="relative group shrink-0">
                        <div className="w-44 h-44 bg-white rounded-4xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-50 flex items-center justify-center p-6 transition-transform hover:scale-[1.02]">
                            <img src={image} alt={title} />
                        </div>
                    </div>

                    {/* Info Content Area */}
                    <div className="flex-1 pt-2">
                        <div className="mb-2">
                            <h1 className="text-3xl font-bold tracking-tight text-slate-800">
                                {title}
                            </h1>
                            <p className="text-gray-400 text-lg mt-1 font-medium">
                                Developed by <span className="text-[#7c5dfa] hover:underline cursor-pointer">{companyName}</span>
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gray-100 my-6"></div>

                        {/* Stats Section */}
                        <div className="flex items-center gap-12 mb-10">
                            {/* Downloads */}
                            <div className="flex flex-col">
                                <div className="text-[#52b788] mb-1">
                                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                                </div>
                                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Downloads</span>
                                <span className="text-3xl font-extrabold text-slate-800">{downloads}</span>
                            </div>

                            {/* Ratings */}
                            <div className="flex flex-col border-l border-gray-100 pl-10">
                                <div className="text-[#f4a261] mb-1">
                                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                </div>
                                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Average Ratings</span>
                                <span className="text-3xl font-extrabold text-slate-800">{ratingAvg}</span>
                            </div>

                            {/* Reviews */}
                            <div className="flex flex-col border-l border-gray-100 pl-10">
                                <div className="text-[#7c5dfa] mb-1">
                                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><circle cx="12" cy="10" r="2" /></svg>
                                </div>
                                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Total Reviews</span>
                                <span className="text-3xl font-extrabold text-slate-800 uppercase">{reviews}</span>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <button
                            onClick={() => addtoLocal(id)}
                            disabled={isInstalled}
                            className={`px-12 py-4 rounded-xl font-bold text-lg transition-all
    ${isInstalled
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-[#66d19e] hover:bg-[#58b98b] text-white shadow-[0_10px_20px_rgba(102,209,158,0.3)] active:scale-95"
                                }`}
                        >
                            {isInstalled ? "Installed" : `Install Now (${size})`}
                        </button>

                    </div>
                </div>

                {/* Bottom Border line from screenshot */}
                <div className="border-t border-gray-200 my-12"></div>

                <Progress ratings={ratings}></Progress>

                <div className='py-16'>
                    <h2 className='bold text-4xl mb-10'>Description</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleApps;