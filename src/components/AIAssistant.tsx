// En un nuevo archivo llamado AIAssistant.tsx
import React from 'react';

const AIAssistant: React.FC = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 space-y-4 w-full max-w-md">
            <div className="flex items-center bg-gray-100 text-gray-800 py-2 px-4 rounded-lg">
                <i className="fas fa-robot text-yellow-500 mr-3"></i> AI assistant
            </div>
        </div>
    );
};

export default AIAssistant;
