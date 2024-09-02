import axios from 'axios';
const host  = 'http://localhost:3000';

const API_URL = `${host}/historial`;

const obtenerAll = async () => {
 
    try {
        const response = await axios.get(`${API_URL}/obtener/`);
        return response.data;
    } catch (error) {
        console.error('Error al conseguir datos de la tarea:', error);
        throw error; // Puedes manejar este error según tus necesidades
    }

};
export { obtenerAll };