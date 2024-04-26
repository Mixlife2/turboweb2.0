import axios from 'axios';

const API_URL = 'http://localhost:8001/api/sessions';

export const login = async (email: string, password: string) => { // Cambiamos username por email
    try {
        const response = await axios.post(`${API_URL}/login`, { email, password }); // Cambiamos username por email
        console.log('Response from backend:', response.data);
        if (response.data.user && response.data.token) {
            return response.data;
        } else {
            // Manejar el error de inicio de sesión
            console.error('Error al iniciar sesión:', 'Respuesta del backend no contiene usuario y token');
            return { user: null, token: null };
        }
    } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 400) {
            // Manejar el error de inicio de sesión
            console.error('Error al iniciar sesión:', error.response?.data.error);
            return { user: null, token: null };
        } else {
            throw error;
        }
    }
};

  
  
  

export const logout = async () => {
  try {
    await axios.get(`${API_URL}/logout`);
    localStorage.removeItem('token');
  } catch (error) {
    console.error('Error al cerrar sesión:', error);
  }
};
