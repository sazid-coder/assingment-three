import React from 'react';

const SingleCard = ({ singlcard }) => {
    const { image, title, ratingAvg, downloads } = singlcard;
    const formatDownloads = (num) => {
        if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(0) + "B";
        if (num >= 1_000_000) return (num / 1_000_000).toFixed(0) + "M";
        return num;
    };
    return (
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="aspect-square bg-gray-300 overflow-hidden rounded-lg mb-4 w-full p-10">
                <img className='w-full h-full ' src={image} alt="" />
            </div>
            <h3 className="text-[#0f172a] font-semibold text-lg mb-4 truncate">{title}</h3>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 bg-green-50 text-green-600 px-2 py-1 rounded text-sm font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" ><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                    {
                        formatDownloads(downloads)
                    }
                </div>
                <div className="flex items-center gap-1 bg-orange-50 text-orange-500 px-2 py-1 rounded text-sm font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current" viewBox="0 0 24 24" stroke="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                    {ratingAvg}
                </div>
            </div>
        </div>
    );
};

export default SingleCard;