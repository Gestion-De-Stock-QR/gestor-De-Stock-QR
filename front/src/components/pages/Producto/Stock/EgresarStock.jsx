import React from 'react'
import { egresoDeStock } from '../../../../servicios/productoService';

 export const EgresarStock = (saborSeleccionadoStock,cantidadNumero,saborSeleccionadoId) => {
    let nuevoStock = saborSeleccionadoStock - cantidadNumero;
      // llamar a la función para actualizar el stock en la base de datos
    // EngresarStockBaseDeDatos(saborSeleccionado.id, nuevoStock);
    egresoDeStock(saborSeleccionadoId,cantidadNumero);
    console.log(`stock actualizado ${nuevoStock} `+ saborSeleccionadoId )
};