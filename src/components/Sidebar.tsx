import React from 'react';

const Sidebar: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
                <div className="flex items-center justify-between">
                    <div className="font-bold text-lg">
                        <img src="https://placehold.co/50x50" alt="Application logo placeholder" className="w-10 h-10" />
                    </div>
                    <div className="bg-gray-300 text-gray-700 py-1 px-3 rounded-full text-sm">ES <i className="fas fa-chevron-down"></i></div>
                </div>
                <div className="space-y-2">
                    <a href="#" className="flex items-center bg-gray-100 text-gray-800 py-2 px-4 rounded-lg">
                        <i className="fas fa-smile text-yellow-500 mr-3"></i> My Profile
                    </a>

                    <a href="#" className="flex items-center bg-gray-100 text-gray-800 py-2 px-4 rounded-lg">
                        <i className="fas fa-tasks text-yellow-500 mr-3"></i> My tasks
                    </a>
                    <a href="#" className="flex items-center bg-red-100 text-red-800 py-2 px-4 rounded-lg">
                        <i className="fas fa-file-alt text-red-500 mr-3"></i> My subscription
                    </a>
                    <a href="#" className="flex items-center bg-gray-100 text-gray-800 py-2 px-4 rounded-lg">
                        <i className="fas fa-vial text-yellow-500 mr-3"></i> My tests
                    </a>
                    <a href="#" className="flex items-center bg-gray-100 text-gray-800 py-2 px-4 rounded-lg">
                        <i className="fas fa-wallet text-yellow-500 mr-3"></i> My money
                    </a>
                </div>
                <div className="flex items-center bg-gray-100 text-gray-800 py-2 px-4 rounded-lg">
                    <i className="fas fa-robot text-yellow-500 mr-3"></i> AI assistant
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
