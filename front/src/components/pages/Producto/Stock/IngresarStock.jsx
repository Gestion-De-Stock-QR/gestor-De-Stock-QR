import { ingresarStock } from "../../../../servicios/productoService";

export const IngresarStock = async (
  saborSeleccionadoStock,
  cantidadNumero,
  saborSeleccionadoId
) => {
  try {
    const response = await ingresarStock(saborSeleccionadoId, cantidadNumero);
    
    
    if (response && response.success) { 
      const nuevoStock = saborSeleccionadoStock + cantidadNumero;
      console.log(`Stock actualizado: ${nuevoStock} para el ID ${saborSeleccionadoId}`);
    } else {
      console.warn(`Error al actualizar el stock para el ID ${saborSeleccionadoId}`);
    }
  } catch (error) {
    console.error("Error al ingresar stock:", error);
  }
};
