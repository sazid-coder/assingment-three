import React from 'react';
import notfound from '../../assets/notfound.png'
import { Link } from 'react-router';

const AppnotFound = () => {
    return (
        <div>
            <section className="flex flex-col items-center bg-white py-20 justify-center px-4 font-sans text-center">
                <div className="max-w-md w-full">
                    {/* Illustration Container */}
                    <div className="relative mb-8 flex justify-center">
                        {/* You would replace this img src with your actual asset path */}
                        <img
                            src={notfound}
                            alt="Angry cat with broken cable"
                            className="w-full max-w-100 h-auto"
                        />
                    </div>

                    {/* Text Content */}
                    <h1 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4 tracking-tight">
                        OPPS!! APP NOT FOUND
                    </h1>

                    <p className="text-[#697386] text-lg mb-8 leading-relaxed">
                        The App you are requesting is not found on our system. <br className="hidden md:block" />
                        please try another apps
                    </p>

                    {/* Action Button */}
                    <Link to="/"><button className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-semibold py-3 px-10 rounded-lg transition-colors duration-200 shadow-md"
                    >
                        Go Back!
                    </button></Link>

                </div>
            </section>
        </div>
    );
};

export default AppnotFound;