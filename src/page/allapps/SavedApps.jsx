import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SavedApps = () => {

    const data = useLoaderData();

    // 🔥 state for installed ids
    const [storedIds, setStoredIds] = useState(
        JSON.parse(localStorage.getItem("appIds")) || []
    );

    // 🔥 sort state
    const [sortType, setSortType] = useState("");

    // filter installed apps
    const savedApps = data.filter(app => storedIds.includes(app.id));

    // 🔥 sorting logic
    const sortedApps = [...savedApps].sort((a, b) =>
        sortType === "size" ? a.size - b.size :
            sortType === "rating" ? b.ratingAvg - a.ratingAvg :
                sortType === "downloads" ? b.downloads - a.downloads : 0
    );

    // uninstall function (short + clean)
    const handleRemove = (id) => {
        setStoredIds(prev => {
            const updated = prev.filter(item => item !== id);
            localStorage.setItem("appIds", JSON.stringify(updated));
            toast.error("App Uninstalled ❌");
            return updated;
        });
    };

    return (
        <div className="bg-[#F5F7FA] min-h-screen px-6 md:px-12 py-10">

            {/* Header */}
            <div className="text-center max-w-4xl mx-auto mb-10">
                <h1 className="text-3xl md:text-5xl font-bold text-[#0F172A]">
                    Your Installed Apps
                </h1>
                <p className="text-gray-500 mt-3 text-lg">
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>

            {/* Top Bar */}
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-gray-800">
                    {sortedApps.length} Apps Found
                </h3>

                {/* 🔥 Sort Dropdown */}
                <select
                    onChange={(e) => setSortType(e.target.value)}
                    className="bg-white border px-4 py-2 rounded-lg text-gray-600 shadow-sm"
                >
                    <option value="">Sort By</option>
                    <option value="size">Size</option>
                    <option value="rating">Rating</option>
                    <option value="downloads">Downloads</option>
                </select>
            </div>

            {/* Cards */}
            <div className="space-y-5">
                {
                    sortedApps.map(app => (
                        <div
                            key={app.id}
                            className="flex items-center justify-between bg-white px-5 py-4 rounded-xl shadow-sm hover:shadow-md transition"
                        >

                            {/* Left */}
                            <div className="flex items-center gap-4">

                                {/* Image */}
                                <div className="w-16 h-16 bg-gray-200 rounded-xl p-2">
                                    <img src={app.image} alt="" className="w-full h-full object-cover rounded-md" />
                                </div>

                                {/* Info */}
                                <div>
                                    <h2 className="text-lg font-semibold text-[#0F172A]">
                                        {app.title}
                                    </h2>

                                    <div className="flex items-center gap-5 text-sm mt-1">

                                        <span className="text-green-600 font-medium">
                                            ⬇ {app.downloads}
                                        </span>

                                        <span className="text-orange-500 font-medium">
                                            ⭐ {app.ratingAvg}
                                        </span>

                                        <span className="text-gray-500">
                                            {app.size} MB
                                        </span>

                                    </div>
                                </div>
                            </div>

                            {/* Button */}
                            <button
                                onClick={() => handleRemove(app.id)}
                                className="bg-[#22C55E] hover:bg-[#16A34A] text-white px-5 py-2 rounded-lg font-medium"
                            >
                                Uninstall
                            </button>

                        </div>
                    ))
                }
            </div>

            {/* Empty */}
            {
                sortedApps.length === 0 && (
                    <p className="text-center text-gray-500 mt-10">
                        No apps installed yet 😢
                    </p>
                )
            }

            {/* Toast */}
            <ToastContainer position="top-right" autoClose={2000} theme="colored" />

        </div>
    );
};

export default SavedApps;