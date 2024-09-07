import axios from "axios";
const host = "https://heladeria-api-l6wx.onrender.com";

const API_URL = `${host}/producto`;



export const crearProducto = async (producto) => {
  try {
    const respuesta = await axios.post(`${API_URL}/crear`, producto);
    return respuesta.data;
  } catch (error) {
    throw error;
  }
};

export const ingresarStock = async (id, stockIngresado) => {
  try {
    const response = await axios.patch(
      `${API_URL}/ingresoDeStock/${id}`,
      {stockIngresado}
    );
    return response.data;
  } catch (error) {
    console.error("Error al conseguir datos de la tarea:", error);
    throw error;
  }
};

export const egresoDeStock = async (id, stockRetirado) => {
  try {
    const response = await axios.patch(
      `${API_URL}/egresoDeStock/${id}`,
      {stockRetirado}
    );
    return response.data;
  } catch (error) {
    console.error("Error al conseguir datos de la tarea:", error);
    throw error;
  }
};


export const getProducto = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/obtener/${id}`);
    return response.data;
  } catch (error) {
    throw new HttpException('Error al opbtener el producto', HttpStatus.INTERNAL_SERVER_ERROR);
  }
};

export const obtenerAll = async () => {
  try {
    const response = await axios.get(`${API_URL}/obtenerAll`);
    return response.data;
  } catch (error) {
    console.error("Error al conseguir datos de la tarea:", error);
    throw error;
  }
};
export const obtenerAllBajoUmbral = async () => {
  try {
    const response = await axios.get(`${API_URL}/bajoUmbral`);
    return response.data;
  } catch (error) {
    console.error("Error al conseguir datos de la tarea:", error);
    throw error;
  }
};
export default {
  ingresarStock,
  egresoDeStock,
  crearProducto,
  getProducto,
  obtenerAll,
  obtenerAllBajoUmbral
};
