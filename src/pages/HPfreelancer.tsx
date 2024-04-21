import React from 'react';
import Sidebar from '../components/Sidebar';
import ProfileSection from '../components/ProfileSection';
import TaskHistory from '../components/TaskHistory';
import PortfolioSection from '../components/PortfolioSection';

// Definir la interfaz para las props de HPfreelancer
interface HPfreelancerProps {
    title: string;
    description: string;
}

// Componente HPfreelancer
const HPfreelancer: React.FC<HPfreelancerProps> = ({ title, description }) => {
    return (
        // 
        <div className="flex h-screen bg-gray-100">
                <aside className="w-64 bg-white p-6">
                    <Sidebar/>
                </aside>
                <main className="flex-1 p-6">
                    <ProfileSection/>
                    <PortfolioSection/>
                    <TaskHistory/>
                </main>
        </div>
        );
    }
    

export default HPfreelancer;
