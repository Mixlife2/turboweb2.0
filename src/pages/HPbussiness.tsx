import React from 'react';

interface HPbussinessProps {
    title: string;
    description: string;
   
}

const HPbussiness: React.FC<HPbussinessProps> = ({ title, description }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default HPbussiness;
