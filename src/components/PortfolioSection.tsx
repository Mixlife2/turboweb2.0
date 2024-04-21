// En un nuevo archivo llamado PortfolioSection.tsx
import React from 'react';

const PortfolioSection: React.FC = () => {
    return (
        <div className="mb-6">
            <h2 className="text-gray-700 font-bold mb-3">Portfolio</h2>
            <div className="grid grid-cols-3 gap-4">
                {Array.from({ length: 6 }, (_, i) => (
                    <div key={i} className="border-2 border-dashed border-gray-300 rounded h-24 flex justify-center items-center">
                        <img src="https://placehold.co/100x100" alt="Placeholder image for portfolio item" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PortfolioSection;
