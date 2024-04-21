import React from 'react';

const ProfileSection: React.FC = () => {
    return (
        <div className="bg-gray-200 p-6 flex justify-between items-start">
            <div className="flex space-x-4">
                <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center">
                    <i className="fas fa-pencil-alt text-white"></i>
                </div>
                <div>
                    <h1 className="text-xl font-bold">Julia Sanders</h1>
                    <p className="text-gray-600">Web designer <i className="fas fa-pencil-alt text-yellow-500"></i> 20$ / hour <i className="fas fa-pencil-alt text-yellow-500"></i></p>
                    <div className="mt-2">
                        <h2 className="font-bold text-gray-600">Skills <i className="fas fa-pencil-alt text-yellow-500"></i></h2>
                        <div className="grid grid-cols-3 gap-4 mt-2">
                            {Array.from({ length: 6 }).map((_, index) => (
                                <div key={index} className="bg-white p-2 rounded-md">
                                    <div className="w-16 h-4 bg-gray-300 rounded"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-right">
                <div className="text-gray-600 mb-2">Your level now</div>
                <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center mb-4">
                    <i className="fas fa-pencil-alt text-white"></i>
                </div>
                <button className="text-yellow-500 font-bold">Upgrade your level</button>
                <div className="text-gray-600 mt-4">Your balance</div>
                <div className="text-2xl font-bold">2500$</div>
            </div>
        </div>
    );
};

export default ProfileSection;
