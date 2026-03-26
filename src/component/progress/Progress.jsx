import React from 'react';

const Progress = ({ ratings }) => {

    // total count
    const total = ratings.reduce((sum, item) => sum + item.count, 0);

    return (
        <div>
            <div className='flex flex-col gap-4'>
                {
                    [...ratings].reverse().map((item, index) => {
                        const percentage = (item.count / total) * 100;

                        return (
                            <div key={index} className="flex items-center gap-4">
                                <span className="w-16 text-sm">{item.name}</span>
                                <progress className="progress progress-warning w-full h-4" value={percentage} max="100"></progress>
                                <span className="w-12 text-sm text-right"> {percentage.toFixed(1)}%</span>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Progress;