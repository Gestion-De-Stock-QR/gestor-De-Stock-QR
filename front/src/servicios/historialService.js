import axios from "axios";
const host = "https://heladeria-api-l6wx.onrender.com";

const API_URL = `${host}/historial`;

const obtenerAll = async () => {
  try {
    const response = await axios.get(`${API_URL}/obtener/`);
    return response.data;
  } catch (error) {
    console.error("Error al conseguir datos de la tarea:", error);
    throw error;
  }
};
export { obtenerAll };
