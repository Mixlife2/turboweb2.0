import React from 'react';
import Navbar from '../components/NavBar';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>Esta es la página principal de la aplicación.</p>
            <Navbar />

        </div>
    );
}

export default Home;