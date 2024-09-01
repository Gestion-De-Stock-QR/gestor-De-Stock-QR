import React from 'react'
import { ingresarStock } from '../../../../servicios/productoService';

export const IngresarStock = (saborSeleccionadoStock,cantidadNumero,saborSeleccionadoId) => {
    let nuevoStock = saborSeleccionadoStock + cantidadNumero;
      // llamar a la función para actualizar el stock en la base de datos
    // IngresarStockBaseDeDatos(saborSeleccionado.id, nuevoStock);
    ingresarStock(saborSeleccionadoId,cantidadNumero);
    console.log(`stock actualizado ${nuevoStock} ` + saborSeleccionadoId )
};