import axios from 'axios';
const host  = 'http://localhost:3000/';

const API_URL = `${host}/producto`;


const crear = async (producto) => {

    
    const respuesta = await axios.post(`${API_URL}/crear`,producto )
    console.log("tu respuesta al crear "+respuesta)
}



const ingresarStock = async (id,stockIngresado) => {
 
    try {
        const response = await axios.patch(`${API_URL}/ingresoDeStock/${id}`,stockIngresado);
        return response.data;
    } catch (error) {
        console.error('Error al conseguir datos de la tarea:', error);
        throw error; // Puedes manejar este error según tus necesidades
    }

};
const egresoDeStock = async (id,stockRetirado) => {
 
    try {
        const response = await axios.patch(`${API_URL}/egresoDeStock/${id}`,stockRetirado);
        return response.data;
    } catch (error) {
        console.error('Error al conseguir datos de la tarea:', error);
        throw error; // Puedes manejar este error según tus necesidades
    }

};

const getProducto = async (id) => {
 
    try {
        const response = await axios.get(`${API_URL}/obtener/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error al conseguir datos de la tarea:', error);
        throw error; // Puedes manejar este error según tus necesidades
    }

};
const obtenerAll = async () => {
 
    try {
        const response = await axios.get(`${API_URL}/obtenerAll/`);
        return response.data;
    } catch (error) {
        console.error('Error al conseguir datos de la tarea:', error);
        throw error; // Puedes manejar este error según tus necesidades
    }

};

export default { ingresarStock, egresoDeStock, crear, getProducto, obtenerAll };