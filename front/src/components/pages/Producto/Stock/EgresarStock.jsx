import React from 'react'

 export const EgresarStock = (saborSeleccionadoStock,cantidadNumero,saborSeleccionadoId) => {
    let nuevoStock = saborSeleccionadoStock - cantidadNumero;
      // llamar a la función para actualizar el stock en la base de datos
    // EngresarStockBaseDeDatos(saborSeleccionado.id, nuevoStock);
    console.log(`stock actualizado ${nuevoStock} `+ saborSeleccionadoId )
};