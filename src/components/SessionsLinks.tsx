import React from 'react';

const SessionLinks: React.FC = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 space-y-8 w-full max-w-md mb-4">
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
    
  );
};

export default SessionLinks;
