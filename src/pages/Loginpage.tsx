import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../utils/authServices';

interface LoginPageProps {
    onLogin: (type: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        const response = await login(username, password);
        
        if (response.user && response.token) {
          
          onLogin(response.user.role);
          localStorage.setItem('token', response.token);
          navigate('/HPfreelancer');
        } else {
          // Mostrar un mensaje de error al usuario
          console.error('Error en el inicio de sesión');
        }
      } catch (error) {
        // Manejar el error de inicio de sesión
        console.error('Error al iniciar sesión:', error);
        // Mostrar un mensaje de error al usuario
      }
    };
    
    
    
    
    

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-2xl font-bold mb-4">Iniciar sesión</h2>
            <form onSubmit={handleLogin} className="flex flex-col items-center">
                <input
                    type="text"
                    placeholder="Nombre de usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-2 mb-2"
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-2 mb-2"
                />
                <button type="submit" className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600">
                    Iniciar sesión
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
