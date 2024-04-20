import React from 'react';
import Sidebar from '../components/Sidebar';

// Definir la interfaz para las props de HPfreelancer
interface HPfreelancerProps {
    title: string;
    description: string;
}

// Componente HPfreelancer
const HPfreelancer: React.FC<HPfreelancerProps> = ({ title, description }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <Sidebar />
        </div>
    );
};

export default HPfreelancer;
