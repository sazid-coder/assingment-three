import React from 'react';

const PageNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#F8F9FB] px-6 text-center">
            {/* Illustration Area */}
            <div className="relative w-full max-w-125 mb-10">
                <img
                    src="/path-to-your-404-illustration.png"
                    alt="404 Illustration with broken plug"
                    className="w-full h-auto object-contain"
                />
            </div>

            {/* Text Content */}
            <div className="space-y-4">
                <h1 className="text-[#0A2540] text-4xl md:text-5xl font-bold tracking-tight">
                    Oops, page not found!
                </h1>

                <p className="text-[#697386] text-lg font-medium">
                    The page you are looking for is not available.
                </p>

                {/* Action Button */}
                <div className="pt-6">
                    <button
                        onClick={() => window.history.back()}
                        className="bg-[#7E57E4] hover:bg-[#6D48D1] text-white px-10 py-3 rounded-md font-semibold transition-all duration-200 shadow-sm"
                    >
                        Go Back!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;