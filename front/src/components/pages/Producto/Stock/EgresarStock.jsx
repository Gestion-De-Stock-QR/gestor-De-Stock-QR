import React from "react";
import { egresoDeStock } from "../../../../servicios/productoService";

export const EgresarStock = async (
  saborSeleccionadoStock,
  cantidadNumero,
  saborSeleccionadoId
) => {
  try {
    const response = await egresoDeStock(saborSeleccionadoId, cantidadNumero);
    
    
    if (response && response.success) { 
      const nuevoStock = saborSeleccionadoStock - cantidadNumero;
      console.log(`Stock actualizado: ${nuevoStock} para el ID ${saborSeleccionadoId}`);
    } else {
      console.warn(`Error al actualizar el stock para el ID ${saborSeleccionadoId}`);
    }
  } catch (error) {
    console.error("Error al egresar stock:", error);
  }
};
