import React from 'react';
import Logo from './Logo';
import NativeSelectDemo from './NativeSelect';
import SessionLinks from './SessionsLinks';
import AIAssistant from './AIAssistant'; // Importa el nuevo componente

const Sidebar: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-between">
            {/* Sección superior */}
            <div className="bg-white shadow-lg rounded-lg p-6 space-y-4 w-full max-w-md mb-4">
                <div className="flex items-center justify-between">
                    <Logo/>
                    <NativeSelectDemo/>
                </div>
            </div>
            <SessionLinks/>
            <AIAssistant/>
        </div>
    );
};

export default Sidebar;
